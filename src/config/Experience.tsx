import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

export interface Technology {
  name: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Developer Community, KGEC',
    position: 'Core Member & Technical Lead',
    location: 'Kalyani, West Bengal',
    image: '/assets/hero-laptop.png',
    description: [
      'Organized technical workshops and mentor sessions on Web3 fundamentals, decentralized protocols, and modern full-stack development.',
      'Led development initiatives on community web platforms, improving developer onboarding and project showcase tooling.',
      'Collaborated on open-source community utilities and hackathon problem statement design.',
    ],
    startDate: '2024',
    endDate: 'Present',
    website: 'https://github.com/vanshdeo',
    technologies: [
      { name: 'TypeScript', href: 'https://www.typescriptlang.org', icon: <TypeScript /> },
      { name: 'Next.js', href: 'https://nextjs.org', icon: <NextJs /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com', icon: <TailwindCss /> },
      { name: 'Node.js', href: 'https://nodejs.org', icon: <NodeJs /> },
    ],
  },
  {
    isCurrent: false,
    company: 'Research & Applied AI Lab',
    position: 'Undergraduate Researcher',
    location: 'KGEC',
    image: '/assets/hero-laptop.png',
    description: [
      'Researched edge model quantization strategies to run keyword-spotting and wake-word neural networks on single-board ARM systems.',
      'Explored computer-vision pipelines for autonomous pest deterrence and environmental monitoring.',
      'Processed solar wind telemetry data from space observatory payloads (Aditya-L1 SWIS) to analyze CME halo signatures.',
    ],
    startDate: '2024',
    endDate: '2025',
    technologies: [
      { name: 'Python', href: 'https://python.org' },
      { name: 'TensorFlow Lite', href: 'https://tensorflow.org/lite' },
      { name: 'Raspberry Pi', href: 'https://raspberrypi.org' },
      { name: 'OpenCV', href: 'https://opencv.org' },
    ],
  },
  {
    isCurrent: false,
    company: 'Web3 & Decentralized Prototypes',
    position: 'Independent Smart Contract Engineer',
    location: 'Remote',
    image: '/assets/hero-laptop.png',
    description: [
      'Prototyped privacy-preserving decentralized sealed-bid auction contracts on the Midnight Network.',
      'Implemented secure smart contracts in Solidity with comprehensive unit testing and gas-optimization patterns.',
      'Developed responsive frontend integrations interacting with Web3 wallet providers and contract state events.',
    ],
    startDate: '2023',
    endDate: '2024',
    technologies: [
      { name: 'Solidity', href: 'https://soliditylang.org' },
      { name: 'Midnight ZK', href: 'https://midnight.network' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org', icon: <TypeScript /> },
      { name: 'React', href: 'https://react.dev', icon: <ReactIcon /> },
    ],
  },
];
