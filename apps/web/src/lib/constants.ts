// ============================================================================
// NexMart — Mock Data & Constants
// Complete Multi-Category Catalog with Color-to-Image Mappings
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
    title: 'Spring Streetwear & Dresses',
    subtitle: 'Maxi Dresses, Anarkali Kurtas, Denim & Sneakers from ₹999',
    cta: 'Explore Trends',
    ctaLink: '/category/fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    bgGradient: 'from-rose-900 via-pink-700 to-amber-700',
  },
  {
    id: '3',
    title: 'NexMart Plus Vadodara',
    subtitle: 'Zero Delivery Fees + Exclusive 2-Hour Express Delivery in Vadodara',
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

// ── Variant Types ──────────────────────────────────────────────────────
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
  image: string;
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

// ── Complete Catalog with Color Swatch to Image Mappings ───────────────
export const MOCK_PRODUCTS: MockProduct[] = [
  // 1. Women's Floral Summer A-Line Maxi Dress
  {
    id: 'prod-dress-001',
    name: 'Women\'s French Floral Print Tiered A-Line Summer Maxi Dress',
    slug: 'womens-floral-summer-maxi-dress',
    brand: 'Urban Chic',
    category: 'Fashion',
    subcategory: 'Dresses',
    price: 1899,
    mrp: 3499,
    rating: 4.8,
    reviewCount: 3820,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'TRENDING DRESS', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Elevate your summer wardrobe with this enchanting French floral print maxi dress. Designed with a flattering sweetheart neckline, smocked elasticated bodice for a customized fit, and a cascading tiered ruffle skirt. Made from ultra-breathable georgette fabric with a soft inner crepe lining, perfect for vacations, brunch dates, and festive celebrations.',
    shortDescription: 'Sweetheart neckline tiered maxi dress with smocked bodice in breathable georgette.',
    highlights: [
      'Flattering tiered A-line silhouette with flared hem',
      'Smocked elasticated back bodice for supreme fit and comfort',
      'Breathable chiffon-georgette with lightweight inner lining',
      'Machine washable and wrinkle-resistant fabric',
    ],
    variantType: 'apparel-size',
    variantLabel: 'Dress Size (Bust Inches)',
    variantOptions: [
      { label: 'XS (Bust 32")', price: 1899, mrp: 3499, stockQty: 15 },
      { label: 'S (Bust 34")', price: 1899, mrp: 3499, stockQty: 30 },
      { label: 'M (Bust 36")', price: 1899, mrp: 3499, stockQty: 45, isDefault: true },
      { label: 'L (Bust 38")', price: 1899, mrp: 3499, stockQty: 35 },
      { label: 'XL (Bust 40")', price: 1999, mrp: 3699, stockQty: 20 },
      { label: 'XXL (Bust 42")', price: 2099, mrp: 3799, stockQty: 10 },
    ],
    colors: [
      { name: 'Emerald Green Floral', hex: '#2E6F40', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Dusty Rose Pink', hex: '#DCAE96', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sky Blue Blossom', hex: '#779ECB', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Midnight Black & Gold', hex: '#1C1C1C', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Fabric': '100% Poly-Georgette with Soft Crepe Lining',
      'Length': 'Maxi (52 Inches from Shoulder)',
      'Sleeve Length': 'Elbow Length Puff Sleeves with Elastic Hem',
      'Neckline': 'Sweetheart Neck with tie-up detail',
      'Occasion': 'Resort, Party, Evening Brunch & Casual Outing',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India (Surat, Gujarat)',
      material: 'Georgette & Crepe',
      weight: '380 g',
    },
    vendorName: 'Urban Chic Studio India',
    vendorRating: 4.9,
  },

  // 2. Women's Embroidered Anarkali Kurta & Dupatta Set
  {
    id: 'prod-kurta-002',
    name: 'Women\'s Zari Embroidered Rayon Anarkali Kurta with Pant & Dupatta',
    slug: 'womens-embroidered-anarkali-kurta-set',
    brand: 'Biba Heritage',
    category: 'Fashion',
    subcategory: 'Ethnic Wear',
    price: 2499,
    mrp: 4999,
    rating: 4.9,
    reviewCount: 5120,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'FESTIVE SPECIAL', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'A magnificent festive ensemble handcrafted with intricate Zari and Gota Patti embroidery on the yoke and hemline. Features a flared Anarkali calf-length kurta, matched with a comfortable elasticated cigarette pant and a luminous organza dupatta with scalloped borders. Perfect for Navratri, weddings, and family gatherings in Gujarat and across India.',
    shortDescription: '3-Piece Anarkali Kurta, Cigarette Trouser & Scalloped Organza Dupatta with Zari work.',
    highlights: [
      '3-Piece Complete Festive Set: Kurta + Trousers + Organza Dupatta',
      'Intricate Gota Patti and gold Zari embroidery on neckline and sleeves',
      'Ultra-soft 100% heavy Liva Rayon fabric that stays cool and flowy',
      'Elasticated waistband on trousers with functional deep side pocket',
    ],
    variantType: 'apparel-size',
    variantLabel: 'Kurta Size (Bust / India)',
    variantOptions: [
      { label: 'S (Bust 36" / Length 46")', price: 2499, mrp: 4999, stockQty: 20 },
      { label: 'M (Bust 38" / Length 46")', price: 2499, mrp: 4999, stockQty: 40, isDefault: true },
      { label: 'L (Bust 40" / Length 48")', price: 2499, mrp: 4999, stockQty: 50 },
      { label: 'XL (Bust 42" / Length 48")', price: 2499, mrp: 4999, stockQty: 30 },
      { label: 'XXL (Bust 44" / Length 50")', price: 2699, mrp: 5299, stockQty: 15 },
    ],
    colors: [
      { name: 'Royal Indigo Blue', hex: '#1C39BB', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Ruby Red Festive', hex: '#9B111E', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mustard Yellow Haldi', hex: '#E1AD01', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Kurta Fabric': 'Premium 140 GSM Liva Certified Rayon',
      'Pant Fabric': 'Rayon Cotton Blend with Elasticated Waist',
      'Dupatta Fabric': 'Printed Sheer Organza Silk (2.25 Meters)',
      'Wash Care': 'Dry Clean First Wash; Gentle Hand Wash thereafter',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India (Ahmedabad, Gujarat)',
      material: 'Liva Rayon & Organza',
      weight: '450 g',
    },
    vendorName: 'Biba Ethnic Retails India',
    vendorRating: 4.8,
  },

  // 3. Samsung Galaxy S24 Ultra
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
    description: 'The Samsung Galaxy S24 Ultra represents the peak of mobile engineering. Encased in a lightweight, ultra-durable Titanium frame with Corning Gorilla Armor glass, it is powered by the Snapdragon 8 Gen 3 for Galaxy processor. Galaxy AI introduces Live Translate, Note Assist, and Circle to Search with Google. The 200MP Quad Telephoto optical zoom system captures cinema-grade 8K video and stunning Nightography shots with AI zoom enhancement.',
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
      'Battery & Charging': '5000 mAh, 45W wired, 15W wireless',
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

  // 4. Apple MacBook Air M3
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
    description: 'Supercharged by the next-generation M3 chip, the redesigned MacBook Air delivers phenomenal performance and up to 18 hours of battery life in a breathtakingly thin aluminum body. Featuring an 8-core CPU, up to 10-core GPU, and support for up to two external displays with the laptop lid closed.',
    shortDescription: 'Apple M3 chip, 13.6" Liquid Retina display, 18-hour battery, silent fanless architecture.',
    highlights: [
      'Apple M3 chip: 8-core CPU, up to 10-core GPU, hardware ray tracing',
      'Up to 18 hours of battery life with silent, fanless design',
      '13.6-inch Liquid Retina display with 500 nits brightness and True Tone',
      'MagSafe 3 charging port, dual Thunderbolt ports, 3.5mm headphone jack',
    ],
    variantType: 'laptop-config',
    variantLabel: 'Hardware Configuration',
    variantOptions: [
      { label: '8GB Unified RAM / 256GB SSD', price: 114990, mrp: 129990, stockQty: 25, isDefault: true },
      { label: '16GB Unified RAM / 512GB SSD', price: 134990, mrp: 149990, stockQty: 18 },
      { label: '24GB Unified RAM / 1TB SSD', price: 174990, mrp: 189990, stockQty: 8 },
    ],
    colors: [
      { name: 'Midnight Dark', hex: '#1C2430', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Starlight Gold', hex: '#F0E6D8', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop' },
      { name: 'Space Gray', hex: '#58595B', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop' },
      { name: 'Silver Aluminum', hex: '#E3E4E6', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Chip': 'Apple M3 (8-core CPU, 10-core GPU, 16-core Neural Engine)',
      'Display': '13.6" Liquid Retina LED-backlit (2560 x 1664 at 224 ppi)',
      'Audio': 'Four-speaker sound system with Spatial Audio & Dolby Atmos',
      'Weight': '1.24 kg (2.7 pounds)',
    },
    manufacturingDetails: {
      countryOfOrigin: 'China / Vietnam',
      material: '100% Recycled Aluminum Enclosure',
      weight: '1.24 kg',
    },
    vendorName: 'Apple Authorized Enterprise Retailer',
    vendorRating: 4.9,
  },

  // 5. Nike Air Max 270 React Sneakers
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
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'SALE -39%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Nike\'s first lifestyle Air Max meets the softest, smoothest and most resilient Nike React foam. The aesthetic draws inspiration from the Air Max pantheon, showcasing Nike\'s greatest innovation with its large window and fresh array of colors. The lightweight, layered no-sew materials create a modern aesthetic.',
    shortDescription: 'Lifestyle sneakers combining Max Air 270 heel cushioning with lightweight Nike React foam.',
    highlights: [
      'Max Air 270 unit delivers unrivaled impact absorption',
      'Nike React technology provides an extremely smooth, lightweight ride',
      'Woven fabric upper delivers lightweight fit and breathable feel',
      'Full heel-to-toe rubber coverage on outsole for multi-surface traction',
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
      { name: 'Triple White Platinum', hex: '#E5E5E5', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Stealth Black / Volt', hex: '#111111', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Royal Blue Sport', hex: '#1A538A', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Sole Material': 'Durable Rubber Outsole with Air-Sole Unit',
      'Upper': 'Engineered Mesh & Synthetic No-Sew Overlays',
      'Closure': 'Lace-Up with webbing loops',
    },
    manufacturingDetails: {
      countryOfOrigin: 'Vietnam',
      material: 'Synthetic Mesh & React Foam',
      weight: '340 g',
    },
    vendorName: 'Nike India Authorized Brand Store',
    vendorRating: 4.8,
  },

  // 6. Sony WH-1000XM5 Wireless Headphones
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
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'TOP RATED', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'With two processors controlling eight microphones, the Sony WH-1000XM5 wireless noise cancelling headphones rewrite the rules for distraction-free listening and exceptional call clarity. The specially designed 30mm driver unit with a soft TPU edge enhances noise cancelling in low frequencies.',
    shortDescription: 'Industry-leading Active Noise Cancellation with 8 microphones, 30hr battery, LDAC High-Res Audio.',
    highlights: [
      'Two processors and 8 microphones for unparalleled Auto NC noise cancellation',
      'Crystal-clear hands-free calling with 4 beamforming mics and AI reduction',
      'Up to 30-hour battery life with 3-minute quick charge',
    ],
    variantType: 'edition',
    variantLabel: 'Package Edition',
    variantOptions: [
      { label: 'Standard Edition (Headphones + Case)', price: 26990, mrp: 34990, stockQty: 30, isDefault: true },
      { label: 'Pro Bundle (+ Hard Shell Pouch & Gold Audio Jack)', price: 28490, mrp: 36990, stockQty: 15 },
    ],
    colors: [
      { name: 'Midnight Black', hex: '#1A1A1A', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Platinum Silver', hex: '#DCDCDC', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop' },
      { name: 'Midnight Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Driver Size': '30 mm with Carbon Fiber composite dome',
      'Frequency Response': '4 Hz - 40,000 Hz (LDAC High-Res Wireless)',
      'Battery Life': '30 hours (NC ON)',
    },
    manufacturingDetails: {
      countryOfOrigin: 'Malaysia',
      material: 'Synthetic Leather, Recycled Resin',
      weight: '250 g',
    },
    vendorName: 'Sony Center India',
    vendorRating: 4.9,
  },

  // 7. Levi's 511 Slim Fit Denim Jeans
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
    ],
    badges: [{ text: 'SALE -40%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic. These jeans sit below the waist with a slim leg from hip to ankle. Crafted with Levi\'s Flex: advanced stretch technology engineered to deliver maximum flex and optimum comfort.',
    shortDescription: 'Classic 5-pocket slim fit jeans crafted with premium Levi\'s Flex stretch denim.',
    highlights: [
      'Slim from hip to ankle with a modern mid-rise waist',
      'Levi\'s Flex advanced stretch technology for built-in ease',
      'Zip fly with branded button closure and copper rivets',
    ],
    variantType: 'apparel-size',
    variantLabel: 'Waist Size (Inches)',
    variantOptions: [
      { label: '28 Waist', price: 2499, mrp: 4199, stockQty: 12 },
      { label: '30 Waist', price: 2499, mrp: 4199, stockQty: 30 },
      { label: '32 Waist', price: 2499, mrp: 4199, stockQty: 45, isDefault: true },
      { label: '34 Waist', price: 2499, mrp: 4199, stockQty: 35 },
      { label: '36 Waist', price: 2499, mrp: 4199, stockQty: 18 },
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
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Organic Cotton & Elastane Denim',
      weight: '520 g',
    },
    vendorName: 'Levi Strauss India Pvt Ltd',
    vendorRating: 4.7,
  },

  // 8. Prestige Omega Deluxe Cookware Set
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
      'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop',
    ],
    badges: [{ text: 'POPULAR CHOICE', type: 'bestseller' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Cook authentic Indian recipes effortlessly with the Prestige Omega Deluxe Granite series. Manufactured using German 5-layer non-stick technology, it is scratch-resistant, metal-spoon friendly, and PFOA free. Dual-compatible base works across Gas Stoves and Induction Cooktops.',
    shortDescription: 'German 5-layer granite non-stick coating with induction & gas stove dual compatibility.',
    highlights: [
      'German non-stick 5-layer coating: Spatter-resistant & PFOA free',
      'Gas and Induction compatible heavy-gauge base',
      'Heat-resistant, ergonomic soft-touch Bakelite handles',
    ],
    variantType: 'capacity',
    variantLabel: 'Cookware Set Configuration',
    variantOptions: [
      { label: '3-Piece Set (Fry Pan 24cm + Omni Tawa 28cm + Kadhai with Lid 24cm)', price: 2999, mrp: 5495, stockQty: 40, isDefault: true },
      { label: '4-Piece Set (+ Sauce Pan with Glass Lid 18cm)', price: 3899, mrp: 6995, stockQty: 25 },
      { label: '5-Piece Master Chef Deluxe (+ Dosa Tawa 30cm & Grill Pan)', price: 5199, mrp: 8995, stockQty: 15 },
    ],
    colors: [
      { name: 'Granite Black Speckle', hex: '#2B2B2B', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop' },
      { name: 'Granite Burgundy Red', hex: '#800020', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Base Thickness': '3.2 mm Extra Thick Aluminum Body',
      'Coating': 'German Granite Non-Stick (PFOA Free)',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Food-Grade Aluminum with Granite Coating',
      weight: '3.2 kg (Set)',
    },
    vendorName: 'TTK Prestige Limited',
    vendorRating: 4.8,
  },

  // 9. Fossil Men's Grant Chronograph Watch
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
    ],
    badges: [{ text: 'LUXURY -42%', type: 'sale' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: true,
    description: 'Inspired by vintage clocks, the Roman numerals are artfully designed to provide artistic balance to the dial. A dark sunray dial complemented with rose gold indices, three functional chronograph subdials, and an interchangeable genuine leather strap.',
    shortDescription: 'Classic Roman numeral chronograph with dark sunray dial and interchangeable strap.',
    highlights: [
      '44mm case size with 22mm interchangeable strap capability',
      'Chronograph movement with 3 distinct stopwatch dials',
      '50m Water Resistance: wearable while swimming in shallow water',
    ],
    variantType: 'edition',
    variantLabel: 'Strap Material & Finish',
    variantOptions: [
      { label: 'Genuine Brown Leather Strap', price: 7495, mrp: 12995, stockQty: 25, isDefault: true },
      { label: 'Stainless Steel Mesh Bracelet', price: 8495, mrp: 14495, stockQty: 18 },
      { label: 'Smoke Grey Ion-Plated Metal Link', price: 9495, mrp: 15995, stockQty: 10 },
    ],
    colors: [
      { name: 'Rose Gold & Navy Blue', hex: '#1E3A5F', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Silver & Jet Black', hex: '#1C1C1C', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Case Diameter': '44 mm (Round)',
      'Movement': 'Quartz Chronograph with Stop Watch',
      'Water Resistance': '5 ATM / 50 Meters',
    },
    manufacturingDetails: {
      countryOfOrigin: 'USA / China',
      material: '316L Surgical Stainless Steel & Leather',
      weight: '84 g',
    },
    vendorName: 'Fossil India Pvt Ltd',
    vendorRating: 4.8,
  },

  // 10. Mamaearth Vitamin C Natural Face Wash
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
    ],
    badges: [{ text: 'ORGANIC', type: 'bestseller' }],
    freeDelivery: false,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Enriched with the potent natural antioxidant powers of Vitamin C and Turmeric, this dermatologically tested facial cleanser gently purifies skin, promotes collagen synthesis, and diminishes sun tanning and dark pigmentation.',
    shortDescription: 'Toxin-free, natural facial wash with Vitamin C & Turmeric for illuminated, glowing skin.',
    highlights: [
      'Brightens skin complexion and fights free radical oxidative damage',
      'MadeSafe Certified: 100% free of toxins, silicones, and sulfates',
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
      'Key Ingredients': 'Vitamin C, Turmeric, Glycerin',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Botanical Formulation',
      weight: '150 ml',
    },
    vendorName: 'Honasa Consumer Ltd (Mamaearth)',
    vendorRating: 4.7,
  },

  // 11. Ikigai Hardcover Book
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
    ],
    badges: [{ text: '#1 BESTSELLER', type: 'bestseller' }],
    freeDelivery: false,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Discover the centenarian longevity wisdom of the world\'s Blue Zone in Okinawa, Japan. Finding intersection among what you love, what you are good at, what the world needs, and what you can get paid for.',
    shortDescription: 'The global phenomenon that reveals how to discover your life\'s true purpose and cultivate joyful longevity.',
    highlights: [
      'Over 5 Million copies sold worldwide across 60+ languages',
      'Actionable daily exercises for stress reduction and purpose alignment',
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
      'Publisher': 'Penguin Life',
      'Language': 'English',
      'Pages': '208 pages',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Acid-Free Recycled Paper',
      weight: '240 g',
    },
    vendorName: 'Penguin Random House India',
    vendorRating: 4.9,
  },

  // 12. Decathlon Domyos Hex Dumbbells Pair
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
    ],
    badges: [{ text: 'FITNESS CHOICE', type: 'choice' }],
    freeDelivery: true,
    inStock: true,
    isFulfilledByNexmart: false,
    description: 'Designed for strength training, functional HIIT workouts, and muscle building at home. The heavy-duty cast iron weights are encased in odorless, shock-absorbing vulcanized rubber that protects home flooring.',
    shortDescription: 'Hexagonal anti-roll dumbbells with thick rubber coating and knurled steel grip.',
    highlights: [
      'Hexagonal anti-roll design stays in place for floor push-up exercises',
      'Odorless virgin rubber coating safeguards tiles and wood floors',
    ],
    variantType: 'weight',
    variantLabel: 'Dumbbell Weight (Pair)',
    variantOptions: [
      { label: '5 kg (2x 2.5kg)', price: 1899, mrp: 2999, stockQty: 30 },
      { label: '10 kg (2x 5kg Pair)', price: 3299, mrp: 4999, stockQty: 45, isDefault: true },
      { label: '15 kg (2x 7.5kg Pair)', price: 4699, mrp: 6999, stockQty: 20 },
    ],
    colors: [
      { name: 'Matte Charcoal Black', hex: '#1C1C1C', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop' },
    ],
    specs: {
      'Core Material': 'Solid Cast Iron Core',
      'Outer Coating': 'High-Density Non-Marking Virgin Rubber',
    },
    manufacturingDetails: {
      countryOfOrigin: 'India',
      material: 'Cast Iron & Vulcanized Rubber',
      weight: '10 kg (Pair)',
    },
    vendorName: 'Decathlon Sports India',
    vendorRating: 4.8,
  },
];

// ── Mock Orders ────────────────────────────────────────────────────────
export const MOCK_ORDERS = [
  {
    id: 'ord-001',
    orderNumber: 'NM-GJ-390001-X7B9',
    status: 'DELIVERED',
    totalAmount: 131298,
    itemCount: 2,
    items: [
      { name: 'Samsung Galaxy S24 Ultra AI Smartphone (256GB)', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200&auto=format&fit=crop', price: 129999, qty: 1 },
      { name: 'French Floral Print Tiered Summer Maxi Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop', price: 1899, qty: 1 },
    ],
    createdAt: '2026-09-15T10:30:00Z',
    deliveredAt: '2026-09-18T14:20:00Z',
  },
  {
    id: 'ord-002',
    orderNumber: 'NM-GJ-390001-A3C6',
    status: 'SHIPPED',
    totalAmount: 8495,
    itemCount: 1,
    items: [
      { name: 'Nike Air Max 270 React (UK 8)', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop', price: 8495, qty: 1 },
    ],
    createdAt: '2026-09-20T16:45:00Z',
    awb: 'SR123456789',
    courier: 'Blue Dart Express Vadodara',
    estimatedDelivery: '2026-09-24T18:00:00Z',
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
      id: 'addr-vadodara-1',
      type: 'HOME',
      fullName: 'R. Jan Steve Daniel',
      phone: '9876543210',
      street: 'Flat 402, Infinity Heights, Waghodia Road',
      landmark: 'Near Parul University',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390001',
      isDefault: true,
    },
    {
      id: 'addr-vadodara-2',
      type: 'WORK',
      fullName: 'R. Jan Steve Daniel',
      phone: '9876543210',
      street: 'Tech Hub Center, 3rd Floor, Alkapuri',
      landmark: 'Opposite Railway Station',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390007',
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
    body: 'The product exceeded all my expectations. The finish is premium, the delivery arrived in under 24 hours in Vadodara, and packaging was top tier. Definitely ordering again from NexMart!',
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
    body: 'Compared prices on Amazon and Flipkart, NexMart had the highest discount with genuine brand warranty. The color switcher showed exactly how the dress/product looked before buying!',
    user: { firstName: 'Priya', lastName: 'Sundaram' },
    isVerifiedPurchase: true,
    helpfulCount: 156,
    notHelpfulCount: 4,
    images: [],
    createdAt: '2026-09-08T15:30:00Z',
  },
];

// ── Footer Links ──────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: 'About NexMart', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
    { label: 'Investor Relations', href: '/investors' },
  ],
  help: [
    { label: 'Help Center & FAQ', href: '/help' },
    { label: 'Track Your Shipment', href: '/account/orders' },
    { label: '10-Day Easy Returns', href: '/returns' },
    { label: 'Shipping & Delivery Policy', href: '/shipping' },
  ],
  policy: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security & Safe Payments', href: '/security' },
  ],
  sell: [
    { label: 'Sell on NexMart Marketplace', href: '/sell' },
    { label: 'Vendor Partner Hub', href: 'http://localhost:3001' },
    { label: 'Fulfillment by NexMart (FBN)', href: '/fulfillment' },
  ],
};

// ── Filter Options ────────────────────────────────────────────────────
export const FILTER_OPTIONS = {
  categories: ['Fashion', 'Electronics', 'Home & Kitchen', 'Beauty', 'Sports', 'Books'],
  brands: ['Urban Chic', 'Biba Heritage', 'Apple', 'Samsung', 'Nike', 'Sony', 'Levi\'s', 'Prestige', 'Mamaearth', 'Decathlon', 'Fossil', 'Penguin Books'],
  priceRanges: [
    { label: 'Under ₹1,000', min: 0, max: 1000 },
    { label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
    { label: '₹5,000 - ₹20,000', min: 5000, max: 20000 },
    { label: 'Above ₹20,000', min: 20000, max: 200000 },
  ],
  colors: [
    { name: 'Emerald Green Floral', hex: '#2E6F40' },
    { name: 'Royal Indigo Blue', hex: '#1C39BB' },
    { name: 'Ruby Red Festive', hex: '#9B111E' },
    { name: 'Titanium Black', hex: '#1C1C1E' },
    { name: 'Dusty Rose Pink', hex: '#DCAE96' },
    { name: 'Triple White Platinum', hex: '#E5E5E5' },
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