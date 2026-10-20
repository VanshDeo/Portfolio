export interface Achievement {
  title: string;
  roleOrAward: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: 'Developer Community, KGEC',
    roleOrAward: 'Core Member & Tech Lead',
    organization: 'Kalyani Government Engineering College',
    date: '2024 - Present',
    description:
      'Organized collegiate hackathons, delivered hands-on technical sessions on Web3 and full-stack development, and mentored junior developers building open-source projects.',
    tags: ['Leadership', 'Mentorship', 'Community'],
  },
  {
    title: 'Inter-College Hackathons & Web3 Competitions',
    roleOrAward: 'Participant & Project Builder',
    organization: 'Collegiate Hackathons',
    date: '2024',
    description:
      'Engineered decentralized application prototypes and privacy-focused smart contracts under tight time constraints, solving real-world digital verification challenges.',
    tags: ['Hackathons', 'Web3', 'Rapid Prototyping'],
  },
  {
    title: 'Aditya-L1 Solar Physics Research Contribution',
    roleOrAward: 'Telemetry Data Analysis',
    organization: 'Space Science Research Project',
    date: '2024 - 2025',
    description:
      'Analyzed particle data from the SWIS-ASPEX payload aboard India’s solar observatory, publishing computational workflows for halo coronal mass ejection event detection.',
    tags: ['Research', 'Space Science', 'Python'],
  },
  {
    title: 'Open-Source Tooling & Edge AI Experiments',
    roleOrAward: 'Active Contributor',
    organization: 'Open Source Ecosystem',
    date: '2023 - Present',
    description:
      'Released reproducible models and scripts for TensorFlow Lite embedded wake-word detection, edge computer vision, and privacy-preserving smart contract mechanisms.',
    tags: ['Open Source', 'Edge AI', 'Developer Tooling'],
  },
];

export const certificates = [
  {
    file: '/assets/hero-laptop.png',
    title: 'Developer Community KGEC Lead',
    issuer: 'Developer Community KGEC',
    date: '2024',
  },
  {
    file: '/assets/hero-laptop.png',
    title: 'Aditya-L1 SWIS Payload Research Analysis',
    issuer: 'Space Physics Research Group',
    date: '2024',
  },
];

const achievementsConfig = {
  achievements,
  certificates,
};

export default achievementsConfig;
