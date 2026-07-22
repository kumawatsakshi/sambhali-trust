export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // relative to USD
}

export interface Program {
  id: string;
  title: string;
  category: 'empowerment' | 'education' | 'livelihood' | 'legal_health' | 'relief';
  shortDesc: string;
  fullDesc: string;
  location: string;
  beneficiaries: string;
  impactMetric: string;
  image: string;
  highlights: string[];
  sponsorshipCost: {
    amountUSD: number;
    period: string;
    description: string;
  };
}

export interface BoutiqueProduct {
  id: string;
  name: string;
  category: 'textiles' | 'bags' | 'toys' | 'stationery' | 'apparel';
  priceUSD: number;
  artisanName: string;
  artisanCenter: string;
  image: string;
  description: string;
  material: string;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: BoutiqueProduct;
  quantity: number;
}

export interface VolunteerRole {
  id: string;
  title: string;
  department: string;
  location: 'Jodhpur City' | 'Setrawa Desert' | 'Remote / Virtual';
  duration: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impactKey: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  center: string;
  quote: string;
  avatar: string;
  year: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
  image: string;
  linkText: string;
}

export interface DonationOption {
  amountUSD: number;
  impactLabel: string;
  popular?: boolean;
}
