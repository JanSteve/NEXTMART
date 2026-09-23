// ── Search Types ───────────────────────────────────────────────────────

export interface SearchResult {
  products: SearchProductHit[];
  total: number;
  facets: SearchFacets;
  page: number;
  limit: number;
  totalPages: number;
  query: string;
  correctedQuery?: string;
}

export interface SearchProductHit {
  id: string;
  name: string;
  slug: string;
  brand: string;
  primaryImage: string;
  price: number;
  mrp: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  categoryPath: string;
  inStock: boolean;
  freeDelivery: boolean;
  score: number;
}

export interface SearchFacets {
  categories: FacetBucket[];
  brands: FacetBucket[];
  colors: FacetBucket[];
  sizes: FacetBucket[];
  priceRanges: FacetBucket[];
  ratings: FacetBucket[];
}

export interface FacetBucket {
  key: string;
  label: string;
  count: number;
}

export interface AutocompleteResult {
  suggestions: AutocompleteSuggestion[];
}

export interface AutocompleteSuggestion {
  text: string;
  type: 'product' | 'category' | 'brand';
  image?: string;
  slug?: string;
}
