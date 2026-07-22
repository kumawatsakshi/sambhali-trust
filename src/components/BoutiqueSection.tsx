import React, { useState } from 'react';
import { BoutiqueProduct, CurrencyConfig } from '../types';
import { BOUTIQUE_PRODUCTS } from '../data/sambhaliData';
import { ShoppingBag, Heart, Sparkles, Check, Tag, ShieldCheck, Info } from 'lucide-react';

interface BoutiqueSectionProps {
  currency: CurrencyConfig;
  onAddToCart: (p: BoutiqueProduct) => void;
  onQuickView: (p: BoutiqueProduct) => void;
}

export const BoutiqueSection: React.FC<BoutiqueSectionProps> = ({
  currency,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Handicrafts' },
    { id: 'textiles', label: 'Scarves & Textiles' },
    { id: 'toys', label: 'Plush Animals & Toys' },
    { id: 'bags', label: 'Block-Print Totes' },
    { id: 'stationery', label: 'Kantha Journals' },
    { id: 'apparel', label: 'Aprons & Wear' },
  ];

  const filteredProducts =
    selectedCat === 'all'
      ? BOUTIQUE_PRODUCTS
      : BOUTIQUE_PRODUCTS.filter((p) => p.category === selectedCat);

  const formatPrice = (usd: number) => {
    const amount = Math.round(usd * currency.rate);
    return `${currency.symbol}${amount.toLocaleString()}`;
  };

  const handleAdd = (product: BoutiqueProduct) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="boutique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Banner Card */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-bold text-xs uppercase px-3 py-1 rounded-full border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Sambhali Boutique • Social Enterprise
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
              Handmade Crafts with Heart & Heritage
            </h2>
            <p className="text-amber-100/90 text-base leading-relaxed">
              When you purchase from Sambhali Boutique, you buy directly from women artisans in Jodhpur and Thar desert villages. 100% of profit allocations sustain fair artisan wages, healthcare funds, and children’s literacy.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Fair Trade Certified Wages
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                100% Eco-Friendly Materials
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Worldwide Shipping
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCat === cat.id
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-amber-50/80 text-gray-700 hover:bg-amber-100 border border-amber-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-amber-100/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-amber-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {product.isBestSeller && (
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                    Best Seller
                  </span>
                )}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-amber-900 font-serif font-bold text-sm">
                  {formatPrice(product.priceUSD)}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Artisan Credit Badge */}
                  <div className="mt-4 p-2.5 bg-amber-50/80 rounded-xl border border-amber-200/50 flex items-center gap-2.5">
                    <Tag className="w-4 h-4 text-amber-700 shrink-0" />
                    <div className="text-[11px]">
                      <span className="text-gray-500">Artisan: </span>
                      <strong className="text-amber-900 font-semibold">{product.artisanName}</strong>
                      <span className="text-gray-500"> ({product.artisanCenter})</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="w-full text-xs font-semibold py-2.5 rounded-xl bg-gray-100 hover:bg-amber-100 text-gray-800 transition-colors border border-gray-200 flex items-center justify-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5 text-gray-600" />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                      addedIds[product.id]
                        ? 'bg-emerald-700 text-white'
                        : 'bg-amber-800 hover:bg-amber-900 text-white'
                    }`}
                  >
                    {addedIds[product.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
