import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

interface StingerSeasonNoteProps {
  className?: string;
}

const BEACHSAFE = "https://beachsafe.org.au/";

/**
 * Site-wide stinger-season note for beach pages. Deliberately static: it states the
 * usual season and points to official live sources. It never rates a beach or implies
 * that swimming is safe on a given day.
 */
const StingerSeasonNote = ({ className = "" }: StingerSeasonNoteProps) => (
  <aside
    role="note"
    aria-label="Stinger season"
    className={`rounded-xl border-2 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4 ${className}`}
  >
    <p className="flex items-start gap-2 text-sm leading-relaxed text-amber-900 dark:text-amber-100">
      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
      <span>
        <strong>Stinger season:</strong> marine stingers (box jellyfish and Irukandji) are a risk in
        Townsville's waters, most often from November to May, and they can occur at other times. Nets
        and suits reduce the risk but don't remove it. Read our{" "}
        <Link to="/guides/stinger-safety" className="underline font-medium">
          stinger safety guide
        </Link>{" "}
        and check current signs and{" "}
        <a href={BEACHSAFE} target="_blank" rel="noopener noreferrer" className="underline font-medium">
          Beachsafe
        </a>{" "}
        before you swim. In an emergency call 000.
      </span>
    </p>
  </aside>
);

export default StingerSeasonNote;
