import React from 'react';
import { TESTIMONIALS } from '../data/sambhaliData';
import { Quote, Star, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 via-orange-950 to-indigo-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-400/30">
            Voices of Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50 mt-3">
            Real Stories, Real Lives Changed
          </h2>
          <p className="text-amber-100/80 mt-3 text-base">
            Hear directly from the women who gained self-reliance, the girls attending college, and the international volunteers who stood by their side.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-400 opacity-80" />
                <p className="font-serif italic text-sm sm:text-base text-amber-100/95 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-sm text-white">{t.name}</h3>
                  <p className="text-xs text-amber-300 font-medium">{t.role}</p>
                  <p className="text-[10px] text-amber-200/70">{t.center}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
