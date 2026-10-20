export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    tag?: string;
    highlight?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming languages for smart contracts, machine learning, and systems.',
    skills: [
      { name: 'TypeScript', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Solidity', highlight: true },
      { name: 'JavaScript' },
      { name: 'Java' },
    ],
  },
  {
    category: 'Frontend Engineering',
    description: 'Declarative component architecture, high-performance styling, and mobile interfaces.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind CSS' },
      { name: 'React Native' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Scalable service logic, microservices, and high-concurrency API backends.',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js' },
      { name: 'FastAPI', highlight: true },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational databases, document models, and structured data stores.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'AI / ML & Embedded Systems',
    description: 'Lightweight neural architectures, edge hardware inference, and intelligent retrieval pipelines.',
    skills: [
      { name: 'TensorFlow Lite', highlight: true },
      { name: 'Model Optimisation (INT8)' },
      { name: 'Computer Vision', highlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', highlight: true },
      { name: 'Edge AI Deployment' },
      { name: 'Raspberry Pi Silicon' },
      { name: 'Machine Learning Pipelines' },
    ],
  },
  {
    category: 'Blockchain & Decentralized Tech',
    description: 'Zero-Knowledge protocols, smart contract execution, and decentralized application design.',
    skills: [
      { name: 'Solidity Smart Contracts', highlight: true },
      { name: 'Web3 Development' },
      { name: 'Midnight Network (ZK)', highlight: true },
    ],
  },
];
