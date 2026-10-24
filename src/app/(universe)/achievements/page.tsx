import { PageIntro } from "@/components/destination";
import { Credentials } from "@/components/credentials";
export const metadata = {
  title: "Achievements",
  description:
    "Google Cloud skill badges and Naukri Campus Young Turks evidence.",
  openGraph: {
    title: "Achievements · Riya Shah",
    description:
      "Google Cloud skill badges and Naukri Campus Young Turks evidence.",
    url: "/achievements",
  },
  alternates: { canonical: "/achievements" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LEARNING & RECOGNITION"
        title="A little progress,"
        emphasis="made visible."
      >
        Skill badges, a Certificate of Merit and the learning behind them.
      </PageIntro>
      <div className="shell credentials-page">
        <Credentials />
      </div>
    </>
  );
}
