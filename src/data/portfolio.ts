export const contact = {
  email: "mailto:riyamshah2509@gmail.com",
  linkedin: "https://www.linkedin.com/in/riya-shah-335056290/",
  github: "https://github.com/riyas2509",
  domain: "https://riyas25.vercel.app",
};
export const profile = {
  role: "AI Product Design, Strategy & Innovation",
  headline: {
    lead: "I turn",
    focus: "curiosity",
    bridge: "into",
    emphasis: "thoughtful",
    ending: "AI experiences",
  },
  supporting:
    "I explore real problems, design intuitive products and use AI to bring ideas to life.",
  identity: "AI/ML Student · Founder of EchoTech · Product Design & Innovation",
  education: "B.Tech in AI & ML · JG University · Expected 2028",
  competencies: [
    {
      name: "Product ideation & UX planning",
      proof: "EchoNote · problem to user flow",
      href: "/work/echonote#user-flows",
    },
    {
      name: "AI-assisted implementation",
      proof: "EchoNote · tools & integrations",
      href: "/work/echonote#integrations",
    },
    {
      name: "Industry & AI research",
      proof: "AMA · research internship",
      href: "/work/ama-research#research",
    },
  ],
};
export const stages = [
  {
    name: "Discover",
    color: "#bda6ff",
    symbol: "◎",
    title: "Begin with a better question.",
    detail:
      "I look for friction in real situations before choosing a solution. EchoNote begins with a question: what happens to useful knowledge after a conversation ends?",
    evidence: "/work/echonote#problem",
  },
  {
    name: "Research",
    color: "#91caff",
    symbol: "▤",
    title: "Make room for evidence.",
    detail:
      "I explore context, compare possibilities and question assumptions. At AMA, I researched AI adoption, skill gaps and human–AI collaboration across industries.",
    evidence: "/work/ama-research#research",
  },
  {
    name: "Design",
    color: "#ffb6d2",
    symbol: "▧",
    title: "Give an idea a human shape.",
    detail:
      "I think through user journeys, information and interactions. For EchoNote, that means connecting conversations, decisions and next steps in one product vision.",
    evidence: "/work/echonote#user-flows",
  },
  {
    name: "Build",
    color: "#a6e9cd",
    symbol: "✳",
    title: "Make the idea tangible.",
    detail:
      "I use AI-assisted development to move from an idea to a working experience. I independently handled EchoNote’s ideation, design and AI-assisted implementation.",
    evidence: "/work/echonote#integrations",
  },
  {
    name: "Evolve",
    color: "#ffc69d",
    symbol: "⑂",
    title: "Keep the next question open.",
    detail:
      "Launching creates a starting point for learning. EchoNote’s product development and validation are ongoing; assumptions and next steps remain visible.",
    evidence: "/work/echonote#next",
  },
] as const;
export const lenses = [
  {
    id: "design",
    short: "Design & UX",
    name: "AI Product Design & UX Strategy",
    intro:
      "My primary direction: EchoNote’s UX planning, intended user journeys and interface decisions, with prototype evidence still to be added.",
    skills: ["UX planning", "Prototyping", "Workflow design"],
    evidence: "user-flows",
    resume: null,
  },
  {
    id: "product",
    short: "Product management",
    name: "AI Product Management",
    intro:
      "Explore EchoNote’s product vision, feature decisions and workflow priorities—not formal product metrics or validated market outcomes.",
    skills: ["Product strategy", "Problem framing", "Product ownership"],
    evidence: "decisions",
    resume: null,
  },
  {
    id: "innovation",
    short: "Innovation & strategy",
    name: "AI Product Innovation & Technology Strategy",
    intro:
      "Explore EchoOS and LifeCapital concepts alongside the industry opportunities that inform new AI product ideas.",
    skills: ["AI experimentation", "Comparative analysis", "Product strategy"],
    evidence: "vision",
    resume: null,
  },
  {
    id: "solutions",
    short: "AI solutions",
    name: "AI Solutions Consulting & Design",
    intro:
      "Connect EchoNote’s workflows and integrations with AMA’s AI opportunity analysis; no client consulting engagement is claimed.",
    skills: ["Workflow design", "API integration", "AI opportunity mapping"],
    evidence: "integrations",
    resume: null,
  },
  {
    id: "research",
    short: "Applied research",
    name: "Applied AI Research & Evaluation",
    intro:
      "Start with AMA industry research, comparative analysis and relevant AI learning, with assumptions and evidence limits made explicit.",
    skills: ["Secondary research", "Data validation", "Literature review"],
    evidence: "research",
    resume: null,
  },
] as const;
export type LensId = (typeof lenses)[number]["id"];
export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  summary?: string;
  caseTitle?: string;
  evidenceLevel?: "VERIFIED" | "IN PROGRESS" | "CONCEPT";
  evidenceNote?: string;
  status: string;
  kind: "launched" | "exploring" | "completed" | "pending";
  contribution: string;
  roles: LensId[];
  skills: string[];
  color: string;
  symbol: string;
  vision: string;
  research: string;
  decisions: string[];
  next: string;
  tools: string[];
  implemented: string[];
  reportedCapabilities?: string[];
  planned: string[];
};
export const projects: Project[] = [
  {
    slug: "echonote",
    name: "EchoNote",
    category: "01 / CONVERSATION INTELLIGENCE",
    description: "From conversations to clarity and action.",
    summary:
      "An AI-assisted conversation intelligence product designed to help teams capture decisions, organize information and follow through.",
    status: "Website launched · Product development ongoing",
    evidenceLevel: "IN PROGRESS",
    evidenceNote:
      "Website launched 21 October 2026, confirmed by Riya. Product development and validation are ongoing. Product implementation code and functional evidence have not been supplied in this portfolio repository.",
    kind: "launched",
    contribution:
      "Independent ideation, UX planning, workflow design & AI-assisted implementation",
    roles: ["design", "product", "solutions", "innovation", "research"],
    skills: [
      "UX planning",
      "Prototyping",
      "Product ownership",
      "API integration",
      "Workflow design",
    ],
    color: "lavender",
    symbol: "≋",
    vision:
      "Turn organizational conversations into accessible, actionable intelligence with appropriate organizational control.",
    research:
      "The product is based on the assumption that meeting knowledge becomes fragmented across transcripts, decisions and follow-up tasks. Formal user validation, comparative research artifacts and outcome measurements have not been supplied.",
    decisions: [
      "Connect knowledge with action: bring transcription, decisions and action items into the same product vision.",
      "Keep organizational control in the vision: specific permission models and security guarantees require further documentation and validation.",
      "Keep scope and evidence distinct: presentation deck creation remains planned, while implementation evidence for the described product areas still needs documenting.",
    ],
    next: "Continue product development and validation. Gather feedback on core workflows, document architecture, and evaluate transcription quality, decision extraction and accessibility before making performance claims.",
    tools: [
      "Google AI Studio",
      "Antigravity",
      "Firebase",
      "API integration",
      "Figma",
      "AI-assisted development workflows",
    ],
    implemented: [],
    reportedCapabilities: [
      "Audio transcription",
      "Speech synthesis",
      "Project management",
      "Key decisions & decision intelligence",
      "Action items",
      "Meeting scheduling",
    ],
    planned: ["Presentation deck creation"],
  },
  {
    slug: "echoos",
    name: "EchoOS",
    category: "02 / AI ECOSYSTEM",
    description: "Helping AI creations find the people who need them.",
    summary:
      "An AI marketplace concept exploring how people discover, buy, sell and use AI agents, workflows and templates.",
    status: "Concept and development exploration",
    evidenceLevel: "CONCEPT",
    evidenceNote:
      "Owner-confirmed concept and development exploration. No operational marketplace or validated demand is claimed.",
    kind: "exploring",
    contribution: "Product strategy & marketplace concept exploration",
    roles: ["innovation", "product", "solutions"],
    skills: ["Product strategy", "AI experimentation", "System design"],
    color: "mint",
    symbol: "✳",
    vision:
      "A marketplace connecting creators of AI agents, workflows and templates with people who need them.",
    research:
      "Creator needs, buyer needs, marketplace trust and monetization are questions for further research. No live marketplace or validated demand is claimed.",
    decisions: [
      "Explore agents, workflows and templates as related types of reusable AI work.",
      "Consider both creator and user journeys when framing the marketplace.",
      "Keep creator monetization as an exploration until the model is validated.",
    ],
    next: "Validate marketplace needs, map discovery and creator journeys, and define a focused first experiment.",
    tools: [],
    implemented: [],
    planned: ["Marketplace concept", "Creator monetization exploration"],
  },
  {
    slug: "lifecapital",
    name: "LifeCapital",
    category: "03 / RESPONSIBLE AI",
    description: "Making important financial decisions less overwhelming.",
    summary:
      "An exploration of AI-assisted support for major personal financial decisions, keeping human judgment and final choice with the person.",
    status: "Concept exploration",
    kind: "exploring",
    evidenceLevel: "CONCEPT",
    evidenceNote:
      "Owner-confirmed concept exploration. No launched financial product or investment advisory service is claimed.",
    contribution: "Problem framing, ideation & financial workflow exploration",
    roles: ["design", "product", "innovation", "solutions"],
    skills: ["Problem framing", "Workflow design", "UX design"],
    color: "peach",
    symbol: "↗",
    vision:
      "Help people make major financial decisions with AI-supported guidance while maintaining their own decision-making autonomy.",
    research:
      "The idea needs research into decision contexts, information quality, uncertainty and responsible AI boundaries. It is not commercially available and does not provide regulated financial advice.",
    decisions: [
      "Keep the person in control of decisions.",
      "Explore understandable financial workflows and clear uncertainty communication.",
      "Treat responsible AI boundaries as part of product framing.",
    ],
    next: "Investigate specific decision scenarios and define a responsible, narrow prototype scope.",
    tools: [],
    implemented: [],
    planned: [],
  },
  {
    slug: "ama-research",
    name: "AMA Industry Research",
    caseTitle: "Mapping AI Opportunities Across Industries",
    category: "04 / INDUSTRY & HUMAN–AI WORK",
    description:
      "Researching how AI changes industry workflows, where automation creates opportunities and where human judgment remains essential.",
    status: "Internship completed · Apr–Jun 2026",
    kind: "completed",
    evidenceLevel: "VERIFIED",
    evidenceNote:
      "AI Research Intern, April–June 2026: personal experience and contributions explicitly confirmed by Riya. Confidential reports are not publicly shared. Individual authorship of the larger report collection is not claimed.",
    contribution:
      "AI Research Intern · Industry research, survey/interview design & synthesis",
    roles: ["research", "innovation", "solutions", "product"],
    skills: [
      "Secondary research",
      "Data validation",
      "Comparative analysis",
      "Literature review",
      "Technical documentation",
      "Industry research",
      "AI opportunity mapping",
    ],
    color: "blue",
    symbol: "⌕",
    vision:
      "Explore AI adoption, workforce transformation, industry skill gaps and opportunities for human–AI collaboration at Ahmedabad Management Association.",
    research:
      "I researched AI adoption, industry transformation, automation and workforce implications, with personal sector work on Gems & Jewellery and Edible Oils. I explored skill gaps, vocational-training-related government schemes and support, designed surveys and interviews, developed stakeholder databases and consolidated research into a presentation. I contributed toward a broader AMA research paper and provided operational and administrative support. Publication, sole authorship, interview counts and quantified outcomes are not claimed.",
    decisions: [
      "Consider human skills alongside automation opportunities.",
      "Connect industry context with AI adoption questions.",
      "Use stakeholder information, survey/interview design and secondary research to frame exploration.",
    ],
    next: "Add shareable, permission-cleared research artifacts and clearly distinguish personal contributions from collaborative work.",
    tools: [
      "Secondary research",
      "Data validation",
      "Literature review",
      "Comparative analysis",
    ],
    implemented: [
      "Research presentation",
      "Contribution toward a broader AMA research paper",
      "Stakeholder databases",
    ],
    planned: [],
  },
  ...[
    ["railq", "RailQ"],
    ["instagram-redesign", "Instagram Feature Redesign"],
    ["ocr-model", "OCR Model"],
    ["stock-market-prediction", "Stock Market Prediction"],
  ].map(([slug, name]): Project => ({
    slug,
    name,
    category: "OPEN FILE / EVIDENCE PENDING",
    description: (
      {
        railq:
          "A railway travel concept exploring coach navigation, hygiene and safety.",
        "instagram-redesign":
          "An exploration of Instagram feed, search and contextual interactions.",
        "ocr-model":
          "An educational project exploring handwritten character recognition.",
        "stock-market-prediction":
          "An educational exploration of stock trend prediction.",
      } as Record<string, string>
    )[slug],
    status: "Details & results need verification",
    kind: "pending",
    contribution: "Contribution needs verification",
    roles: [],
    skills: [],
    color: "paper",
    symbol: "＋",
    vision:
      "Project details will be added when the problem, personal contribution and supporting work are verified.",
    research:
      "The older portfolio describes this project direction. Its screenshots show portfolio pages, not a working product. Implementation details, individual scope and results remain unverified.",
    decisions: [],
    next: "Verify the project scope, add source artifacts and document lessons before presenting a full case study.",
    tools: [],
    implemented: [],
    planned: [],
  })),
];
export const chapters = [
  {
    date: "FOUNDATION / EXPECTED 2028",
    name: "Learning the language of possibility.",
    place: "JG University · B.Tech, AI & ML",
    text: "I’m studying Artificial Intelligence and Machine Learning, while exploring how technical possibilities can become useful human experiences.",
    symbol: "⌘",
  },
  {
    date: "APRIL–JUNE 2026",
    name: "Looking beyond the technology.",
    place: "Ahmedabad Management Association · AI Research Intern",
    text: "At AMA, I explored industry transformation, AI adoption, skill gaps and human–AI workflows, and brought the research together in a presentation.",
    symbol: "⌕",
  },
  {
    date: "21 OCTOBER 2026",
    name: "An idea becomes something real.",
    place: "EchoTech · Founder / EchoNote website launch",
    text: "Through EchoTech, I independently took EchoNote from product ideation and design into AI-assisted implementation. The website is launched; development and validation continue.",
    symbol: "↗",
  },
  {
    date: "CURRENT EXPLORATIONS",
    name: "Leaving room for the next question.",
    place: "EchoOS, LifeCapital & the experiments ahead",
    text: "I’m exploring AI marketplaces and thoughtful financial decision support, while continuing to learn, experiment and question what would be useful.",
    symbol: "⑂",
  },
];
// Owner-supplied professional interests. Keep personality notes factual and editable.
export const interests = [
  {
    name: "Problem discovery",
    symbol: "◎",
    note: "The question before the idea",
    why: "I enjoy discovering real problems and understanding what would make a solution useful.",
    example:
      "EchoNote’s problem framing explores what happens to knowledge after organizational conversations.",
    href: "/work/echonote#problem",
  },
  {
    name: "Product ideation",
    symbol: "✳",
    note: "What if we tried…",
    why: "I like connecting a real need with a product possibility, then making its boundaries clearer.",
    example:
      "EchoOS explores a marketplace for agents, workflows and templates.",
    href: "/work/echoos#vision",
  },
  {
    name: "UX & interaction",
    symbol: "▧",
    note: "Make the complex feel clear",
    why: "I’m interested in how information, flows and interactions help people move with confidence.",
    example:
      "EchoNote brings conversations, decisions and next steps into one product vision.",
    href: "/work/echonote#user-flows",
  },
  {
    name: "AI experimentation",
    symbol: "⌘",
    note: "Think → try → learn",
    why: "I use AI tools to explore possibilities and help implement ideas.",
    example:
      "EchoNote uses Google AI Studio, Antigravity, Firebase and API integrations.",
    href: "/work/echonote#integrations",
  },
  {
    name: "Research",
    symbol: "⌕",
    note: "Follow the evidence",
    why: "Research helps me understand a technology in the context of people, markets and industries.",
    example:
      "My AMA internship explored AI adoption, workforce transformation and industry skill gaps.",
    href: "/work/ama-research#research",
  },
  {
    name: "Solution design",
    symbol: "⑂",
    note: "Connect the useful pieces",
    why: "I enjoy turning a broad problem into a workflow people can understand and use.",
    example:
      "LifeCapital explores financial decision workflows with human autonomy at the center.",
    href: "/work/lifecapital#user-flows",
  },
  {
    name: "Continuous learning",
    symbol: "↗",
    note: "Always an open notebook",
    why: "I value learning, meaningful work and thoughtful innovation. Each iteration leaves room for another question.",
    example:
      "EchoNote’s next steps focus on ongoing development and validation.",
    href: "/work/echonote#next",
  },
];
export type SkillGroup = {
  name: string;
  skills: string[];
  project: string;
  evidence: string;
  skillEvidence?: Record<string, string>;
};
export const skillGroups: SkillGroup[] = [
  {
    name: "Product & UX",
    skills: [
      "Product ideation",
      "UX planning",
      "Prototyping",
      "Workflow design",
      "Figma",
      "Canva",
    ],
    project: "echonote",
    evidence: "user-flows",
  },
  {
    name: "AI tools & implementation",
    skills: [
      "Google AI Studio",
      "Antigravity",
      "Gemini API exposure",
      "Firebase",
      "API integration",
      "AI-assisted implementation",
    ],
    project: "echonote",
    evidence: "integrations",
    skillEvidence: { "Gemini API exposure": "/achievements#credentials" },
  },
  {
    name: "Research & analysis",
    skills: [
      "Secondary research",
      "Data validation",
      "Technical documentation",
      "Comparative analysis",
      "Literature review",
      "Industry research",
    ],
    project: "ama-research",
    evidence: "research",
  },
];
export const achievements = [
  "Google for Startups × Antler Immersion Program",
  "LaunchPad Top 10 Finalist",
  "IELTS Academic Band 7",
  "Relevant certifications",
].map((name) => ({ name, verified: false }));
export const lensProjectOrder: Record<LensId, string[]> = {
  design: ["echonote", "lifecapital", "echoos", "ama-research"],
  product: ["echonote", "echoos", "lifecapital", "ama-research"],
  innovation: ["echoos", "lifecapital", "echonote", "ama-research"],
  solutions: ["echonote", "ama-research", "lifecapital", "echoos"],
  research: ["ama-research", "echonote", "echoos", "lifecapital"],
};
// Per-project destinations keep the same career lens tied to the relevant evidence.
export const projectLensEvidence: Record<
  string,
  Partial<Record<LensId, string>>
> = {
  echonote: {
    design: "user-flows",
    product: "decisions",
    innovation: "vision",
    solutions: "integrations",
    research: "research",
  },
  echoos: {
    design: "user-flows",
    product: "decisions",
    innovation: "vision",
    solutions: "user-flows",
    research: "research",
  },
  lifecapital: {
    design: "user-flows",
    product: "decisions",
    innovation: "vision",
    solutions: "user-flows",
    research: "research",
  },
  "ama-research": {
    design: "research",
    product: "role",
    innovation: "vision",
    solutions: "research",
    research: "research",
  },
};
export const resumes: { lens: LensId; label: string; file: string | null }[] =
  lenses.map((lens) => ({ lens: lens.id, label: lens.name, file: null }));
