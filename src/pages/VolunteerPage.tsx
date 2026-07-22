import React from 'react';
import { VolunteerSection } from '../components/VolunteerSection';
import { VolunteerRole } from '../types';
import { Users, Calendar, MapPin, CheckCircle2, Heart, Shield } from 'lucide-react';

interface VolunteerPageProps {
  onApplyRole: (role: VolunteerRole) => void;
}

export const VolunteerPage: React.FC<VolunteerPageProps> = ({ onApplyRole }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-900/60 px-3.5 py-1 rounded-full border border-amber-700/50">
            Global Placement Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Volunteer & Intern with Sambhali Trust
          </h1>
          <p className="text-amber-200/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Join hundreds of international volunteers who have shared their skills in Jodhpur and rural Setrawa. Roles range from English teaching and embroidery design to social media photography and health workshops.
          </p>
        </div>
      </section>

      {/* Main Interactive Volunteer Positions Section */}
      <VolunteerSection onApplyRole={onApplyRole} />

      {/* Living in Jodhpur FAQ Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-amber-50/80 rounded-3xl p-8 border border-amber-200 space-y-6">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Volunteer Orientation FAQ
            </span>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              What to Expect as a Sambhali Volunteer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-xs text-gray-700 leading-relaxed">
            <div className="p-4 bg-white rounded-2xl border border-amber-100 space-y-2">
              <h3 className="font-serif font-bold text-sm text-amber-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700" />
                Accommodation & Guesthouse
              </h3>
              <p>
                Volunteers stay in the official Sambhali Volunteer Guesthouse in Jodhpur, featuring private/shared rooms, home-cooked Rajasthani vegetarian meals, and Wi-Fi.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-amber-100 space-y-2">
              <h3 className="font-serif font-bold text-sm text-amber-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-700" />
                Cultural & Language Training
              </h3>
              <p>
                Every placement begins with an orientation week including basic Hindi/Marwari language classes, cultural etiquette guidelines, and Jodhpur heritage walking tours.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-amber-100 space-y-2">
              <h3 className="font-serif font-bold text-sm text-amber-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-700" />
                Duration & Visa Requirements
              </h3>
              <p>
                Minimum commitment is 4 weeks. Sambhali Trust provides official invitation letters for Indian Tourist/Employment visas and university internship credits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
