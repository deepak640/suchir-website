export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Short, card-friendly one-liner. */
  blurb: string;
  year: string;
  image: string;
  /** Optional brand logo; when absent the card renders the typographic monogram. */
  logo?: string;
  /** Typographic mark shown on the card seal, e.g. "FT". */
  monogram: string;
  /** "Learn more" destination. Replace "#" placeholders with real URLs. */
  website: string;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  /** Short highlight shown as a pill — a raise, a role, or a headline number. */
  metric?: string;
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
