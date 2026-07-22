import React, { useState } from 'react';
import { Play, ArrowRight, Heart, Users, GraduationCap, Shield, Sparkles, Quote, MapPin, CheckCircle2, X, ChevronLeft, ChevronRight, Award, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDonate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('jodhpur');

  const testimonials = [
    {
      quote: "Before joining Sambhali, I was forbidden to attend school or leave my house. Today I run my own sewing workshop, earn my own income, and send my daughters to school.",
      author: "Payal Kanwar",
      role: "Sambhali Saheli Graduate & Entrepreneur, Jodhpur",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      location: "Jodhpur City",
    },
    {
      quote: "Volunteering at the Sheerni Boarding Home changed my perspective completely. The resilience and warmth of the girls in Rajasthan is unforgettable.",
      author: "Sarah Jenkins",
      role: "International Education Volunteer, UK",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      location: "Sheerni Boarding Home",
    },
    {
      quote: "Sambhali Trust provides a sanctuary for women facing violence and poverty. Their grassroots model is genuine, transparent, and deeply effective.",
      author: "Dr. Sunita Sharma",
      role: "Community Health Advocate, Jaipur",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      location: "Statewide Network",
    },
  ];

  const locationsData: Record<string, {
    title: string;
    subtitle: string;
    image: string;
    stats: string;
    description: string;
    highlights: string[];
  }> = {
    jodhpur: {
      title: 'JODHPUR HEADQUARTERS & EMPOWERMENT CENTERS',
      subtitle: 'Vocational Training, Sheerni Boarding & Nirbhaya Crisis Refuge',
      image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800',
      stats: '45,000+ Women Trained • 24/7 Helpline • 3 Centers',
      description: 'Our primary urban centers in Jodhpur house Sambhali Saheli tailoring workshops, basic literacy rooms, the Sheerni Girls Boarding Home, and our 24/7 Nirbhaya crisis sanctuary.',
      highlights: ['Free sewing machine upon 1-year graduation', 'Daily meals and tutoring at Sheerni Boarding', 'Pro-bono legal counsel and medical aid'],
    },
    setrawa: {
      title: 'SETRAWA THAR DESERT OUTPOST',
      subtitle: 'Rural Primary Learning & Clean Water Infrastructure',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
      stats: '15+ Desert Villages • 3,400 Girls Educated',
      description: 'Setrawa is located in the heart of the Thar Desert. Our center overcomes extreme rural isolation, providing young girls with primary education and clean drinking water access through the Amritam project.',
      highlights: ['Sakhiyon Ki Baadi learning outposts', 'Rainwater harvesting tank installations', 'Child marriage prevention workshops'],
    },
    jaisalmer: {
      title: 'JAISALMER ARTISAN & VOCATIONAL HUB',
      subtitle: 'Heritage Embroidery, Bag Crafting & Microfinance SHGs',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      stats: '1,800+ Artisan Women • 40 Self-Help Groups',
      description: 'Partnering with Mahindra Holidays, our Jaisalmer centers train women in traditional Rajasthani mirror work and fair-trade craft creation, connecting them directly with retail buyers.',
      highlights: ['Direct sales via Sambhali Boutique', 'Micro-loan SHG community pools', 'Business financial literacy courses'],
    },
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden">
      {/* Animated Hero Banner Section */}
      <section className="relative w-full h-[520px] sm:h-[620px] overflow-hidden bg-gray-950">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600"
          alt="Sambhali Trust Rajasthani Women"
          className="w-full h-full object-cover object-center brightness-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full text-white text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#802829]/95 backdrop-blur-md text-amber-100 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Sambhali Trust Rajasthan • Est. 2007</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-[1.12] text-amber-50 tracking-tight"
            >
              Empowering Women & Children in Rajasthan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Breaking the cycle of poverty and domestic abuse through vocational education, health support, legal shelter, and economic independence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenDonate}
                className="bg-[#802829] hover:bg-[#6b2122] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>SUPPORT OUR MISSION</span>
              </button>
              <button
                onClick={() => onNavigate('work')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-7 py-4 rounded-full uppercase tracking-wider transition-all border border-white/30 flex items-center gap-2 hover:border-amber-300"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Floating Pill Badge */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute bottom-8 right-8 bg-black/60 backdrop-blur-md border border-amber-400/30 p-4 rounded-2xl items-center gap-3 text-white max-w-xs shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-[#802829] flex items-center justify-center shrink-0 text-amber-300">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">Grassroots Impact</span>
            <span className="text-xs text-gray-200 font-medium">100% transparent local execution across Western Rajasthan</span>
          </div>
        </motion.div>
      </section>

      {/* Animated Impact Stat Counter Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-amber-100">
          <motion.div
            whileHover={{ y: -4 }}
            className="space-y-1 p-2"
          >
            <div className="flex items-center justify-center text-[#802829] mb-2">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-4xl font-bold text-[#802829] block tracking-tight">
              77,800+
            </span>
            <span className="text-xs text-gray-600 font-bold uppercase tracking-wider block">
              Women & Children Reached
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="space-y-1 p-2 pt-4 md:pt-2"
          >
            <div className="flex items-center justify-center text-[#48532B] mb-2">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-4xl font-bold text-[#48532B] block tracking-tight">
              8 Centers
            </span>
            <span className="text-xs text-gray-600 font-bold uppercase tracking-wider block">
              Empowerment & Education
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="space-y-1 p-2 pt-4 md:pt-2"
          >
            <div className="flex items-center justify-center text-[#D99B26] mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-4xl font-bold text-[#D99B26] block tracking-tight">
              24/7 Helpline
            </span>
            <span className="text-xs text-gray-600 font-bold uppercase tracking-wider block">
              Nirbhaya Violence Support
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="space-y-1 p-2 pt-4 md:pt-2"
          >
            <div className="flex items-center justify-center text-[#802829] mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-4xl font-bold text-gray-900 block tracking-tight">
              3 Regions
            </span>
            <span className="text-xs text-gray-600 font-bold uppercase tracking-wider block">
              Jodhpur, Jaisalmer & Thar
            </span>
          </motion.div>
        </div>
      </section>

      {/* Meaning & Root Philosophy Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 bg-[#FAF7F2] rounded-3xl border border-amber-200/80 shadow-xs relative overflow-hidden"
        >
          <Quote className="w-20 h-20 text-amber-200/40 absolute -top-4 -left-4 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
              OUR ROOT PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#802829] tracking-tight uppercase leading-snug">
              IN HINDI, 'SAMBHALI' MEANS "STRENGTHENING OF THE DEPRIVED."
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We are an independent Indian community-based non-profit working to strengthen vulnerable communities through vocational training, education, health support, and livelihood initiatives. Our programs aim to improve well-being, promote inclusion, and create self-sustaining opportunities for women, youth, and marginalized groups in Rajasthan.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-[#802829] font-bold text-sm hover:underline"
              >
                <span>Discover our history and founder's vision</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NEW ANIMATED INTERACTIVE SECTION: Sambhali Regional Empowerment Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-[#802829]" />
            REGIONAL IMPACT LOCATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Explore Sambhali's Centers Across Rajasthan
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Select a location below to explore where our empowerment centers, boarding homes, and desert projects operate.
          </p>
        </div>

        {/* Location Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'jodhpur', label: 'Jodhpur Headquarters' },
            { id: 'setrawa', label: 'Thar Desert (Setrawa)' },
            { id: 'jaisalmer', label: 'Jaisalmer Artisan Hub' },
          ].map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedLocation === loc.id
                  ? 'bg-[#802829] text-white border-[#802829] shadow-md scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:text-[#802829]'
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

        {/* Location Detail Display Card with Motion Animation */}
        <AnimatePresence mode="wait">
          {locationsData[selectedLocation] && (
            <motion.div
              key={selectedLocation}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-md grid md:grid-cols-12 gap-8 items-center text-left"
            >
              <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md relative group h-72 sm:h-80">
                <img
                  src={locationsData[selectedLocation].image}
                  alt={locationsData[selectedLocation].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-500/30">
                  {locationsData[selectedLocation].stats}
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#802829] uppercase tracking-wider block">
                    {locationsData[selectedLocation].subtitle}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
                    {locationsData[selectedLocation].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {locationsData[selectedLocation].description}
                </p>

                <div className="space-y-2 pt-2 border-t border-amber-200/60">
                  <strong className="text-xs font-bold text-gray-900 uppercase tracking-wider block">KEY ACTIVITIES:</strong>
                  <ul className="space-y-1.5 text-xs text-gray-800">
                    {locationsData[selectedLocation].highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('work')}
                    className="bg-[#802829] hover:bg-[#6b2122] text-white font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                  >
                    <span>LEARN ABOUT THIS REGION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
            CORE PILLARS OF DEVELOPMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#802829]">
            Comprehensive Grassroots Empowerment
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Addressing social inequality through holistic programs designed for sustainable self-reliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1: HEALTH & SAFETY */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col group"
          >
            <div className="h-60 overflow-hidden relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Health & Safety Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-amber-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-700/50">
                SAMARTH PROJECT
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#802829]">
                  HEALTH & SAFETY
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Providing 24/7 Nirbhaya helpline, emergency shelter, legal counsel, and free medical checkups for women facing gender violence.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>24/7 Helpline (+91 98280 88880)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>Legal defense & emergency shelter</span>
                </li>
              </ul>

              <button
                onClick={() => onNavigate('work')}
                className="text-xs font-bold text-[#802829] flex items-center justify-between hover:underline pt-2 border-t border-gray-100 group/btn"
              >
                <span>EXPLORE HEALTH & SAFETY</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Pillar 2: EDUCATION */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col group"
          >
            <div className="h-60 overflow-hidden relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800"
                alt="Education Support"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-amber-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-700/50">
                SHIKSHA INITIATIVE
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#802829]">
                  EDUCATION SUPPORT
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Operating Sheerni Boarding Homes and primary empowerment centers to keep underprivileged young girls in school.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>3 Boarding Homes for rural girls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>Scholarships & higher education grants</span>
                </li>
              </ul>

              <button
                onClick={() => onNavigate('work')}
                className="text-xs font-bold text-[#802829] flex items-center justify-between hover:underline pt-2 border-t border-gray-100 group/btn"
              >
                <span>EXPLORE EDUCATION</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Pillar 3: VOCATIONAL TRAINING */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col group"
          >
            <div className="h-60 overflow-hidden relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800"
                alt="Vocational Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-amber-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-700/50">
                SAHELI ENTERPRISE
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#802829]">
                  VOCATIONAL TRAINING
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Teaching tailoring, embroidery, math, and microfinance so women can launch fair-trade artisan businesses.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>Free sewing machine distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#48532B]" />
                  <span>Fair-trade Sambhali Boutique outlet</span>
                </li>
              </ul>

              <button
                onClick={() => onNavigate('work')}
                className="text-xs font-bold text-[#802829] flex items-center justify-between hover:underline pt-2 border-t border-gray-100 group/btn"
              >
                <span>EXPLORE VOCATIONAL WORK</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Documentary Highlight Section with Trigger Modal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gray-950 text-white h-[380px] sm:h-[450px] flex items-center justify-center text-center shadow-2xl border border-amber-900/40">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1600"
            alt="Sambhali Video Documentary"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative z-10 space-y-5 px-6 max-w-2xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="w-16 h-16 bg-[#802829] hover:bg-[#a03233] text-white rounded-full flex items-center justify-center mx-auto shadow-xl cursor-pointer transition-colors border-2 border-amber-300"
            >
              <Play className="w-8 h-8 fill-white ml-1" />
            </motion.button>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
              DOCUMENTARY FILM & COMMUNITY VOICES
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-amber-50">
              Watch Sambhali Trust in Action
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Experience how our empowerment centers, volunteer workshops, and community helplines bring dignity, security, and education to women across Rajasthan.
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 rounded-3xl max-w-4xl w-full p-4 relative shadow-2xl border border-amber-500/30"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center relative">
                <iframe
                  title="Sambhali Trust Documentary"
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-left text-white space-y-1">
                <h4 className="font-bold text-lg text-amber-100">Sambhali Trust Grassroots Journey</h4>
                <p className="text-xs text-gray-400">Documentary highlighting women empowerment and education in Rajasthan, India.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Animated Testimonial Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-amber-200/80 space-y-8 text-left relative">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
                VOICES OF SAMBHALI
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Stories of Resilience & Hope
              </h2>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white border border-amber-200 text-gray-700 hover:text-[#802829] hover:bg-amber-50 shadow-xs transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white border border-amber-200 text-gray-700 hover:text-[#802829] hover:bg-amber-50 shadow-xs transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white p-8 rounded-2xl border border-amber-100 shadow-sm grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-4 flex justify-center">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-amber-200/80 shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <Quote className="w-10 h-10 text-amber-700/30" />
                <p className="text-sm sm:text-lg text-gray-800 leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="font-bold text-base text-gray-900">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <span className="text-xs text-[#802829] font-semibold block">
                    {testimonials[activeTestimonial].role}
                  </span>
                  <span className="text-[11px] text-gray-500 block mt-0.5">
                    📍 {testimonials[activeTestimonial].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Latest Blog Post & Latest Project Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* LATEST BLOG POST */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
                LATEST BLOG POST
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">
                New Sambhali Shakti Center Opens its Doors in Jodhpur
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Inaugurated at the Government Observation & Juvenile Home, this center will allow more than sixty women and children to access lessons for their personal and professional development.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('blog')}
                className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all"
              >
                READ FULL STORY
              </button>
            </div>
          </motion.div>

          {/* LATEST PROJECT */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
                LATEST PROJECT
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">
                Introducing Amritam: Environmental & Ecology Project
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Focuses on preserving and nurturing the environment through tree planting, water sanitation, and sustainable community ecology in rural Thar Desert communities.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all"
              >
                DISCOVER AMRITAM
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Callout Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-[#802829] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg border border-amber-700/50"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
              JOIN OUR INTERNATIONAL VOLUNTEER NETWORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              VOLUNTEERS ARE CRUCIAL TO THE WORK WE DO
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
              Share your skills in teaching, sewing, healthcare, marketing, or administrative support directly with women and children in Jodhpur and Jaisalmer.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              BECOME A VOLUNTEER TODAY
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};


