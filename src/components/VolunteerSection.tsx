import React, { useState } from 'react';
import { VOLUNTEER_ROLES, FAQS } from '../data/sambhaliData';
import { VolunteerRole } from '../types';
import { Heart, MapPin, Calendar, Clock, CheckCircle2, ChevronDown, Sparkles, Send, UserCheck, Shield } from 'lucide-react';

interface VolunteerSectionProps {
  onApplyRole: (role: VolunteerRole) => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ onApplyRole }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="volunteer" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Join Our Global Family
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mt-3">
            Volunteer & Intern in Rajasthan
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Share your skills, teach English, design crafts, or provide medical care. Sambhali Trust offers unforgettable 4-week to 1-year volunteer immersions in Jodhpur city and Thar desert hamlets.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {VOLUNTEER_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md">
                      {role.department}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-2">
                      {role.title}
                    </h3>
                  </div>

                  <div className="text-right text-xs space-y-1 shrink-0">
                    <div className="flex items-center gap-1 text-gray-600 font-medium bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-900 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/50">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>{role.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.description}
                </p>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1.5">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between">
                <div className="text-[11px] text-gray-500">
                  <span className="font-semibold text-gray-700">Requirements: </span>
                  {role.requirements.slice(0, 2).join(' • ')}
                </div>
                <button
                  onClick={() => onApplyRole(role)}
                  className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-sm space-y-4">
          <div className="text-center mb-6">
            <h3 className="font-serif font-bold text-2xl text-gray-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Everything you need to know about volunteering with Sambhali Trust in Jodhpur
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-amber-100 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 bg-amber-50/40 hover:bg-amber-50 flex items-center justify-between gap-4 font-semibold text-sm text-gray-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-700 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 text-xs text-gray-600 leading-relaxed border-t border-amber-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
