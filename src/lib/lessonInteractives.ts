/* =============================================================================
   Lesson-interactive dispatcher. Merges the seven per-topic widget registries
   into one map keyed by the lesson `type` from src/data/lessonTools.ts, and
   mounts the matching widget into any `[data-lesson]` host on the page.

   Widgets are self-contained (each bakes in its own verified example math) and
   progressive: if a widget throws or never runs, its lesson card stays a clean
   static stage.
   ============================================================================= */

import { sequences } from './lessons/sequences';
import { limits } from './lessons/limits';
import { calculus } from './lessons/calculus';
import { logexp } from './lessons/logexp';
import { vectors } from './lessons/vectors';
import { complexLessons } from './lessons/complex';
import { counting } from './lessons/counting';

type Init = (root: HTMLElement) => void;

const REGISTRY: Record<string, Init> = {
  ...sequences,
  ...limits,
  ...calculus,
  ...logexp,
  ...vectors,
  ...complexLessons,
  ...counting,
};

/** Mount every not-yet-mounted, CURRENTLY-VISIBLE lesson stage. Hidden stages are
    skipped and mount the first time they are revealed (call this again on show),
    so only the open lesson's widget is ever built. */
export function initLessonInteractives(): void {
  document.querySelectorAll<HTMLElement>('[data-lesson]').forEach((elm) => {
    if (elm.dataset.mounted) return;
    if (elm.getClientRects().length === 0) return; // not visible yet
    const fn = REGISTRY[elm.dataset.lesson ?? ''];
    if (fn) {
      try { fn(elm); elm.dataset.mounted = '1'; } catch { /* keep the static stage */ }
    }
  });
}
