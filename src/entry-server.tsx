import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import type { SeoRegistryData } from "@/lib/seoRegistry";

/**
 * Renders one route to a fully-settled HTML string in Node — no browser
 * binary required. Deliberately excludes Toaster/Sonner (portal-based,
 * client-only chrome that would reach for `document.body` during render)
 * and ScrollToTop (a client-only navigation side effect); neither affects
 * indexable content.
 *
 * Uses renderToPipeableStream + onAllReady (not renderToString) because the
 * app's routes are React.lazy()-loaded: a synchronous render would just emit
 * each route's empty Suspense fallback. onAllReady waits for every lazy
 * chunk and data boundary to resolve before the stream completes, so the
 * captured HTML is the real, final markup.
 */
function renderAppToString(url: string): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    const queryClient = new QueryClient();
    const chunks: Buffer[] = [];
    const passThrough = new PassThrough();
    passThrough.on("data", (chunk) => chunks.push(chunk));
    passThrough.on("end", () => resolvePromise(Buffer.concat(chunks).toString("utf8")));
    passThrough.on("error", reject);

    const { pipe } = renderToPipeableStream(
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>,
      {
        onAllReady() {
          pipe(passThrough);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          // Recoverable render errors still call onAllReady/pipe above; log
          // for visibility but don't fail the whole route on a minor one.
          console.error(`[entry-server] render error for ${url}:`, err);
        },
      }
    );
  });
}

export interface RenderResult {
  html: string;
  seo: SeoRegistryData | undefined;
  /** Ready-to-embed HTML: zero or more <script type="application/ld+json"> tags. */
  schemaHtml: string;
}

export async function render(url: string): Promise<RenderResult> {
  // Reset per-render state so a previous route's data can never leak into
  // this one if a page fails to call SEOHead for some reason.
  globalThis.__TSG_SEO__ = undefined;

  const html = await renderAppToString(url);

  // react-helmet's SSR extraction (a side-effect queue populated during
  // render, and already serialized to safe HTML by react-helmet itself) is
  // a separate, working code path from the broken browser DOM-commit — this
  // is the officially documented way to read Helmet data on the server.
  // Used here only for JSON-LD <script> tags; title/description/canonical/
  // OG/robots come from the seoRegistry above, which mirrors exactly what
  // each page already passes to <SEOHead>.
  const schemaHtml = Helmet.renderStatic().script.toString();

  const seo = globalThis.__TSG_SEO__;
  return { html, seo, schemaHtml };
}
