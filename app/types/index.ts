export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  image: string;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: 'normal' | 'tall' | 'wide';
}

export interface ImpactStat {
  number: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
