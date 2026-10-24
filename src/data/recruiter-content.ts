/** Owner-supplied positioning. Q6 explicitly approved on 24 October 2026. */
export type ThinkingStage = {
  id: string;
  title: string;
  description: string;
  evidence: { label: string; href: string };
};
export type RecruiterQuestion = {
  id: string;
  question: string;
  answer: string;
  published: boolean;
  link?: { label: string; href: string };
};
export const thinkingStages: ThinkingStage[] = [
  {
    id: "01",
    title: "Get curious",
    description: "Understand the people, the problem and the why.",
    evidence: {
      label: "EchoNote · problem framing",
      href: "/work/echonote#problem",
    },
  },
  {
    id: "02",
    title: "Connect the dots",
    description: "Explore insights, technology and possibilities.",
    evidence: {
      label: "AMA · industry research",
      href: "/work/ama-research#research",
    },
  },
  {
    id: "03",
    title: "Make it tangible",
    description: "Sketch, prototype and experiment with ideas.",
    evidence: {
      label: "EchoNote · design decisions",
      href: "/work/echonote#design",
    },
  },
  {
    id: "04",
    title: "Learn & refine",
    description: "Test assumptions, listen and improve.",
    evidence: {
      label: "EchoNote · next questions",
      href: "/work/echonote#next",
    },
  },
];
export const teamStrengths = [
  "Product thinking and user empathy",
  "AI/ML technical understanding",
  "Curiosity, experimentation and adaptability",
];
export const recruiterQuestions: RecruiterQuestion[] = [
  {
    id: "roles",
    question: "What kind of roles are you interested in?",
    answer:
      "I'm especially interested in AI Product Design, UX Strategy, AI Product Management and product innovation roles where I can connect user needs with emerging technology.",
    published: true,
  },
  {
    id: "education",
    question: "What's your educational background?",
    answer:
      "I'm pursuing a B.Tech in Artificial Intelligence and Machine Learning at JG University, with an expected graduation year of 2028.",
    published: true,
  },
  {
    id: "echotech",
    question: "What is EchoTech?",
    answer:
      "EchoTech is the venture I'm building. Its flagship initiative, EchoNote, is currently in product development and validation.",
    published: true,
    link: { label: "Explore EchoTech", href: "https://echotechai.in/" },
  },
  {
    id: "experience",
    question: "Do you have professional or research experience?",
    answer:
      "I completed an AI research internship at Ahmedabad Management Association from April to June 2026, where I contributed to industry-focused research and synthesis.",
    published: true,
    link: {
      label: "Explore my AMA contributions",
      href: "/work/ama-research#role",
    },
  },
  {
    id: "approach",
    question: "What makes your approach different?",
    answer:
      "I'm interested in the intersection of AI, human behavior and product experiences. I enjoy thinking about what technology should do for people, not only how to build it.",
    published: true,
  },
  {
    id: "opportunities",
    question: "Are you open to internships or collaborations?",
    answer:
      "I'm interested in relevant opportunities in AI product, UX strategy, research and innovation. Please reach out to discuss the role, scope and fit.",
    published: true,
  },
];
