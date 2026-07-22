import React from 'react';
import { ProgramsSection } from '../components/ProgramsSection';
import { Program, CurrencyConfig } from '../types';
import { BookOpen, Heart, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProgramsPageProps {
  currency: CurrencyConfig;
  onSelectProgram: (p: Program) => void;
  onSponsorProgram: (p: Program) => void;
  onOpenDonate: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  currency,
  onSelectProgram,
  onSponsorProgram,
  onOpenDonate,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-900/60 px-3.5 py-1 rounded-full border border-amber-700/50">
            Grassroots Initiatives
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Our Core Empowerment Programs
          </h1>
          <p className="text-amber-200/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Every program at Sambhali Trust addresses a specific barrier facing Rajasthani women and children—from primary literacy and vocational training to higher education boarding and emergency legal shelter.
          </p>
        </div>
      </section>

      {/* Main Interactive Program Section */}
      <ProgramsSection
        currency={currency}
        onSelectProgram={onSelectProgram}
        onSponsorProgram={onSponsorProgram}
      />

      {/* Sheerni Boarding Home Deep Dive Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              Special Sponsorship Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
              Sheerni Boarding Homes: Sponsor a Girl's Education
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              In remote Thar desert villages, girls are routinely pulled out of school by age 10 due to poverty and distance. Sheerni Boarding Homes in Jodhpur provide complete safe lodging, 3 nutritious meals daily, private school tuition, and computer tutoring for 120+ young girls.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenDonate}
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-amber-950" />
                <span>Sponsor a Sheerni Scholar Today</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3 text-xs text-amber-100">
            <h3 className="font-serif font-bold text-amber-300 text-sm">What Your Sponsorship Covers:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full Private English-Medium School Fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Uniforms, Textbooks & Stationery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lodging, Healthcare & Nutritious Meals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Computer & Karate Self-Defense Training</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
