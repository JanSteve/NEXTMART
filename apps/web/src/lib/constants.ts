// ============================================================================
// NexMart — Mock Data & Constants
// Complete Multi-Category Catalog with 1,000+ Products & Amazon Departments
// ============================================================================

import { ALL_PRODUCTS, AMAZON_DEPARTMENTS, type MockProduct, type ProductVariantOption, type ProductColorOption, type VariantType } from './products-catalog';

export type { MockProduct, ProductVariantOption, ProductColorOption, VariantType };

// ── Navigation Categories (All 12 Amazon-Level Departments + Deals) ─────────
export const NAV_CATEGORIES = [
  { name: 'Electronics', slug: 'electronics', icon: '📱', emoji: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop' },
  { name: "Women's Fashion", slug: 'fashion', icon: '👗', emoji: '👗', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop' },
  { name: "Men's Fashion", slug: 'mens-fashion', icon: '👔', emoji: '👔', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=600&auto=format&fit=crop' },
  { name: 'Home & Kitchen', slug: 'home-kitchen', icon: '🏠', emoji: '🏠', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Beauty & Grooming', slug: 'beauty', icon: '💄', emoji: '💄', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Grocery & Sweets', slug: 'grocery', icon: '🛒', emoji: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sports & Fitness', slug: 'sports', icon: '🏃', emoji: '🏃', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Books & Kindle', slug: 'books', icon: '📚', emoji: '📚', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Toys & Baby', slug: 'toys-games', icon: '🎮', emoji: '🎮', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600&auto=format&fit=crop' },
  { name: 'Automotive & Tools', slug: 'automotive', icon: '🚗', emoji: '🚗', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop' },
  { name: 'Health & Nutrition', slug: 'health', icon: '💊', emoji: '💊', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop' },
  { name: 'Office Supplies', slug: 'office', icon: '💼', emoji: '💼', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Deals & Savings', slug: 'deals', icon: '⚡', emoji: '⚡', isHighlighted: true, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop' },
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

// ── Complete Catalog with 1,000+ Products ──────────────────────────────
export const MOCK_PRODUCTS: MockProduct[] = ALL_PRODUCTS;

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
  email: 'customer@nexmart.in',
  firstName: 'Customer',
  lastName: 'User',
  phone: '9876543210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  role: 'CUSTOMER',
  addresses: [
    {
      id: 'addr-vadodara-1',
      type: 'HOME',
      fullName: 'Vadodara Customer',
      phone: '9876543210',
      street: 'Flat 402, Samrudhi Residency, Waghodia Road',
      landmark: 'Near Parul University Campus',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390001',
      isDefault: true,
    },
    {
      id: 'addr-vadodara-2',
      type: 'WORK',
      fullName: 'Vadodara Customer',
      phone: '9876543210',
      street: 'Commercial Tower, 3rd Floor, Alkapuri',
      landmark: 'Near Railway Station',
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
  categories: [
    'Electronics & Gadgets',
    'Women\'s Fashion & Ethnic',
    'Men\'s Fashion & Streetwear',
    'Home, Kitchen & Furniture',
    'Beauty, Skincare & Grooming',
    'Grocery, Gourmet & Indian Sweets',
    'Sports, Fitness & Outdoors',
    'Books, Kindle & Audibles',
    'Toys, Games & Baby Care',
    'Automotive & Industrial Hardware',
    'Health, Nutrition & Pharmacy',
    'Office Supplies & Ergonomics',
  ],
  brands: [
    'Apple', 'Samsung', 'Sony', 'Nike', "Levi's", 'Prestige', 'Mamaearth',
    'Zara', 'Biba', 'Decathlon', 'Fossil', 'Penguin Random House', 'Bosch', 'Optimum Nutrition (ON)'
  ],
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