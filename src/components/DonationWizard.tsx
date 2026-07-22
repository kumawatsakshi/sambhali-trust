import React, { useState } from 'react';
import { CurrencyConfig } from '../types';
import { DONATION_PRESETS } from '../data/sambhaliData';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  CreditCard,
  Gift,
  Building,
  RefreshCw,
  X,
  FileText,
} from 'lucide-react';

interface DonationWizardProps {
  currency: CurrencyConfig;
  isOpen: boolean;
  onClose: () => void;
  preselectedUsd?: number;
  preselectedProgramTitle?: string;
  onSuccessDonation: (amountFormatted: string, allocation: string) => void;
}

export const DonationWizard: React.FC<DonationWizardProps> = ({
  currency,
  isOpen,
  onClose,
  preselectedUsd,
  preselectedProgramTitle,
  onSuccessDonation,
}) => {
  const [selectedUsd, setSelectedUsd] = useState<number>(preselectedUsd || 50);
  const [customUsd, setCustomUsd] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [allocation, setAllocation] = useState<string>(
    preselectedProgramTitle || 'General Empowerment Fund'
  );
  const [step, setStep] = useState<'calculator' | 'payment' | 'receipt'>('calculator');

  // Donor form
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPan, setPanNumber] = useState(''); // for 80G in India
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'upi'>('card');

  if (!isOpen) return null;

  const currentUsdValue = customUsd ? parseFloat(customUsd) || 0 : selectedUsd;
  const convertedAmount = Math.round(currentUsdValue * currency.rate);
  const formattedAmount = `${currency.symbol}${convertedAmount.toLocaleString()}`;

  const getImpactDescription = (usd: number) => {
    if (usd <= 25) return 'Funds 1 full month of private schooling, books & tuition for a rural Sheerni girl.';
    if (usd <= 50) return 'Gifts 1 brand new sewing machine & starter material kit to a graduate woman.';
    if (usd <= 100) return 'Provides 1 year of health checkups, hygiene supplies & self-defense training for 5 women.';
    if (usd <= 250) return 'Sponsors 1 boarding girl at Sheerni Home for 3 months (lodging, 3 daily meals & education).';
    return 'Funds an entire rural empowerment center in Setrawa desert for 1 full month!';
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('receipt');
    onSuccessDonation(formattedAmount, allocation);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-indigo-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-bold text-xs uppercase px-3 py-1 rounded-full border border-amber-400/30 mb-2">
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            Tax-Deductible Donation
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
            {step === 'receipt' ? 'Thank You For Your Kindness!' : 'Support Sambhali Trust'}
          </h2>
          <p className="text-amber-100/90 text-xs sm:text-sm mt-1">
            {step === 'receipt'
              ? 'Your donation has been successfully recorded and allocated.'
              : 'Empowering women & children in Rajasthan with 100% financial transparency.'}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {step === 'calculator' && (
            <div className="space-y-6">
              {/* One-time vs Monthly Switcher */}
              <div className="flex bg-amber-50 p-1.5 rounded-2xl border border-amber-200/80">
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isMonthly
                      ? 'bg-amber-800 text-white shadow-md'
                      : 'text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Monthly Sustaining Impact</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    !isMonthly
                      ? 'bg-amber-800 text-white shadow-md'
                      : 'text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>One-Time Gift</span>
                </button>
              </div>

              {/* Amount Presets */}
              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                  Select Donation Amount ({currency.code})
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {DONATION_PRESETS.map((preset) => {
                    const presetConv = Math.round(preset.amountUSD * currency.rate);
                    const isSelected = !customUsd && selectedUsd === preset.amountUSD;
                    return (
                      <button
                        key={preset.amountUSD}
                        type="button"
                        onClick={() => {
                          setSelectedUsd(preset.amountUSD);
                          setCustomUsd('');
                        }}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? 'bg-amber-800 text-white border-amber-900 shadow-md font-bold'
                            : 'bg-white text-gray-800 border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 font-medium'
                        }`}
                      >
                        <div className="text-sm font-serif font-bold">
                          {currency.symbol}
                          {presetConv}
                        </div>
                        <div className="text-[10px] opacity-80">
                          (~${preset.amountUSD})
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Field */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-600">Custom USD Amount:</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-500 font-bold">$</span>
                    <input
                      type="number"
                      min="5"
                      placeholder="e.g. 150"
                      value={customUsd}
                      onChange={(e) => setCustomUsd(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Impact Display Box */}
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Your Impact Outcome
                  </span>
                  <span className="text-lg font-serif font-bold text-amber-950">
                    {formattedAmount} {isMonthly ? '/ month' : ''}
                  </span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed pt-1 font-medium">
                  {getImpactDescription(currentUsdValue)}
                </p>
              </div>

              {/* Allocation Selector */}
              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                  Allocate Donation To:
                </label>
                <select
                  value={allocation}
                  onChange={(e) => setAllocation(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-800 focus:outline-none focus:border-amber-600 bg-white"
                >
                  <option value="General Empowerment Fund">General Empowerment Fund (Where needed most)</option>
                  <option value="Sheerni Educational Boarding Homes">Sheerni Educational Boarding Homes</option>
                  <option value="Primary Empowerment Centers (Jodhpur & Setrawa)">Primary Empowerment Centers</option>
                  <option value="Nirbhaya Toll-Free Helpline & Legal Aid">Nirbhaya 24/7 Helpline & Legal Aid</option>
                  <option value="Sambhali Boutique Graduate Sewing Kits">Sambhali Graduate Sewing Machines</option>
                  <option value="Thar Desert Rural Health & Water Filters">Thar Desert Health & Sanitary Kits</option>
                </select>
              </div>

              {/* Continue to Payment Button */}
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Donation ({formattedAmount})</span>
                <Heart className="w-4 h-4 fill-white" />
              </button>
            </div>
          )}

          {step === 'payment' && (
            <form onSubmit={handleSimulatePayment} className="space-y-5">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-500">Donating: </span>
                  <strong className="text-amber-900 font-bold">{formattedAmount}</strong>
                  <span className="text-gray-500"> ({isMonthly ? 'Monthly' : 'One-Time'})</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('calculator')}
                  className="text-amber-700 underline font-semibold text-[11px]"
                >
                  Change Amount
                </button>
              </div>

              {/* Donor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma / Sarah Jenkins"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Email Address (for receipt) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              {/* 80G PAN / Tax Info */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  PAN Number / Tax ID (Optional - for 80G / 501c3 tax receipt)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ABCDE1234F"
                  value={donorPan}
                  onChange={(e) => setPanNumber(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-amber-800 text-white border-amber-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-amber-800 text-white border-amber-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Building className="w-4 h-4" />
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-amber-800 text-white border-amber-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>UPI / NetBanking</span>
                  </button>
                </div>
              </div>

              {/* Simulated Card Fields if card */}
              {paymentMethod === 'card' && (
                <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Card Number (4242 •••• •••• 4242)"
                    defaultValue="4242 •••• •••• 4242"
                    className="w-full p-2.5 text-xs rounded-xl border border-gray-300 font-mono"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      defaultValue="12/28"
                      className="p-2.5 text-xs rounded-xl border border-gray-300 font-mono"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      defaultValue="123"
                      className="p-2.5 text-xs rounded-xl border border-gray-300 font-mono"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                <span>Confirm Donation of {formattedAmount}</span>
              </button>
            </form>
          )}

          {step === 'receipt' && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Transaction Successful!
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Tax receipt and confirmation letter have been dispatched to{' '}
                  <strong className="text-gray-900">{donorEmail || 'your email'}</strong>.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <span className="text-gray-600">Receipt Ref:</span>
                  <span className="font-mono font-bold text-amber-900">ST-2026-8849</span>
                </div>
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <span className="text-gray-600">Donor Name:</span>
                  <span className="font-semibold text-gray-900">{donorName || 'Generous Donor'}</span>
                </div>
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <span className="text-gray-600">Amount Donated:</span>
                  <span className="font-bold text-amber-900 text-sm">{formattedAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Allocated Project:</span>
                  <span className="font-medium text-gray-900">{allocation}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 text-blue-900 rounded-xl text-xs flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-700 shrink-0" />
                <span>India 80G Exemption / US 501(c)(3) Partner tax receipt attached.</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm py-3 rounded-xl transition-all"
              >
                Close & Return to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
