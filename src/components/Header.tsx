import React, { useState } from 'react';
import { Menu, X, Heart, Globe, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
  currency?: { code: string; symbol: symbol | string };
  onChangeCurrency?: (code: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenDonate,
  currency = { code: 'USD', symbol: '$' },
  onChangeCurrency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const navLinks = [
    { name: 'ABOUT US', id: 'about' },
    { name: 'OUR WORK', id: 'work' },
    { name: 'GET INVOLVED', id: 'get-involved' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const currencies = [
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)' },
    { code: 'INR', symbol: '₹', label: 'INR (₹)' },
    { code: 'CAD', symbol: 'C$', label: 'CAD (C$)' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* Main Header Container */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#802829] text-amber-100 flex items-center justify-center font-bold text-xl shrink-0 shadow-md border-2 border-amber-300/60"
            >
              <span>S</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#802829] group-hover:text-[#6b2122] transition-colors">
                sambhali
              </span>
              <span className="text-[9px] sm:text-[10px] text-gray-500 font-semibold tracking-widest uppercase -mt-1">
                SELF-ESTEEM • UNITY • INDEPENDENCE
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs sm:text-sm font-bold tracking-wider transition-colors py-2 ${
                    isActive ? 'text-[#802829]' : 'text-gray-700 hover:text-[#802829]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#802829] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Header Items */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="hover:text-[#802829] text-gray-700 transition-colors flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-3 py-2 rounded-full text-xs font-bold"
              >
                <Globe className="w-3.5 h-3.5 text-[#802829]" />
                <span>{currency.code} ({currency.symbol})</span>
              </button>

              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-1 w-28 bg-white text-gray-800 rounded-xl shadow-xl border border-amber-200 py-1 z-50 text-xs">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onChangeCurrency && onChangeCurrency(c.code);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-amber-50 font-medium flex items-center justify-between ${
                        currency.code === c.code ? 'text-[#802829] font-bold bg-amber-50' : ''
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-gray-400">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+919828088880"
              className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-bold text-[#802829] bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-3.5 py-2 rounded-full transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#802829]" />
              <span>24/7 HELPLINE</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenDonate}
              className="bg-[#48532B] hover:bg-[#394222] text-white text-xs sm:text-sm font-bold tracking-wider px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>DONATE</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onOpenDonate}
              className="bg-[#48532B] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs"
            >
              DONATE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#802829] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-3 shadow-xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left py-2.5 text-sm font-bold tracking-wider border-b border-gray-50 ${
                    currentPage === link.id ? 'text-[#802829] bg-amber-50/50 px-3 rounded-lg' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="tel:+919828088880"
                  className="w-full text-center py-2.5 text-xs font-bold text-[#802829] bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center gap-2"
                >
                  <ShieldAlert className="w-4 h-4 text-[#802829]" />
                  <span>24/7 HELPLINE (+91 98280 88880)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

