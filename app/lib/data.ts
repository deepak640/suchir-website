import { Venture, TimelineItem, GalleryImage, ImpactStat, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Journey', href: '#journey' },
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
    image: '/images/placeholder-venture-1.jpg',
    category: 'Community & Media',
  },
  {
    id: 'jade-forest',
    name: 'Jade Forest',
    tagline: 'Premium Indian Mixers & Tonics',
    description:
      'Launched in 2018, Jade Forest is a homegrown Indian beverage brand specialising in low-calorie, premium mixers and tonics. The brand went on to raise seed funding and has since expanded its presence nationwide.',
    year: '2018',
    image: '/images/placeholder-venture-2.jpg',
    category: 'Premium Beverages',
  },
  {
    id: 'gin-explorers-club',
    name: 'Gin Explorers Club',
    tagline: "India's Largest Gin Festival",
    description:
      'One of the key creators behind India\'s largest gin festival, the Gin Explorers Club has played a significant role in popularising boutique craft gin culture across metropolitan Indian cities.',
    year: '2019',
    image: '/images/placeholder-venture-3.jpg',
    category: 'Spirits & Culture',
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
    year: '2019',
    title: 'Gin Explorers Club',
    subtitle: 'Championing Craft Gin',
    description:
      "Co-created India's largest gin festival, playing a pivotal role in popularising boutique craft gin culture across metropolitan cities and putting artisanal spirits on the mainstream map.",
  },
  {
    year: 'Present',
    title: 'Delhi & Beyond',
    subtitle: 'Continuing to Build',
    description:
      'Based in Delhi, Shuchir continues to shape India\'s food, beverage, and experiential lifestyle space — building brands and communities that define how urban India eats, drinks, and gathers.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/placeholder-gallery-1.jpg', alt: 'Food Talk India Event', category: 'Events', span: 'tall' },
  { id: '2', src: '/images/placeholder-gallery-2.jpg', alt: 'Curated Food Experience', category: 'Food' },
  { id: '3', src: '/images/placeholder-gallery-3.jpg', alt: 'Festival Moment', category: 'Festivals' },
  { id: '4', src: '/images/placeholder-gallery-4.jpg', alt: 'Speaking Engagement', category: 'Speaking', span: 'wide' },
  { id: '5', src: '/images/placeholder-gallery-5.jpg', alt: 'Behind the Scenes', category: 'Behind the Scenes' },
  { id: '6', src: '/images/placeholder-gallery-6.jpg', alt: 'Gin Explorers Club', category: 'Events', span: 'tall' },
  { id: '7', src: '/images/placeholder-gallery-7.jpg', alt: 'Jade Forest Launch', category: 'Food' },
  { id: '8', src: '/images/placeholder-gallery-8.jpg', alt: 'Community Gathering', category: 'Events' },
  { id: '9', src: '/images/placeholder-gallery-9.jpg', alt: 'Craft Gin Festival', category: 'Festivals' },
];

export const impactStats: ImpactStat[] = [
  { number: 11, suffix: '+', label: 'Years Building Brands' },
  { number: 3, suffix: '', label: 'Ventures Co-Founded' },
  { number: 1, suffix: '', label: 'Seed Round Raised' },
  { number: 1, suffix: '', label: "India's Largest Gin Festival" },
];

export const galleryCategories = ['All', 'Events', 'Food', 'Festivals', 'Speaking', 'Behind the Scenes'];
