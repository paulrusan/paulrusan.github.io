export interface Resource {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  icon: string;
  color: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Accounting Software',
    excerpt: 'A guide to the best online accounting software — powerful, user-friendly, and accessible from any device, anytime, anywhere.',
    category: 'Guide',
    date: 'Jan 15, 2026',
    href: '/accounting-software',
    icon: '◈',
    color: 'linear-gradient(135deg, #0891b2, #0369a1)',
  },
  {
    id: 2,
    title: 'Top 5 Tax Tips for Canadian Small Businesses',
    excerpt: 'From GST/HST remittances to CRA deadlines, these five practices will save you money and keep you compliant through every tax season.',
    category: 'Tip',
    date: 'Jan 22, 2026',
    href: '#',
    icon: '✦',
    color: 'linear-gradient(135deg, #059669, #047857)',
  },
  {
    id: 3,
    title: 'How Creek Contracting Cut Month-End Close by 60%',
    excerpt: 'John Heinrich shares how his construction firm replaced manual spreadsheets with Accountium and reclaimed hours every pay cycle.',
    category: 'Case Study',
    date: 'Feb 1, 2026',
    href: '#',
    icon: '⬡',
    color: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
  },
  {
    id: 4,
    title: 'Accountium Launches Multi-Currency Support',
    excerpt: 'Canadian businesses operating internationally can now invoice, pay, and report in USD, EUR, GBP, and 30+ currencies — all from one dashboard.',
    category: 'News',
    date: 'Feb 5, 2026',
    href: '#',
    icon: '⊞',
    color: 'linear-gradient(135deg, #d97706, #b45309)',
  },
  {
    id: 5,
    title: 'Understanding Cash Flow Statements',
    excerpt: 'A cash flow statement tells you more than just profit — it tells you if your business can actually pay its bills. Here\'s how to read and act on yours.',
    category: 'Guide',
    date: 'Feb 8, 2026',
    href: '#',
    icon: '◎',
    color: 'linear-gradient(135deg, #0891b2, #0369a1)',
  },
  {
    id: 6,
    title: 'Invoice Faster: Automation Best Practices',
    excerpt: 'Stop chasing payments. Set up recurring invoices, automated reminders, and online payment links so your cash flow takes care of itself.',
    category: 'Tip',
    date: 'Feb 10, 2026',
    href: '#',
    icon: '⬒',
    color: 'linear-gradient(135deg, #059669, #047857)',
  },
  {
    id: 7,
    title: 'Payroll Compliance in Canada: A 2026 Guide',
    excerpt: 'CPP, EI, income tax withholdings — navigating Canadian payroll rules is complex. This guide walks through every requirement for employers.',
    category: 'Guide',
    date: 'Feb 12, 2026',
    href: '#',
    icon: '◈',
    color: 'linear-gradient(135deg, #0891b2, #0369a1)',
  },
  {
    id: 8,
    title: 'Creative Designs Scales to 3 Locations with Accountium',
    excerpt: 'Ashley Martin needed a platform that could grow with her agency. See how Accountium\'s multi-entity features made expansion seamless and stress-free.',
    category: 'Case Study',
    date: 'Feb 14, 2026',
    href: '#',
    icon: '⬡',
    color: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
  },
  {
    id: 9,
    title: 'New Dashboard: Real-Time Financial Insights',
    excerpt: 'The redesigned Accountium dashboard brings your P&L, cash position, and upcoming bills into one live view — updated every 15 minutes.',
    category: 'News',
    date: 'Feb 17, 2026',
    href: '#',
    icon: '⊞',
    color: 'linear-gradient(135deg, #d97706, #b45309)',
  },
  {
    id: 10,
    title: '5 Signs Your Business Needs an Accounting Upgrade',
    excerpt: 'Still exporting to spreadsheets? Manually reconciling bank statements? These warning signs mean your accounting stack is holding you back.',
    category: 'Tip',
    date: 'Feb 20, 2026',
    href: '#',
    icon: '✦',
    color: 'linear-gradient(135deg, #059669, #047857)',
  },
];
