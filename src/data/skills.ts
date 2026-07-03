export interface SkillData {
  name: string;
  proficiency: number;
  category: string;
  description: string;
}

export const SKILL_CATEGORIES = [
  {
    name: 'Programming',
    skills: ['C', 'C++', 'Java', 'Python', 'SQL']
  },
  {
    name: 'AI & Machine Learning',
    skills: ['Generative AI', 'Prompt Engineering', 'Supervised Learning', 'CNN (EMNIST)', 'Data Preprocessing', 'Feature Engineering']
  },
  {
    name: 'Core CS Foundations',
    skills: ['Data Structures', 'Backtracking', 'Constraint Satisfaction', 'Algorithmic Optimization', 'Problem Solving']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Google AI Studio', 'VS Code', 'Git & GitHub', 'Canva', 'HackerRank']
  },
  {
    name: 'Product & Design',
    skills: ['Product Thinking', 'UI/UX Design', 'Interactive Prototyping', 'Wireframing']
  }
];

export const SKILLS_DATA: SkillData[] = [
  // Programming
  { name: 'Python', proficiency: 94, category: 'Programming', description: 'Advanced AI tooling, data analysis pipelines, and PyTorch convolutional structures.' },
  { name: 'C++', proficiency: 88, category: 'Programming', description: 'Highly optimized recursive game solvers, competitive algorithm runs, and pointers.' },
  { name: 'C', proficiency: 85, category: 'Programming', description: 'Constraint satisfaction maps, low-level binary validation, and memory structures.' },
  { name: 'SQL', proficiency: 82, category: 'Programming', description: 'Relational database mappings, complex joins, and transactional consistency validation.' },
  { name: 'Java', proficiency: 78, category: 'Programming', description: 'Object-oriented service layers, design patterns, and systemic workflows.' },

  // AI & Machine Learning
  { name: 'Generative AI', proficiency: 96, category: 'AI & ML Systems', description: 'Prompt pipeline chaining, structural outputs extraction, and context budget management.' },
  { name: 'Prompt Engineering', proficiency: 98, category: 'AI & ML Systems', description: 'Exact temperature tunings, negative prompts, zero-shot and few-shot structuring.' },
  { name: 'CNN (EMNIST)', proficiency: 86, category: 'AI & ML Systems', description: 'Formulating convolutional networks, training regression classifiers, and layer auditing.' },
  { name: 'Supervised Learning', proficiency: 84, category: 'AI & ML Systems', description: 'Regression, classification datasets, validation splits, and feature correlations.' },
  { name: 'Data Preprocessing', proficiency: 88, category: 'AI & ML Systems', description: 'Normalization, structural warping, handling null records, and vector scaling.' },
  { name: 'Feature Engineering', proficiency: 85, category: 'AI & ML Systems', description: 'Mathematical mappings, MACD/RSI indicators extraction, and loading indicators.' },

  // Core CS Foundations
  { name: 'Data Structures', proficiency: 91, category: 'CS Foundations', description: 'Linked Lists, tree traversal sequences, queues, stacks, and complex pointer offsets.' },
  { name: 'Backtracking', proficiency: 93, category: 'CS Foundations', description: 'Optimized search state resolution, recursion bounding trees, and Sudoku puzzle matrices.' },
  { name: 'Constraint Satisfaction', proficiency: 90, category: 'CS Foundations', description: 'Mathematical constraint formulations, pruning bounds, and state validation.' },
  { name: 'Problem Solving', proficiency: 92, category: 'CS Foundations', description: 'Competitive programming solutions, tracking time complexity limits, and bounds.' },
  { name: 'Algorithmic Optimization', proficiency: 87, category: 'CS Foundations', description: 'Spatial optimization, minimizing cache failures, sub-millisecond calculation speeds.' },

  // Tools & Platforms
  { name: 'Google AI Studio', proficiency: 97, category: 'Tools & Platforms', description: 'Prompt prototyping sandbox, testing fine-tuned model behaviors, API integrations.' },
  { name: 'VS Code', proficiency: 92, category: 'Tools & Platforms', description: 'Multi-lingual workspace, advanced git-lens control, workspace environments.' },
  { name: 'Git & GitHub', proficiency: 89, category: 'Tools & Platforms', description: 'Branch merging, conflict resolution, pipeline actions, and repository tracking.' },
  { name: 'Canva', proficiency: 85, category: 'Tools & Platforms', description: 'Curation of fonts, mockups layout alignment, and decks.' },
  { name: 'HackerRank', proficiency: 90, category: 'Tools & Platforms', description: 'Advanced problem-solving credentials and competitive algorithmic tests.' },

  // Product & Design
  { name: 'Product Thinking', proficiency: 92, category: 'Product & Design', description: 'Mapping core customer onboarding pathways, business units, and venture briefs.' },
  { name: 'UI/UX Design', proficiency: 88, category: 'Product & Design', description: 'Target spacing touch boundaries (44px mobile size) and high contrast layout aesthetics.' },
  { name: 'Wireframing', proficiency: 86, category: 'Product & Design', description: 'Frictionless interface layout designs, mockups wireframe grids, and content pathways.' },
  { name: 'Interactive Prototyping', proficiency: 85, category: 'Product & Design', description: 'State-driven responsive components, micro-animation transitions, and user flows.' }
];
