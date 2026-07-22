import React from 'react';
import { ImpactStats } from '../components/ImpactStats';
import { CurrencyConfig } from '../types';
import { ShieldCheck, Award, FileText, Download, CheckCircle2 } from 'lucide-react';

interface ImpactPageProps {
  currency: CurrencyConfig;
  onOpenDonate: () => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ currency, onOpenDonate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-900/60 px-3.5 py-1 rounded-full border border-amber-700/50">
            Accountability & Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Impact Metrics & Financial Audits
          </h1>
          <p className="text-amber-200/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Sambhali Trust maintains 100% financial transparency. 88% of all donor contributions directly fund field projects, boarding homes, and medical aid.
          </p>
        </div>
      </section>

      {/* Main Interactive Impact & Allocation Section */}
      <ImpactStats currency={currency} onOpenDonate={onOpenDonate} />

      {/* FCRA & Audited Reports Download Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-amber-200 p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-100">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                Audited Financial Reports & FCRA Compliance
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Audited independently by Chartered Accountants in India and verified by international tax partners.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                FCRA Reg: 125560183
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 block">Annual Audit Report 2024-2025</span>
                <span className="text-[11px] text-gray-500">PDF • 2.4 MB</span>
              </div>
              <button
                onClick={() => alert('Downloading Sambhali Annual Audit Report 2024-2025...')}
                className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-xs"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 block">FCRA Quarterly Return Q4 2025</span>
                <span className="text-[11px] text-gray-500">PDF • 1.1 MB</span>
              </div>
              <button
                onClick={() => alert('Downloading FCRA Foreign Contribution Return Q4 2025...')}
                className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-xs"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 block">UN ECOSOC Status Document</span>
                <span className="text-[11px] text-gray-500">PDF • 850 KB</span>
              </div>
              <button
                onClick={() => alert('Downloading UN ECOSOC Consultative Status Credential...')}
                className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-xs"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
