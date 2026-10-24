"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
export function LegacyAnchors() {
  const pathname = usePathname(),
    router = useRouter();
  useEffect(() => {
    if (pathname !== "/") return;
    const route = () => {
      const hash = location.hash;
      const targets: Record<string, string> = {
        "#work": "/work",
        "#story": "/about#story",
        "#lab": "/curiosity-lab#lab",
        "#skills": "/curiosity-lab#skills",
        "#process": "/curiosity-lab#process",
        "#credentials": "/achievements#credentials",
        "#all-badges": "/achievements#all-badges",
        "#young-turks-evidence": "/achievements#young-turks-evidence",
        "#contact": "/contact#contact",
      };
      if (new URLSearchParams(location.search).has("lens"))
        router.replace(
          `/work${location.search}${hash === "#work" ? "#work" : ""}`,
        );
      else if (targets[hash]) router.replace(targets[hash]);
    };
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, [pathname, router]);
  return null;
}
