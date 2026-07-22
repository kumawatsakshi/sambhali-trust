import React from 'react';
import { Program, CurrencyConfig } from '../types';
import { X, MapPin, Users, Heart, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ProgramDetailModalProps {
  program: Program | null;
  currency: CurrencyConfig;
  onClose: () => void;
  onSponsor: (program: Program) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  currency,
  onClose,
  onSponsor,
}) => {
  if (!program) return null;

  const costFormatted = `${currency.symbol}${Math.round(
    program.sponsorshipCost.amountUSD * currency.rate
  ).toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        {/* Relative Header Image */}
        <div className="relative h-64 overflow-hidden bg-amber-100 shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="bg-amber-600/90 text-amber-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {program.impactMetric}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {program.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-amber-200">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {program.location}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                {program.beneficiaries}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-gray-800 text-sm leading-relaxed">
          <p>{program.fullDesc}</p>

          <div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-3">
              Key Program Elements:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((h, i) => (
                <div key={i} className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-900 text-amber-50 rounded-2xl flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider block">
                Direct Sponsorship Rate
              </span>
              <p className="text-xs text-amber-200">{program.sponsorshipCost.description}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xl font-serif font-bold text-amber-300">
                {costFormatted}
              </span>
              <span className="text-[10px] block text-amber-200">{program.sponsorshipCost.period}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 text-xs font-semibold rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSponsor(program);
              }}
              className="flex-1 py-3 text-xs font-bold rounded-xl bg-amber-800 hover:bg-amber-900 text-white shadow-md flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Sponsor This Program</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
