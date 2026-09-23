const fs = require('fs');
const path = require('path');

const files = {
  "src/components/product/ProductGrid.tsx": `import { cn } from "@/lib/utils";

export default function ProductGrid({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", className)}>
      {children}
    </div>
  );
}`,

  "src/components/product/FilterSidebar.tsx": `"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function FilterSidebar() {
  const categories = ['Mobiles', 'Fashion', 'Electronics', 'Home', 'Beauty'];
  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas'];
  const colors = ['bg-neutral-900', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <div>
        <h3 className="font-display font-semibold mb-3 text-neutral-900">Categories</h3>
        <div className="space-y-2">
          {categories.map(c => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500 border-neutral-300" />
              <span className="text-sm text-neutral-700">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div>
        <h3 className="font-display font-semibold mb-3 text-neutral-900">Brands</h3>
        <div className="space-y-2">
          {brands.map(b => (
            <label key={b} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500 border-neutral-300" />
              <span className="text-sm text-neutral-700">{b}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div>
        <h3 className="font-display font-semibold mb-3 text-neutral-900">Price Range</h3>
        <input type="range" className="w-full accent-primary-500" min="0" max="1000" />
        <div className="flex justify-between text-xs text-neutral-500 mt-2 font-mono">
          <span>$0</span>
          <span>$1000+</span>
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div>
        <h3 className="font-display font-semibold mb-3 text-neutral-900">Color</h3>
        <div className="flex gap-2">
          {colors.map((c, i) => (
            <button 
              key={c}
              onClick={() => setSelectedColor(i)}
              className={\`w-6 h-6 rounded-full \${c} ring-offset-2 transition-all \${selectedColor === i ? 'ring-2 ring-primary-500' : ''}\`}
            />
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div>
        <h3 className="font-display font-semibold mb-3 text-neutral-900">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(r => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="rating" className="text-primary-500 focus:ring-primary-500 border-neutral-300" />
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-neutral-700">{r} & Up</span>
                <Star className="w-3.5 h-3.5 fill-accent-500 text-accent-500" />
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  "src/components/product/ProductCard.tsx": `"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCartStore from '@/store/cart';
import { formatPrice } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  slug: string;
  brand?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.image
    });
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <Link href={\`/products/\${product.slug}\`} className="group block bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 relative border border-neutral-100">
      <div className="relative aspect-square overflow-hidden bg-neutral-100 p-4">
        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-error-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
            {discountPercent}% OFF
          </div>
        )}
        <button 
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm z-10 text-neutral-400 hover:text-error-500 transition-colors"
        >
          <motion.div whileTap={{ scale: 1.2 }}>
            <Heart className={\`w-4 h-4 \${isWishlisted ? 'fill-error-500 text-error-500' : ''}\`} />
          </motion.div>
        </button>
      </div>
      
      <div className="p-4 bg-white">
        {product.brand && <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-medium">{product.brand}</p>}
        <h3 className="font-display font-medium text-neutral-900 line-clamp-2 text-sm mb-2 leading-tight min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-3">
          <div className="bg-success-500 text-white flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold gap-0.5 shadow-sm">
            {product.rating} <Star className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-xs text-neutral-400 font-medium">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold font-mono text-neutral-900">{formatPrice(product.price)}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-neutral-400 line-through font-mono">{formatPrice(product.mrp)}</span>
          )}
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={\`w-full py-2 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm \${
            isAdding ? 'bg-success-500 text-white' : 'bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white'
          }\`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-1">
                <Check className="w-4 h-4" /> Added
              </motion.div>
            ) : (
              <motion.div key="add" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                Add to Cart
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </Link>
  );
}`,

  "src/app/products/page.tsx": `import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/product/FilterSidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Filter, ChevronDown, X } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="bg-neutral-50 min-h-screen pb-12">
      <div className="bg-white border-b border-neutral-200 py-4 shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'All Products', href: '/products' }]} />
          <h1 className="text-3xl font-display font-bold text-neutral-900 mt-2">All Products</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-[280px] flex-shrink-0">
          <div className="bg-white rounded-lg shadow-card border border-neutral-100 sticky top-24 overflow-hidden">
            <div className="p-4 border-b border-neutral-100 bg-neutral-50 flex justify-between items-center">
              <h2 className="font-display font-bold text-neutral-800 flex items-center gap-2"><Filter className="w-4 h-4"/> Filters</h2>
              <button className="text-xs font-semibold text-primary-600 hover:text-primary-700">CLEAR ALL</button>
            </div>
            <FilterSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="bg-white rounded-lg shadow-card border border-neutral-100 p-3 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm font-medium text-neutral-600">Showing <strong className="text-neutral-900">{MOCK_PRODUCTS.length}</strong> products</span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="md:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 border border-neutral-200 rounded-md px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-50">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <div className="relative flex-1 sm:flex-none">
                <select className="w-full appearance-none border border-neutral-200 rounded-md pl-4 pr-10 py-2 text-sm font-medium text-neutral-700 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Apple', 'Price: $100 - $500', '4 Stars & Up'].map(f => (
              <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-full shadow-sm">
                {f} <button className="hover:bg-neutral-300 rounded-full p-0.5 transition-colors"><X className="w-3 h-3"/></button>
              </span>
            ))}
          </div>

          <ProductGrid>
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </ProductGrid>
        </div>
      </div>
    </div>
  );
}`,

  "src/components/product/ProductGallery.tsx": `"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 group cursor-zoom-in shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full relative"
          >
            <Image src={images[activeIdx]} alt="Product" fill className="object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" priority />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all",
              activeIdx === i ? "border-primary-500 shadow-md ring-2 ring-primary-500/20" : "border-neutral-200 hover:border-primary-300 opacity-70 hover:opacity-100"
            )}
          >
            <Image src={img} alt={\`Thumb \${i}\`} fill className="object-cover mix-blend-multiply" />
          </button>
        ))}
      </div>
    </div>
  );
}`,

  "src/app/products/[slug]/page.tsx": `import { MOCK_PRODUCTS } from "@/lib/constants";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/Button";
import { Star, Truck, Shield, RotateCcw, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = MOCK_PRODUCTS.find(p => p.slug === params.slug) || MOCK_PRODUCTS[0];
  const images = [product.image, \`https://picsum.photos/seed/\${product.id}a/800/800\`, \`https://picsum.photos/seed/\${product.id}b/800/800\`, \`https://picsum.photos/seed/\${product.id}c/800/800\`];
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name, href: '#' }]} />
        
        <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8 mt-4">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* Gallery Left */}
            <div className="w-full lg:w-[55%] flex-shrink-0">
              <ProductGallery images={images} />
            </div>
            
            {/* Info Right */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-2">{product.brand}</span>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 leading-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center bg-success-500 text-white px-2.5 py-1 rounded-md text-sm font-bold gap-1 shadow-sm">
                  {product.rating} <Star className="w-4 h-4 fill-current" />
                </div>
                <a href="#reviews" className="text-sm font-medium text-primary-600 hover:text-primary-700 underline underline-offset-2">{product.reviewCount} Ratings & Reviews</a>
              </div>
              
              <div className="flex items-baseline gap-3 mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-3xl font-bold font-mono text-neutral-900">{formatPrice(product.price)}</span>
                <span className="text-lg text-neutral-400 line-through font-mono">{formatPrice(product.mrp)}</span>
                <span className="bg-success-100 text-success-700 text-sm font-bold px-2 py-0.5 rounded-md shadow-sm border border-success-200">{discount}% OFF</span>
              </div>

              {/* Variants Stub */}
              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-neutral-900 mb-2">Size</h3>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map((s, i) => (
                      <button key={s} className={\`w-10 h-10 rounded-md font-medium text-sm border flex items-center justify-center transition-colors \${i === 1 ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500' : 'border-neutral-300 text-neutral-700 hover:border-primary-300'}\`}>{s}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Delivery Check */}
              <div className="mb-8 p-4 rounded-xl border border-neutral-200 bg-white shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
                <h3 className="font-display font-semibold text-neutral-900 flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary-500" /> Check Delivery Options
                </h3>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter Pincode" className="flex-1 bg-neutral-50 border border-neutral-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  <Button variant="outline" className="font-semibold text-primary-600 border-primary-200 hover:bg-primary-50">Check</Button>
                </div>
                <p className="text-sm font-medium text-neutral-600 mt-3 flex items-center gap-2 bg-success-50 p-2 rounded text-success-700 border border-success-100">
                  <Truck className="w-4 h-4" /> Delivery by <strong className="font-bold">Mon, 29 Sep</strong>
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-neutral-100">
                <Button size="lg" className="flex-1 font-bold shadow-md shadow-primary-500/20 text-base">Add to Cart</Button>
                <Button size="lg" variant="outline" className="flex-1 font-bold border-2 border-primary-500 text-primary-600 hover:bg-primary-50 text-base">Buy Now</Button>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-neutral-100 text-center">
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600"><Shield className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-neutral-700">Genuine Product</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600"><RotateCcw className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-neutral-700">10-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-success-100 flex items-center justify-center text-success-600"><Truck className="w-5 h-5" /></div>
                  <span className="text-xs font-bold text-neutral-700">Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('Created:', filePath);
}
