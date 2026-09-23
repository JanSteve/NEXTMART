// ============================================================================
// NexMart — Mock Data & Constants
// High-Resolution Authentic E-Commerce Product Catalog
// ============================================================================

// ── Navigation Categories ──────────────────────────────────────────────
export const NAV_CATEGORIES = [
  { name: 'Electronics', slug: 'electronics', icon: '📱', emoji: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop' },
  { name: 'Fashion', slug: 'fashion', icon: '👗', emoji: '👗', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Home & Kitchen', slug: 'home-kitchen', icon: '🏠', emoji: '🏠', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Beauty', slug: 'beauty', icon: '💄', emoji: '💄', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sports', slug: 'sports', icon: '🏃', emoji: '🏃', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Books', slug: 'books', icon: '📚', emoji: '📚', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Toys & Games', slug: 'toys-games', icon: '🎮', emoji: '🎮', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600&auto=format&fit=crop' },
  { name: 'Grocery', slug: 'grocery', icon: '🛒', emoji: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Deals', slug: 'deals', icon: '⚡', emoji: '⚡', isHighlighted: true, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop' },
];

export const CATEGORIES = NAV_CATEGORIES;

// ── Homepage Banners ────────────────────────────────────────────────────
export const HERO_BANNERS = [
  {
    id: '1',
    title: 'Flagship Electronics Mega Fest',
    subtitle: 'Up to 50% Off on Smartphones, MacBooks & Sony Audio',
    cta: 'Shop Flagships',
    ctaLink: '/category/electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    bgGradient: 'from-indigo-900 via-indigo-700 to-purple-800',
  },
  {
    id: '2',
    title: 'Spring Streetwear & Athleisure',
    subtitle: 'Nike, Levi\'s, Puma & Urban Styles from ₹999',
    cta: 'Explore Trends',
    ctaLink: '/category/fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    bgGradient: 'from-rose-900 via-pink-700 to-amber-700',
  },
  {
    id: '3',
    title: 'NexMart Plus Membership',
    subtitle: 'Zero Delivery Fees + Exclusive 2-Hour Delivery Slots for ₹299/mo',
    cta: 'Join NexMart Plus',
    ctaLink: '/nexmart-plus',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop',
    bgGradient: 'from-amber-800 via-orange-600 to-yellow-600',
  },
  {
    id: '4',
    title: 'Modern Chef & Home Essentials',
    subtitle: 'Non-stick Cookware, Espresso Machines & Luxe Bedding from ₹499',
    cta: 'Shop Kitchen',
    ctaLink: '/category/home-kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    bgGradient: 'from-emerald-900 via-teal-700 to-cyan-800',
  },
];

// ── Brand Logos ────────────────────────────────────────────────────────
export const BRANDS = [
  { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=200&auto=format&fit=crop' },
  { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200&auto=format&fit=crop' },
  { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop' },
  { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sony', logo: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=200&auto=format&fit=crop' },
  { name: 'boAt', logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop' },
  { name: 'Levi\'s', logo: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=200&auto=format&fit=crop' },
  { name: 'Prestige', logo: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=200&auto=format&fit=crop' },
  { name: 'Mamaearth', logo: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=200&auto=format&fit=crop' },
  { name: 'Titan', logo: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=200&auto=format&fit=crop' },
];

// ── Variant Model Types ────────────────────────────────────────────────
export type VariantType = 'storage' | 'laptop-config' | 'apparel-size' | 'shoe-size' | 'volume' | 'capacity' | 'edition' | 'weight';

export interface ProductVariantOption {
  label: string;
  price: number;
  mrp: number;
  stockQty: number;
  isDefault?: boolean;
}

export interface ProductColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface MockProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  badges: Array<{ text: string; type: 'sale' | 'new' | 'bestseller' | 'choice' }>;
  freeDelivery: boolean;
  inStock: boolean;
  isFulfilledByNexmart: boolean;
  description: string;
  shortDescription: string;
  highlights: string[];
  variantType: VariantType;
  variantLabel: string;
  variantOptions: ProductVariantOption[];
  colors: ProductColorOption[];
  specs: Record<string, string>;
  manufacturingDetails: {
    countryOfOrigin: string;
    material?: string;
    weight?: string;
    dimensions?: string;
  };
  vendorName: string;
  vendorRating: number;
}

// ── Curated Real Products with Authentic Images & Varied Models ─────────
export const MOCK_PRODUCTS: MockProduct[] = [
  // 1. Samsung Galaxy S24 Ultra
  {
    id: 'prod-001',
    name: 'Samsung Galaxy S24 Ultra AI Smartphone (Titanium)',
    slug: 'samsung-galaxy-s24-ultra-256gb',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 129999,
    mrp: 134999,
    rating: 4.8,
    reviewCount: 8432,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'BESTSELLER', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'The Samsung Galaxy S24 Ultra represents the peak of mobile engineering. Encased in a lightweight, ultra-durable Titanium frame with Corning Gorilla Armor glass, it is powered by the Snapdragon 8 Gen 3 for Galaxy processor. The device introduces Galaxy AI, revolutionizing productivity with Live Translate, Note Assist, and Circle to Search with Google. The 200MP Quad Telephoto optical zoom system captures cinema-grade 8K video and stunning Nightography shots with AI zoom enhancement. The embedded S Pen offers precise handwriting and creative illustration on the 2,600 nit Dynamic AMOLED 2X 120Hz display.',
    shortDescription: 'Titanium AI flagship with 200MP Quad Zoom Camera, Snapdragon 8 Gen 3, and embedded S Pen.',
    highlights: [
      'Galaxy AI: Circle to Search, Live Call Translation & Generative Photo Edit',
      '200MP primary sensor with 5x 50MP optical telephoto zoom up to 100x Space Zoom',
      '6.8-inch QHD+ Dynamic AMOLED 2X flat display with 2600 nits peak brightness',
      'Aerospace-grade Titanium frame with Corning Gorilla Armor anti-reflective glass',
      '5000 mAh all-day battery with 45W Super Fast Charging 2.0',
    ],
    variantType: 'storage',
    variantLabel: 'Storage Model',
    variantOptions: [
      { label: '256GB (12GB RAM)', price: 129999, mrp: 134999, stockQty: 45, isDefault: true },
      { label: '512GB (12GB RAM)', price: 139999, mrp: 144999, stockQty: 30 },
      { label: '1TB (12GB RAM)', price: 159999, mrp: 164999, stockQty: 12 },
    ],
    colors: [
      { name: 'Titanium Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titanium Gray', hex: '#8E8E93', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titanium Violet', hex: '#634780', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titanium Yellow', hex: '#E5C158', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'Display': '6.8-inch Dynamic AMOLED 2X, 120Hz LTPO, 2600 nits, HDR10+',
      'Primary Camera': '200 MP (f/1.7) + 50 MP (5x zoom) + 10 MP (3x zoom) + 12 MP (ultra-wide)',
      'Front Camera': '12 MP Dual Pixel PDAF 4K60',
      'Battery & Charging': '5000 mAh, 45W wired, 15W wireless',
      'Water Resistance': 'IP68 certified (1.5m up to 30 mins)',
      'OS': 'One UI 6.1 on Android 14 (7 Years OS Updates)',
    },
    manufacturingDetails: {
      countryOfOrigin: 'South Korea / India',
      material: 'Titanium, Gorilla Armor Glass',
      weight: '232 g',
      dimensions: '162.3 x 79.0 x 8.6 mm',
    },
    vendorName: 'Samsung Official India Pvt Ltd',
    vendorRating: 4.9,
  },

  // 2. Apple MacBook Air M3
  {
    id: 'prod-002',
    name: 'Apple MacBook Air 13.6-inch with M3 Chip',
    slug: 'apple-macbook-air-m3-13',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 114990,
    mrp: 129990,
    rating: 4.9,
    reviewCount: 2341,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'NEXMART CHOICE', type: 'choice' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Supercharged by the next-generation M3 chip, the redesigned MacBook Air delivers phenomenal performance and up to 18 hours of battery life in a breathtakingly thin aluminum body. Featuring an 8-core CPU, up to 10-core GPU, and support for up to two external displays with the laptop lid closed, it handles 4K video editing, complex code compilation, and everyday multitasking without breaking a sweat. The Liquid Retina display supports 1 billion colors, while the 1080p FaceTime HD camera, three-mic array, and Spatial Audio sound system ensure crystal-clear calls and immersive media.',
    shortDescription: 'Apple M3 chip, 13.6" Liquid Retina display, 18-hour battery, silent fanless architecture.',
    highlights: [
      'Apple M3 chip: 8-core CPU, up to 10-core GPU, hardware-accelerated ray tracing',
      'Up to 18 hours of battery life with silent, fanless design',
      '13.6-inch Liquid Retina display with 500 nits brightness and True Tone',
      'Dual Thunderbolt / USB 4 ports, MagSafe 3 charging port, 3.5mm headphone jack',
      'Support for up to two external monitors when notebook lid is closed',
    ],
    variantType: 'laptop-config',
    variantLabel: 'Hardware Configuration',
    variantOptions: [
      { label: '8GB Unified RAM / 256GB SSD', price: 114990, mrp: 129990, stockQty: 25, isDefault: true },
      { label: '16GB Unified RAM / 512GB SSD', price: 134990, mrp: 149990, stockQty: 18 },
      { label: '24GB Unified RAM / 1TB SSD', price: 174990, mrp: 189990, stockQty: 8 },
    ],
    colors: [
      { name: 'Midnight', hex: '#1C2430', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Starlight', hex: '#F0E6D8', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop' },
      { name: 'Space Gray', hex: '#58595B', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop' },
      { name: 'Silver', hex: '#E3E4E6', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Chip': 'Apple M3 (8-core CPU, 10-core GPU, 16-core Neural Engine)',
      'Memory': 'Unified LPDDR5 Memory',
      'Display': '13.6" Liquid Retina LED-backlit (2560 x 1664 at 224 ppi)',
      'Audio': 'Four-speaker sound system with Spatial Audio & Dolby Atmos',
      'Camera': '1080p FaceTime HD camera with advanced image signal processor',
      'Weight': '1.24 kg (2.7 pounds)',
    },
    manufacturingDetails: {
      countryOfOrigin: 'China / Vietnam',
      material: '100% Recycled Aluminum Enclosure',
      weight: '1.24 kg',
      dimensions: '30.41 x 21.50 x 1.13 cm',
    },
    vendorName: 'Apple Authorized Enterprise Retailer',
    vendorRating: 4.9,
  },

  // 3. Nike Air Max 270 React Sneakers
  {
    id: 'prod-003',
    name: 'Nike Air Max 270 React Running & Lifestyle Shoes',
    slug: 'nike-air-max-270-react',
    brand: 'Nike',
    category: 'Fashion',
    subcategory: 'Sneakers',
    price: 8495,
    mrp: 13995,
    rating: 4.7,
    reviewCount: 4231,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'SALE -39%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Nike\'s first lifestyle Air Max meets the softest, smoothest and most resilient Nike React foam. The aesthetic draws inspiration from the Air Max pantheon, showcasing Nike\'s greatest innovation with its large window and fresh array of colors. The lightweight, layered no-sew materials create a modern aesthetic that transitions effortlessly from morning sprints to evening city outings. The Max Air 270 unit delivers unrivaled, all-day comfort with full heel-to-toe cushioning.',
    shortDescription: 'Lifestyle sneakers combining Max Air 270 heel cushioning with lightweight Nike React foam.',
    highlights: [
      'Max Air 270 unit delivers unrivaled impact absorption',
      'Nike React technology provides an extremely smooth, lightweight and resilient ride',
      'Woven fabric upper delivers lightweight fit and breathable feel',
      'Full heel-to-toe rubber coverage on outsole for multi-surface traction',
      'Speed lacing system with traditional tongue for easy entry',
    ],
    variantType: 'shoe-size',
    variantLabel: 'Shoe Size (UK / India)',
    variantOptions: [
      { label: 'UK 6 (EU 40)', price: 8495, mrp: 13995, stockQty: 10 },
      { label: 'UK 7 (EU 41)', price: 8495, mrp: 13995, stockQty: 22 },
      { label: 'UK 8 (EU 42.5)', price: 8495, mrp: 13995, stockQty: 35, isDefault: true },
      { label: 'UK 9 (EU 44)', price: 8495, mrp: 13995, stockQty: 28 },
      { label: 'UK 10 (EU 45)', price: 8495, mrp: 13995, stockQty: 15 },
      { label: 'UK 11 (EU 46)', price: 8995, mrp: 13995, stockQty: 6 },
    ],
    colors: [
      { name: 'University Red / Black', hex: '#D01012', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
      { name: 'Triple Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Pure Platinum / White', hex: '#E5E5E5', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Sole Material': 'Durable Rubber Outsole with Air-Sole Unit',
      'Upper': 'Engineered Mesh & Synthetic No-Sew Overlays',
      'Closure': 'Lace-Up with webbing loops',
      'Arch Support': 'Neutral / Responsive Cushioning',
      'Ideal For': 'Running, Gym Training & Streetwear Lifestyle',
    },
    manufacturingDetails: {
      countryOfOrigin: 'Vietnam',
      material: 'Synthetic Mesh & React Foam',
      weight: '340 g per shoe',
    },
    vendorName: 'Nike India Authorized Brand Store',
    vendorRating: 4.8,
  },

  // 4. Sony WH-1000XM5 Wireless Headphones
  {
    id: 'prod-004',
    name: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones',
    slug: 'sony-wh-1000xm5',
    brand: 'Sony',
    category: 'Electronics',
    subcategory: 'Headphones',
    price: 26990,
    mrp: 34990,
    rating: 4.8,
    reviewCount: 5621,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'TOP RATED', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'With two processors controlling eight microphones, the Sony WH-1000XM5 wireless noise cancelling headphones rewrite the rules for distraction-free listening and exceptional call clarity. The specially designed 30mm driver unit with a soft TPU edge enhances noise cancelling especially in low frequency ranges, helping you enjoy music precisely without ambient noise. Features Auto NC Optimizer, Precise Voice Pickup technology with 4 beamforming mics, Speak-to-Chat, and multipoint Bluetooth connectivity to pair two devices simultaneously.',
    shortDescription: 'Industry-leading Active Noise Cancellation with 8 microphones, 30hr battery, LDAC High-Res Audio.',
    highlights: [
      'Two processors and 8 microphones for unparalleled Auto NC noise cancellation',
      'Crystal-clear hands-free calling with 4 beamforming mics and AI-based noise reduction',
      'Up to 30-hour battery life with 3-minute quick charge giving 3 hours of playback',
      'Multipoint connection lets you switch effortlessly between laptop and smartphone',
      'Lightweight soft-fit leather design with intuitive touch sensor controls',
    ],
    variantType: 'edition',
    variantLabel: 'Package Edition',
    variantOptions: [
      { label: 'Standard Edition (Headphones + Case)', price: 26990, mrp: 34990, stockQty: 30, isDefault: true },
      { label: 'Pro Bundle (+ Hard Shell Travel Pouch & Gold Audio Jack)', price: 28490, mrp: 36990, stockQty: 15 },
    ],
    colors: [
      { name: 'Midnight Black', hex: '#1A1A1A', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Platinum Silver', hex: '#DCDCDC', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop' },
      { name: 'Midnight Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Driver Size': '30 mm with Carbon Fiber composite dome',
      'Frequency Response': '4 Hz - 40,000 Hz (High-Resolution Audio Wireless LDAC)',
      'Battery Life': '30 hours (NC ON), 40 hours (NC OFF)',
      'Connectivity': 'Bluetooth 5.2 (LDAC, AAC, SBC) + 3.5mm Aux input',
      'Weight': '250 grams',
    },
    manufacturingDetails: {
      countryOfOrigin: 'Malaysia',
      material: 'Synthetic Leather, Recycled ABS Resin',
      weight: '250 g',
    },
    vendorName: 'Sony Center India',
    vendorRating: 4.9,
  },

  // 5. Levi's 511 Slim Fit Denim Jeans
  {
    id: 'prod-005',
    name: 'Levi\'s Men\'s 511 Slim Fit Stretch Denim Jeans',
    slug: 'levis-511-slim-fit-jeans',
    brand: 'Levi\'s',
    category: 'Fashion',
    subcategory: 'Jeans',
    price: 2499,
    mrp: 4199,
    rating: 4.6,
    reviewCount: 7823,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'SALE -40%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic since right now. These jeans sit below the waist with a slim leg from hip to ankle. Crafted with Levi\'s Flex: advanced stretch technology engineered to deliver maximum flex and optimum comfort. Signature 5-pocket styling, arcuate stitch on back pockets, and iconic leather patch at back waistband.',
    shortDescription: 'Classic 5-pocket slim fit jeans crafted with premium Levi\'s Flex stretch denim.',
    highlights: [
      'Slim from hip to ankle with a modern mid-rise waist',
      'Levi\'s Flex advanced stretch technology for built-in ease',
      'Zip fly with branded button closure and copper rivets',
      'Authentic Levi\'s Two Horse Pull leather patch on back waistband',
    ],
    variantType: 'apparel-size',
    variantLabel: 'Waist Size (Inches)',
    variantOptions: [
      { label: '28 Waist', price: 2499, mrp: 4199, stockQty: 12 },
      { label: '30 Waist', price: 2499, mrp: 4199, stockQty: 30 },
      { label: '32 Waist', price: 2499, mrp: 4199, stockQty: 45, isDefault: true },
      { label: '34 Waist', price: 2499, mrp: 4199, stockQty: 35 },
      { label: '36 Waist', price: 2499, mrp: 4199, stockQty: 18 },
      { label: '38 Waist', price: 2699, mrp: 4399, stockQty: 10 },
    ],
    colors: [
      { name: 'Dark Indigo Wash', hex: '#1C2E4A', image: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop' },
      { name: 'Washed Medium Blue', hex: '#4169E1', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop' },
      { name: 'Pitch Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Material': '98% Cotton, 2% Elastane',
      'Fit': 'Slim through seat and thigh; Slim leg opening (14.5")',
      'Rise': 'Mid Rise (Sits below waist)',
      'Care Instructions': 'Machine Wash Cold inside out; Tumble Dry Medium',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Organic Cotton & Elastane Denim',
      weight: '520 g',
    },
    vendorName: 'Levi Strauss India Pvt Ltd',
    vendorRating: 4.7,
  },

  // 6. Prestige Omega Deluxe Cookware Set
  {
    id: 'prod-006',
    name: 'Prestige Omega Deluxe Granite Induction Base Cookware Set',
    slug: 'prestige-omega-deluxe-kitchen-set',
    brand: 'Prestige',
    category: 'Home & Kitchen',
    subcategory: 'Cookware',
    price: 2999,
    mrp: 5495,
    rating: 4.5,
    reviewCount: 12450,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'POPULAR CHOICE', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Cook authentic Indian recipes effortlessly with the Prestige Omega Deluxe Granite series. Manufactured using state-of-the-art German 5-layer non-stick technology, it is scratch-resistant, metal-spoon friendly, and free from harmful PFOA chemicals. The heavy-gauge aluminum core guarantees uniform heat distribution while preventing hotspots. Its dual-compatible base works seamlessly across both Gas Stoves and Induction Cooktops.',
    shortDescription: 'German 5-layer granite non-stick coating with induction & gas stove dual compatibility.',
    highlights: [
      'German non-stick 5-layer coating: Spatter-resistant & PFOA free',
      'Gas and Induction compatible heavy-gauge base',
      'Heat-resistant, ergonomic soft-touch Bakelite handles',
      'Dishwasher safe and extremely easy to wipe clean',
    ],
    variantType: 'capacity',
    variantLabel: 'Cookware Set Configuration',
    variantOptions: [
      { label: '3-Piece Set (Fry Pan 24cm + Omni Tawa 28cm + Kadhai with Lid 24cm)', price: 2999, mrp: 5495, stockQty: 40, isDefault: true },
      { label: '4-Piece Set (+ Sauce Pan with Glass Lid 18cm)', price: 3899, mrp: 6995, stockQty: 25 },
      { label: '5-Piece Master Chef Deluxe (+ Dosa Tawa 30cm & Grill Pan)', price: 5199, mrp: 8995, stockQty: 15 },
    ],
    colors: [
      { name: 'Granite Black Speckle', hex: '#2B2B2B' },
      { name: 'Granite Burgundy Red', hex: '#800020' },
    ],
    specs: {
      'Base Thickness': '3.2 mm Extra Thick Aluminum Body',
      'Coating': 'German Granite Non-Stick (PFOA Free)',
      'Cooktop Compatibility': 'Gas, Induction, Halogen, Ceramic',
      'Warranty': '2 Years Manufacturer Warranty',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Food-Grade Aluminum with Granite Coating',
      weight: '3.2 kg (Set)',
    },
    vendorName: 'TTK Prestige Limited',
    vendorRating: 4.8,
  },

  // 7. boAt Rockerz 450 Bluetooth Headphones
  {
    id: 'prod-007',
    name: 'boAt Rockerz 450 On-Ear Bluetooth Wireless Headphones',
    slug: 'boat-rockerz-450',
    brand: 'boAt',
    category: 'Electronics',
    subcategory: 'Headphones',
    price: 1299,
    mrp: 3990,
    rating: 4.3,
    reviewCount: 34521,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'SALE -67%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Immerse yourself in boAt Signature Sound with 40mm dynamic drivers that deliver punchy bass and crystalline vocals. The ergonomically designed on-ear cups are fitted with plush foam padding and adaptive headband adjustment for extended listening sessions. Enjoy up to 15 hours of continuous wireless playback on a single charge with easy access button controls for music and calling.',
    shortDescription: '40mm dynamic drivers with 15 hours playback, voice assistant support, and dual mode aux.',
    highlights: [
      '40mm dynamic audio drivers for thumping bass reproduction',
      'Up to 15 hours non-stop battery backup',
      'Integrated control buttons for volume, track skip & voice assistant',
      'Dual modes: Wireless Bluetooth v5.0 and wired 3.5mm Aux jack',
    ],
    variantType: 'edition',
    variantLabel: 'Model Edition',
    variantOptions: [
      { label: 'Rockerz 450 Standard (15 Hours)', price: 1299, mrp: 3990, stockQty: 80, isDefault: true },
      { label: 'Rockerz 450 Pro (70 Hours Playback + ASAP Charge)', price: 1899, mrp: 4990, stockQty: 50 },
    ],
    colors: [
      { name: 'Luscious Black', hex: '#111111' },
      { name: 'Aqua Blue', hex: '#00A4CC' },
      { name: 'Hazel Beige', hex: '#C2A382' },
    ],
    specs: {
      'Driver Size': '40 mm Dynamic',
      'Bluetooth Version': 'v5.0 with 10m range',
      'Battery': '300 mAh rechargeable lithium-ion',
      'Charging Time': '2.5 hours via Type-C',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India / China',
      material: 'ABS Polymer with PU Leatherette padding',
      weight: '168 g',
    },
    vendorName: 'Imagine Marketing (boAt Official)',
    vendorRating: 4.6,
  },

  // 8. Mamaearth Vitamin C Natural Face Wash
  {
    id: 'prod-008',
    name: 'Mamaearth Vitamin C Daily Brightening Face Wash with Turmeric',
    slug: 'mamaearth-vitamin-c-face-wash',
    brand: 'Mamaearth',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 349,
    mrp: 499,
    rating: 4.4,
    reviewCount: 18234,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248597359-25337b5871f3?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'ORGANIC', type: 'bestseller' }],
    freeDelivery: false,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Enriched with the potent natural antioxidant powers of Vitamin C and Turmeric, this dermatologically tested facial cleanser gently purifies skin, promotes collagen synthesis, and diminishes sun tanning and dark pigmentation. Free of sulfates, parabens, SLS, mineral oils, and synthetic fragrances for daily, wholesome skincare.',
    shortDescription: 'Toxin-free, natural facial wash with Vitamin C & Turmeric for illuminated, glowing skin.',
    highlights: [
      'Brightens skin complexion and fights free radical oxidative damage',
      'Turmeric provides anti-inflammatory and antiseptic defense',
      'MadeSafe Certified: 100% free of toxins, silicones, and sulfates',
      'Suitable for all skin types, including sensitive and acne-prone skin',
    ],
    variantType: 'volume',
    variantLabel: 'Pack Volume',
    variantOptions: [
      { label: '100 ml Tube', price: 249, mrp: 349, stockQty: 60 },
      { label: '150 ml (with Inbuilt Silicone Exfoliator Brush)', price: 349, mrp: 499, stockQty: 100, isDefault: true },
      { label: '250 ml Value Pack (Pump Dispenser)', price: 549, mrp: 749, stockQty: 40 },
    ],
    colors: [],
    specs: {
      'Skin Type': 'All Skin Types (Dermatologically Tested)',
      'Key Ingredients': 'Vitamin C, Turmeric, Glycerin, Aloe Vera Leaf Extract',
      'Formulation': 'Gel-based foaming wash',
      'Toxin Free': 'No Parabens, No Sulfates, No Mineral Oil',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Ayurvedic & Botanical Formulation',
      weight: '150 ml',
    },
    vendorName: 'Honasa Consumer Ltd (Mamaearth)',
    vendorRating: 4.7,
  },

  // 9. Ikigai Hardcover Book
  {
    id: 'prod-009',
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    slug: 'ikigai-japanese-secret',
    brand: 'Penguin Books',
    category: 'Books',
    subcategory: 'Self-Help',
    price: 399,
    mrp: 650,
    rating: 4.8,
    reviewCount: 45200,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: '#1 BESTSELLER', type: 'bestseller' }],
    freeDelivery: false,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Discover the centenarian longevity wisdom of the world\'s Blue Zone in Okinawa, Japan. Authors Héctor García and Francesc Miralles reveal the philosophy of Ikigai — finding intersection among what you love, what you are good at, what the world needs, and what you can get paid for. Packed with dietary secrets, active flow states, and peaceful mindfulness techniques.',
    shortDescription: 'The global phenomenon that reveals how to discover your life\'s true purpose and cultivate joyful longevity.',
    highlights: [
      'Over 5 Million copies sold worldwide across 60+ languages',
      'Actionable daily exercises for stress reduction and purpose alignment',
      'Authentic interviews with Okinawa centenarians living vibrant lives',
    ],
    variantType: 'edition',
    variantLabel: 'Book Format & Edition',
    variantOptions: [
      { label: 'Paperback Edition', price: 299, mrp: 499, stockQty: 80 },
      { label: 'Deluxe Hardcover Gift Edition', price: 399, mrp: 650, stockQty: 120, isDefault: true },
      { label: 'Audiobook + Companion PDF', price: 199, mrp: 399, stockQty: 999 },
    ],
    colors: [],
    specs: {
      'Author': 'Héctor García and Francesc Miralles',
      'Publisher': 'Penguin Life (Random House)',
      'Language': 'English',
      'Pages': '208 pages',
      'ISBN-13': '978-1786330895',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Acid-Free Recycled Paper & Gold Embossed Cover',
      weight: '240 g',
    },
    vendorName: 'Penguin Random House India',
    vendorRating: 4.9,
  },

  // 10. Apple iPhone 15 Pro Max
  {
    id: 'prod-010',
    name: 'Apple iPhone 15 Pro Max (Grade 5 Titanium)',
    slug: 'apple-iphone-15-pro-128gb',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 148900,
    mrp: 159900,
    rating: 4.9,
    reviewCount: 9200,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'FLAGSHIP', type: 'new' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Forged in titanium with the ground-breaking Apple A17 Pro chip, custom Action button, and the longest optical zoom ever in an iPhone with a 5x Telephoto camera. USB-C connector with USB 3 speeds supports pro workflows, external SSD 4K ProRes 60fps recording, and rapid device charging.',
    shortDescription: 'Aerospace titanium design, A17 Pro console-grade GPU, 48MP Pro camera with 5x optical zoom.',
    highlights: [
      'Aerospace-grade Titanium design with textured matte glass back',
      'A17 Pro chip with 6-core GPU delivers console gaming like Resident Evil & Assassin\'s Creed',
      '48MP Main camera with 24MP super-high-resolution default & 5x Optical Telephoto',
      'Customizable Action button for quick access to Camera, Flashlight, Voice Memos & Shortcuts',
      'USB-C connector with USB 3 speeds up to 10Gb/s data transfer',
    ],
    variantType: 'storage',
    variantLabel: 'Internal Storage',
    variantOptions: [
      { label: '256GB NVMe', price: 148900, mrp: 159900, stockQty: 25, isDefault: true },
      { label: '512GB NVMe', price: 168900, mrp: 179900, stockQty: 15 },
      { label: '1TB NVMe', price: 188900, mrp: 199900, stockQty: 8 },
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#9E978E', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Blue Titanium', hex: '#2C3A47', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'White Titanium', hex: '#F2F2F2', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Black Titanium', hex: '#1D1D1F', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Processor': 'Apple A17 Pro (3nm architecture)',
      'Display': '6.7-inch Super Retina XDR OLED, 120Hz ProMotion, Always-On, 2000 nits',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto periscope',
      'Port': 'USB-C with USB 3 support (up to 10Gb/s)',
      'Battery': 'Up to 29 hours video playback',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India / China',
      material: 'Grade 5 Titanium, Ceramic Shield front',
      weight: '221 g',
    },
    vendorName: 'Apple India Retail',
    vendorRating: 4.9,
  },

  // 11. Decathlon Domyos Hex Dumbbells Pair
  {
    id: 'prod-011',
    name: 'Decathlon Domyos Hexagonal Rubberized Dumbbell Pair',
    slug: 'decathlon-dumbbells-10kg',
    brand: 'Decathlon',
    category: 'Sports',
    subcategory: 'Gym Equipment',
    price: 3299,
    mrp: 4999,
    rating: 4.7,
    reviewCount: 3400,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'FITNESS CHOICE', type: 'choice' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Designed for strength training, functional HIIT workouts, and muscle building at home. The heavy-duty cast iron weights are encased in odorless, shock-absorbing vulcanized rubber that protects home flooring and eliminates metallic clanking. The ergonomic knurled chrome grip provides exceptional hand hold without slipping.',
    shortDescription: 'Hexagonal anti-roll dumbbells with thick rubber coating and knurled steel grip.',
    highlights: [
      'Hexagonal anti-roll design stays in place for floor push-up exercises',
      'Odorless virgin rubber coating safeguards tiles and wood floors',
      'Textured chrome steel knurling prevents slippage during sweaty sets',
    ],
    variantType: 'weight',
    variantLabel: 'Dumbbell Weight (Pair)',
    variantOptions: [
      { label: '5 kg (2x 2.5kg)', price: 1899, mrp: 2999, stockQty: 30 },
      { label: '10 kg (2x 5kg Pair)', price: 3299, mrp: 4999, stockQty: 45, isDefault: true },
      { label: '15 kg (2x 7.5kg Pair)', price: 4699, mrp: 6999, stockQty: 20 },
      { label: '20 kg (2x 10kg Pair)', price: 5999, mrp: 8999, stockQty: 15 },
    ],
    colors: [
      { name: 'Matte Charcoal Black', hex: '#1C1C1C' },
    ],
    specs: {
      'Core Material': 'Solid Cast Iron Core',
      'Outer Coating': 'High-Density Non-Marking Virgin Rubber',
      'Handle': 'Ergonomic Chrome Knurled Steel Grip (34mm diameter)',
      'Ideal For': 'Bicep Curls, Overhead Presses, Renegade Rows & Squats',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Cast Iron & Vulcanized Rubber',
      weight: '10 kg (Pair)',
    },
    vendorName: 'Decathlon Sports India',
    vendorRating: 4.8,
  },

  // 12. Fossil Men Grant Chronograph Watch
  {
    id: 'prod-012',
    name: 'Fossil Men\'s Grant Stainless Steel Chronograph Quartz Watch',
    slug: 'fossil-analog-watch',
    brand: 'Fossil',
    category: 'Fashion',
    subcategory: 'Watches',
    price: 7495,
    mrp: 12995,
    rating: 4.7,
    reviewCount: 3210,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'LUXURY -42%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Inspired by vintage clocks, the Roman numerals are artfully designed to provide artistic balance to the dial. A dark blue sunray dial complemented with rose gold indices, three functional chronograph subdials (24-hour time, 30-minute stopwatch, second hand), and an interchangeable genuine leather strap.',
    shortDescription: 'Classic Roman numeral chronograph with dark sunray dial and interchangeable genuine leather strap.',
    highlights: [
      '44mm case size with 22mm interchangeable strap capability',
      'Chronograph movement with 3 distinct stopwatch dials',
      '50m Water Resistance: wearable while swimming in shallow water',
      'Hardened mineral crystal glass for scratch resistance',
    ],
    variantType: 'edition',
    variantLabel: 'Strap Material & Finish',
    variantOptions: [
      { label: 'Genuine Brown Leather Strap', price: 7495, mrp: 12995, stockQty: 25, isDefault: true },
      { label: 'Stainless Steel Mesh Bracelet', price: 8495, mrp: 14495, stockQty: 18 },
      { label: 'Smoke Grey Ion-Plated Metal Link', price: 9495, mrp: 15995, stockQty: 10 },
    ],
    colors: [
      { name: 'Rose Gold & Navy Blue', hex: '#1E3A5F' },
      { name: 'Silver & Jet Black', hex: '#1C1C1C' },
    ],
    specs: {
      'Case Diameter': '44 mm (Round)',
      'Movement': 'Quartz Chronograph with Stop Watch',
      'Water Resistance': '5 ATM / 50 Meters',
      'Strap Width': '22 mm Interchangeable',
    },
    manufacturingDetails: {
      countryOfOrigin: 'USA / China',
      material: '316L Surgical Stainless Steel & Leather',
      weight: '84 g',
    },
    vendorName: 'Fossil India Pvt Ltd',
    vendorRating: 4.8,
  },
];

// ── Mock Orders ────────────────────────────────────────────────────────
export const MOCK_ORDERS = [
  {
    id: 'ord-001',
    orderNumber: 'NM-K8F3D2-X7B9',
    status: 'DELIVERED',
    totalAmount: 131298,
    itemCount: 2,
    items: [
      { name: 'Samsung Galaxy S24 Ultra AI Smartphone (256GB)', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200&auto=format&fit=crop', price: 129999, qty: 1 },
      { name: 'boAt Rockerz 450 Bluetooth Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop', price: 1299, qty: 1 },
    ],
    createdAt: '2026-09-15T10:30:00Z',
    deliveredAt: '2026-09-18T14:20:00Z',
  },
  {
    id: 'ord-002',
    orderNumber: 'NM-R2T5H8-A3C6',
    status: 'SHIPPED',
    totalAmount: 8495,
    itemCount: 1,
    items: [
      { name: 'Nike Air Max 270 React (UK 8)', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop', price: 8495, qty: 1 },
    ],
    createdAt: '2026-09-20T16:45:00Z',
    awb: 'SR123456789',
    courier: 'Blue Dart Express',
    estimatedDelivery: '2026-09-24T18:00:00Z',
  },
  {
    id: 'ord-003',
    orderNumber: 'NM-P9W1J4-M6K2',
    status: 'PLACED',
    totalAmount: 2999,
    itemCount: 1,
    items: [
      { name: 'Prestige Omega Deluxe Granite 3-Piece Set', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=200&auto=format&fit=crop', price: 2999, qty: 1 },
    ],
    createdAt: '2026-09-22T09:15:00Z',
  },
];

// ── Mock User ─────────────────────────────────────────────────────────
export const MOCK_USER = {
  id: 'user-001',
  email: 'janstevedaniel@gmail.com',
  firstName: 'Jan Steve',
  lastName: 'Daniel',
  phone: '9876543210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  role: 'CUSTOMER',
  addresses: [
    {
      id: 'addr-001',
      type: 'HOME',
      fullName: 'R. Jan Steve Daniel',
      phone: '9876543210',
      street: 'Flat 402, Infinity Heights, IT Corridor',
      landmark: 'Near Silicon Tech Park',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600001',
      isDefault: true,
    },
    {
      id: 'addr-002',
      type: 'WORK',
      fullName: 'R. Jan Steve Daniel',
      phone: '9876543210',
      street: 'NexMart HQ, Tower A, 8th Floor',
      landmark: 'Express Highway',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: false,
    },
  ],
};

// ── Mock Reviews ──────────────────────────────────────────────────────
export const MOCK_REVIEWS = [
  {
    id: 'rev-001',
    rating: 5,
    title: 'Outstanding performance and build quality!',
    body: 'The product exceeded all my expectations. The finish is premium, the delivery arrived in under 24 hours, and packaging was top tier. Definitely ordering again from NexMart!',
    user: { firstName: 'Rahul', lastName: 'Mehta' },
    isVerifiedPurchase: true,
    helpfulCount: 234,
    notHelpfulCount: 12,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop'],
    createdAt: '2026-09-10T08:00:00Z',
  },
  {
    id: 'rev-002',
    rating: 5,
    title: '100% Genuine, Best Price in India',
    body: 'Compared prices on Amazon and Flipkart, NexMart had the highest discount with genuine brand warranty. The variant selection made choosing my exact model super simple.',
    user: { firstName: 'Priya', lastName: 'Sundaram' },
    isVerifiedPurchase: true,
    helpfulCount: 156,
    notHelpfulCount: 4,
    images: [],
    createdAt: '2026-09-08T15:30:00Z',
  },
  {
    id: 'rev-003',
    rating: 4,
    title: 'Great value for money',
    body: 'Delivery was fast and on time. Quality is superb. Would highly recommend this to everyone looking for reliable quality.',
    user: { firstName: 'Arjun', lastName: 'Nair' },
    isVerifiedPurchase: true,
    helpfulCount: 89,
    notHelpfulCount: 3,
    images: [],
    createdAt: '2026-09-05T11:00:00Z',
  },
];

// ── Footer Links ──────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: 'About NexMart', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
    { label: 'Investor Relations', href: '/investors' },
    { label: 'Sustainability Pledge', href: '/sustainability' },
  ],
  help: [
    { label: 'Help Center & FAQ', href: '/help' },
    { label: 'Track Your Shipment', href: '/account/orders' },
    { label: '10-Day Easy Returns', href: '/returns' },
    { label: 'Shipping & Delivery Policy', href: '/shipping' },
    { label: 'Contact Customer Support', href: '/contact' },
  ],
  policy: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security & Safe Payments', href: '/security' },
    { label: 'Grievance Officer', href: '/grievance' },
  ],
  sell: [
    { label: 'Sell on NexMart Marketplace', href: '/sell' },
    { label: 'Vendor Partner Hub', href: 'http://localhost:3001' },
    { label: 'Advertise on NexMart', href: '/advertise' },
    { label: 'Fulfillment by NexMart (FBN)', href: '/fulfillment' },
  ],
};

// ── Filter Options ────────────────────────────────────────────────────
export const FILTER_OPTIONS = {
  categories: ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Books'],
  brands: ['Apple', 'Samsung', 'Nike', 'Sony', 'boAt', 'Levi\'s', 'Prestige', 'Mamaearth', 'Decathlon', 'Fossil', 'Penguin Books'],
  priceRanges: [
    { label: 'Under ₹1,000', min: 0, max: 1000 },
    { label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
    { label: '₹5,000 - ₹20,000', min: 5000, max: 20000 },
    { label: '₹20,000 - ₹50,000', min: 20000, max: 50000 },
    { label: 'Above ₹50,000', min: 50000, max: 200000 },
  ],
  colors: [
    { name: 'Black', hex: '#1A1A1A' },
    { name: 'Silver / White', hex: '#E5E5E5' },
    { name: 'Navy Blue', hex: '#1B2A4A' },
    { name: 'Red', hex: '#D01012' },
    { name: 'Titanium Gray', hex: '#8E8E93' },
    { name: 'Gold / Yellow', hex: '#E5C158' },
  ],
  ratings: [4, 3, 2, 1],
  sortOptions: [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'rating', label: 'Highest Customer Rating' },
  ],
};