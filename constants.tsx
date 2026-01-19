
import { Service, Product, Partner, Certification } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Enterprise Strategy',
    description: 'Data-driven roadmaps to navigate complex market shifts and drive sustainable growth.',
    icon: 'fa-solid fa-chess',
    category: 'Consulting'
  },
  {
    id: '2',
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems with cutting-edge cloud architecture and AI integration.',
    icon: 'fa-solid fa-microchip',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Financial Advisory',
    description: 'Expert capital management and risk assessment for global enterprises.',
    icon: 'fa-solid fa-chart-line',
    category: 'Finance'
  },
  {
    id: '4',
    title: 'Customer Experience',
    description: 'Redefining brand interactions through immersive design and behavioral analytics.',
    icon: 'fa-solid fa-users',
    category: 'Marketing'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nexus Analytics Pro',
    tagline: 'Predictive intelligence for retail giants.',
    image: 'https://picsum.photos/seed/nexus1/800/600'
  },
  {
    id: 'p2',
    name: 'CloudCore Ledger',
    tagline: 'Distributed compliance platform for finance.',
    image: 'https://picsum.photos/seed/nexus2/800/600'
  }
];

export const PARTNERS: Partner[] = [
  { id: 'pa1', name: 'Global Tech', logo: 'fa-brands fa-google', industry: 'Technology' },
  { id: 'pa2', name: 'SecureBank', logo: 'fa-brands fa-cc-visa', industry: 'FinTech' },
  { id: 'pa3', name: 'GreenEnergy', logo: 'fa-solid fa-leaf', industry: 'Sustainability' }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', name: 'ISO 27001', issuer: 'International Standards Organization', date: '2023', icon: 'fa-solid fa-shield-halved' },
  { id: 'c2', name: 'B-Corp Certified', issuer: 'B Lab', date: '2022', icon: 'fa-solid fa-hand-holding-heart' }
];
