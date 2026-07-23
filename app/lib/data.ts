import { Venture, TimelineItem, GalleryImage, ImpactStat, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Journey', href: '#journey' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const ventures: Venture[] = [
  {
    id: 'food-talk-india',
    name: 'Food Talk India',
    tagline: "India's Largest Digital Food Network",
    description:
      'Co-founded in 2013 alongside Anjali Batra, Food Talk India began as a highly curated, invite-only Facebook community for crowdsourcing restaurant recommendations. It evolved into one of India\'s largest digital food and drink networks, bridging tech, marketing, and the culinary world.',
    blurb:
      "From an invite-only community to one of India's largest digital food networks, reaching millions every month.",
    year: '2013',
    image: '/images/suchir.webp',
    monogram: 'FT',
    website: '#',
    category: 'Community & Media',
  },
  {
    id: 'jade-forest',
    name: 'Jade Forest',
    tagline: 'Premium Indian Mixers & Tonics',
    description:
      'Launched in 2018, Jade Forest is a homegrown Indian beverage brand specialising in low-calorie, premium mixers and tonics. The brand went on to raise seed funding and has since expanded its presence nationwide.',
    blurb:
      'Better-for-you Indian mixers and tonics — low-calorie, seed-funded, and poured nationwide.',
    year: '2018',
    image: '/images/suchir2.webp',
    monogram: 'JF',
    website: '#',
    category: 'Premium Beverages',
  },
  {
    id: 'anthem',
    name: 'Anthem',
    tagline: 'Full-Service Marketing Agency',
    description:
      "Anthem is a full-service marketing agency that partners with some of India's biggest brands, both domestic and global, building campaigns and experiences that connect culture and commerce.",
    blurb:
      "A full-service marketing agency partnering with some of India's biggest brands, at home and abroad.",
    year: '2022',
    image: '/images/suchir.webp',
    monogram: 'AN',
    website: '#',
    category: 'Marketing Agency',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2013',
    title: 'Food Talk India',
    subtitle: 'The Beginning',
    description:
      'Co-founded an invite-only food community with Anjali Batra, crowdsourcing where India should eat and drink.',
    metric: 'Co-founder & Chairman',
  },
  {
    year: '2015',
    title: 'Food Talk Plus',
    subtitle: 'First Raise',
    description:
      "Raised funding to build the Food Talk Plus app, scaling into one of India's largest digital food networks.",
    metric: '$500K raised',
  },
  {
    year: '2017',
    title: 'Gin Explorers Club',
    subtitle: 'Building Experiences',
    description:
      'Co-created what grew into the world’s largest gin festival, now spanning Delhi, Mumbai and Bengaluru.',
    metric: '1,00,000+ attendees',
  },
  {
    year: '2018',
    title: 'Jade Forest',
    subtitle: 'Into Premium Beverages',
    description:
      'Co-founded a homegrown brand of low-calorie premium mixers and tonics, redefining how India drinks.',
    metric: 'Premium mixers',
  },
  {
    year: '2020',
    title: 'Jade Forest Raises Seed',
    subtitle: 'Backed by Angels',
    description:
      'Closed seed funding from prominent angel investors to expand distribution across the country.',
    metric: '$250K seed',
  },
  {
    year: '2022',
    title: 'Anthem',
    subtitle: 'The Next Chapter',
    description:
      "Building Anthem, a full-service marketing agency partnering with some of India's biggest brands.",
    metric: 'Marketing agency',
  },
  {
    year: 'Present',
    title: 'Delhi & Beyond',
    subtitle: 'Still Building',
    description:
      'Based in Delhi — building culture-first brands, experiences, and communities across food and drink.',
    metric: '15+ years',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/placeholder-gallery-1.jpg', alt: 'Gin Explorers Club, Delhi', category: 'Events', span: 'tall' },
  { id: '2', src: '/images/placeholder-gallery-2.jpg', alt: 'Food Talk India Meetup', category: 'Events' },
  { id: '3', src: '/images/placeholder-gallery-3.jpg', alt: 'Jade Forest Launch Night', category: 'Events' },
  { id: '4', src: '/images/placeholder-gallery-4.jpg', alt: 'Keynote: Building F&B Brands', category: 'Speaking', span: 'wide' },
  { id: '5', src: '/images/placeholder-gallery-5.jpg', alt: 'Founder Fireside Chat', category: 'Speaking' },
  { id: '6', src: '/images/placeholder-gallery-6.jpg', alt: 'YourStory Founder Feature', category: 'Interviews' },
  { id: '7', src: '/images/placeholder-gallery-7.jpg', alt: 'Magazine Cover Story', category: 'Interviews' },
  { id: '8', src: '/images/placeholder-gallery-8.jpg', alt: "The Founder's Table Podcast", category: 'Podcasts', span: 'tall' },
  { id: '9', src: '/images/placeholder-gallery-9.jpg', alt: 'On Building Brands, Live', category: 'Podcasts' },
  { id: '10', src: '/images/suchir2.webp', alt: 'Jade Forest Campaign', category: 'Brand Shoots' },
  { id: '11', src: '/images/suchir.webp', alt: 'Editorial Portrait', category: 'Brand Shoots' },
];

export const impactStats: ImpactStat[] = [
  { number: 15, suffix: '+', label: 'Years Building Brands' },
  { number: 3, suffix: '', label: 'Ventures Built' },
  { number: 1, suffix: '', label: 'Seed Round Raised' },
];

export const galleryCategories = ['All', 'Events', 'Speaking', 'Interviews', 'Podcasts', 'Brand Shoots'];
