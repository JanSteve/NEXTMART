import { CATEGORIES } from '@/lib/constants';
import CategoryClient from './CategoryClient';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryClient slug={params.slug} />;
}