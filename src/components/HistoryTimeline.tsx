import React from 'react';
import { TIMELINE_EVENTS } from '../data/sambhaliData';
import { Flag, Award, Calendar, Sparkles } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Our Journey Since 2007
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mt-3">
            19 Years of Unwavering Empowerment
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            From 1 small room with 1 sewing machine in Jodhpur to an internationally recognized movement transforming over 15,000 lives across Rajasthan.
          </p>
        </div>

        {/* Founder Quote Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 mb-16 max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-700 to-orange-800 text-white font-serif font-bold text-3xl flex items-center justify-center shrink-0 shadow-md">
              GSR
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <p className="font-serif italic text-lg sm:text-xl text-amber-950 leading-relaxed">
                "When you educate and empower one woman, you uplift an entire family and break centuries of poverty. True dignity comes through self-reliance."
              </p>
              <div>
                <strong className="text-sm font-bold text-gray-900 block">Govind Singh Rathore</strong>
                <span className="text-xs text-amber-800 font-medium">Founder & Managing Trustee, Sambhali Trust Jodhpur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-amber-200 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Year Pin */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-amber-700 text-white font-bold text-xs flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Flag className="w-3.5 h-3.5" />
              </div>

              {/* Desktop Year Marker */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24 font-serif font-bold text-xl text-amber-900">
                {event.year}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-amber-100/90 shadow-xs hover:shadow-lg transition-all">
                <div className="sm:hidden font-serif font-bold text-lg text-amber-900 mb-1">
                  {event.year}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif font-bold text-xl text-gray-900">
                    {event.title}
                  </h3>
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {event.impactKey}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
