import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Swara',
    category: 'Edge AI & Embedded Inference',
    description:
      'Lightweight, privacy-preserving wake-word detection system designed for on-device inference on a Raspberry Pi using a compact quantised TensorFlow Lite model.',
    problem:
      'Cloud voice assistants send continuous ambient audio to external servers, creating privacy risks and latency bottlenecks.',
    contribution:
      'Engineered an INT8-quantised acoustic keyword model tailored for ARM single-board architectures, enabling sub-80ms on-device wake-word detection with zero network telemetry.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/swara',
    technologies: [
      { name: 'TensorFlow Lite' },
      { name: 'Python' },
      { name: 'Raspberry Pi' },
      { name: 'Audio DSP' },
      { name: 'Edge AI' },
    ],
    github: 'https://github.com/vanshdeo/swara',
    live: 'https://github.com/vanshdeo/swara',
    details: false,
    projectDetailsPageSlug: '/projects/swara',
    isWorking: true,
  },
  {
    title: 'Chorus',
    category: 'AI & Retrieval-Augmented Generation',
    description:
      'Retrieval-augmented generation platform using Gemini for intelligent question-answering with citation-backed accuracy across complex documents.',
    problem:
      'Standard LLM responses often suffer from hallucinations and outdated context when querying private technical documentation.',
    contribution:
      'Built an end-to-end semantic chunking and vector indexing engine with Gemini multimodal reasoning, delivering precise contextual citations and verifiable answers.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/chorus',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Gemini API' },
      { name: 'Vector RAG' },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/vanshdeo/chorus',
    live: 'https://github.com/vanshdeo/chorus',
    details: false,
    projectDetailsPageSlug: '/projects/chorus',
    isWorking: true,
  },
  {
    title: 'SealBid',
    category: 'Web3 & Zero-Knowledge Smart Contracts',
    description:
      'Decentralized privacy-preserving auction mechanism built on the Midnight Network using Zero-Knowledge smart contracts.',
    problem:
      'Public blockchain auctions expose sensitive bid values and timing strategies, leaving participants vulnerable to front-running and manipulation.',
    contribution:
      'Designed a confidential sealed-bid state machine using Midnight Network\'s ZK proofs, guaranteeing verifiable fair-auction execution while preserving complete bidder privacy.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/sealbid',
    technologies: [
      { name: 'Midnight Network' },
      { name: 'Zero-Knowledge' },
      { name: 'Solidity' },
      { name: 'Web3' },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/vanshdeo/sealbid',
    live: 'https://github.com/vanshdeo/sealbid',
    details: false,
    projectDetailsPageSlug: '/projects/sealbid',
    isWorking: true,
  },
  {
    title: 'Secure Relief',
    category: 'Full-Stack Architecture & Crisis Systems',
    description:
      'High-integrity crisis management and relief distribution system ensuring secure identity verification and auditable aid allocation.',
    problem:
      'Disaster relief pipelines suffer from duplicate claims, supply hoarding, and fragmented coordination between dispatchers and field workers.',
    contribution:
      'Implemented role-based cryptographic verification and real-time ledger tracking for aid allocation, streamlining resource delivery under low-bandwidth conditions.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/secure-relief',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgres" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/vanshdeo/secure-relief',
    live: 'https://github.com/vanshdeo/secure-relief',
    details: false,
    projectDetailsPageSlug: '/projects/secure-relief',
    isWorking: true,
  },
  {
    title: 'Hornet Detection & Automated Response',
    category: 'Computer Vision & Edge Robotics',
    description:
      'Edge-computing and computer-vision pipeline running on a Raspberry Pi with a camera and physical hardware deterrent mechanism to safeguard honeybee hives.',
    problem:
      'Invasive hornets devastate agricultural apiaries unless detected and repelled instantly at hive entrances without harming honeybees.',
    contribution:
      'Trained an edge object detection model and built a camera rig with micro-controller actuation, triggering high-speed physical deterrent barriers upon hornet identification.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/hornet-detection',
    technologies: [
      { name: 'Computer Vision' },
      { name: 'Raspberry Pi' },
      { name: 'Python' },
      { name: 'OpenCV' },
      { name: 'Hardware Actuation' },
    ],
    github: 'https://github.com/vanshdeo/hornet-detection',
    live: 'https://github.com/vanshdeo/hornet-detection',
    details: false,
    projectDetailsPageSlug: '/projects/hornet-detection',
    isWorking: true,
  },
  {
    title: 'Aditya-L1 SWIS Research',
    category: 'Astrophysics & Solar Data Analysis',
    description:
      'Scientific data analysis investigating solar wind ion flux measurements from the SWIS-ASPEX payload aboard India\'s Aditya-L1 solar space observatory.',
    problem:
      'Detecting coronal mass ejection (CME) shockwaves and halo events requires isolating subtle solar wind alpha/proton variations from raw detector noise.',
    contribution:
      'Developed data cleaning, spectral normalization, and automated event identification algorithms in Python to extract halo CME plasma signatures from payload telemetry.',
    image: '/assets/hero-laptop.png',
    link: 'https://github.com/vanshdeo/aditya-l1-swis',
    technologies: [
      { name: 'Solar Physics' },
      { name: 'Data Science' },
      { name: 'Python' },
      { name: 'Space Weather' },
      { name: 'Aditya-L1 SWIS' },
    ],
    github: 'https://github.com/vanshdeo/aditya-l1-swis',
    live: 'https://github.com/vanshdeo/aditya-l1-swis',
    details: false,
    projectDetailsPageSlug: '/projects/aditya-l1-swis',
    isWorking: true,
  },
];
