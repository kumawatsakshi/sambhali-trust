import React, { useState } from 'react';
import { VolunteerRole } from '../types';
import { X, Send, CheckCircle2, Calendar, MapPin, Shield } from 'lucide-react';

interface VolunteerAppModalProps {
  role: VolunteerRole | null;
  onClose: () => void;
  onSuccess: (roleTitle: string) => void;
}

export const VolunteerAppModal: React.FC<VolunteerAppModalProps> = ({
  role,
  onClose,
  onSuccess,
}) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [startDate, setStartDate] = useState('');
  const [motivation, setMotivation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!role) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess(role.title);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-indigo-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-400/30">
            {role.department} • {role.location}
          </span>
          <h3 className="text-xl font-serif font-bold text-amber-50 mt-1">
            Apply: {role.title}
          </h3>
          <p className="text-xs text-amber-200/80">Duration: {role.duration}</p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900">
                Application Submitted!
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-gray-900">{applicantName}</strong>. Our Sambhali Volunteer Coordinator will review your submission and email you at <strong className="text-gray-900">{applicantEmail}</strong> within 48 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-amber-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hannah Weber"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Nationality & Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Germany / USA / India"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Expected Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  Why do you want to volunteer with Sambhali Trust in Rajasthan? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share a brief statement about your skills and motivation..."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
