'use client';

import { useState } from 'react';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import ProductGallery from '@/components/product/ProductGallery';
import { SizeGuideModal } from '@/components/product/SizeGuideModal';
import { Button } from '@/components/ui/Button';
import {
  Star,
  Truck,
  Shield,
  RotateCcw,
  MapPin,
  Check,
  Package,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Ruler,
} from 'lucide-react';
import { formatPrice, calcDiscount } from '@/lib/utils';
import useCartStore from '@/store/cart';
import { toast } from '@/components/ui/Toast';
import { ProductTabs } from '@/components/product/ProductTabs';
import { FrequentlyBought } from '@/components/product/FrequentlyBought';
import { ReviewList } from '@/components/review/ReviewList';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product =
    MOCK_PRODUCTS.find((p) => p.slug === params.slug) || MOCK_PRODUCTS[0];

  // Default variant option
  const initialOption =
    product.variantOptions?.find((o) => o.isDefault) ||
    product.variantOptions?.[0] || {
      label: 'Standard',
      price: product.price,
      mrp: product.mrp,
      stockQty: 50,
    };

  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || ''
  );
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [pincode, setPincode] = useState('390001');
  const [deliveryChecked, setDeliveryChecked] = useState(true);
  const [added, setAdded] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const addItem = useCartStore((s) => s.addItem);

  // Gallery images with active image prioritization
  const galleryImages = product.images?.length
    ? product.images
    : [product.image];

  const currentPrice = selectedOption.price;
  const currentMrp = selectedOption.mrp;
  const currentDiscount = calcDiscount(currentPrice, currentMrp);

  const handleColorSelect = (colorName: string, colorImg?: string) => {
    setSelectedColor(colorName);
    if (colorImg) {
      setActiveImage(colorImg);
    }
  };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productName: `${product.name} - ${selectedOption.label}${
        selectedColor ? ` (${selectedColor})` : ''
      }`,
      productImage: activeImage || product.image,
      brand: product.brand,
      price: currentPrice,
      mrp: currentMrp,
      slug: product.slug,
      size: selectedOption.label,
      color: selectedColor || undefined,
      quantity: 1,
      stockQty: selectedOption.stockQty || 50,
      isAvailable: true,
    });
    setAdded(true);
    toast({
      type: 'success',
      title: 'Added to Cart',
      message: `${product.name} (${selectedOption.label}) is now in your shopping cart.`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  // Related matching products for frequently bought
  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Dynamic Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            {
              label: product.category,
              href: `/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`,
            },
            { label: product.subcategory, href: '#' },
            { label: product.name, href: '#' },
          ]}
        />

        {/* Main Product Container */}
        <div className="mt-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-10 lg:flex-row xl:gap-14">
            {/* Gallery Left (52%) */}
            <div className="w-full shrink-0 lg:w-[52%]">
              <ProductGallery
                images={galleryImages}
                selectedImage={activeImage}
                onImageChange={setActiveImage}
              />

              {/* Fulfilled & Trust Markers */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      Fulfilled by NexMart
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Strict Quality Inspection &amp; Express Dispatch
                    </p>
                  </div>
                </div>
                <span className="rounded bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700">
                  ⚡ 2-Day Priority Delivery
                </span>
              </div>
            </div>

            {/* Info Right (48%) */}
            <div className="flex w-full flex-col lg:w-[48%]">
              {/* Brand & Badges */}
              <div className="mb-2 flex items-center justify-between">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
                  {product.brand}
                </span>
                {product.badges?.map((b) => (
                  <span
                    key={b.text}
                    className="rounded bg-amber-500 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
                  >
                    {b.text}
                  </span>
                ))}
              </div>

              {/* Product Title */}
              <h1 className="mb-3 font-display text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
                {product.name}
              </h1>

              {/* Rating and Reviews Counter */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 rounded-md bg-success-600 px-2.5 py-1 text-sm font-bold text-white shadow-sm">
                  {product.rating} <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span className="text-sm font-medium text-neutral-600">
                  {product.reviewCount.toLocaleString('en-IN')} Verified Ratings
                </span>
                <span className="text-neutral-300">|</span>
                <span className="text-xs font-semibold text-neutral-500">
                  SKU: {product.id.toUpperCase()}
                </span>
              </div>

              {/* Price Display */}
              <div className="mb-6 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-3xl font-extrabold text-neutral-900">
                    {formatPrice(currentPrice)}
                  </span>
                  {currentMrp > currentPrice && (
                    <>
                      <span className="font-mono text-lg text-neutral-400 line-through">
                        {formatPrice(currentMrp)}
                      </span>
                      <span className="rounded-md border border-success-200 bg-success-100 px-2 py-0.5 text-xs font-bold text-success-700">
                        {currentDiscount}% SAVINGS
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-neutral-500">
                  Inclusive of all GST &amp; import taxes. Free shipping on orders over ₹999.
                </p>
              </div>

              {/* Dynamic Product Variant / Model Selector */}
              {product.variantOptions && product.variantOptions.length > 0 && (
                <div className="mb-6">
                  <div className="mb-2.5 flex items-center justify-between">
                    <label className="font-display text-sm font-bold text-neutral-900">
                      {product.variantLabel || 'Choose Option'}:{' '}
                      <span className="font-semibold text-primary-600">
                        {selectedOption.label}
                      </span>
                    </label>
                    <div className="flex items-center gap-3">
                      {(product.category === 'Fashion' ||
                        product.subcategory?.toLowerCase().includes('dress') ||
                        product.subcategory?.toLowerCase().includes('kurta') ||
                        product.subcategory?.toLowerCase().includes('shoe') ||
                        product.subcategory?.toLowerCase().includes('jeans')) && (
                        <button
                          type="button"
                          onClick={() => setIsSizeGuideOpen(true)}
                          className="flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 underline underline-offset-2"
                        >
                          <Ruler className="h-3.5 w-3.5" /> Size Guide &amp; Fit Finder
                        </button>
                      )}
                      <span className="text-xs text-neutral-400">
                        {selectedOption.stockQty} in stock
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.variantOptions.map((opt) => {
                      const isSelected = selectedOption.label === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setSelectedOption(opt)}
                          className={`flex items-center justify-between rounded-lg border p-3 text-left transition-all ${
                            isSelected
                              ? 'border-primary-500 bg-primary-50/70 ring-2 ring-primary-500/20'
                              : 'border-neutral-200 bg-white hover:border-neutral-300'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <p
                              className={`text-xs font-bold ${
                                isSelected ? 'text-primary-900' : 'text-neutral-800'
                              }`}
                            >
                              {opt.label}
                            </p>
                          </div>
                          <span className="font-mono text-xs font-bold text-neutral-900">
                            {formatPrice(opt.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Color Swatch Options (if available) */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <p className="mb-2.5 font-display text-sm font-bold text-neutral-900">
                    Color Finish:{' '}
                    <span className="font-semibold text-neutral-600">
                      {selectedColor}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => {
                      const isSelected = selectedColor === color.name;
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => handleColorSelect(color.name, color.image)}
                          className={`group flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all ${
                            isSelected
                              ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500/20'
                              : 'border-neutral-200 bg-white hover:border-neutral-300'
                          }`}
                        >
                          <span
                            className="h-4 w-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-xs font-medium text-neutral-800">
                            {color.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Delivery ETA Checker */}
              <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <h3 className="mb-2 flex items-center gap-1.5 font-display text-sm font-bold text-neutral-900">
                  <MapPin className="h-4 w-4 text-primary-500" /> Check Delivery &amp; COD Availability
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value.replace(/\D/g, '').slice(0, 6));
                      setDeliveryChecked(false);
                    }}
                    placeholder="Enter 6-digit Pincode (e.g. 600001)"
                    maxLength={6}
                    className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-mono outline-none transition-colors focus:border-primary-500 focus:bg-white"
                  />
                  <Button
                    variant="outline"
                    onClick={() => pincode.length === 6 && setDeliveryChecked(true)}
                    className="border-primary-500 px-4 text-xs font-bold text-primary-600 hover:bg-primary-50"
                  >
                    Check
                  </Button>
                </div>
                {deliveryChecked && (
                  <div className="mt-3 flex items-center gap-2 rounded-md bg-success-50 p-2.5 text-xs font-medium text-success-800">
                    <Truck className="h-4 w-4 shrink-0 text-success-600" />
                    <span>
                      Standard Delivery by <strong className="font-bold">2 Business Days</strong>. Cash on Delivery (COD) eligible.
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons (Add to Cart / Buy Now) */}
              <div className="mt-auto flex flex-col gap-3 border-t border-neutral-100 pt-6 sm:flex-row">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 text-base font-bold shadow-md shadow-primary-500/20"
                >
                  {added ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Added to Cart!
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </Button>
                <Link href="/checkout" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleAddToCart}
                    className="w-full border-2 border-primary-500 text-base font-bold text-primary-600 hover:bg-primary-50"
                  >
                    Buy Now
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-6 text-center">
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-700">
                    100% Genuine
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <RotateCcw className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-700">
                    10-Day Returns
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success-100 text-success-600">
                    <Truck className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-700">
                    Free Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <FrequentlyBought products={[product, ...relatedProducts]} />
          </div>
        )}

        {/* Product Tabs: Description, Specs, Reviews */}
        <div className="mt-8 rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
          <ProductTabs
            description={product.description}
            highlights={product.highlights}
            specs={product.specs}
            reviewsComponent={
              <ReviewList
                productRating={product.rating}
                productReviewCount={product.reviewCount}
              />
            }
          />
        </div>
      </div>

      {/* Interactive Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.subcategory || product.category}
        onSelectSize={(sizeName) => {
          const match = product.variantOptions?.find(
            (v) => v.label.toLowerCase() === sizeName.toLowerCase()
          );
          if (match) {
            setSelectedOption(match);
          }
        }}
      />
    </div>
  );
}