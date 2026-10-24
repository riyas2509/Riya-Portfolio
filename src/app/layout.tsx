import type { Metadata } from "next";
import "./globals.css";
import { MotionPreferences } from "@/components/motion-preferences";
export const metadata: Metadata = {
  metadataBase: new URL("https://riyas25.vercel.app"),
  title: {
    default: "Riya Shah — Little Universe of Big Ideas",
    template: "%s | Riya Shah",
  },
  description:
    "Riya Shah: AI Product Design, Strategy & Innovation. AI/ML student at JG University, EchoTech founder and research-driven product builder. Explore EchoNote and industry research.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Riya Shah · Little Universe of Big Ideas",
    description:
      "I turn curiosity into thoughtful AI experiences. AI Product Design, Strategy & Innovation.",
    url: "/",
    siteName: "Riya Shah",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Shah · Little Universe of Big Ideas",
    description:
      "AI Product Design, Strategy & Innovation. Student, EchoTech founder and research-driven product builder.",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
