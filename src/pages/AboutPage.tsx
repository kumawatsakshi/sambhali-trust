import React from 'react';
import { Award, Globe, Heart, Shield, Users, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const leadershipTeam = [
    { name: 'Shyama Tanwar', title: 'Managing Trustee & HR Lead', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300' },
    { name: 'Rajshree Rathore', title: 'Donor & Volunteer Relations', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300' },
    { name: 'Vimlesh Solanki', title: 'Special Education & SHG Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300' },
    { name: 'Gurdeep Minhas', title: 'Chief Financial Accountant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' },
    { name: 'Virendra Chouhan', title: 'Strategic Representative', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' },
    { name: 'Bhom Singh Bhati', title: 'Jaisalmer Program Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
    { name: 'Monica Jod', title: 'Outreach & Volunteer Coordinator', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300' },
  ];

  return (
    <div className="space-y-16 py-12 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#802829] via-[#6b2122] to-[#48532B] text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/30 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block">
            Established in January 2007 • Jodhpur, Rajasthan
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-amber-50 tracking-wide uppercase">
            ABOUT SAMBHALI TRUST
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            An independent Indian community-based organization dedicated to breaking cycles of violence, illiteracy, and caste discrimination for women and children across Rajasthan.
          </p>
        </div>
      </section>

      {/* Top About Intro Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center text-left">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-amber-200/60 relative group">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
              alt="Sambhali Trust Beneficiaries"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                Jodhpur & Jaisalmer Grassroots Centers
              </span>
              <p className="text-xs text-amber-100 mt-1">
                Uplifting scheduled caste women through education and financial autonomy.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#802829]">
              Dignity, Independence & Community Inclusion
            </h2>
            <p>
              Since its creation in January 2007, Sambhali Trust has worked tirelessly to transform the lives of Rajasthani women by providing them with access to formal education, traditional vocational skills (tailoring, embroidery, handicraft production), and establishing women's microfinance self-help groups.
            </p>
            <p>
              We empower women by teaching them about their constitutional human rights, offering crisis intervention, legal aid, and safe house refuge in cases of domestic violence or forced marriage.
            </p>
            <p className="font-semibold text-gray-900 bg-amber-50 p-4 rounded-2xl border-l-4 border-[#802829]">
              We prioritize women from Scheduled Castes, Scheduled Tribes, and impoverished religious minorities facing triple discrimination based on caste, poverty, and gender.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK & OUR IMPACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center text-left bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
                GEOGRAPHIC FOOTPRINT
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                WHERE WE WORK
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Sambhali Trust's headquarters and primary centers are based in Jodhpur, Setrawa, and Jaisalmer in Western Rajasthan, India.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
                MEASURABLE OUTCOMES
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                OUR CUMULATIVE IMPACT
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-amber-100">
                  <Building className="w-4 h-4 text-[#802829]" />
                  <span>8 Primary Centers</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-amber-100">
                  <Users className="w-4 h-4 text-[#48532B]" />
                  <span>3 Sheerni Homes</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-amber-100">
                  <Award className="w-4 h-4 text-[#D99B26]" />
                  <span>77,890+ Beneficiaries</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-amber-100">
                  <Shield className="w-4 h-4 text-[#802829]" />
                  <span>21,700+ Helpline Calls</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Where we work and impact"
              className="w-full h-88 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* OUR FOUNDER Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-md grid md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-amber-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Govind Singh Rathore Founder"
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <p className="text-[11px] text-gray-500 italic p-3 text-center bg-amber-50">
              Sambhali Founder Govind Singh Rathore with students in Jodhpur
            </p>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
              FOUNDER'S VISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#802829]">
              GOVIND SINGH RATHORE
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              When Govind was 15 years old, his father passed away, leaving him as the head of his household. Witnessing firsthand how patriarchal customs stripped widows and young women of respect and independence, Govind vowed to build a community movement that restores self-esteem, equality, and protection to every woman in Rajasthan.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs px-7 py-3 rounded-full uppercase tracking-wider transition-all shadow-sm"
              >
                EXPLORE SAMBHALI PROGRAMS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LEADERSHIP Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 text-center">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
            DEDICATED TEAM
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
            OUR EXECUTIVE LEADERSHIP
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {leadershipTeam.map((leader, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-48 object-cover rounded-xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-base">{leader.name}</h4>
                <p className="text-xs text-[#802829] font-medium mt-1">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL CONSULTATIVE STATUS BY THE ECOSOC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-10 bg-gradient-to-br from-amber-900 to-orange-950 text-white rounded-3xl border border-amber-700/50 shadow-xl space-y-4 text-left">
          <span className="bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            United Nations Global Recognition
          </span>
          <h3 className="text-2xl font-serif font-bold text-amber-50">
            SPECIAL CONSULTATIVE STATUS WITH UN ECOSOC
          </h3>
          <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed">
            Sambhali Trust was granted Special Consultative Status by the Economic and Social Council (ECOSOC) of the United Nations in 2015, enabling our voice to advocate for Rajasthani women's rights on global stages.
          </p>

          <div className="pt-2 border-t border-amber-800/60 space-y-1">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              EU Transparency Register Registration
            </h4>
            <p className="text-xs text-amber-200/80">
              Official Registration ID: RED ID: 4316529103302-87 • Validated for international transparency and governance standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

