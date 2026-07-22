import React from 'react';
import { NewsSection } from '../components/NewsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface NewsPageProps {
  onSubscribe: (email: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onSubscribe }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-900/60 px-3.5 py-1 rounded-full border border-amber-700/50">
            Media & Field Updates
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            News, Stories & Transformations
          </h1>
          <p className="text-amber-200/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Read inspiring personal stories from our Sheerni graduates, international press features, and recent awards won by Sambhali Trust.
          </p>
        </div>
      </section>

      {/* Main News Grid & Newsletter Component */}
      <NewsSection onSubscribe={onSubscribe} />

      {/* Voices of Transformation Testimonials */}
      <TestimonialsSection />
    </div>
  );
};
