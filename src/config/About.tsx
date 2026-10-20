import React from 'react';

export const mySkills: React.ReactNode[] = [];

export const about = {
  name: 'Vansh Deo',
  role: 'Web3 Developer & AI Engineer',
  tagline: 'Bridging decentralized trust and intelligent systems — engineering resilient software from quantised on-device neural networks to zero-knowledge smart contracts.',
  description: `I build scalable web experiences, explore decentralized technologies, and leverage artificial intelligence to solve real-world problems. My work focuses on resource-constrained on-device machine learning, privacy-preserving blockchain systems, and performant web applications.`,
  longBio: [
    `I am a developer and researcher passionate about the intersection of decentralized protocols, artificial intelligence, and embedded systems. I believe computing is most powerful when it runs reliably close to the edge and respects human privacy.`,
    `My projects span from developing lightweight, quantised TensorFlow Lite models running locally on Raspberry Pi hardware to architecting privacy-preserving smart contracts on the Midnight Network. Additionally, I engage in space weather and astrophysical data research, analyzing particle measurements from solar observation payloads like Aditya-L1's SWIS-ASPEX.`,
    `Whether building responsive user interfaces, setting up retrieval-augmented generation pipelines, or optimizing model inference for low-power silicon, I prioritize clean code, measurable performance, and thoughtful engineering.`
  ],
  focusAreas: [
    {
      title: 'Edge AI & Embedded Systems',
      description: 'Model quantization (INT8), wake-word detection, real-time computer vision, and deployment on ARM single-board computers like Raspberry Pi.',
      icon: 'Cpu',
    },
    {
      title: 'Web3 & Privacy-Preserving Protocols',
      description: 'Zero-Knowledge contracts, Midnight Network integration, Solidity smart contract architecture, and decentralized workflows.',
      icon: 'Shield',
    },
    {
      title: 'Full-Stack Architecture',
      description: 'Modern TypeScript, Next.js, React, Node.js, and FastAPI pipelines designed for high throughput and accessible user experiences.',
      icon: 'Layers',
    },
    {
      title: 'Scientific Data & Research',
      description: 'Scientific computing, data filtering, and solar wind particle analysis using payloads such as Aditya-L1 SWIS for space weather phenomena.',
      icon: 'Sparkles',
    },
  ],
};
