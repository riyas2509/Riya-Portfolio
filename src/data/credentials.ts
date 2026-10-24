/** Supplied graphics confirm badge titles and levels; earned ownership is owner-confirmed. No issuer verification URLs supplied. */
export type SkillBadge = {
  id: string;
  name: string;
  level: "Introductory" | "Intermediate";
  featured?: boolean;
  verificationUrl: string | null;
  image: string | null;
};
export const skillBadges: SkillBadge[] = [
  {
    id: "gemini-api",
    name: "Explore Generative AI with the Vertex AI Gemini API",
    level: "Intermediate",
    featured: true,
    verificationUrl: null,
    image:
      "/credentials/explore-generative-ai-with-the-vertex-ai-gemini-api.png",
  },
  {
    id: "speech-language",
    name: "Implement Speech and Language Solutions with Pre-trained APIs",
    level: "Introductory",
    featured: true,
    verificationUrl: null,
    image:
      "/credentials/implement-speech-and-language-solutions-with-pre-tr.png",
  },
  {
    id: "data-console",
    name: "Store, Process, and Manage Data – Console",
    level: "Introductory",
    verificationUrl: null,
    image:
      "/credentials/store-process-and-manage-data-on-google-cloud-conso.png",
  },
  {
    id: "compute",
    name: "The Basics of Google Cloud Compute",
    level: "Introductory",
    verificationUrl: null,
    image: "/credentials/the-basics-of-google-cloud-compute-skill-badge.png",
  },
  {
    id: "speech-api",
    name: "Using the Google Cloud Speech API",
    level: "Introductory",
    verificationUrl: null,
    image: "/credentials/using-the-google-cloud-speech-api.png",
  },
  {
    id: "ai-studio",
    name: "Develop AI-powered Prototypes in Google AI Studio",
    level: "Introductory",
    featured: true,
    verificationUrl: null,
    image: "/credentials/develop-ai-powered-prototypes-in-google-ai-studio.png",
  },
  {
    id: "gemini-enterprise",
    name: "Create Your First Gemini Enterprise Application",
    level: "Introductory",
    verificationUrl: null,
    image: "/credentials/create-your-first-gemini-enterprise-application.png",
  },
  {
    id: "iam",
    name: "Configure Service Accounts and IAM roles for Google Cloud",
    level: "Introductory",
    verificationUrl: null,
    image:
      "/credentials/configure-service-accounts-and-iam-roles-for-google.png",
  },
  {
    id: "cloud-website",
    name: "Build a Website on Google Cloud",
    level: "Introductory",
    verificationUrl: null,
    image: "/credentials/build-a-website-on-google-cloud-skill-badge.png",
  },
  {
    id: "vision-api",
    name: "Analyze Images with the Cloud Vision API",
    level: "Introductory",
    verificationUrl: null,
    image:
      "/credentials/analyze-images-with-the-cloud-vision-api-skill-badg.png",
  },
];
export const featuredBadgeIds = ["gemini-api", "ai-studio", "speech-language"];
export const youngTurks = {
  title: "Naukri Campus Young Turks 2026",
  presenter: "Presented by HCLTech",
  date: "19 October 2026",
  percentile: "98.47",
  summary: "Qualified for Round 2 · Rank 6,111 (self-reported)",
  selection:
    "Riya reports qualifying among the top 30,000 selected participants after Round 1.",
  evidence:
    "The supplied Certificate of Merit names Riya Shah and records 98.47 percentile on 19 October 2026. Rank 6,111 and Round 2 qualification are owner-reported; they are not stated on the certificate.",
  certificate: "/credentials/young-turks-2026.pdf" as string | null,
  certificateImage: "/credentials/young-turks-2026.png",
};
export const amaResearch = {
  title: "Mapping AI Opportunities Across Industries",
  role: "AI Research Intern",
  organization: "Ahmedabad Management Association (AMA)",
  dates: "April–June 2026",
  themes: [
    {
      title: "Industry research",
      detail:
        "Investigating industry transformation and AI adoption, with personal sector research on Gems & Jewellery and Edible Oils, including skill gaps and vocational-training-related government schemes.",
    },
    {
      title: "AI opportunity mapping",
      detail:
        "Examining where automation could support industry workflows, without treating forecasts, modeled ROI or benchmark estimates as verified personal results.",
    },
    {
      title: "Human–AI workflow analysis",
      detail:
        "Considering workforce implications and where human judgment remains essential, supported by survey and interview design.",
    },
    {
      title: "Research synthesis",
      detail:
        "Developing stakeholder databases, consolidating research into a presentation and contributing toward a broader AMA research paper.",
    },
  ],
  contributions: [
    "Researched industry transformation and AI adoption.",
    "Investigated automation opportunities and workforce implications.",
    "Analyzed the Gems & Jewellery and Edible Oils sectors.",
    "Researched skill gaps and vocational-training-related government schemes.",
    "Designed surveys and interviews.",
    "Developed stakeholder databases.",
    "Consolidated research into a presentation.",
    "Contributed toward a broader AMA research paper.",
    "Provided operational and administrative support.",
  ],
  boundary:
    "These contributions are confirmed personal experience. The larger industry-report collection includes confidential and third-party material; its scope is not a claim that Riya authored every document. Reports, company-specific findings, proprietary tables and research projections are not published here.",
};
export const learningChapter = {
  name: "Learning, one step at a time.",
  date: "ONGOING LEARNING",
  place: "Google Cloud skill badges · Young Turks Round 1 · Product learning",
  text: "I keep learning through 10 Google Cloud skill badges, a Young Turks Round 1 milestone and continued AI product experiments.",
  symbol: "✦",
};
