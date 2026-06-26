import { Venture, TimelineItem, GalleryImage, ImpactStat, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const ventures: Venture[] = [
  {
    id: 'food-talk-india',
    name: 'Food Talk India',
    tagline: "India's Largest Digital Food Network",
    description:
      'Co-founded in 2013 alongside Anjali Batra, Food Talk India began as a highly curated, invite-only Facebook community for crowdsourcing restaurant recommendations. It evolved into one of India\'s largest digital food and drink networks, bridging tech, marketing, and the culinary world.',
    year: '2013',
    image: '/images/suchir.webp',
    category: 'Community & Media',
  },
  {
    id: 'jade-forest',
    name: 'Jade Forest',
    tagline: 'Premium Indian Mixers & Tonics',
    description:
      'Launched in 2018, Jade Forest is a homegrown Indian beverage brand specialising in low-calorie, premium mixers and tonics. The brand went on to raise seed funding and has since expanded its presence nationwide.',
    year: '2018',
    image: '/images/suchir2.webp',
    category: 'Premium Beverages',
  },
  {
    id: 'anthem',
    name: 'Anthem',
    tagline: 'The Newest Venture',
    description:
      'Anthem is Shuchir\'s latest venture, continuing his journey of building meaningful brands and experiences.',
    year: '2022',
    image: '/images/suchir.webp',
    category: 'New Venture',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2013',
    title: 'Food Talk India',
    subtitle: 'The Beginning',
    description:
      'Co-founded Food Talk India with Anjali Batra — a highly curated, invite-only Facebook community for crowdsourcing restaurant recommendations and food experiences across India.',
  },
  {
    year: '2014–17',
    title: 'Building a Network',
    subtitle: 'Scale & Growth',
    description:
      "Food Talk India evolved from an invite-only community into one of India's largest digital food and drink networks, connecting food lovers, chefs, and restaurateurs and bridging tech, marketing, and the culinary world.",
  },
  {
    year: '2018',
    title: 'Jade Forest',
    subtitle: 'Into Premium Beverages',
    description:
      'Launched Jade Forest, a homegrown Indian beverage brand specialising in low-calorie, premium mixers and tonics. The brand subsequently raised seed funding to expand its presence nationwide.',
  },
  {
    year: '2022',
    title: 'Anthem',
    subtitle: 'The Next Chapter',
    description:
      "Shuchir launches Anthem — his newest venture, continuing to push the boundaries of brand-building and community creation.",
  },
  {
    year: 'Present',
    title: 'Delhi & Beyond',
    subtitle: 'Continuing to Build',
    description:
      'Based in Delhi, Shuchir continues building culture-first brands, producing experiences, and demystifying the F&B space — 15+ years in and the curiosity hasn\'t slowed down.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/placeholder-gallery-1.jpg', alt: 'Food Talk India Event', category: 'Events', span: 'tall' },
  { id: '2', src: '/images/placeholder-gallery-2.jpg', alt: 'Curated Food Experience', category: 'Food' },
  { id: '3', src: '/images/placeholder-gallery-3.jpg', alt: 'Festival Moment', category: 'Festivals' },
  { id: '4', src: '/images/placeholder-gallery-4.jpg', alt: 'Speaking Engagement', category: 'Speaking', span: 'wide' },
  { id: '5', src: '/images/placeholder-gallery-5.jpg', alt: 'Behind the Scenes', category: 'Behind the Scenes' },
  { id: '6', src: '/images/placeholder-gallery-6.jpg', alt: 'Anthem Launch', category: 'Events', span: 'tall' },
  { id: '7', src: '/images/placeholder-gallery-7.jpg', alt: 'Jade Forest Launch', category: 'Food' },
  { id: '8', src: '/images/placeholder-gallery-8.jpg', alt: 'Community Gathering', category: 'Events' },
  { id: '9', src: '/images/placeholder-gallery-9.jpg', alt: 'Craft Gin Festival', category: 'Festivals' },
];

export const impactStats: ImpactStat[] = [
  { number: 15, suffix: '+', label: 'Years Building Brands' },
  { number: 3, suffix: '', label: 'Ventures Built' },
  { number: 1, suffix: '', label: 'Seed Round Raised' },
];

export const galleryCategories = ['All', 'Events', 'Food', 'Festivals', 'Speaking', 'Behind the Scenes'];
