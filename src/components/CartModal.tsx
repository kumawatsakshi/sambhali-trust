import React, { useState } from 'react';
import { CartItem, CurrencyConfig } from '../types';
import { ShoppingBag, X, Trash2, Plus, Minus, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: CurrencyConfig;
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onSuccessOrder: (orderId: string) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onSuccessOrder,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');

  if (!isOpen) return null;

  const totalUsd = items.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const totalConverted = Math.round(totalUsd * currency.rate);
  const formattedTotal = `${currency.symbol}${totalConverted.toLocaleString()}`;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `BOUTIQUE-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmitted(true);
    onSuccessOrder(id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif font-bold text-lg text-amber-50">Sambhali Boutique Bag</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Artisan Order Placed!
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                Thank you for purchasing fair-trade handicrafts directly from Sambhali Trust artisans in Jodhpur. Confirmation details and dispatch tracking will be emailed to <strong className="text-gray-900">{buyerEmail}</strong>.
              </p>
              <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 font-mono font-bold">
                Order Value: {formattedTotal}
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClearCart();
                  onClose();
                }}
                className="bg-amber-800 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md"
              >
                Close Bag
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-amber-300 mx-auto" />
              <p className="text-sm text-gray-600 font-medium">Your Sambhali Boutique bag is empty.</p>
              <button
                onClick={onClose}
                className="text-xs font-bold text-amber-800 bg-amber-100 px-4 py-2 rounded-xl border border-amber-200"
              >
                Explore Artisan Handicrafts
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Item List */}
              <div className="space-y-3">
                {items.map((item) => {
                  const itemTotal = Math.round(item.product.priceUSD * currency.rate) * item.quantity;
                  return (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs text-gray-900 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[10px] text-amber-800 font-medium">
                          Artisan: {item.product.artisanName}
                        </p>
                        <p className="text-xs font-bold text-gray-900 mt-0.5">
                          {currency.symbol}
                          {itemTotal.toLocaleString()}
                        </p>
                      </div>

                      {/* Qty Controls */}
                      <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-gray-200">
                        <button
                          onClick={() => onUpdateQty(item.product.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.product.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmitOrder} className="pt-4 border-t border-gray-200 space-y-4">
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between text-xs font-serif font-bold text-amber-950">
                  <span>Total (Fair Trade Artisan Support):</span>
                  <span className="text-base text-amber-900">{formattedTotal}</span>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none"
                  />
                  <textarea
                    required
                    rows={2}
                    placeholder="Shipping Address *"
                    value={buyerAddress}
                    onChange={(e) => setBuyerAddress(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Submit Artisan Order ({formattedTotal})</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
