export const caseStories: Record<
  string,
  { problem: string; users: string; flow: string[]; questions: string[] }
> = {
  echonote: {
    problem:
      "Useful context can get lost between a conversation, a decision and the next action. This is the problem hypothesis behind EchoNote.",
    users:
      "Intended users: teams working with organizational conversations. User validation is ongoing.",
    flow: [
      "Capture a conversation",
      "Review the information",
      "Confirm decisions & actions",
      "Follow through",
    ],
    questions: [
      "Can people review and correct generated information confidently?",
      "Which workflow deserves the next development priority?",
      "How should organizational control be documented and evaluated?",
    ],
  },
  echoos: {
    problem:
      "Useful AI creations can be difficult to discover, understand and compare. EchoOS explores a marketplace response to that problem.",
    users:
      "Intended users: creators of agents, workflows and templates, and people looking for useful AI resources. These are proposed audiences, not validated customers.",
    flow: [
      "Discover a resource",
      "Understand its purpose",
      "Explore access or purchase",
      "Use it & share feedback",
    ],
    questions: [
      "What should make a listing trustworthy?",
      "How would creators demonstrate usefulness?",
      "What could a focused first marketplace experiment test?",
    ],
  },
  lifecapital: {
    problem:
      "Major personal financial choices can involve fragmented information and uncertainty. LifeCapital explores ways to make those decisions less overwhelming.",
    users:
      "Intended users: people navigating major personal financial decisions. The person retains the final choice; this is not an investment advisory service.",
    flow: [
      "Frame the decision",
      "Gather relevant context",
      "Explore options & uncertainty",
      "Make your own choice",
    ],
    questions: [
      "Which decision scenario is narrow enough to explore responsibly?",
      "How should uncertainty and information quality be communicated?",
      "Where should AI assistance stop and human judgment lead?",
    ],
  },
  "ama-research": {
    problem:
      "Understanding AI opportunities requires looking at industry workflows, skills and the people doing the work—not technology in isolation.",
    users:
      "Research context: Ahmedabad Management Association, April–June 2026. Personal sector work focused on Gems & Jewellery and Edible Oils.",
    flow: [
      "Understand the industry",
      "Map workflow questions",
      "Explore AI & human roles",
      "Synthesize the research",
    ],
    questions: [
      "How can a workflow be understood before proposing automation?",
      "Where is human judgment essential?",
      "What evidence would a future research question need?",
    ],
  },
};
