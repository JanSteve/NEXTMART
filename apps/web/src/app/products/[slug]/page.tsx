import { MOCK_PRODUCTS } from '@/lib/constants';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClient slug={params.slug} />;
}