import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonate }) => {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSignedUp(true);
    }
  };

  return (
    <footer className="bg-[#FAF7F2] text-gray-800 border-t border-amber-200/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Newsletter Callout Banner */}
        <div className="bg-[#FAF0E6] p-8 sm:p-10 rounded-2xl border border-amber-200/80 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#802829] uppercase tracking-wider">
            GET UPDATES AND GET INVOLVED!
          </h3>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full sm:w-80 px-4 py-3 rounded-full border border-gray-300 bg-white text-sm focus:outline-hidden focus:border-[#802829]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider transition-all"
            >
              {signedUp ? 'THANK YOU!' : 'SIGN UP'}
            </button>
          </form>
          <p className="text-xs text-gray-500 italic">We respect your privacy.</p>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-gray-700 leading-relaxed">
          {/* Address & Social Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif font-bold text-sm text-[#802829] uppercase tracking-wider">
              Sambhali Trust
            </h4>
            <div className="space-y-1">
              <p>Bungalow No. 1-A,</p>
              <p>Old Public Park Lane,</p>
              <p>Near K.N.College Road,</p>
              <p>Jodhpur, Rajasthan, 342001</p>
              <p>India</p>
            </div>
            <div className="pt-2 space-y-1">
              <p className="font-semibold text-gray-900">0091-(0)-784 990 7439</p>
              <p className="text-[#802829] font-medium">info@sambhali.org</p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-[#802829]">
              <a href="#" className="hover:opacity-80"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-80"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-80"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-80"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-80"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* About Us Column */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif font-bold text-sm text-[#802829] uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">About Sambhali</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Founder</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Organigram</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Staff</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Board</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Patron</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Advisory Board</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Annual Reports</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">UN Status</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#802829] transition-colors">Our Policies</button></li>
            </ul>
          </div>

          {/* Our Work Column */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif font-bold text-sm text-[#802829] uppercase tracking-wider">
              Our Work
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => handleNav('work')} className="hover:text-[#802829] transition-colors">Saheli - Vocational</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-[#802829] transition-colors">Samarth - Health & Safety</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-[#802829] transition-colors">Shiksha - Education</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-[#802829] transition-colors">Sambhali Development Foundation</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-[#802829] transition-colors">COVID-19 & Relief</button></li>
              <li><button onClick={() => handleNav('blog')} className="hover:text-[#802829] transition-colors">Press & Media</button></li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif font-bold text-sm text-[#802829] uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={onOpenDonate} className="hover:text-[#802829] font-semibold text-[#802829] transition-colors">Donate</button></li>
              <li><button onClick={() => handleNav('get-involved')} className="hover:text-[#802829] transition-colors">Volunteer</button></li>
              <li><button onClick={() => handleNav('get-involved')} className="hover:text-[#802829] transition-colors">Partner with Us</button></li>
              <li><button onClick={() => handleNav('get-involved')} className="hover:text-[#802829] transition-colors">Independent Organizations Abroad</button></li>
              <li><button onClick={() => handleNav('get-involved')} className="hover:text-[#802829] transition-colors">Visit Sambhali</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-6 border-t border-gray-200/80 text-center text-[11px] text-gray-500">
          <p>© 2007–2026 Sambhali Trust Jodhpur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
