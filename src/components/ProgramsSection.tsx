import React, { useState } from 'react';
import { Program, CurrencyConfig } from '../types';
import { PROGRAMS } from '../data/sambhaliData';
import { MapPin, Users, Heart, ArrowRight, CheckCircle2, BookOpen, Shield, Gift, Sparkles } from 'lucide-react';

interface ProgramsSectionProps {
  currency: CurrencyConfig;
  onSelectProgram: (p: Program) => void;
  onSponsorProgram: (p: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  currency,
  onSelectProgram,
  onSponsorProgram,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'empowerment', label: 'Women’s Empowerment' },
    { id: 'education', label: 'Child Education' },
    { id: 'livelihood', label: 'Vocational & Livelihood' },
    { id: 'legal_health', label: 'Legal Aid & Helpline' },
    { id: 'relief', label: 'Desert Health & Relief' },
  ];

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  const formatCost = (usd: number) => {
    const amount = Math.round(usd * currency.rate);
    return `${currency.symbol}${amount.toLocaleString()}`;
  };

  return (
    <section id="programs" className="py-20 bg-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Targeted Community Action
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mt-3">
            Our Core Empowerment Programs
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            From urban slums in Jodhpur to isolated hamlets in the Thar Desert, Sambhali Trust addresses systemic barriers through targeted, grassroots education and vocational initiatives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Program Card Image */}
              <div className="relative h-52 overflow-hidden bg-amber-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-amber-900/90 text-amber-200 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider border border-amber-500/30">
                  {program.impactMetric}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    {program.location}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <Users className="w-3.5 h-3.5 text-amber-300" />
                    {program.beneficiaries}
                  </span>
                </div>
              </div>

              {/* Program Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {program.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-gray-100">
                    {program.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sponsorship Cost Box & Buttons */}
                <div className="pt-4 border-t border-amber-100 space-y-3">
                  <div className="flex items-center justify-between bg-amber-50/80 p-3 rounded-2xl border border-amber-200/60">
                    <div>
                      <span className="text-[11px] text-amber-900 font-semibold uppercase tracking-wider block">
                        Sponsorship Rate
                      </span>
                      <p className="text-xs text-gray-600 leading-none mt-0.5">
                        {program.sponsorshipCost.period}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-serif font-bold text-amber-900">
                        {formatCost(program.sponsorshipCost.amountUSD)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProgram(program)}
                      className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-amber-100 text-gray-800 hover:text-amber-900 transition-colors border border-gray-200 text-center"
                    >
                      Full Details
                    </button>
                    <button
                      onClick={() => onSponsorProgram(program)}
                      className="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white shadow-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Sponsor Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
