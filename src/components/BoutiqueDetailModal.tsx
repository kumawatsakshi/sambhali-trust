import React from 'react';
import { BoutiqueProduct, CurrencyConfig } from '../types';
import { X, Tag, ShoppingBag, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BoutiqueDetailModalProps {
  product: BoutiqueProduct | null;
  currency: CurrencyConfig;
  onClose: () => void;
  onAddToCart: (p: BoutiqueProduct) => void;
}

export const BoutiqueDetailModal: React.FC<BoutiqueDetailModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const priceFormatted = `${currency.symbol}${Math.round(
    product.priceUSD * currency.rate
  ).toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-amber-100 overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <div className="relative h-64 overflow-hidden bg-amber-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mt-1">
                {product.name}
              </h3>
            </div>
            <span className="font-serif font-bold text-xl text-amber-900">
              {priceFormatted}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200/60 space-y-1 text-xs">
            <div className="flex items-center gap-2 text-amber-900 font-semibold">
              <Tag className="w-4 h-4 text-amber-700" />
              <span>Crafted by {product.artisanName}</span>
            </div>
            <p className="text-[11px] text-gray-600">
              Center: {product.artisanCenter}
            </p>
            <p className="text-[11px] text-gray-600">
              Materials: {product.material}
            </p>
          </div>

          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Add to Bag ({priceFormatted})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
