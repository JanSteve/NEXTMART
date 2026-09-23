"use client";
import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Basic mock filter
  const results = MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-500 mb-8">{results.length} results found for <span className="font-semibold text-gray-900">"{query}"</span></p>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-bold mb-2">No results found</h2>
          <p className="text-gray-500">Try checking your spelling or use more general terms</p>
        </div>
      )}
    </div>
  );
}