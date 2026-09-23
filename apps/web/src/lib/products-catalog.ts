// ============================================================================
// NexMart — 1,000+ Multi-Category Product Catalog Engine
// Complete Amazon-Level Department Catalog with Curated Subcategory Photos
// ============================================================================

export type VariantType =
  | 'storage'
  | 'laptop-config'
  | 'apparel-size'
  | 'shoe-size'
  | 'volume'
  | 'capacity'
  | 'edition'
  | 'weight';

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

export interface ProductBadge {
  text: string;
  type: 'sale' | 'new' | 'bestseller' | 'choice';
}

export interface MockProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  department?: string;
  subcategory: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  badges: ProductBadge[];
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
  isAmazonChoice?: boolean;
  isBestSeller?: boolean;
  isPlusEligible?: boolean;
  fastDeliveryTime?: string;
}

// ── Department & Category Definitions ─────────────────────────────────────────

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon: string;
  emoji: string;
  bannerImage: string;
  subcategories: string[];
}

export const AMAZON_DEPARTMENTS: Department[] = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    slug: 'electronics',
    icon: '📱',
    emoji: '📱',
    bannerImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Smartphones', 'Laptops & MacBooks', 'Audio & Headphones', 'Smart Watches', 'Smart TVs', 'Tablets & iPads', 'Cameras', 'Gaming Consoles', 'PC Accessories'],
  },
  {
    id: 'fashion',
    name: "Women's Fashion & Ethnic",
    slug: 'fashion',
    icon: '👗',
    emoji: '👗',
    bannerImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Floral Dresses', 'Anarkali & Silk Kurtas', 'Banarasi Sarees', 'Designer Lehengas', 'Footwear & Heels', 'Handbags & Totes', 'Fashion Jewelry'],
  },
  {
    id: 'mens-fashion',
    name: "Men's Fashion & Streetwear",
    slug: 'mens-fashion',
    icon: '👔',
    emoji: '👔',
    bannerImage: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Casual & Formal Shirts', 'Denim Jeans & Trousers', 'Sneakers & Formal Shoes', 'Kurta Pajamas & Ethnic', 'Luxury Watches', 'Activewear', 'Wallets & Belts'],
  },
  {
    id: 'home-kitchen',
    name: 'Home, Kitchen & Furniture',
    slug: 'home-kitchen',
    icon: '🏠',
    emoji: '🏠',
    bannerImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Non-Stick Cookware', 'Air Fryers & Microwaves', 'Espresso & Coffee Machines', 'Living Room Sofas', 'Orthopedic Mattresses', 'Dinnerware Sets', 'Lamps & Home Decor'],
  },
  {
    id: 'beauty',
    name: 'Beauty, Skincare & Grooming',
    slug: 'beauty',
    icon: '💄',
    emoji: '💄',
    bannerImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Vitamin C & Anti-Aging Serums', 'Luxury Perfumes & EDP', 'Beard Trimmers & Shavers', 'Hair Styling & Shampoos', 'Makeup Palettes & Lipsticks', 'Organic Face Washes'],
  },
  {
    id: 'grocery',
    name: 'Grocery, Gourmet & Indian Sweets',
    slug: 'grocery',
    icon: '🛒',
    emoji: '🛒',
    bannerImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Premium Dry Fruits & Nuts', 'Pure Cow Ghee & Cold Pressed Oils', 'Organic Spices & Masalas', 'Artisanal Coffee & Tea', 'Vadodara Sweets & Farsan', 'Breakfast Cereals & Granola'],
  },
  {
    id: 'sports',
    name: 'Sports, Fitness & Outdoors',
    slug: 'sports',
    icon: '🏃',
    emoji: '🏃',
    bannerImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Adjustable Dumbbells & Barbells', 'Motorized Treadmills', 'Eco Yoga Mats', 'English Willow Cricket Bats', 'FIFA Footballs', 'Hybrid Bicycles & Gear'],
  },
  {
    id: 'books',
    name: 'Books, Kindle & Audibles',
    slug: 'books',
    icon: '📚',
    emoji: '📚',
    bannerImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['National Bestsellers', 'Personal Finance & Self-Help', 'Tech, AI & Programming', 'Exam Preparation (UPSC, GATE)', 'Indian Mythology & Fiction', 'Children Story Books'],
  },
  {
    id: 'toys-games',
    name: 'Toys, Games & Baby Care',
    slug: 'toys-games',
    icon: '🎮',
    emoji: '🎮',
    bannerImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['STEM Educational Robotics', 'Remote Control High-Speed Drones', 'LEGO Architecture Sets', 'Premium Baby Strollers', 'Eco Diapers & Wipes', 'Wooden Board Games'],
  },
  {
    id: 'automotive',
    name: 'Automotive & Industrial Hardware',
    slug: 'automotive',
    icon: '🚗',
    emoji: '🚗',
    bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['Smart 4K Dashcams', 'DOT Certified Riding Helmets', 'Bosch Cordless Drill Sets', 'Car High-Pressure Washers', 'Tyre Inflators & Emergency Kits'],
  },
  {
    id: 'health',
    name: 'Health, Nutrition & Pharmacy',
    slug: 'health',
    icon: '💊',
    emoji: '💊',
    bannerImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['100% Whey Protein Isolate', 'Daily Multivitamins & Zinc', 'Digital Blood Pressure Monitors', 'Ayurvedic Immunity Boosters', 'First Aid Medical Kits'],
  },
  {
    id: 'office',
    name: 'Office Supplies & Ergonomics',
    slug: 'office',
    icon: '💼',
    emoji: '💼',
    bannerImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop',
    subcategories: ['High-Back Ergonomic Chairs', 'Motorized Standing Desks', 'Premium Fountain Pens', 'Wireless Laser Printers', 'Leather Notebooks & Organizers'],
  },
];

