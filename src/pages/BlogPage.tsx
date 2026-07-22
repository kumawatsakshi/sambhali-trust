import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart, ArrowRight, Search, BookOpen, Sparkles } from 'lucide-react';

interface BlogPost {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      quote?: string;
    }[];
    keyTakeaways?: string[];
  };
}

interface BlogPageProps {
  onOpenDonate?: () => void;
  onNavigate?: (page: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenDonate, onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const posts: BlogPost[] = [
    {
      id: 1,
      tag: 'SAMBHALI STORIES',
      title: 'New Sambhali Shakti Center Opens its Doors in Jodhpur',
      excerpt:
        'Inaugurated at the Government Observation & Juvenile Home, this center will allow more than sixty women and children to access daily lessons for their personal, educational, and professional development.',
      date: 'October 14, 2024',
      readTime: '4 min read',
      author: 'Govind Singh Rathore',
      authorRole: 'Founder & Managing Trustee',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
      content: {
        intro:
          'Sambhali Trust is thrilled to announce the official opening of our newest Sambhali Shakti Center in Jodhpur. Established within the premises of the Government Observation & Juvenile Home, this center represents a crucial expansion of our mission to bring education, dignity, and self-reliance to vulnerable women and youth.',
        sections: [
          {
            heading: 'A Sanctuary for Education and Growth',
            paragraphs: [
              'The new center caters to over 60 resident women and young girls who previously lacked access to structured learning or vocational training. Daily schedules include interactive classes in conversational Hindi, functional English, basic mathematics, and hands-on tailoring.',
              'In addition to vocational training, Sambhali Trust counselors hold bi-weekly personal hygiene, legal rights, and self-confidence workshops designed to nurture emotional resilience and self-worth.',
            ],
            quote:
              'Education and emotional security are the foundational pillars of human dignity. Every woman deserves the opportunity to rebuild her life with confidence and pride.',
          },
          {
            heading: 'Community Inauguration & Support',
            paragraphs: [
              'The inauguration ceremony was attended by district welfare officers, local community leaders, and Sambhali staff members. Beneficiaries received initial learning kits containing notebooks, stationery, and sewing supplies to kickstart their training.',
              'With the generous support of our global donors and local volunteers, this center aims to graduate its first cohort of vocational students within the next 12 months, equipping them with certified skills and home sewing machinery upon course completion.',
            ],
          },
        ],
        keyTakeaways: [
          '60+ vulnerable women and children gaining daily education and vocational training.',
          'Comprehensive curriculum spanning literacy, tailoring, and constitutional rights.',
          'Part of Sambhali Trust’s commitment to expanding access in governmental care homes.',
        ],
      },
    },
    {
      id: 2,
      tag: 'EDUCATION & LITERACY',
      title: "Sambhali Trust and IIFL Foundation Launch Initiative to Bridge Rajasthan's Education Gap",
      excerpt:
        "Sambhali Trust is proud to announce its partnership with the IIFL Foundation to launch the Sakhiyon Ki Baadi project, a value-based education initiative designed to empower young, marginalised girls in one of Rajasthan's most patriarchal regions.",
      date: 'November 2, 2024',
      readTime: '5 min read',
      author: 'Shyama Tanwar',
      authorRole: 'Managing Trustee & HR Lead',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200',
      content: {
        intro:
          'In rural Western Rajasthan, high female dropout rates and early marriage remain formidable obstacles for young girls. To directly confront these challenges, Sambhali Trust has joined forces with IIFL Foundation to establish "Sakhiyon Ki Baadi" learning centers across remote desert hamlets.',
        sections: [
          {
            heading: 'Bridging the Literacy Divide in Desert Communities',
            paragraphs: [
              'The Sakhiyon Ki Baadi project establishes informal, community-embedded learning centers where young girls aged 4 to 14 receive foundational education in reading, writing, environmental awareness, and moral values.',
              'By establishing these centers directly within village hamlets, parents no longer need to worry about long, unsafe walks to distant government schools. Local educated women are trained as instructors, creating local employment while serving as inspiring role models.',
            ],
            quote:
              'When you educate a girl in a rural desert village, you do not just change her future—you transform the economic trajectory of her entire household for generations.',
          },
          {
            heading: 'Value-Based Curriculum & Community Trust',
            paragraphs: [
              'Classes run for three hours each afternoon, complementing school schedules or re-engaging out-of-school children. The curriculum blends academic learning with storytelling, art, health instruction, and games to make learning joyous and engaging.',
              'Local village councils (Panchayats) have enthusiastically endorsed the project, noting a noticeable rise in school retention rates and girl child enthusiasm across participating districts.',
            ],
          },
        ],
        keyTakeaways: [
          'Over 300 out-of-school girls enrolled across new rural learning outposts.',
          'Local women recruited and trained as community education instructors.',
          'Strong partnership model combining corporate social responsibility with grassroots execution.',
        ],
      },
    },
    {
      id: 3,
      tag: 'PARTNERSHIPS',
      title: 'Sambhali Trust and Mahindra Holidays Launch Empowerment Centres for Women in Jaisalmer',
      excerpt:
        'Sambhali Trust has joined hands with Mahindra Holidays & Resorts India Ltd to launch a new project to empower women in Jaisalmer, Rajasthan through vocational skills and microfinance.',
      date: 'August 28, 2024',
      readTime: '4 min read',
      author: 'Bhom Singh Bhati',
      authorRole: 'Jaisalmer Program Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
      content: {
        intro:
          'In the golden desert district of Jaisalmer, opportunities for female employment are severely restricted. Sambhali Trust, in partnership with Mahindra Holidays & Resorts India Ltd., has inaugurated brand-new Vocational Empowerment Centers to provide women with sustainable livelihoods.',
        sections: [
          {
            heading: 'Unlocking Economic Self-Reliance in Jaisalmer',
            paragraphs: [
              'The new centers offer intensive 1-year training modules in traditional Rajasthani mirror work, bag stitching, embroidery, and basic business management. Participants learn how to design, cost, and market hand-stitched items to tourists and wholesale buyers.',
              'Graduates of the program receive a free foot-operated sewing machine and gain direct access to Sambhali Self-Help Groups (SHGs), enabling them to access low-interest micro-loans for starting home-based artisan businesses.',
            ],
            quote:
              'Financial independence gives a woman the power to voice her choices, educate her daughters, and stand tall against discrimination.',
          },
          {
            heading: 'Preserving Heritage Skills for Fair Wages',
            paragraphs: [
              'Jaisalmer is renowned for its rich textile traditions, yet artisan women have historically been exploited by middlemen. By connecting center graduates directly with Sambhali Boutique, participants earn fair, living wages for their craftsmanship.',
            ],
          },
        ],
        keyTakeaways: [
          'Vocational empowerment hubs established across Jaisalmer rural centers.',
          'Direct fair-trade sales channels provided through Sambhali Boutique.',
          'Comprehensive financial literacy and micro-loan support for all participants.',
        ],
      },
    },
    {
      id: 4,
      tag: 'VOLUNTEER VOICES',
      title: 'Voices from the Field: A Year as a Sambhali Volunteer in Rajasthan',
      excerpt:
        'Reflections from an international volunteer on teaching English, sharing daily life with Sheerni Boarding Home girls, and experiencing the transformative warmth of Jodhpur.',
      date: 'December 10, 2024',
      readTime: '6 min read',
      author: 'Sarah Jenkins',
      authorRole: 'International Education Volunteer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1200',
      content: {
        intro:
          'When I arrived in Jodhpur as a volunteer for Sambhali Trust, I expected to teach basic English grammar and help with homework. What I did not expect was how profoundly my own worldview would be reshaped by the courage and joy of the young girls at the Sheerni Boarding Home.',
        sections: [
          {
            heading: 'Daily Life at the Sheerni Boarding Home',
            paragraphs: [
              'Each morning began with energetic greeting songs and tutoring sessions. Many of the girls come from rural desert villages where schooling was previously impossible due to poverty or distance. At Sheerni, they are provided with full lodging, nutritious meals, school uniforms, and dedicated evening academic support.',
              'Watching a 10-year-old girl write her first complete English sentence or express her dream of becoming a doctor or police officer is an unforgettable experience. The sense of sisterhood in the boarding home is palpable.',
            ],
            quote:
              'Sambhali is not just an NGO; it is an extended family where every girl is celebrated, protected, and encouraged to reach for the stars.',
          },
          {
            heading: 'Why Grassroots Volunteering Matters',
            paragraphs: [
              'Volunteering with Sambhali Trust gives you an authentic, immersive look into grassroots social change. You see where every dollar goes and see firsthand how structured support alters the trajectory of a young life.',
            ],
          },
        ],
        keyTakeaways: [
          'Immersive international volunteer opportunities in Jodhpur and Jaisalmer.',
          'Focus on academic tutoring, confidence building, and cross-cultural exchange.',
          'Volunteers play an integral role in supporting local teachers and staff.',
        ],
      },
    },
    {
      id: 5,
      tag: 'HEALTH & SAFETY',
      title: 'Samarth Helpline Milestone: Over 21,000 Crisis Calls Addressed Across Rajasthan',
      excerpt:
        'A comprehensive review of how Sambhali Trust’s 24/7 Nirbhaya Helpline provides emergency rescue, legal aid, and domestic shelter for women facing gender violence.',
      date: 'January 18, 2025',
      readTime: '5 min read',
      author: 'Legal & Counseling Team',
      authorRole: 'Sambhali Crisis Response Unit',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
      content: {
        intro:
          'Sambhali Trust’s Samarth initiative reaches a significant milestone, having answered and supported over 21,700 crisis inquiries through its 24/7 Nirbhaya Helpline (+91 98280 88880). The helpline serves as a vital lifeline for women surviving domestic abuse, forced marriage, and caste discrimination.',
        sections: [
          {
            heading: 'Immediate Legal Aid and Safe Refuge',
            paragraphs: [
              'Callers to the Nirbhaya Helpline receive immediate assistance from trained female social workers. Depending on the crisis, Sambhali dispatches emergency shelter transportation, coordinates with local police authorities, and assigns pro-bono legal counsel.',
              'Survivors hosted at Sambhali safe shelters are provided with trauma counseling, healthcare checkups, and vocational options so they can build a secure, self-sustaining future free from violence.',
            ],
            quote:
              'Silence protects abusers. Our 24/7 helpline ensures that no woman in Rajasthan ever has to suffer in silence or face danger alone.',
          },
        ],
        keyTakeaways: [
          'Over 21,700 crisis calls answered by Nirbhaya 24/7 Helpline staff.',
          'Pro-bono legal counsel and emergency safe house shelter provided free of charge.',
          'Comprehensive post-crisis rehabilitation and vocational independence pathways.',
        ],
      },
    },
  ];

  const categories = ['ALL', 'SAMBHALI STORIES', 'EDUCATION & LITERACY', 'PARTNERSHIPS', 'VOLUNTEER VOICES', 'HEALTH & SAFETY'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'ALL' || post.tag === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 pb-20 space-y-12">
      {/* ARTICLE READER PAGE VIEW */}
      {selectedPost ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 animate-fadeIn text-left">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <button
              onClick={() => {
                setSelectedPost(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#802829] hover:text-[#6b2122] uppercase tracking-wider bg-amber-50 hover:bg-amber-100 px-4 py-2.5 rounded-full border border-amber-200/80 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Stories</span>
            </button>

            <span className="text-xs font-bold text-[#802829] bg-amber-100/80 px-3 py-1 rounded-full uppercase tracking-wider">
              {selectedPost.tag}
            </span>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 font-medium pt-1">
              <div className="flex items-center gap-1.5 text-gray-800">
                <User className="w-4 h-4 text-[#802829]" />
                <span className="font-bold">{selectedPost.author}</span>
                <span className="text-gray-400">({selectedPost.authorRole})</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{selectedPost.date}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-amber-200/80 max-h-[460px]">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Intro Paragraph */}
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border-l-4 border-[#802829] text-sm sm:text-base text-gray-800 font-medium leading-relaxed shadow-xs">
            {selectedPost.content.intro}
          </div>

          {/* Article Body Sections */}
          <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            {selectedPost.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#802829] pt-2">
                    {sec.heading}
                  </h2>
                )}

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.quote && (
                  <blockquote className="my-6 p-6 bg-amber-50 rounded-2xl border-l-4 border-[#D99B26] italic font-serif text-base sm:text-lg text-amber-950 shadow-xs">
                    "{sec.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Key Takeaways Box */}
          {selectedPost.content.keyTakeaways && (
            <div className="bg-gradient-to-br from-[#48532B]/10 to-amber-50 p-6 sm:p-8 rounded-3xl border border-[#48532B]/20 space-y-3">
              <h3 className="text-sm font-bold text-[#48532B] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#48532B]" />
                <span>Key Impact Takeaways</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800 font-medium">
                {selectedPost.content.keyTakeaways.map((point, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#48532B] mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Footer & Action Callout */}
          <div className="bg-[#802829] text-white p-8 sm:p-10 rounded-3xl space-y-4 text-center shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-amber-50">
              Help Us Write the Next Chapter of Empowerment
            </h3>
            <p className="text-amber-100/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Your support directly funds vocational equipment, school scholarships, and crisis shelter for women and children in Rajasthan.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              {onOpenDonate && (
                <button
                  onClick={onOpenDonate}
                  className="bg-[#D99B26] hover:bg-[#c28a21] text-amber-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-amber-950" />
                  <span>SUPPORT THIS PROGRAM</span>
                </button>
              )}
              {onNavigate && (
                <button
                  onClick={() => onNavigate('work')}
                  className="bg-black/30 hover:bg-black/50 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full uppercase tracking-wider border border-amber-400/30 transition-all"
                >
                  EXPLORE ALL PROGRAMS
                </button>
              )}
            </div>
          </div>

          {/* More Articles Navigation */}
          <div className="pt-8 border-t border-gray-200 space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#802829] uppercase tracking-wider text-center">
              MORE STORIES FROM SAMBHALI
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {posts
                .filter((p) => p.id !== selectedPost.id)
                .slice(0, 2)
                .map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedPost(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-[#802829] uppercase tracking-widest block">
                        {rel.tag}
                      </span>
                      <h4 className="font-serif font-bold text-gray-900 group-hover:text-[#802829] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#802829] mt-4 inline-flex items-center gap-1 group-hover:underline">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* BLOG INDEX LISTING VIEW */
        <div className="space-y-12">
          {/* Hero Header */}
          <section className="bg-gradient-to-r from-[#802829] via-[#6b2122] to-[#48532B] text-white py-16 px-4 sm:px-8 border-b border-amber-800/40">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/30 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block">
                Sambhali Trust News & Stories
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-amber-50 tracking-wide uppercase">
                SAMBHALI TRUST STORIES
              </h1>
              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                Read real updates, program inaugurations, corporate partnerships, volunteer journals, and field stories directly from our centers in Rajasthan, India.
              </p>
            </div>
          </section>

          {/* Search & Filter Bar */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] font-bold px-4 py-2 rounded-full tracking-wider transition-all border ${
                      selectedCategory === cat
                        ? 'bg-[#802829] text-white border-[#802829] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:text-[#802829]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full pl-9 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#802829]"
                />
              </div>
            </div>
          </section>

          {/* Grid of Blog Posts */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-[#FAF7F2] rounded-3xl border border-amber-200/60 p-8 space-y-3">
                <BookOpen className="w-10 h-10 text-amber-700 mx-auto opacity-50" />
                <h3 className="text-lg font-serif font-bold text-gray-800">No stories found</h3>
                <p className="text-xs text-gray-600">Try adjusting your search keyword or selected category filter.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="text-xs font-bold text-[#802829] underline uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-amber-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* Image */}
                      <div
                        onClick={() => {
                          setSelectedPost(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="h-60 overflow-hidden bg-gray-100 relative cursor-pointer"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-[#802829] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                          {post.tag}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3
                          onClick={() => {
                            setSelectedPost(post);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-lg font-serif font-bold text-gray-900 leading-snug group-hover:text-[#802829] transition-colors cursor-pointer"
                        >
                          {post.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-6 pt-0 flex items-center justify-between border-t border-amber-100/60 mt-2">
                      <button
                        onClick={() => {
                          setSelectedPost(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-[#802829] hover:text-[#6b2122] inline-flex items-center gap-1.5 uppercase tracking-wider"
                      >
                        <span>READ FULL ARTICLE</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[11px] text-gray-400 font-medium">
                        By {post.author.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};
