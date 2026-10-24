import Link from "next/link";
export default function NotFound() {
  return (
    <main className="error-page">
      <p className="eyebrow">404 / UNCHARTED SPACE</p>
      <h1>This idea isn’t here.</h1>
      <Link href="/">Return to Riya’s universe ↗</Link>
    </main>
  );
}
