'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Clock, TrendingUp, X, Mic, MicOff, Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { toast } from '@/components/ui/Toast';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isLensOpen, setIsLensOpen] = useState(false);
  const [lensImagePreview, setLensImagePreview] = useState<string | null>(null);
  const [lensScanning, setLensScanning] = useState(false);

  const debouncedQuery = useDebounce(query, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const recentSearches = ['Floral Maxi Dress', 'Biba Kurta', 'Samsung Galaxy S24', 'Nike Air Max', 'Levi\'s Jeans'];
  const trendingSearches = ['Vadodara Silk Sarees', 'MacBook Air M3', 'Prestige Cookware', 'Fossil Watch'];

  const suggestions = debouncedQuery.length >= 2
    ? MOCK_PRODUCTS
        .filter((p) =>
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery?: string) => {
    const q = searchQuery || query;
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  // Voice Search Handler (Web Speech API)
  const toggleVoiceSearch = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast({
        type: 'info',
        title: 'Voice Search Simulation',
        message: 'Your browser microphone is restricted. Simulating voice query: "Floral Maxi Dress"',
      });
      setQuery('Floral Maxi Dress');
      setIsOpen(true);
      setTimeout(() => handleSearch('Floral Maxi Dress'), 1200);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          type: 'info',
          title: 'Listening...',
          message: 'Speak now (e.g. "Floral dress", "Sneakers", "Samsung")',
        });
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
        toast({
          type: 'success',
          title: 'Heard:',
          message: `"${transcript}"`,
        });
        setTimeout(() => handleSearch(transcript), 600);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        // graceful simulated fallback
        setQuery('Anarkali Kurta');
        handleSearch('Anarkali Kurta');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  // Lens / Visual Search Image Upload Handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setLensImagePreview(result);
      setIsLensOpen(true);
      setLensScanning(true);

      setTimeout(() => {
        setLensScanning(false);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyLensSearch = (keyword: string) => {
    setIsLensOpen(false);
    setLensImagePreview(null);
    setQuery(keyword);
    handleSearch(keyword);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[560px]">
      <div className="flex items-center rounded-full border border-neutral-300 bg-white transition-all focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 shadow-sm hover:border-neutral-400">
        <Search className="ml-4 h-4 w-4 shrink-0 text-neutral-400" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search products, brands (e.g. Kurta, Dress, Galaxy S24)..."
          className="w-full bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
          aria-label="Search products"
        />

        {query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            className="mr-1 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Hidden File Input for Visual Search */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />

        {/* Visual Lens Search Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Search by Image (NexLens)"
          className="mr-1.5 p-1.5 rounded-full text-neutral-500 hover:text-primary-600 hover:bg-primary-50 transition"
          aria-label="Visual search by image"
        >
          <Camera className="h-4 w-4" />
        </button>

        {/* Voice Search Mic Button */}
        <button
          type="button"
          onClick={toggleVoiceSearch}
          title="Voice Search"
          className={`mr-2 p-1.5 rounded-full transition ${
            isListening
              ? 'bg-error-500 text-white animate-pulse'
              : 'text-neutral-500 hover:text-primary-600 hover:bg-primary-50'
          }`}
          aria-label="Voice search"
        >
          {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </button>

        {/* Search Submit Button */}
        <button
          onClick={() => handleSearch()}
          className="mr-1.5 rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700 shadow-sm active:scale-95"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {suggestions.length > 0 ? (
            <div className="p-2">
              <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Products &amp; Matches
              </p>
              {suggestions.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    router.push(`/products/${product.slug}`);
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-neutral-50 group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-11 w-11 rounded-lg object-cover border border-neutral-100 group-hover:scale-105 transition"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-neutral-900 group-hover:text-primary-600">
                      {product.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      <span className="font-medium text-neutral-700">{product.brand}</span> · {product.category}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-3">
              {recentSearches.length > 0 && (
                <>
                  <p className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    <Clock className="h-3 w-3" /> Recent Searches
                  </p>
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-left text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                      >
                        <Clock className="h-3 w-3 text-neutral-400" />
                        <span className="truncate">{term}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
              <div className="my-1 border-t border-neutral-100" />
              <p className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                <TrendingUp className="h-3 w-3 text-accent-500" /> Trending in Vadodara
              </p>
              <div className="flex flex-wrap gap-1.5 px-2 pt-1 pb-1">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 transition hover:bg-primary-50 hover:text-primary-600"
                  >
                    <TrendingUp className="h-3 w-3 text-accent-500" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* NexLens Visual Search Modal */}
      {isLensOpen && lensImagePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-neutral-100 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2 text-neutral-900 font-bold">
                <Camera className="w-5 h-5 text-primary-600" />
                <span>NexLens Visual Search</span>
              </div>
              <button
                onClick={() => {
                  setIsLensOpen(false);
                  setLensImagePreview(null);
                }}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 flex items-center justify-center">
              <img
                src={lensImagePreview}
                alt="Lens search target"
                className="w-full h-full object-contain"
              />
              {lensScanning && (
                <div className="absolute inset-0 bg-primary-900/30 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-3 text-white font-bold text-sm">Analyzing visual patterns...</p>
                </div>
              )}
            </div>

            {!lensScanning && (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-success-700 bg-success-50 p-2.5 rounded-lg">
                  <Sparkles className="w-4 h-4" /> Identified Visual Matches:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleApplyLensSearch('Floral Maxi Dress')}
                    className="p-2.5 rounded-xl border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 text-left text-xs font-bold text-neutral-800 transition"
                  >
                    👗 Floral Dresses &amp; Ethnic
                  </button>
                  <button
                    onClick={() => handleApplyLensSearch('Nike Air Max')}
                    className="p-2.5 rounded-xl border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 text-left text-xs font-bold text-neutral-800 transition"
                  >
                    👟 Sneakers &amp; Footwear
                  </button>
                  <button
                    onClick={() => handleApplyLensSearch('Samsung Galaxy S24')}
                    className="p-2.5 rounded-xl border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 text-left text-xs font-bold text-neutral-800 transition"
                  >
                    📱 Smartphone &amp; Tech
                  </button>
                  <button
                    onClick={() => handleApplyLensSearch('Fossil Men Watch')}
                    className="p-2.5 rounded-xl border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 text-left text-xs font-bold text-neutral-800 transition"
                  >
                    ⌚ Luxury Watches
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
