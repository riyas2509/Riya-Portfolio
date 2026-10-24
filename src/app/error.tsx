"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="error-page">
      <h1>A small interruption.</h1>
      <p>Something went wrong loading this page.</p>
      <button className="button button-light" onClick={reset}>
        Try again
      </button>
      <Link href="/">Return home ↗</Link>
    </main>
  );
}