// ── Curated Authentic Photo Bank by Exact Subcategory ──────────────────────

const SUBCATEGORY_PHOTO_BANK: Record<string, string[]> = {
  // Electronics
  'Smartphones': [
    'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop',
  ],
  'Laptops & MacBooks': [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop',
  ],
  'Audio & Headphones': [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
  ],
  'Smart Watches': [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop',
  ],
  'Smart TVs': [
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558888401-3cc1de77652d?q=80&w=800&auto=format&fit=crop',
  ],
  'Tablets & iPads': [
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=800&auto=format&fit=crop',
  ],
  'Cameras': [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=800&auto=format&fit=crop',
  ],
  'Gaming Consoles': [
    'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop',
  ],
  'PC Accessories': [
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=800&auto=format&fit=crop',
  ],

  // Women's Fashion & Ethnic
  'Floral Dresses': [
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop',
  ],
  'Anarkali & Silk Kurtas': [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop',
  ],
  'Banarasi Sarees': [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
  ],
  'Designer Lehengas': [
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
  ],
  'Footwear & Heels': [
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop',
  ],
  'Handbags & Totes': [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
  ],
  'Fashion Jewelry': [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  ],

  // Men's Fashion & Streetwear
  'Casual & Formal Shirts': [
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop',
  ],
  'Denim Jeans & Trousers': [
    'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop',
  ],
  'Sneakers & Formal Shoes': [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop',
  ],
  'Kurta Pajamas & Ethnic': [
    'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
  ],
  'Luxury Watches': [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=800&auto=format&fit=crop',
  ],
  'Activewear': [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  ],
  'Wallets & Belts': [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
  ],

  // Home, Kitchen & Furniture
  'Non-Stick Cookware': [
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
  ],
  'Air Fryers & Microwaves': [
    'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=800&auto=format&fit=crop',
  ],
  'Espresso & Coffee Machines': [
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
  ],
  'Living Room Sofas': [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop',
  ],
  'Orthopedic Mattresses': [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
  ],
  'Dinnerware Sets': [
    'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
  ],
  'Lamps & Home Decor': [
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
  ],

  // Beauty, Skincare & Grooming
  'Vitamin C & Anti-Aging Serums': [
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1608248597359-07b99c1598a0?q=80&w=800&auto=format&fit=crop',
  ],
  'Luxury Perfumes & EDP': [
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
  ],
  'Beard Trimmers & Shavers': [
    'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
  ],
  'Hair Styling & Shampoos': [
    'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  ],
  'Makeup Palettes & Lipsticks': [
    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  ],
  'Organic Face Washes': [
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
  ],

  // Grocery, Gourmet & Indian Sweets
  'Premium Dry Fruits & Nuts': [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
  ],
  'Pure Cow Ghee & Cold Pressed Oils': [
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=800&auto=format&fit=crop',
  ],
  'Organic Spices & Masalas': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800&auto=format&fit=crop',
  ],
  'Artisanal Coffee & Tea': [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
  ],
  'Vadodara Sweets & Farsan': [
    'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
  ],
  'Breakfast Cereals & Granola': [
    'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
  ],

  // Sports, Fitness & Outdoors
  'Adjustable Dumbbells & Barbells': [
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  ],
  'Motorized Treadmills': [
    'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  ],
  'Eco Yoga Mats': [
    'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
  ],
  'English Willow Cricket Bats': [
    'https://images.unsplash.com/photo-1531415074868-036b1c57e3ce?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop',
  ],
  'FIFA Footballs': [
    'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
  ],
  'Hybrid Bicycles & Gear': [
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=800&auto=format&fit=crop',
  ],

  // Books, Kindle & Audibles
  'National Bestsellers': [
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
  ],
  'Personal Finance & Self-Help': [
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
  ],
  'Tech, AI & Programming': [
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
  ],
  'Exam Preparation (UPSC, GATE)': [
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  ],
  'Indian Mythology & Fiction': [
    'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop',
  ],
  'Children Story Books': [
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
  ],

  // Toys, Games & Baby Care
  'STEM Educational Robotics': [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=800&auto=format&fit=crop',
  ],
  'Remote Control High-Speed Drones': [
    'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop',
  ],
  'LEGO Architecture Sets': [
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop',
  ],
  'Premium Baby Strollers': [
    'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?q=80&w=800&auto=format&fit=crop',
  ],
  'Eco Diapers & Wipes': [
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
  ],
  'Wooden Board Games': [
    'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop',
  ],

  // Automotive & Industrial Hardware
  'Smart 4K Dashcams': [
    'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=800&auto=format&fit=crop',
  ],
  'DOT Certified Riding Helmets': [
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
  ],
  'Bosch Cordless Drill Sets': [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
  ],
  'Car High-Pressure Washers': [
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop',
  ],
  'Tyre Inflators & Emergency Kits': [
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  ],

  // Health, Nutrition & Pharmacy
  '100% Whey Protein Isolate': [
    'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop',
  ],
  'Daily Multivitamins & Zinc': [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=800&auto=format&fit=crop',
  ],
  'Digital Blood Pressure Monitors': [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583912267670-6575ad362e49?q=80&w=800&auto=format&fit=crop',
  ],
  'Ayurvedic Immunity Boosters': [
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
  ],
  'First Aid Medical Kits': [
    'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
  ],

  // Office Supplies & Ergonomics
  'High-Back Ergonomic Chairs': [
    'https://images.unsplash.com/photo-1580481077111-9257d0f9a2b5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=800&auto=format&fit=crop',
  ],
  'Motorized Standing Desks': [
    'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop',
  ],
  'Premium Fountain Pens': [
    'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585336261026-7f5ef95c3735?q=80&w=800&auto=format&fit=crop',
  ],
  'Wireless Laser Printers': [
    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
  ],
  'Leather Notebooks & Organizers': [
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
  ],
};

// ── Realistic Multi-Brand Dictionary ──────────────────────────────────────────

const BRAND_DICTIONARY: Record<string, string[]> = {
  electronics: ['Apple', 'Samsung', 'Sony', 'OnePlus', 'boAt', 'Asus ROG', 'Dell', 'LG', 'Bose', 'Canon', 'JBL'],
  fashion: ['Zara', 'Biba', 'W for Woman', 'FabIndia', 'Global Desi', 'H&M', 'Lavie', 'Catwalk', 'Kalyan Jewellers'],
  'mens-fashion': ['Nike', "Levi's", 'Adidas', 'Puma', 'Peter England', 'Manyavar', 'Fossil', 'Casio', 'Tommy Hilfiger', 'Woodland'],
  'home-kitchen': ['Prestige', 'Philips', 'Pigeon', 'Wonderchef', 'IKEA', 'Sleepwell', 'Duroflex', 'Havells', 'Borosil', 'Morphy Richards'],
  beauty: ['Mamaearth', 'The Derma Co', 'Forest Essentials', 'WOW Skin Science', 'Nykaa', 'Maybelline', 'L’Oréal Paris', 'Bombay Shaving Co', 'Philips'],
  grocery: ['Tata Sampann', 'Fortune', 'Amul', '24 Mantra Organic', 'Blue Tokai', 'Epigamia', 'Jagdish Farshan Vadodara', 'NeuGo'],
  sports: ['Decathlon', 'Yonex', 'Nivia', 'Cosco', 'Cultsport', 'Strauss', 'Fitkit', 'Hercules', 'Vector X'],
  books: ['Penguin Random House', 'HarperCollins', 'Rupa Publications', 'Bloomsbury', 'Arihant', 'Oswaal', 'Westland'],
  'toys-games': ['LEGO', 'Hot Wheels', 'Funskool', 'Fisher-Price', 'Hasbro Gaming', 'LuvLap', 'Pampers', 'Mee Mee'],
  automotive: ['Bosch', '70mai', 'Steelbird', 'Vega', 'Black+Decker', 'Amaron', '3M Auto', 'Resqtech'],
  health: ['Optimum Nutrition (ON)', 'MuscleBlaze', 'Himalaya', 'Dr. Morepen', 'Accu-Chek', 'Fast&Up', 'HealthKart'],
  office: ['Green Soul', 'Featherlite', 'Parker', 'Linc', 'Casio', 'Logitech', 'Classmate', 'AmazonBasics'],
};

// ── Subcategory Specific Product Titles ───────────────────────────────────────

const SUBCATEGORY_NAME_TEMPLATES: Record<string, string[]> = {
  // Electronics
  'Smartphones': [
    'Pro AI 5G Smartphone (120Hz Dynamic AMOLED)',
    'Ultra Fast 5G Phone with 108MP Camera',
    'Slim Titanium Flagship Smartphone 256GB',
  ],
  'Laptops & MacBooks': [
    '14-inch Ultra-Slim Laptop (Intel i7, 16GB RAM, 512GB SSD)',
    'Pro Studio Creator Laptop (16-inch 3K OLED Display)',
    'Lightweight Thin Laptop with 18-Hour Battery',
  ],
  'Audio & Headphones': [
    'Wireless Active Noise Cancelling Headphones (40H Playtime)',
    'Spatial Audio True Wireless Earbuds with ANC',
    'Studio Pro Over-Ear Bluetooth Headset with Mic',
  ],
  'Smart Watches': [
    'AMOLED Display Bluetooth Calling Smartwatch with SpO2',
    'Rugged Outdoor GPS Multisport Smartwatch',
    'Stainless Steel Fitness Tracker Watch with Heart Rate',
  ],
  'Smart TVs': [
    '55-inch 4K Ultra HD Smart Google TV with Dolby Vision',
    '65-inch QLED 120Hz Bezel-Less Android Smart TV',
    '43-inch Frameless Full HD Smart LED TV',
  ],
  'Tablets & iPads': [
    '11-inch 2K Touchscreen Tablet with Stylus Pen Support',
    'Octa-Core LTE Calling Entertainment Tablet 128GB',
  ],
  'Cameras': [
    'Mirrorless 4K 60FPS Photography & Vlogging Camera',
    'Full-Frame 32MP Digital DSLR Camera with 24-70mm Lens',
  ],
  'Gaming Consoles': [
    'Next-Gen Wireless Gaming Controller with Haptic Feedback',
    'High-Precision Dual Analog Wireless Console Gamepad',
  ],
  'PC Accessories': [
    'RGB Hot-Swappable Mechanical Gaming Keyboard',
    'Ergonomic Multi-Device Wireless Mouse (4000 DPI)',
    '1080p 60FPS Streaming Webcam with Dual Noise Reduction Mic',
  ],

  // Women's Fashion
  'Floral Dresses': [
    'French Floral Tiered A-Line Summer Maxi Dress',
    'Smocked Bodice Chiffon Flared Floral Midi Dress',
    'Sweetheart Neckline Resort Floral Print Sundress',
  ],
  'Anarkali & Silk Kurtas': [
    'Zari Embroidered Rayon Anarkali Kurta & Pant Set',
    'Chanderi Silk Flared Kurta with Organza Dupatta',
    'Festive Gota Patti Rayon Calf-Length Kurta Ensemble',
  ],
  'Banarasi Sarees': [
    'Banarasi Katan Silk Handloom Zari Work Saree',
    'Traditional Woven Art Silk Saree with Blouse Piece',
    'Royal Zari Border Wedding Banarasi Silk Saree',
  ],
  'Designer Lehengas': [
    'Handcrafted Sequin Embroidered Semi-Stitched Lehenga Choli',
    'Festive Flared Silk Lehenga with Heavy Dupatta',
  ],
  'Footwear & Heels': [
    'Cushioned Block Heel Partywear Mules',
    'Pointed Toe Stiletto Pumps with Ankle Strap',
    'Embroidered Ethnic Jutti Footwear with Soft Insole',
  ],
  'Handbags & Totes': [
    'Structured Vegan Leather Tote Bag with Inner Pouch',
    'Designer Multi-Compartment Shoulder Hobo Bag',
  ],
  'Fashion Jewelry': [
    'Kundan Pearl Choker Necklace Set with Drop Earrings',
    '24K Gold Plated Austrian Crystal Bangles Set',
  ],

  // Men's Fashion
  'Casual & Formal Shirts': [
    '100% Oxford Cotton Slim Fit Casual Shirt',
    'Pure Linen Breathable Mandarin Collar Formal Shirt',
    'Classic Regular Fit Spread Collar Cotton Shirt',
  ],
  'Denim Jeans & Trousers': [
    '511 Slim Fit Stretch Denim Jeans',
    'Tapered Regular Fit Washed Indigo Denim Jeans',
    'Classic Mid-Rise Stretch Cotton Chino Trousers',
  ],
  'Sneakers & Formal Shoes': [
    'Air Cushion Lightweight Streetwear Sneakers',
    'Handcrafted Genuine Leather Oxford Formal Brogues',
    'Slip-On Memory Foam Casual Walking Shoes',
  ],
  'Kurta Pajamas & Ethnic': [
    'Pure Cotton Solid Festive Kurta with Churidar',
    'Jacquard Silk Blend Nehru Jacket & Kurta Set',
  ],
  'Luxury Watches': [
    'Chronograph Quartz Stainless Steel Dial Watch',
    'Sunray Dial Roman Numeral Leather Strap Watch',
  ],
  'Activewear': [
    'Dry-Fit Moisture Wicking Gym Training T-Shirt',
    'Athletic Stretch Joggers with Zipper Pockets',
  ],
  'Wallets & Belts': [
    'Top-Grain Leather Bi-Fold RFID Protected Wallet',
    'Reversible Formal Leather Belt with Silver Buckle',
  ],

  // Home, Kitchen & Furniture
  'Non-Stick Cookware': [
    'German 5-Layer Granite Non-Stick Fry Pan with Lid',
    'Hard Anodized Induction Base Tri-Ply Kadhai',
    'Die-Cast Aluminum Omni Dosa Tawa 28cm',
  ],
  'Air Fryers & Microwaves': [
    'Digital Touch Air Fryer 5.5L (360 Rapid Air Flow)',
    'Solo Countertop Digital Microwave Oven 24L',
  ],
  'Espresso & Coffee Machines': [
    '15-Bar High Pressure Automatic Espresso Maker & Milk Frother',
    'Programmable 12-Cup Drip Coffee Brewer with Glass Carafe',
  ],
  'Living Room Sofas': [
    '3-Seater Modern Fabric Sofa with High-Density Foam',
    'L-Shaped Sectional Reversible Living Room Couch',
  ],
  'Orthopedic Mattresses': [
    'Orthopedic Memory Foam Dual Comfort 6-Inch Mattress',
    'Natural Latex Pocket Spring Euro Top Mattress',
  ],
  'Dinnerware Sets': [
    'Opalware 33-Piece Scratch-Resistant Dinner Set',
    'Handcrafted Ceramic Dinner Plates & Bowl Set',
  ],
  'Lamps & Home Decor': [
    'Touch Control Nordic Bedside Table Lamp with USB',
    'Modern Ambient LED Pendant Ceiling Light',
  ],

  // Beauty & Grooming
  'Vitamin C & Anti-Aging Serums': [
    '20% Vitamin C Radiance Glow Serum with Hyaluronic Acid',
    '1% Retinol Night Repair Anti-Aging Serum with Peptides',
  ],
  'Luxury Perfumes & EDP': [
    'French Eau De Parfum Long-Lasting Luxury Fragrance 100ml',
    'Smoky Oud & Amber Intense EDP for Men & Women',
  ],
  'Beard Trimmers & Shavers': [
    'Cordless Waterproof Beard Trimmer with Titanium Blades',
    '3D Rotary Wet & Dry Electric Shaver with Pop-Up Trimmer',
  ],
  'Hair Styling & Shampoos': [
    'Moroccan Argan Oil Hair Mask & Deep Conditioning Treatment',
    'Sulfate-Free Keratin Smooth Botanical Shampoo 400ml',
  ],
  'Makeup Palettes & Lipsticks': [
    'Matte Liquid Waterproof Long-Stay Lipstick Pack of 4',
    '18-Color High Pigment Eyeshadow Palette Kit',
  ],
  'Organic Face Washes': [
    'Brightening Vitamin C & Turmeric Foaming Face Wash 150ml',
    'Salicylic Acid & Green Tea Pore Clearing Face Cleanser',
  ],

  // Grocery
  'Premium Dry Fruits & Nuts': [
    'Premium California Jumbo Almonds (100% Natural 1kg)',
    'Whole Cashews & Afghani Seedless Black Raisins 1kg Pack',
  ],
  'Pure Cow Ghee & Cold Pressed Oils': [
    'Vedic Bilona A2 Desi Cow Ghee (Glass Jar 1 Litre)',
    'Cold-Pressed Extra Virgin Coconut Oil (1 Litre)',
  ],
  'Organic Spices & Masalas': [
    'Organic Kashmiri Saffron Kesar (Grade A+ 1g Box)',
    'Pure Lakadong Turmeric Powder with High Curcumin 500g',
  ],
  'Artisanal Coffee & Tea': [
    'Estate Dark Roast 100% Arabica Coffee Beans 500g',
    'First Flush Darjeeling Whole Leaf Green Tea 250g',
  ],
  'Vadodara Sweets & Farsan': [
    'Authentic Vadodara Bhakarwadi & Sev Khamani Crisp Pack 800g',
    'Traditional Kaju Katli & Dry Fruit Ladoo Gift Box 500g',
  ],
  'Breakfast Cereals & Granola': [
    'Crunchy Roasted Almond & Dark Chocolate Granola 500g',
    'Organic Rolled Oats Whole Grain Breakfast Pack 1kg',
  ],

  // Sports & Fitness
  'Adjustable Dumbbells & Barbells': [
    'Hexagonal Rubberized Dumbbell Pair (10kg Each)',
    'Adjustable Quick-Select Weight Dumbbell Set (24kg)',
  ],
  'Motorized Treadmills': [
    '4.0 HP Motorized Folding Treadmill with LCD Display',
    'Under-Desk Walking Pad Cardio Treadmill with Remote',
  ],
  'Eco Yoga Mats': [
    'High-Density Anti-Tear Eco-Friendly Yoga Mat (6mm)',
    'Non-Slip Alignment Line Exercise Fitness Mat',
  ],
  'English Willow Cricket Bats': [
    'Grade 1 English Willow Power Punch Cricket Bat',
    'Full Grain Kashmir Willow Hard Tennis Cricket Bat',
  ],
  'FIFA Footballs': [
    'FIFA Quality Pro Match Grade All-Weather Football (Size 5)',
    'High-Durability Thermally Bonded Soccer Ball',
  ],
  'Hybrid Bicycles & Gear': [
    '21-Speed Shimano Gear Mountain Hybrid Bicycle with Dual Disc Brakes',
    'Lightweight Urban Commuter Road Bicycle with Alloy Frame',
  ],

  // Books
  'National Bestsellers': [
    'Atomic Habits & Psychology of Money Bestseller Paperback Set',
    'Sapiens: A Brief History of Humankind (Deluxe Illustrated Edition)',
  ],
  'Personal Finance & Self-Help': [
    'The Psychology of Money: Timeless Lessons on Wealth',
    'Deep Work: Rules for Focused Success in a Distracted World',
  ],
  'Tech, AI & Programming': [
    'Designing Data-Intensive Applications & Modern AI Architecture',
    'Clean Code: A Handbook of Agile Software Craftsmanship',
  ],
  'Exam Preparation (UPSC, GATE)': [
    'Comprehensive General Studies & Aptitude Manual (Latest Edition)',
    'Previous 25 Years Solved Question Papers with Explanations',
  ],
  'Indian Mythology & Fiction': [
    'The Palace of Illusions & Indian Epic Mythology Collector Edition',
    'Immortal India: Ancient Wisdom & Historical Chronicles',
  ],
  'Children Story Books': [
    'Bedtime Illustrated Classic Panchatantra Stories for Children',
    'Illustrated World Fairy Tales & Moral Stories Hardcover Boxset',
  ],

  // Toys & Baby Care
  'STEM Educational Robotics': [
    'Programmable STEM Robotics & Electronics Kit with App Control',
    'DIY Solar Powered Science Experiment Robot Kit',
  ],
  'Remote Control High-Speed Drones': [
    '4K Ultra HD Dual Camera GPS Foldable RC Drone',
    'Altitude Hold Long Range Beginner Quadcopter Drone with 2 Batteries',
  ],
  'LEGO Architecture Sets': [
    'Iconic Skyline Architecture Modular Construction Building Blocks (1200 Pcs)',
    'Space Exploration Mars Rover Educational Building Brick Set',
  ],
  'Premium Baby Strollers': [
    'Ultra-Lightweight One-Hand Foldable Baby Stroller Pram with Canopy',
    'Reversible 3-in-1 Travel System Baby Carriage with Bassinet',
  ],
  'Eco Diapers & Wipes': [
    'Organic Bamboo Cotton Baby Swaddle Blankets (Pack of 3)',
    'Ultra-Soft Pure Water Newborn Baby Wipes (Pack of 4)',
  ],
  'Wooden Board Games': [
    'Handcrafted Sheesham Wooden Chess & Checkers Board Set (14-Inch)',
    'Classic Carrom Board with Coins, Striker & Powder (32-Inch)',
  ],

  // Automotive
  'Smart 4K Dashcams': [
    '4K Ultra HD Dual Front & Rear Dashcam with Sony Night Vision',
    'Wide Angle 170-Degree Car Security Camera with G-Sensor & WiFi',
  ],
  'DOT Certified Riding Helmets': [
    'DOT & ISI Certified Full-Face Aerodynamic Motorcycle Helmet with Dual Visor',
    'Matte Black Bluetooth-Ready Street Biker Helmet with Anti-Fog Shield',
  ],
  'Bosch Cordless Drill Sets': [
    '18V Brushless Cordless Lithium-Ion Hammer Drill & Driver Toolkit',
    'Rechargeable Impact Screwdriver Set with 32 Accessories & Hard Case',
  ],
  'Car High-Pressure Washers': [
    '1800W High Pressure Car Foam Jet Washer Machine (140 Bar)',
    'Portable Battery Powered Cordless Pressure Car Washer Gun',
  ],
  'Tyre Inflators & Emergency Kits': [
    'Digital Portable Tyre Inflator with Auto-Shutoff & Emergency LED Light',
    'All-In-One Car Emergency Breakdown Toolkit with Jumper Cables',
  ],

  // Health
  '100% Whey Protein Isolate': [
    '100% Pure Whey Protein Isolate (2kg Rich Chocolate Fudge / 27g Protein)',
    'Hydrolyzed Grass-Fed Whey Protein Powder (Zero Sugar / Low Carb)',
  ],
  'Daily Multivitamins & Zinc': [
    'Daily High-Potency Multivitamins with Zinc, Vitamin D3, B12 & Minerals',
    'Plant-Based Organic Immunity & Vitality Multivitamin Booster',
  ],
  'Digital Blood Pressure Monitors': [
    'Automatic Digital Upper Arm Blood Pressure Monitor with Large Display',
    'Voice Guided Accurate Digital BP & Heart Rate Checker',
  ],
  'Ayurvedic Immunity Boosters': [
    'Pure Himalayan Shilajit Resin with Gold Dust & Fulvic Acid (20g)',
    'Organic KSM-66 Ashwagandha Stress Relief & Vitality Capsules',
  ],
  'First Aid Medical Kits': [
    'Emergency Compact First Aid Kit (120 Medical Items in Waterproof Bag)',
    'Wall-Mountable Family & Office Medical Emergency Box',
  ],

  // Office
  'High-Back Ergonomic Chairs': [
    'High-Back Ergonomic Mesh Office Desk Chair with 3D Armrests & Lumbar Support',
    'Executive Breathable High-Density Reclining Desk Chair with Headrest',
  ],
  'Motorized Standing Desks': [
    'Dual-Motor Electric Height Adjustable Standing Desk (140 x 70 cm Solid Wood Top)',
    'Ergonomic Memory Preset Sit-Stand Computer Workstation Desk',
  ],
  'Premium Fountain Pens': [
    'Fine Nib Luxury Lacquer Metallic Fountain Pen with Ink Converter',
    'Handcrafted Executive Rollerball Pen in Deluxe Gift Box',
  ],
  'Wireless Laser Printers': [
    'High-Yield Wireless Color Laser All-In-One Printer & Scanner',
    'Compact Auto-Duplex Monochrome Office Laser Printer',
  ],
  'Leather Notebooks & Organizers': [
    'Hardcover Dotted Bullet Journal Notebook with 120gsm Thick Bleed-Proof Paper',
    'Top-Grain Leather Refillable Travel Planner & Diary Organizer',
  ],
};

// ── Handcrafted Flagship Products ─────────────────────────────────────────────

const HANDCRAFTED_FLAGSHIPS: MockProduct[] = [
  // 1. Women's Floral Summer A-Line Maxi Dress
  {
    id: 'prod-dress-001',
    name: "Women's French Floral Print Tiered A-Line Summer Maxi Dress",
    slug: 'womens-floral-summer-maxi-dress',
    brand: 'Zara',
    category: 'Fashion',
    department: 'fashion',
    subcategory: 'Floral Dresses',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 2 PM',
  },

  // 2. Women's Embroidered Anarkali Kurta & Dupatta Set
  {
    id: 'prod-kurta-002',
    name: "Women's Zari Embroidered Rayon Anarkali Kurta with Pant & Dupatta",
    slug: 'womens-embroidered-anarkali-kurta-set',
    brand: 'Biba',
    category: 'Fashion',
    department: 'fashion',
    subcategory: 'Anarkali & Silk Kurtas',
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
    isBestSeller: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 2 PM',
  },

  // 3. Samsung Galaxy S24 Ultra
  {
    id: 'prod-001',
    name: 'Samsung Galaxy S24 Ultra AI Smartphone (Titanium)',
    slug: 'samsung-galaxy-s24-ultra-256gb',
    brand: 'Samsung',
    category: 'Electronics',
    department: 'electronics',
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
    isBestSeller: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Same-Day Vadodara Delivery',
  },

  // 4. Apple MacBook Air M3
  {
    id: 'prod-002',
    name: 'Apple MacBook Air 13.6-inch with M3 Chip',
    slug: 'apple-macbook-air-m3-13',
    brand: 'Apple',
    category: 'Electronics',
    department: 'electronics',
    subcategory: 'Laptops & MacBooks',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 11 AM',
  },

  // 5. Nike Air Max 270 React Sneakers
  {
    id: 'prod-003',
    name: 'Nike Air Max 270 React Running & Lifestyle Shoes',
    slug: 'nike-air-max-270-react',
    brand: 'Nike',
    category: "Men's Fashion",
    department: 'mens-fashion',
    subcategory: 'Sneakers & Formal Shoes',
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
    description: "Nike's first lifestyle Air Max meets the softest, smoothest and most resilient Nike React foam. The aesthetic draws inspiration from the Air Max pantheon, showcasing Nike's greatest innovation with its large window and fresh array of colors. The lightweight, layered no-sew materials create a modern aesthetic.",
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 3 PM',
  },

  // 6. Sony WH-1000XM5 Wireless Headphones
  {
    id: 'prod-004',
    name: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones',
    slug: 'sony-wh-1000xm5',
    brand: 'Sony',
    category: 'Electronics',
    department: 'electronics',
    subcategory: 'Audio & Headphones',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 10 AM',
  },

  // 7. Levi's 511 Slim Fit Denim Jeans
  {
    id: 'prod-005',
    name: "Levi's Men's 511 Slim Fit Stretch Denim Jeans",
    slug: 'levis-511-slim-fit-jeans',
    brand: "Levi's",
    category: "Men's Fashion",
    department: 'mens-fashion',
    subcategory: 'Denim Jeans & Trousers',
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
    description: "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic. These jeans sit below the waist with a slim leg from hip to ankle. Crafted with Levi's Flex: advanced stretch technology engineered to deliver maximum flex and optimum comfort.",
    shortDescription: "Classic 5-pocket slim fit jeans crafted with premium Levi's Flex stretch denim.",
    highlights: [
      'Slim from hip to ankle with a modern mid-rise waist',
      "Levi's Flex advanced stretch technology for built-in ease",
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 2 PM',
  },

  // 8. Prestige Omega Deluxe Cookware Set
  {
    id: 'prod-006',
    name: 'Prestige Omega Deluxe Granite Induction Base Cookware Set',
    slug: 'prestige-omega-deluxe-kitchen-set',
    brand: 'Prestige',
    category: 'Home & Kitchen',
    department: 'home-kitchen',
    subcategory: 'Non-Stick Cookware',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 4 PM',
  },

  // 9. Fossil Men's Grant Chronograph Watch
  {
    id: 'prod-012',
    name: "Fossil Men's Grant Stainless Steel Chronograph Quartz Watch",
    slug: 'fossil-analog-watch',
    brand: 'Fossil',
    category: "Men's Fashion",
    department: 'mens-fashion',
    subcategory: 'Luxury Watches',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 1 PM',
  },

  // 10. Mamaearth Vitamin C Natural Face Wash
  {
    id: 'prod-008',
    name: 'Mamaearth Vitamin C Daily Brightening Face Wash with Turmeric',
    slug: 'mamaearth-vitamin-c-face-wash',
    brand: 'Mamaearth',
    category: 'Beauty',
    department: 'beauty',
    subcategory: 'Organic Face Washes',
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
    isBestSeller: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 12 PM',
  },

  // 11. Ikigai Hardcover Book
  {
    id: 'prod-009',
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    slug: 'ikigai-japanese-secret',
    brand: 'Penguin Books',
    category: 'Books',
    department: 'books',
    subcategory: 'Personal Finance & Self-Help',
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
    description: "Discover the centenarian longevity wisdom of the world's Blue Zone in Okinawa, Japan. Finding intersection among what you love, what you are good at, what the world needs, and what you can get paid for.",
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
    isBestSeller: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 5 PM',
  },

  // 12. Decathlon Domyos Hex Dumbbells Pair
  {
    id: 'prod-011',
    name: 'Decathlon Domyos Hexagonal Rubberized Dumbbell Pair',
    slug: 'decathlon-dumbbells-10kg',
    brand: 'Decathlon',
    category: 'Sports',
    department: 'sports',
    subcategory: 'Adjustable Dumbbells & Barbells',
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
    isAmazonChoice: true,
    isPlusEligible: true,
    fastDeliveryTime: 'Tomorrow, 3 PM',
  },
];

// ── Deterministic Procedural Product Generator to reach 1,000+ Items ──────────

function generateComprehensiveCatalog(): MockProduct[] {
  const items: MockProduct[] = [...HANDCRAFTED_FLAGSHIPS];
  let counter = 100;

  // Generate 85 products per department to reach 1,000+ total
  for (const dept of AMAZON_DEPARTMENTS) {
    const brands = BRAND_DICTIONARY[dept.id] || ['NexMart Global', 'AmazonBasics'];
    const subcats = dept.subcategories;

    for (let i = 0; i < 85; i++) {
      counter++;
      const brand = brands[i % brands.length];
      const subcategory = subcats[i % subcats.length];

      // Retrieve EXACT curated photos for this specific subcategory
      const photos =
        SUBCATEGORY_PHOTO_BANK[subcategory] ||
        SUBCATEGORY_PHOTO_BANK['Smartphones'];

      const photo = photos[i % photos.length];
      const secondaryPhoto = photos[(i + 1) % photos.length];

      // Retrieve EXACT naming template for this specific subcategory
      const templates =
        SUBCATEGORY_NAME_TEMPLATES[subcategory] || [
          `${subcategory} Pro Series Edition`,
          `${subcategory} High-Performance Edition`,
        ];
      const template = templates[i % templates.length];

      // Base price calculations
      let basePrice = 499;
      if (dept.id === 'electronics') basePrice = 1499 + (i * 950) % 85000;
      else if (dept.id === 'fashion' || dept.id === 'mens-fashion') basePrice = 799 + (i * 350) % 9500;
      else if (dept.id === 'home-kitchen') basePrice = 699 + (i * 450) % 18500;
      else if (dept.id === 'sports') basePrice = 499 + (i * 600) % 24000;
      else if (dept.id === 'books') basePrice = 299 + (i * 90) % 1800;
      else if (dept.id === 'beauty' || dept.id === 'grocery') basePrice = 249 + (i * 120) % 2900;
      else if (dept.id === 'health') basePrice = 499 + (i * 320) % 5500;
      else if (dept.id === 'office' || dept.id === 'automotive') basePrice = 899 + (i * 750) % 22000;
      else basePrice = 399 + (i * 200) % 4500;

      // Round to neat 99 or 90 endings
      basePrice = Math.round(basePrice / 10) * 10 - 1;
      if (basePrice < 199) basePrice = 199;

      const mrp = Math.round(basePrice * (1.25 + (i % 5) * 0.12));
      const rating = Number((4.2 + ((i * 7) % 8) * 0.1).toFixed(1));
      const reviewCount = 250 + (i * 347) % 28000;

      const fullName = `${brand} ${template} (Series ${i + 1})`;
      const slug = `${brand}-${subcategory}-${template}-series-${i + 1}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Variant Type
      let variantType: VariantType = 'edition';
      let variantLabel = 'Option Edition';
      let variantOptions: ProductVariantOption[] = [
        { label: 'Standard Edition', price: basePrice, mrp: mrp, stockQty: 30, isDefault: true },
        { label: 'Pro Edition (Deluxe)', price: Math.round(basePrice * 1.25), mrp: Math.round(mrp * 1.25), stockQty: 18 },
      ];

      if (subcategory.includes('Phone') || subcategory.includes('Tablet') || subcategory.includes('Laptops')) {
        variantType = 'storage';
        variantLabel = 'Configuration Model';
        variantOptions = [
          { label: '128GB Storage (Base)', price: basePrice, mrp: mrp, stockQty: 30, isDefault: true },
          { label: '256GB Storage (Pro)', price: Math.round(basePrice * 1.2), mrp: Math.round(mrp * 1.2), stockQty: 25 },
          { label: '512GB Storage (Max)', price: Math.round(basePrice * 1.45), mrp: Math.round(mrp * 1.45), stockQty: 10 },
        ];
      } else if (dept.id === 'fashion' || dept.id === 'mens-fashion') {
        if (subcategory.includes('Shoe') || subcategory.includes('Footwear') || subcategory.includes('Sneakers')) {
          variantType = 'shoe-size';
          variantLabel = 'Shoe Size (UK / India)';
          variantOptions = [
            { label: 'UK 6', price: basePrice, mrp: mrp, stockQty: 20 },
            { label: 'UK 7', price: basePrice, mrp: mrp, stockQty: 35 },
            { label: 'UK 8', price: basePrice, mrp: mrp, stockQty: 45, isDefault: true },
            { label: 'UK 9', price: basePrice, mrp: mrp, stockQty: 30 },
            { label: 'UK 10', price: Math.round(basePrice * 1.05), mrp: mrp, stockQty: 15 },
          ];
        } else if (subcategory.includes('Jeans') || subcategory.includes('Trousers')) {
          variantType = 'apparel-size';
          variantLabel = 'Waist Size (Inches)';
          variantOptions = [
            { label: '30 Waist', price: basePrice, mrp: mrp, stockQty: 25 },
            { label: '32 Waist', price: basePrice, mrp: mrp, stockQty: 40, isDefault: true },
            { label: '34 Waist', price: basePrice, mrp: mrp, stockQty: 30 },
            { label: '36 Waist', price: Math.round(basePrice * 1.05), mrp: mrp, stockQty: 15 },
          ];
        } else {
          variantType = 'apparel-size';
          variantLabel = 'Size (India / Standard)';
          variantOptions = [
            { label: 'S (Small)', price: basePrice, mrp: mrp, stockQty: 25 },
            { label: 'M (Medium)', price: basePrice, mrp: mrp, stockQty: 45, isDefault: true },
            { label: 'L (Large)', price: basePrice, mrp: mrp, stockQty: 30 },
            { label: 'XL (Extra Large)', price: Math.round(basePrice * 1.08), mrp: mrp, stockQty: 15 },
          ];
        }
      } else if (dept.id === 'home-kitchen') {
        variantType = 'capacity';
        variantLabel = 'Size & Capacity';
        variantOptions = [
          { label: 'Medium (Family Size)', price: basePrice, mrp: mrp, stockQty: 35, isDefault: true },
          { label: 'Large (Deluxe Set)', price: Math.round(basePrice * 1.35), mrp: Math.round(mrp * 1.35), stockQty: 20 },
        ];
      } else if (dept.id === 'beauty' || dept.id === 'grocery' || dept.id === 'health') {
        variantType = 'volume';
        variantLabel = 'Pack Size';
        variantOptions = [
          { label: 'Standard Pack', price: basePrice, mrp: mrp, stockQty: 50, isDefault: true },
          { label: 'Family Mega Saver Pack', price: Math.round(basePrice * 1.8), mrp: Math.round(mrp * 1.8), stockQty: 25 },
        ];
      } else if (dept.id === 'sports') {
        variantType = 'weight';
        variantLabel = 'Size & Weight Option';
        variantOptions = [
          { label: 'Standard Fit', price: basePrice, mrp: mrp, stockQty: 40, isDefault: true },
          { label: 'Pro Match Grade', price: Math.round(basePrice * 1.3), mrp: Math.round(mrp * 1.3), stockQty: 20 },
        ];
      }

      items.push({
        id: `nex-${dept.id}-${counter}`,
        name: fullName,
        slug,
        brand,
        category: dept.name,
        department: dept.id,
        subcategory,
        price: basePrice,
        mrp,
        rating,
        reviewCount,
        image: photo,
        images: [photo, secondaryPhoto],
        description: `Premium authentic ${fullName}. Designed for high performance, genuine durability, and backed by manufacturer warranty. Verified genuine by NexMart Authorized Stores with express dispatch from Vadodara Hub.`,
        shortDescription: `Original ${brand} ${subcategory} crafted for premium performance and durability.`,
        highlights: [
          `Original 100% Genuine ${brand} Craftsmanship`,
          'Free Standard Shipping to Vadodara & Across India',
          '7-Day No-Questions-Asked Return & Instant Refund Guarantee',
          'Includes Official Manufacturer Warranty & GST Tax Invoice',
        ],
        variantType,
        variantLabel,
        variantOptions,
        colors: [
          { name: 'Primary Finish', hex: '#1C1C1C', image: photo },
          { name: 'Classic Slate', hex: '#6B7280', image: secondaryPhoto },
        ],
        specs: {
          Brand: brand,
          Category: dept.name,
          Subcategory: subcategory,
          ModelYear: '2026',
          Warranty: '1 Year Official Brand Warranty',
          Origin: 'Vadodara Hub Fulfilled',
        },
        manufacturingDetails: {
          countryOfOrigin: 'India (Vadodara Fulfilled)',
          material: 'Premium Authentic Grade',
          weight: '450 g',
        },
        vendorName: `${brand} Authorized Brand Store`,
        vendorRating: 4.8,
        badges:
          i % 4 === 0
            ? [{ text: 'BESTSELLER', type: 'bestseller' }]
            : i % 7 === 0
            ? [{ text: 'CHOICE', type: 'choice' }]
            : i % 3 === 0
            ? [{ text: 'SALE', type: 'sale' }]
            : [],
        freeDelivery: true,
        inStock: true,
        isFulfilledByNexmart: true,
        isAmazonChoice: i % 4 === 0,
        isBestSeller: i % 7 === 0,
        isPlusEligible: true,
        fastDeliveryTime: i % 2 === 0 ? 'Tomorrow, 2 PM' : '2 Business Days',
      });
    }
  }

  return items;
}

export const ALL_PRODUCTS: MockProduct[] = generateComprehensiveCatalog();
