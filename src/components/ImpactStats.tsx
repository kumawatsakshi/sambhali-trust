import React from 'react';
import { Heart, PieChart, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { CurrencyConfig } from '../types';

interface ImpactStatsProps {
  currency: CurrencyConfig;
  onOpenDonate: () => void;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ currency, onOpenDonate }) => {
  const fundAllocations = [
    { category: 'Sheerni Education & Boarding', percent: 40, color: 'bg-amber-600', text: 'text-amber-800' },
    { category: 'Empowerment & Vocational Centers', percent: 30, color: 'bg-orange-600', text: 'text-orange-800' },
    { category: 'Nirbhaya Helpline & Legal Aid', percent: 15, color: 'bg-indigo-600', text: 'text-indigo-800' },
    { category: 'Rural Desert Health & Hygiene', percent: 15, color: 'bg-rose-600', text: 'text-rose-800' },
  ];

  const formatAmount = (usd: number) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  return (
    <section id="impact" className="py-16 bg-gradient-to-b from-white via-amber-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Transparency & Financial Stewardship
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-3">
            Where Your Support Creates Change
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Sambhali Trust operates with absolute financial accountability. Every contribution directly funds girls' education, women’s vocational training, emergency domestic violence response, and clean water initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Fund Allocation Progress */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-amber-700" />
                <h3 className="font-serif font-bold text-xl text-gray-900">Fund Allocation Breakdown</h3>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Audited NGO 2026
              </span>
            </div>

            {/* Stacked Progress Bar */}
            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex shadow-inner">
              {fundAllocations.map((item) => (
                <div
                  key={item.category}
                  style={{ width: `${item.percent}%` }}
                  className={`${item.color} h-full transition-all duration-500`}
                  title={`${item.category}: ${item.percent}%`}
                />
              ))}
            </div>

            {/* Legend List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {fundAllocations.map((item) => (
                <div key={item.category} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <span className={`w-3 h-3 rounded-full ${item.color} mt-1 shrink-0`} />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-sm text-gray-900">
                      <span>{item.percent}%</span>
                      <span className="text-xs text-gray-500 font-normal">of budget</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Zero Administrative Overhead Guarantee:</strong> 100% of public individual donations go directly to center activities and student care. Administrative expenses are covered by foundational grants and sales from Sambhali Boutique.
              </p>
            </div>
          </div>

          {/* Transformation Impact Journey Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-900 via-orange-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                The Power of Your Donation ({currency.code})
              </span>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-amber-100 mb-6">
              Tangible Real-World Outcomes
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between gap-4 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm shrink-0">
                    {formatAmount(25)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">1 Month Schooling</p>
                    <p className="text-xs text-amber-200/80">Covers private school tuition & books for a Sheerni girl</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between gap-4 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm shrink-0">
                    {formatAmount(50)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">1 Sewing Machine Kit</p>
                    <p className="text-xs text-amber-200/80">Gifts a brand new sewing machine to a graduate woman</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between gap-4 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm shrink-0">
                    {formatAmount(100)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">1 Year Health & Hygiene</p>
                    <p className="text-xs text-amber-200/80">Sanitary kits, self-defense & medical checkups for 5 women</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-200/80">Ready to make a difference?</span>
              <button
                onClick={onOpenDonate}
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-amber-950" />
                <span>Calculate My Donation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
