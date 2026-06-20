/**
 * Lenis removed — it caused 2-3s scroll delay (lerp lag).
 * Native scroll is faster, smoother on modern browsers.
 * This hook is kept as a no-op so App.jsx import doesn't break.
 */
export function useLenis() {
  // intentionally empty
}
