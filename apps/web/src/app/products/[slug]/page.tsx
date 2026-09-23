'use client';

import { useState } from 'react';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import ProductGallery from '@/components/product/ProductGallery';
import { Button } from '@/components/ui/Button';
import { Star, Truck, Shield, RotateCcw, MapPin, Check } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import useCartStore from '@/store/cart';
import { toast } from '@/components/ui/Toast';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.slug) || MOCK_PRODUCTS[0];
  const images = product.images && product.images.length > 0 ? product.images : [
    product.image,
    `https://picsum.photos/seed/${product.id}a/800/800`,
    `https://picsum.photos/seed/${product.id}b/800/800`,
    `https://picsum.photos/seed/${product.id}c/800/800`,
  ];
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const [selectedSize, setSelectedSize] = useState('M');
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      brand: product.brand,
      price: product.price,
      mrp: product.mrp,
      slug: product.slug,
      size: selectedSize,
      quantity: 1,
      stockQty: 50,
      isAvailable: true,
    });
    setAdded(true);
    toast({
      type: 'success',
      title: 'Added to Cart',
      message: `${product.name} is now in your cart.`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name, href: '#' },
          ]}
        />

        <div className="mt-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-10 lg:flex-row xl:gap-16">
            {/* Gallery Left */}
            <div className="w-full shrink-0 lg:w-[55%]">
              <ProductGallery images={images} />
            </div>

            {/* Info Right */}
            <div className="flex w-full flex-col lg:w-[45%]">
              <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                {product.brand}
              </span>
              <h1 className="mb-4 font-display text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-md bg-success-500 px-2.5 py-1 text-sm font-bold text-white shadow-sm">
                  {product.rating} <Star className="h-4 w-4 fill-current" />
                </div>
                <a
                  href="#reviews"
                  className="text-sm font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700"
                >
                  {product.reviewCount} Ratings &amp; Reviews
                </a>
              </div>

              <div className="mb-6 flex items-baseline gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                <span className="font-mono text-3xl font-bold text-neutral-900">
                  {formatPrice(product.price)}
                </span>
                <span className="font-mono text-lg text-neutral-400 line-through">
                  {formatPrice(product.mrp)}
                </span>
                <span className="rounded-md border border-success-200 bg-success-100 px-2 py-0.5 text-sm font-bold text-success-700 shadow-sm">
                  {discount}% OFF
                </span>
              </div>

              {/* Variants */}
              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="mb-2 font-display font-semibold text-neutral-900">Size</h3>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                          selectedSize === s
                            ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500'
                            : 'border-neutral-300 text-neutral-700 hover:border-primary-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Delivery Check */}
              <div className="relative mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary-500" />
                <h3 className="mb-3 flex items-center gap-2 font-display font-semibold text-neutral-900">
                  <MapPin className="h-5 w-5 text-primary-500" /> Check Delivery Options
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="flex-1 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button
                    variant="outline"
                    className="border-primary-200 font-semibold text-primary-600 hover:bg-primary-50"
                  >
                    Check
                  </Button>
                </div>
                <p className="mt-3 flex items-center gap-2 rounded border border-success-100 bg-success-50 p-2 text-sm font-medium text-success-700">
                  <Truck className="h-4 w-4" /> Delivery by <strong className="font-bold">Mon, 29 Sep</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex flex-col gap-3 border-t border-neutral-100 pt-6 sm:flex-row">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 text-base font-bold shadow-md shadow-primary-500/20"
                >
                  {added ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Added!
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                  className="flex-1 border-2 border-primary-500 text-base font-bold text-primary-600 hover:bg-primary-50"
                >
                  Buy Now
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-6 text-center">
                <div className="flex flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-700">Genuine Product</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-700">10-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success-100 text-success-600">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-700">Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}