import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Heart, Users, Globe, Download, MapPin, ArrowRight } from 'lucide-react';

interface GetInvolvedPageProps {
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onOpenDonate }) => {
  return (
    <div className="space-y-16 py-12 pb-20">
      {/* Title & Hero Header */}
      <section className="bg-gradient-to-r from-[#802829] via-[#6b2122] to-[#48532B] text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/30 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block">
            Support Women & Girls in Rajasthan
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-amber-50 tracking-wide uppercase">
            GET INVOLVED
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Whether by donating funds, volunteering on-site in Jodhpur or Jaisalmer, or partnering with us internationally, every action brings dignity and self-reliance to vulnerable lives.
          </p>
        </div>
      </section>

      {/* Row 1: DONATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md relative group">
            <img
              src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800"
              alt="Donate to Sambhali Trust"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 space-y-5">
            <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
              DIRECT FINANCIAL SUPPORT
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
              DONATE TO SAMBHALI
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              100% of public donations fund our grassroots centers, sewing machine distributions, Sheerni boarding homes, and Nirbhaya 24/7 crisis helplines. Your generosity transforms lives across Rajasthan.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="bg-[#802829] hover:bg-[#6b2122] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>MAKE A DONATION NOW</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: VOLUNTEER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
          <div className="md:col-span-7 space-y-5 order-2 md:order-1">
            <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
              ON-GROUND & REMOTE EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
              VOLUNTEER WITH US
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Dedicated volunteers from across the globe share their skills in English teaching, math tutoring, medical care, photography, and administrative support. Gain authentic insights into Indian grassroots activism.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-white" />
                <span>APPLY TO VOLUNTEER</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md order-1 md:order-2 group">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
              alt="Volunteer with Sambhali"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Grid: PARTNER WITH US & INTERNATIONAL NETWORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-amber-200/80 text-left space-y-4 flex flex-col justify-between shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#D99B26] uppercase tracking-widest block">
              INSTITUTIONAL COLLABORATION
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#802829]">
              PARTNER WITH US
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              We collaborate with universities, CSR funds, international NGOs, and foundations to scale educational, environmental, and healthcare initiatives in rural Rajasthan.
            </p>
          </div>
          <a href="#contact" className="text-xs font-bold text-[#802829] hover:underline flex items-center gap-1">
            <span>Become an Institutional Partner</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-amber-200/80 text-left space-y-4 flex flex-col justify-between shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
              GLOBAL FRIENDS OF SAMBHALI
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#802829]">
              INDEPENDENT FRIENDS ABROAD
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Independent Sambhali support groups operate in Germany, Austria, Switzerland, UK, France, and the USA to raise funds and coordinate local awareness events.
            </p>
          </div>
          <a href="#friends" className="text-xs font-bold text-[#802829] hover:underline flex items-center gap-1">
            <span>Find an International Partner Group</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* VISIT SAMBHALI POLICY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 p-8 sm:p-10 rounded-3xl border border-amber-300/60 text-left space-y-3 shadow-sm">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#802829]" />
            <h2 className="text-xl font-serif font-bold text-[#802829] uppercase tracking-wider">
              VISIT SAMBHALI CENTERS IN JODHPUR
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We welcome visitors to see our Empowerment Centers and Boutique in Jodhpur. To ensure visitor appointments do not disrupt daily classes while contributing directly to project sustainability, we request advance registration and a nominal visitor contribution.
          </p>
        </div>
      </section>

      {/* SHARE OUR WORK & SOCIAL MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8 pt-4">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
            SPREAD THE WORD
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900">
            JOIN THE CONVERSATION
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Follow Sambhali Trust on social channels to witness real-time daily updates from our centers in Rajasthan.
          </p>

          <div className="flex items-center justify-center gap-6 text-[#802829] pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-[#802829] border border-gray-100"><Instagram className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-[#802829] border border-gray-100"><Facebook className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-[#802829] border border-gray-100"><Twitter className="w-5 h-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-[#802829] border border-gray-100"><Youtube className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-[#802829] border border-gray-100"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <button
            onClick={() => alert("Downloading Sambhali Trust Program Overview PDF...")}
            className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>DOWNLOAD PRINTABLE PROGRAM FLYERS</span>
          </button>
        </div>
      </section>
    </div>
  );
};

