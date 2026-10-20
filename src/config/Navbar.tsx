export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navbarConfig = {
  brand: 'VANSH DEO',
  tagline: 'WEB3 | AI/ML',
  logo: {
    src: '/assets/hero-laptop.png',
    alt: 'Vansh Deo',
    width: 48,
    height: 48,
  },
  navItems: [
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Research',
      href: '#research',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ] as NavItem[],
};
