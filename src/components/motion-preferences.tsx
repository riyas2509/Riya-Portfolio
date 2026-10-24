"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "motion/react";
const query = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const readPreference = () => window.matchMedia(query).matches;
const serverPreference = () => true;
const PreferenceContext = createContext({
  manualReduced: false,
  toggle: () => {},
});
export function MotionPreferences({ children }: { children: ReactNode }) {
  const system = useSyncExternalStore(
    subscribe,
    readPreference,
    serverPreference,
  );
  const [manualReduced, setManualReduced] = useState(false);
  const toggle = useCallback(() => setManualReduced((value) => !value), []);
  const reduced = system || manualReduced;
  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
  }, [reduced]);
  return (
    <PreferenceContext.Provider value={{ manualReduced, toggle }}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>
        {children}
      </MotionConfig>
    </PreferenceContext.Provider>
  );
}
export function useMotionPreferences() {
  // Read per consumer so selectively hydrated page sections use the same server snapshot.
  const systemReduced = useSyncExternalStore(
    subscribe,
    readPreference,
    serverPreference,
  );
  const { manualReduced, toggle } = useContext(PreferenceContext);
  return {
    reduced: systemReduced || manualReduced,
    systemReduced,
    manualReduced,
    toggle,
  };
}
export function MotionToggle() {
  const { systemReduced, manualReduced, toggle } = useMotionPreferences();
  if (systemReduced)
    return (
      <span className="motion-system-note">System reduced motion is on</span>
    );
  return (
    <button
      type="button"
      className="motion-toggle"
      aria-pressed={manualReduced}
      onClick={toggle}
    >
      {manualReduced ? "Use system motion" : "Reduce motion"}
    </button>
  );
}
