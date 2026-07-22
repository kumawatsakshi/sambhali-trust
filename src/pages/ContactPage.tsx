import React, { useState } from 'react';
import { MapPin, PhoneCall, Mail, Clock, Send, CheckCircle2, ShieldCheck, Heart, Globe } from 'lucide-react';

interface ContactPageProps {
  onOpenDonate: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenDonate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-900/60 px-3.5 py-1 rounded-full border border-amber-700/50">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">
            Contact Sambhali Trust & Helplines
          </h1>
          <p className="text-amber-200/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Whether you want to visit our centers in Jodhpur, inquire about volunteer opportunities, or reach our 24/7 Nirbhaya Helpline, we welcome your message.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Direct Contact Info & Helplines */}
          <div className="lg:col-span-5 space-y-6 text-gray-800 text-xs sm:text-sm">
            <div className="p-6 bg-gradient-to-br from-amber-900 to-orange-950 text-white rounded-3xl shadow-lg space-y-4 border border-amber-700/50">
              <span className="bg-red-500/20 text-red-300 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-red-400/30">
                24/7 Emergency Support
              </span>
              <h3 className="font-serif font-bold text-xl text-amber-50">
                Nirbhaya Domestic Violence Helpline
              </h3>
              <p className="text-amber-200/90 text-xs leading-relaxed">
                Confidential legal, medical, and shelter assistance for women facing abuse or gender-based violence in Rajasthan.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="p-2.5 bg-amber-500 text-amber-950 rounded-xl font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-serif font-bold text-amber-300 block">
                    +91 98280 88880
                  </span>
                  <span className="text-[10px] text-amber-200">Toll-free in Rajasthan • 24/7 Operational</span>
                </div>
              </div>
            </div>

            {/* Headquarters Jodhpur */}
            <div className="p-6 bg-amber-50/80 rounded-3xl border border-amber-200 space-y-4">
              <h3 className="font-serif font-bold text-base text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-800" />
                Headquarters Jodhpur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sambhali Trust, Plot No. 1, Opp. City Hospital, Rai Ka Bagh, Jodhpur, Rajasthan 342001, India
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-700" />
                  <span>General Email: <strong>info@sambhali.org</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>Office Hours: Mon–Sat, 9:00 AM – 6:00 PM IST</span>
                </p>
              </div>
            </div>

            {/* Global Chapters */}
            <div className="p-6 bg-white rounded-3xl border border-amber-200 space-y-3">
              <h3 className="font-serif font-bold text-base text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-800" />
                International Partner Chapters
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600">
                <p>• <strong>Sambhali U.S.:</strong> usa@sambhali.org</p>
                <p>• <strong>Friends of Sambhali UK:</strong> uk@sambhali.org</p>
                <p>• <strong>Sambhali Austria/EU:</strong> eu@sambhali.org</p>
                <p>• <strong>Sambhali Switzerland:</strong> ch@sambhali.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-amber-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Our Jodhpur team will review your message regarding "{subject}" and reply to <strong>{email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="bg-amber-800 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600 text-xs mb-4">
                    Fill in your details and topic below.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-gray-700 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Inquiry Subject *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Volunteering & Internships">Volunteering & Internships</option>
                    <option value="Sponsorship & Donations">Sponsorship & Donations</option>
                    <option value="Sambhali Boutique Bulk Orders">Sambhali Boutique Bulk Orders</option>
                    <option value="Media & Academic Research">Media & Academic Research</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we assist you today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message to Sambhali Jodhpur</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
