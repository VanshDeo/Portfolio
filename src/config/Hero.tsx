/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Vansh Deo',
  title: 'Web3 Developer & AI Engineer',
  tagline: 'WEB3 DEVELOPER & AI ENGINEER',
  verticalTagLeft: 'WEB3 | AI/ML | FULL STACK',
  verticalTagRight: 'BUILD | INNOVATE | CREATE',
  avatar: '/assets/hero-laptop.png',
  skills: [] as { name: string; href: string; component: string }[],

  // Description Configuration
  description: {
    lead: 'HELLO, I\'M',
    heading: 'VANSH',
    subheading: 'WEB3 DEVELOPER & AI ENGINEER',
    paragraph:
      'I build scalable web experiences, explore decentralized technologies and leverage AI to solve real world problems.',
    template:
      'I build scalable web experiences, explore decentralized technologies and leverage AI to solve real world problems.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'View My Work →',
      href: '#projects',
      icon: 'CV',
    },
    {
      variant: 'outline',
      text: 'Get in touch',
      href: '#contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/vanshdeo',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vansh-deo',
    icon: <LinkedIn />,
  },
  {
    name: 'X',
    href: 'https://x.com/vanshdeo',
    icon: <X />,
  },
  {
    name: 'Email',
    href: 'mailto:vanshdeo@example.com',
    icon: <Mail />,
  },
];
