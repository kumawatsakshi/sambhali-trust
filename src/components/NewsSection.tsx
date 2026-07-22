import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/sambhaliData';
import { Calendar, Clock, ArrowRight, Download, Mail, CheckCircle2 } from 'lucide-react';

interface NewsSectionProps {
  onSubscribe: (email: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSubscribe }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      onSubscribe(newsletterEmail);
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="news" className="py-20 bg-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Latest Updates & Impact Reports
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mt-3">
            News, Media & Annual Audits
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Stay informed with our quarterly updates, awards, student achievements, and audited annual reports.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden bg-amber-100 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-amber-900 text-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-amber-800 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{article.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Annual Report Download & Newsletter Bar */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              Download Official Audits
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
              Transparency & FCRA Financial Reports
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed max-w-xl">
              Access Sambhali Trust’s 2025-2026 Annual Impact Audit, FCRA returns, and UN Progress Reports transparently.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Sambhali Trust 2025-2026 Annual Report PDF download started.');
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Annual Report (PDF)</span>
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-4 h-4" />
              <span>Sambhali Quarterly Newsletter</span>
            </div>
            <p className="text-xs text-amber-100">
              Get heartwarming updates, student letters, and boutique release notes directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/80 border border-emerald-400 text-emerald-100 rounded-xl text-xs flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Thank you! You are subscribed to our newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSub} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-white text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
