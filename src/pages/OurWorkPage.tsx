import React, { useState } from 'react';
import { Program } from '../types';
import { Heart, CheckCircle2, Shield, BookOpen, Sparkles, Info, X, MapPin, Clock, Award, Users, ArrowRight } from 'lucide-react';

interface OurWorkPageProps {
  onNavigate: (page: string) => void;
  onOpenDonate: () => void;
  onSelectProgram?: (p: Program) => void;
}

interface ProgramDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  badge: string;
  duration: string;
  location: string;
  targetAudience: string;
  overview: string;
  curriculum: string[];
  impactPoints: string[];
  shgDetails?: string;
  ctaText: string;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramDetail | null>(null);

  const categories = [
    { id: 'all', name: 'ALL PROGRAMS' },
    { id: 'saheli', name: 'VOCATIONAL & LIVELIHOOD' },
    { id: 'samarth', name: 'HEALTH & SAFETY' },
    { id: 'shiksha', name: 'EDUCATION' },
    { id: 'foundation', name: 'ENVIRONMENT & ECOLOGY' },
  ];

  const programDetails: Record<string, ProgramDetail> = {
    saheli: {
      id: 'saheli',
      title: 'SAMBHALI SAHELI',
      subtitle: 'Vocational Training, Basic Literacy & Microfinance Empowerment',
      category: 'Vocational & Livelihood',
      image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800',
      badge: 'Livelihood & Microfinance',
      duration: '1-Year Course (3 Hours/Day, 6 Days/Week)',
      location: 'Jodhpur & Rural Rajasthan Empowerment Centers',
      targetAudience: 'Illiterate and underprivileged women and young girls from Scheduled Castes, Scheduled Tribes, and low-income families.',
      overview: 'Sambhali Saheli is our flagship vocational program dedicated to equipping women with market-relevant tailoring skills, functional literacy, and economic independence. Over 1 year, students gain expertise in garment cutting, sewing, and traditional Rajasthani embroidery while attending Hindi, English, math, and constitutional rights classes.',
      curriculum: [
        'Advanced Tailoring, Cutting, Machine Maintenance & Garment Construction',
        'Traditional Rajasthani Mirror Work, Block Printing & Embroidery Techniques',
        'Functional Hindi Literacy, Conversational English & Accounting Mathematics',
        'Human Rights Education, Domestic Violence Laws, Health & Sanitation Workshops',
        'Self-Help Group (SHG) Financial Training, Savings Protocols & Micro-Loans',
      ],
      impactPoints: [
        'Over 1,180 women trained and certified in professional tailoring',
        'Free sewing machine awarded to every graduate upon completing the 1-year course',
        '85%+ of graduates generate independent monthly incomes or start home businesses',
        'Fair-trade employment pathways created at Sambhali Boutique in Jodhpur',
      ],
      shgDetails: 'Through Sambhali Saheli Self-Help Groups (SHGs), participants pool micro-savings and gain access to low-interest community loans, liberating them from predatory local money lenders and enabling small enterprise creation.',
      ctaText: 'SPONSOR A SEWING MACHINE',
    },
    samarth: {
      id: 'samarth',
      title: 'SAMARTH - HEALTH & SAFETY',
      subtitle: '24/7 Domestic Violence Refuge, Legal Representation & Health Services',
      category: 'Health & Safety',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Protection & Crisis Support',
      duration: '24/7 Year-Round Emergency Support',
      location: 'Statewide Helpline & Jodhpur Crisis Shelter',
      targetAudience: 'Women and children suffering from domestic abuse, forced marriage, honor violence, and caste discrimination.',
      overview: 'Samarth provides a safe haven and comprehensive support system for women in crisis. Operating the 24/7 Nirbhaya Helpline, Samarth offers immediate shelter, free legal assistance, psychological counseling, and medical aid to help survivors reclaim safety and self-worth.',
      curriculum: [
        'Nirbhaya 24/7 Crisis Toll-Free Helpline Assistance (+91 98280 88880)',
        'Emergency Refuge & Safe House Lodging for Women and Children',
        'Free Legal Representation, Court Guidance & Police Protection',
        'Psychological Counseling, Trauma Therapy & Health Checkups',
        'Distribution of Menstrual Hygiene Products & Health Kits in Rural Belts',
      ],
      impactPoints: [
        '21,700+ crisis phone calls and cases addressed',
        '3,500+ survivors provided with free legal representation and shelter',
        '10,000+ hygiene kits distributed across rural villages',
      ],
      ctaText: 'SUPPORT HELPLINE & REFUGE',
    },
    shiksha: {
      id: 'shiksha',
      title: 'SHIKSHA - EDUCATION',
      subtitle: 'Primary Empowerment Centers, Sheerni Boarding & University Grants',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
      badge: 'Youth & Academics',
      duration: 'Ongoing Academic Sponsorships (K-12 & University)',
      location: 'Jodhpur, Setrawa & Rural Desert Outposts',
      targetAudience: 'Young girls and children from impoverished families facing high risk of child marriage or school dropout.',
      overview: 'Shiksha removes financial and social barriers preventing young girls from completing school. Through primary learning centers, Sheerni Boarding Homes, and comprehensive scholarship grants, we cover tuition, books, uniforms, and boarding expenses.',
      curriculum: [
        'Primary Empowerment Centers providing foundational math, reading, and digital literacy',
        'Sheerni Educational Boarding Homes offering full lodging, nutrition, and daily tutoring',
        'Comprehensive K-12 School Scholarships covering tuition, uniforms, and transit',
        'Higher Education Tuition Grants for young women pursuing university degrees',
      ],
      impactPoints: [
        '3,420+ full educational scholarships awarded to underprivileged children',
        '100% pass rate among Sheerni Boarding Home graduates in national board exams',
        'Significant decrease in rural child marriage rates in participating villages',
      ],
      ctaText: 'SPONSOR A CHILD\'S EDUCATION',
    },
    foundation: {
      id: 'foundation',
      title: 'SAMBHALI DEVELOPMENT FOUNDATION',
      subtitle: 'Environmental Ecology, Clean Water in Thar Desert & Anti-Caste Advocacy',
      category: 'Environment & Ecology',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      badge: 'Community & Ecology',
      duration: 'Ongoing Community Infrastructure Initiatives',
      location: 'Thar Desert, Jaisalmer & Rural Western Rajasthan',
      targetAudience: 'Rural desert communities suffering from extreme water scarcity, climate hardship, and social marginalization.',
      overview: 'Sambhali Development Foundation spearheads rural water security, environmental conservation, disaster relief, and anti-caste advocacy across Rajasthan. Our Amritam ecology initiative installs clean water infrastructure in desert outposts.',
      curriculum: [
        'Amritam Clean Drinking Water & Rainwater Harvesting Infrastructure',
        'Ecological Conservation, Tree Planting & Desert Soil Preservation',
        'Emergency Relief Ration Kits & Medical Supplies during environmental crises',
        'Community Advocacy Campaigns against untouchability and child marriage',
      ],
      impactPoints: [
        'Clean water access delivered to over 15 remote Thar Desert villages',
        'Disaster relief ration packages provided to 10,000+ vulnerable families',
        'Active anti-discrimination awareness programs reaching 50+ village councils',
      ],
      ctaText: 'SUPPORT COMMUNITY PROJECTS',
    },
  };

  return (
    <div className="space-y-16 py-12 pb-20">
      {/* Title & Hero Subheading */}
      <section className="bg-gradient-to-r from-[#802829] via-[#6b2122] to-[#48532B] text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/30 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block">
            Sambhali Trust Core Initiatives
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-amber-50 tracking-wide uppercase">
            OUR WORK & IMPACT
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Our work focuses on livelihood development, education support, social welfare services, 24/7 domestic violence protection, and community wellbeing across Rajasthan.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs font-bold px-5 py-2.5 rounded-full tracking-wider transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[#802829] text-white border-[#802829] shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:text-[#802829]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Feature Block 1: SAMBHALI SAHELI */}
      {(selectedCategory === 'all' || selectedCategory === 'saheli') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md relative group">
              <img
                src={programDetails.saheli.image}
                alt="Sambhali Saheli Sewing Machine Vocational Training"
                className="w-full h-88 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#802829] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {programDetails.saheli.badge}
              </div>
            </div>

            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
                  VOCATIONAL EMPOWERMENT
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
                  SAMBHALI SAHELI
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Providing 1-year intensive training in sewing, embroidery, math, English, and microfinance to illiterate and underprivileged women. Graduates receive free sewing machines to start home businesses.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>1-year tailoring, cutting & embroidery vocational training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Basic literacy, math & constitutional rights education</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Self-Help Groups (SHG) microfinance & savings loans</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Fair-wage employment at Sambhali Boutique</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(programDetails.saheli)}
                  className="bg-white hover:bg-amber-50 text-[#802829] border border-[#802829] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-[#802829]" />
                  <span>LEARN MORE</span>
                </button>
                <button
                  onClick={onOpenDonate}
                  className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>SPONSOR A SEWING MACHINE</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Feature Block 2: SAMARTH - HEALTH & SAFETY */}
      {(selectedCategory === 'all' || selectedCategory === 'samarth') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
            <div className="md:col-span-6 space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#802829] uppercase tracking-widest block">
                  PROTECTION & REFUGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
                  SAMARTH - HEALTH & SAFETY
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A sanctuary for women suffering from gender-based violence, forced marriage, and caste discrimination. Offers round-the-clock crisis counseling, legal aid, emergency housing, and health distribution.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#802829] shrink-0" />
                  <span>Nirbhaya 24/7 Crisis Helpline (+91 98280 88880)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#802829] shrink-0" />
                  <span>Free legal representation & court guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#802829] shrink-0" />
                  <span>Safe house refuge & psychological counseling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#802829] shrink-0" />
                  <span>Medical checkups & hygiene kit distribution</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(programDetails.samarth)}
                  className="bg-white hover:bg-amber-50 text-[#802829] border border-[#802829] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-[#802829]" />
                  <span>LEARN MORE</span>
                </button>
                <button
                  onClick={onOpenDonate}
                  className="bg-[#802829] hover:bg-[#6b2122] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-white" />
                  <span>SUPPORT HELPLINE & REFUGE</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md order-1 md:order-2 group">
              <img
                src={programDetails.samarth.image}
                alt="Samarth Health & Safety"
                className="w-full h-88 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      )}

      {/* Feature Block 3: SHIKSHA - EDUCATION */}
      {(selectedCategory === 'all' || selectedCategory === 'shiksha') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md group">
              <img
                src={programDetails.shiksha.image}
                alt="Shiksha Education Support"
                className="w-full h-88 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#D99B26] uppercase tracking-widest block">
                  YOUTH & ACADEMICS
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
                  SHIKSHA - EDUCATION
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Breaking educational barriers for young girls in rural Rajasthan through primary learning centers, Sheerni Boarding Homes, school sponsorships, and university tuition grants.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                  <span>Primary Empowerment Centers in rural villages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                  <span>Sheerni Educational Boarding Homes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                  <span>Full scholarships for poverty-stricken children</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                  <span>Higher education tuition grants for young women</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(programDetails.shiksha)}
                  className="bg-white hover:bg-amber-50 text-[#802829] border border-[#802829] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-[#802829]" />
                  <span>LEARN MORE</span>
                </button>
                <button
                  onClick={onOpenDonate}
                  className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>SPONSOR A CHILD'S EDUCATION</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Feature Block 4: SAMBHALI DEVELOPMENT FOUNDATION */}
      {(selectedCategory === 'all' || selectedCategory === 'foundation') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center text-left hover:shadow-md transition-shadow">
            <div className="md:col-span-6 space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#48532B] uppercase tracking-widest block">
                  COMMUNITY & ECOLOGY
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#802829]">
                  SAMBHALI DEVELOPMENT FOUNDATION
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Driving environmental conservation and water accessibility in desert regions, disaster relief, and advocacy campaigns against child marriage and untouchability.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Amritam environmental & ecology initiative</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Clean drinking water and sanitation in Thar Desert</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Emergency disaster relief & health ration kits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Community advocacy & anti-caste campaigns</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(programDetails.foundation)}
                  className="bg-white hover:bg-amber-50 text-[#802829] border border-[#802829] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-[#802829]" />
                  <span>LEARN MORE</span>
                </button>
                <button
                  onClick={onOpenDonate}
                  className="bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>SUPPORT COMMUNITY PROJECTS</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md order-1 md:order-2 group">
              <img
                src={programDetails.foundation.image}
                alt="Sambhali Development Foundation"
                className="w-full h-88 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      )}

      {/* Program Detail "Learn More" Modal (Strictly informational content - No forms) */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 text-left relative flex flex-col">
            {/* Modal Header Banner */}
            <div className="relative h-56 sm:h-64 bg-gray-900 overflow-hidden shrink-0">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="w-full h-full object-cover brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <button
                onClick={() => setActiveModalProgram(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-[#802829] text-amber-100 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
                  {activeModalProgram.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
                  {activeModalProgram.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-100/90">
                  {activeModalProgram.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-8 flex-1">
              {/* Quick Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-amber-100 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#802829] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-bold uppercase tracking-wider text-[10px]">DURATION / TIMINGS</strong>
                    <span className="text-gray-700">{activeModalProgram.duration}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-bold uppercase tracking-wider text-[10px]">LOCATION</strong>
                    <span className="text-gray-700">{activeModalProgram.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#802829] uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#802829]" />
                  <span>Program Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {activeModalProgram.overview}
                </p>
              </div>

              {/* Target Audience */}
              <div className="space-y-2 bg-amber-50/60 p-4 rounded-2xl border-l-4 border-[#802829]">
                <strong className="text-xs font-bold text-[#802829] uppercase tracking-wider block">Target Beneficiaries</strong>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {activeModalProgram.targetAudience}
                </p>
              </div>

              {/* Curriculum & Key Components */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#48532B]" />
                  <span>Core Curriculum & Key Services</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {activeModalProgram.curriculum.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SHG / Microfinance note if present */}
              {activeModalProgram.shgDetails && (
                <div className="space-y-2 bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 text-xs">
                  <strong className="font-bold text-emerald-900 uppercase tracking-wider block flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>Microfinance & Self-Help Group (SHG) Integration</span>
                  </strong>
                  <p className="text-emerald-800 leading-relaxed">
                    {activeModalProgram.shgDetails}
                  </p>
                </div>
              )}

              {/* Impact Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#D99B26] uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D99B26]" />
                  <span>Measurable Outcomes & Achievements</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {activeModalProgram.impactPoints.map((point, idx) => (
                    <div key={idx} className="p-3 bg-amber-50/50 rounded-xl border border-amber-100/80 text-gray-800 font-medium flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#802829] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-b-3xl flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalProgram(null)}
                className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase tracking-wider px-4 py-2"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setActiveModalProgram(null);
                  onOpenDonate();
                }}
                className="bg-[#802829] hover:bg-[#6b2122] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{activeModalProgram.ctaText}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


