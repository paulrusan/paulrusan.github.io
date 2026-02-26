export interface Feature {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export const features: Feature[] = [
  {
    icon: '◈',
    title: 'Invoicing',
    description:
      'Create and send professional invoices in minutes. Your clients can pay online instantly — no manual follow-ups needed.',
  },
  {
    icon: '⬡',
    title: 'Inventory Management',
    description:
      'Automate stock tracking with real-time records of inventory levels. Eliminate counting errors and get alerts before you run out.',
  },
  {
    icon: '⊞',
    title: 'Financial Statements',
    description:
      'Generate balance sheets, income statements, and cash flow reports at any time — a complete and accurate picture of your financial standing.',
  },
  {
    icon: '◎',
    title: 'Online Payroll',
    description:
      'Hassle-free payroll that adapts to businesses of any size. Accurate, compliant processing every pay cycle — no accountant required.',
  },
  {
    icon: '⬒',
    title: 'Property Management',
    description:
      'The ultimate platform for landlords and property managers. Track rent, expenses, and maintenance — fully integrated with your books.',
  },
  {
    icon: '✦',
    title: 'Full Cycle Accounting',
    description:
      'A comprehensive accounting suite built around the unique needs of small businesses — organized, accessible, and always up to date.',
  },
  {
    icon: '◇',
    title: 'Project Management',
    description:
      'Run any project simply and smartly with tools that keep every team on track.',
  },
];

export const highlightedFeatures: Feature[] = features.slice(0, 3);
