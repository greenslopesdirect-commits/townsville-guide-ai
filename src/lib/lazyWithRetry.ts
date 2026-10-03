import { lazy, ComponentType } from "react";

const KEY = "chunk-reload-attempted";

/**
 * React.lazy wrapper that recovers from stale chunk errors after a new
 * deploy (old index.js references hashed chunks that no longer exist).
 * Reloads the page once to fetch the fresh bundle.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      if (typeof window !== "undefined") sessionStorage.removeItem(KEY);
      return mod;
    } catch (err) {
      if (typeof window !== "undefined" && !sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
        return new Promise<{ default: T }>(() => {});
      }
      throw err;
    }
  });
}
