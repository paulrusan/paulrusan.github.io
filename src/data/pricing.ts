export interface PricingTier {
  name: string;
  price: number | string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 29,
    period: '/ month',
    description: 'For freelancers and solopreneurs who want clean, simple accounting.',
    features: [
      'Up to 100 transactions / month',
      'AI categorization',
      '1 bank connection',
      'Invoicing & payments',
      'Basic reports',
      'Email support',
    ],
    cta: 'Start free trial',
    href: '/contact',
  },
  {
    name: 'Growth',
    price: 79,
    period: '/ month',
    description: 'For growing teams that need automation, collaboration, and deeper insights.',
    features: [
      'Unlimited transactions',
      'Full AI bookkeeping suite',
      'Unlimited bank connections',
      'Smart invoicing & reminders',
      'Expense management',
      'Multi-user (up to 5 seats)',
      'Tax package export',
      'Priority support',
    ],
    cta: 'Start free trial',
    href: '/contact',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    description: 'For established businesses that need multi-entity, advanced controls, and dedicated support.',
    features: [
      'Everything in Growth',
      'Multi-entity management',
      'Consolidated reporting',
      'Custom integrations',
      'Unlimited seats',
      'SSO & advanced permissions',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Talk to sales',
    href: '/contact',
  },
];
