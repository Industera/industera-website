
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  PRODUCTS = '/products',
  PARTNERS = '/partners',
  CERTIFICATIONS = '/certifications'
}
