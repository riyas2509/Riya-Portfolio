import { Header, Footer } from "./portfolio";
import { LegacyAnchors } from "./legacy-anchors";
export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <LegacyAnchors />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
