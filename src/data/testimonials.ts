export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I cannot even begin to express how much easier Accountium makes my life. For me it's the best Accounting Software platform around. Easy to use, with all the features required to run my business.",
    author: 'Ashley Martin',
    role: 'Owner',
    company: 'Creative Designs',
  },
  {
    quote:
      "We've tested a lot of other Apps, but held onto Accountium because of the reliability and the features the software is offering. Our construction business is running smoothly and we see financials in real time.",
    author: 'John Heinrich',
    role: 'Owner',
    company: 'Creek Contracting',
  },
  {
    quote:
      'Awesome Software! I am able to send Invoices and get paid Online. Nice and clean design with intuitive features plus a great set of reports. Their Smart Banking module really makes it easier for having clean books.',
    author: 'Bill Jackson',
    role: 'Marketing Specialist',
    company: '',
  },
];
