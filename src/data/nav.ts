export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'Features', href: '/features' },
  // { label: 'About',    href: '/about' },    // hidden from menu
  { label: 'Resources', href: '/resources' },
  // { label: 'Contact1', href: '/contact' },  // hidden from menu
];
