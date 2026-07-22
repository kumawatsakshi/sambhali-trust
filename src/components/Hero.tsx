import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Award, Users, BookOpen, Sparkles, MapPin } from 'lucide-react';
import heroImg from '../assets/images/sambhali_hero_1784700261026.jpg';

interface HeroProps {
  onOpenDonate: () => void;
  onOpenAi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onOpenAi }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-orange-50/30 to-white pt-8 pb-16 lg:py-20">
      {/* Decorative Rajasthani Pattern Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top UN & Recognition Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300/60 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span>UN ECOSOC Special Consultative Status NGO</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 font-medium bg-white px-3 py-1 rounded-full border border-gray-200">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Jodhpur & Thar Desert, Rajasthan, India</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] tracking-tight">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800">Women & Girls</span> in Rajasthan
            </h1>

            <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl">
              Sambhali Trust is a non-profit organization breaking cycles of poverty, caste discrimination, and gender inequality through basic literacy, vocational sewing, boarding home education, 24/7 emergency legal aid, and fair-trade livelihood.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 fill-amber-200 text-amber-200" />
                <span>Donate & Change a Life</span>
              </button>

              <button
                onClick={() => scrollTo('programs')}
                className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-gray-900 font-semibold text-base px-6 py-3.5 rounded-xl border border-amber-200 shadow-xs hover:border-amber-300 transition-all"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 text-amber-700" />
              </button>

              <button
                onClick={onOpenAi}
                className="inline-flex items-center gap-2 text-amber-900 font-semibold text-sm px-4 py-3 rounded-xl bg-amber-100/80 hover:bg-amber-200/80 transition-all border border-amber-300/50"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Ask Sambhali AI Guide</span>
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-amber-100 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>80G Tax Exemption (India)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>501(c)(3) Partner Receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Direct Impact Audit</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-amber-100 group">
              <img
                src={heroImg}
                alt="Women at Sambhali Trust Empowerment Center Jodhpur"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-amber-100 text-gray-900 shadow-lg">
                <p className="font-serif font-bold text-sm text-amber-900">
                  "Sambhali taught me to read, write, and sew. Now I earn my own living."
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  — Kamla Devi, Graduate Artisan & Mother of 3, Jodhpur
                </p>
              </div>
            </div>

            {/* Floating Impact Card */}
            <div className="absolute -bottom-6 -left-6 bg-amber-900 text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-amber-700 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-600/40 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <p className="font-bold text-lg text-amber-300">15,000+ Women</p>
                <p className="text-xs text-amber-100/90">Transformed since 2007</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-amber-200/60">
          <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs text-center hover:border-amber-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">15,000+</div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Women Empowered</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs text-center hover:border-amber-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">12</div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Empowerment Centers</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs text-center hover:border-amber-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">1,200+</div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Sheerni Girls Educated</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs text-center hover:border-amber-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">100%</div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Fair Trade Enterprise</p>
          </div>
        </div>
      </div>
    </section>
  );
};
