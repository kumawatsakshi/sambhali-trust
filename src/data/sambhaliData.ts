import {
  CurrencyConfig,
  Program,
  BoutiqueProduct,
  VolunteerRole,
  TimelineEvent,
  Testimonial,
  NewsArticle,
  DonationOption,
} from '../types';

import heroImg from '../assets/images/sambhali_hero_1784700261026.jpg';
import boutiqueImg from '../assets/images/boutique_crafts_1784700274225.jpg';
import educationImg from '../assets/images/sheerni_education_1784700288043.jpg';

export const CURRENCY_MAP: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79 },
  INR: { code: 'INR', symbol: '₹', rate: 84.5 },
};

export const DONATION_PRESETS: DonationOption[] = [
  { amountUSD: 25, impactLabel: 'Provides 1 month of full schooling & books for a young girl in Sheerni' },
  { amountUSD: 50, impactLabel: 'Gifts a sewing machine & vocational kit to a graduate woman', popular: true },
  { amountUSD: 100, impactLabel: 'Funds 1 year of health, hygiene kits & self-defense training for 5 women' },
  { amountUSD: 250, impactLabel: 'Sponsors 1 boarding girl at Sheerni Home for 3 months (food, lodging, education)' },
  { amountUSD: 500, impactLabel: 'Runs an entire rural empowerment center in Setrawa for 1 full month' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'empowerment-centers',
    title: 'Primary Empowerment Centers',
    category: 'empowerment',
    shortDesc: 'Safe community hubs offering literacy, math, sewing, life skills, and women’s rights awareness.',
    fullDesc:
      'Operating across Jodhpur city and Thar Desert villages, Sambhali Empowerment Centers provide underprivileged women and adolescent girls a safe space to gain basic education, functional literacy, hindi and english, mathematics, cutting, tailoring, and embroidery. Every center also hosts weekly workshops on legal rights, health, sanitation, self-defense, and microfinance.',
    location: 'Jodhpur City & Setrawa Desert Villages',
    beneficiaries: '850+ Women & Girls Annually',
    impactMetric: '12 Active Centers in Rajasthan',
    image: heroImg,
    highlights: [
      'Daily literacy, numeracy, and English classes',
      'Professional sewing, cutting & embroidery instruction',
      'Self-defense and human rights workshops',
      'Free healthcare checkups and sanitary kit distribution',
    ],
    sponsorshipCost: {
      amountUSD: 400,
      period: 'per month',
      description: 'Sponsor an entire empowerment center including teacher salaries and materials',
    },
  },
  {
    id: 'sheerni-project',
    title: 'Sheerni Educational Boarding Homes',
    category: 'education',
    shortDesc: 'Nurturing boarding homes enabling rural girls from deprived backgrounds to attend top schools.',
    fullDesc:
      'The Sheerni ("Lioness") Educational Project provides residential boarding homes for disadvantaged rural girls who would otherwise drop out due to distance, poverty, or child marriage risks. Sambhali provides 100% free lodging, nutritious meals, academic tutoring, private school tuition, computer literacy, and emotional support until high school graduation.',
    location: 'Jodhpur & Jaisalmer Districts',
    beneficiaries: '120+ Resident Girls',
    impactMetric: '98% High School Graduation Rate',
    image: educationImg,
    highlights: [
      'Full private school scholarships & uniform coverage',
      '24/7 safe residential boarding with house mothers',
      'Daily evening tuitions, library access & sports',
      'Pathway to university and professional careers',
    ],
    sponsorshipCost: {
      amountUSD: 85,
      period: 'per month',
      description: 'Sponsor a resident girl’s entire housing, schooling, meals, and medical care',
    },
  },
  {
    id: 'sambhali-boutique',
    title: 'Sambhali Boutique & Social Enterprise',
    category: 'livelihood',
    shortDesc: 'A fair-trade artisan enterprise where trained women produce hand-crafted textiles and earn fair wages.',
    fullDesc:
      'After completing the 1-year vocational sewing course, graduates are invited to join Sambhali Boutique. Here, women produce beautiful Rajasthani block-printed garments, tote bags, embroidered plush animals, and home decor. 100% of profits are reinvested into fair artisan stipends, healthcare funds, and expanding empowerment centers.',
    location: 'Jodhpur Headquarters & Online Enterprise',
    beneficiaries: '60+ Master Artisans Employed',
    impactMetric: '100% Fair-Trade Guaranteed',
    image: boutiqueImg,
    highlights: [
      'Sustainable dignified income for Dalit & marginalized women',
      'Handmade with eco-friendly organic cotton & block printing',
      'Financial independence & family decision-making power',
      'Global shipping to supporters worldwide',
    ],
    sponsorshipCost: {
      amountUSD: 150,
      period: 'one-time',
      description: 'Fund a graduate artisan’s startup sewing machine and raw material inventory',
    },
  },
  {
    id: 'nirbhaya-helpline',
    title: 'Nirbhaya Helpline & Legal Assistance',
    category: 'legal_health',
    shortDesc: '24/7 emergency toll-free helpline providing legal counsel, police assistance, and shelter for abuse survivors.',
    fullDesc:
      'Launched to combat domestic violence, forced marriage, and gender discrimination, the Sambhali Nirbhaya Helpline (+91 98280 88880) offers rapid intervention. Our female social workers and legal advisors provide free legal aid, psychological counseling, emergency transport, medical support, and safe shelter referrals.',
    location: 'Statewide Rajasthan Helpline',
    beneficiaries: '1,400+ Calls Handled Yearly',
    impactMetric: '24/7 Toll-Free Immediate Response',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    highlights: [
      'Free confidential legal representation',
      'Counseling for survivors of domestic violence',
      'Emergency rescue and temporary shelter placement',
      'Police liaison and medical treatment support',
    ],
    sponsorshipCost: {
      amountUSD: 200,
      period: 'per month',
      description: 'Fund 24/7 hotline phone operation and dedicated social worker response team',
    },
  },
  {
    id: 'scholarships-higher-ed',
    title: 'Payal & Higher Education Scholarships',
    category: 'education',
    shortDesc: 'Funding university degrees, nursing diplomas, and professional skill training for young women.',
    fullDesc:
      'Breaking glass ceilings in traditional Rajasthani society, Sambhali offers higher education grants to bright female students pursuing degrees in Arts, Science, Commerce, Nursing, B.Ed Teaching, and IT. Grants cover tuition fees, books, transport, and exam preparation.',
    location: 'Universities across Rajasthan',
    beneficiaries: '85+ University Scholars',
    impactMetric: '45+ Graduated Female Nurses & Teachers',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    highlights: [
      'Full or partial university tuition assistance',
      'Mentorship programs with professional women',
      'Career placement counseling & interview prep',
      'Inspirational community role model network',
    ],
    sponsorshipCost: {
      amountUSD: 60,
      period: 'per month',
      description: 'Sponsor 1 young woman’s university tuition and exam fees',
    },
  },
  {
    id: 'rural-health-relief',
    title: 'Rural Health & Disaster Relief',
    category: 'relief',
    shortDesc: 'Distributing sanitary hygiene kits, clean water filters, and emergency food relief across rural desert hamlets.',
    fullDesc:
      'Deep in the Thar Desert, isolated villages face severe water scarcity, lack of feminine hygiene products, and extreme summer heatwaves. Sambhali mobile health vans distribute reusable sanitary pads, iron supplements, water filtration units, and emergency ration kits during drought and flood crises.',
    location: 'Rural Thar Desert (Setrawa, Balesar, Dechu)',
    beneficiaries: '5,000+ Desert Villagers',
    impactMetric: '15,000+ Hygiene Kits Distributed',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
    highlights: [
      'Distribution of eco-friendly washable sanitary kits',
      'Maternal health awareness & anemia screening camps',
      'Solar water filters and clean drinking water access',
      'Emergency food & medical supply distribution',
    ],
    sponsorshipCost: {
      amountUSD: 300,
      period: 'one-time',
      description: 'Provide 100 rural women with washable sanitary hygiene kits and health screening',
    },
  },
];

export const BOUTIQUE_PRODUCTS: BoutiqueProduct[] = [
  {
    id: 'prod-scarf-indigo',
    name: 'Jodhpur Royal Indigo Block-Print Scarf',
    category: 'textiles',
    priceUSD: 28,
    artisanName: 'Kamla Devi',
    artisanCenter: 'Payal Center, Jodhpur',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=600',
    description: 'Soft 100% organic cotton scarf hand-stamped with traditional Marwari wooden block designs using natural indigo dyes.',
    material: '100% Organic Cotton & Natural Dyes',
    isBestSeller: true,
  },
  {
    id: 'prod-camel-plush',
    name: 'Marwar Hand-Embroidered Velvet Camel',
    category: 'toys',
    priceUSD: 22,
    artisanName: 'Santosh Kanwar',
    artisanCenter: 'Setrawa Rural Center',
    image: boutiqueImg,
    description: 'Charming plush camel toy meticulously hand-stitched with vibrant Rajasthani mirror work, glass beads, and colorful tassel trims.',
    material: 'Upcycled Cotton Velvet & Traditional Embroidery',
    isBestSeller: true,
  },
  {
    id: 'prod-tote-peacock',
    name: 'Peacock Motif Quilted Block-Print Tote',
    category: 'bags',
    priceUSD: 34,
    artisanName: 'Pooja Gehlot',
    artisanCenter: 'Abhay Center, Jodhpur',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    description: 'Spacious quilted shoulder bag featuring reinforced straps, interior zip pocket, and hand-printed peacock motifs.',
    material: 'Quilted Heavy Cotton Canvas',
    isBestSeller: true,
  },
  {
    id: 'prod-journal-kantha',
    name: 'Vintage Kantha Stitch Fabric Journal',
    category: 'stationery',
    priceUSD: 18,
    artisanName: 'Lalita Parihar',
    artisanCenter: 'Graduates Co-op',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    description: 'Hand-bound notebook wrapped in upcycled vintage Kantha sari fabric with 120 pages of handmade recycled cotton paper.',
    material: 'Recycled Sari Fabric & Tree-Free Paper',
  },
  {
    id: 'prod-apron-blockprint',
    name: 'Sambhali Chef Apron with Utility Pockets',
    category: 'apparel',
    priceUSD: 26,
    artisanName: 'Sunita Bhati',
    artisanCenter: 'Jodhpur Main Center',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=600',
    description: 'Durable and stylish kitchen apron featuring hand-block-printed floral patterns, adjustable neck strap, and twin front utility pockets.',
    material: '100% Heavy Cotton Twill',
  },
  {
    id: 'prod-elephant-trio',
    name: 'Handcrafted Heritage Elephant Ornament Trio',
    category: 'toys',
    priceUSD: 24,
    artisanName: 'Meena Sharma',
    artisanCenter: 'Setrawa Desert Center',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600',
    description: 'Set of 3 stuffed elephant hanging ornaments adorned with Rajasthani gota work and metallic thread details.',
    material: 'Cotton, Mirrors & Gota Metallic Ribbon',
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'vol-english-teacher',
    title: 'English & Basic Math Tutor',
    department: 'Empowerment Centers',
    location: 'Jodhpur City',
    duration: '4 Weeks to 6 Months',
    description: 'Conduct engaging conversational English classes, interactive math lessons, and confidence-building activities for women and young girls.',
    requirements: ['Fluent English speaker', 'Patience & cultural empathy', 'Minimum 18 years old', 'Clean background check'],
    responsibilities: [
      'Teach 2 sessions daily at empowerment centers',
      'Develop creative visual teaching aids',
      'Assist students with homework and reading skills',
    ],
  },
  {
    id: 'vol-sewing-design',
    title: 'Textile & Product Design Mentor',
    department: 'Sambhali Boutique',
    location: 'Jodhpur City',
    duration: '6 Weeks to 3 Months',
    description: 'Collaborate with local artisans at Sambhali Boutique to create modern product designs, introduce quality control methods, and refine pattern cutting.',
    requirements: ['Background in fashion, sewing, or product design', 'Experience with pattern making', 'Enthusiasm for fair-trade craft'],
    responsibilities: [
      'Design new seasonal product prototypes',
      'Teach advanced stitching techniques',
      'Improve workshop efficiency and material management',
    ],
  },
  {
    id: 'vol-media-marketing',
    title: 'Media, Photography & Storytelling Specialist',
    department: 'Communications',
    location: 'Jodhpur City',
    duration: '4 Weeks to 3 Months',
    description: 'Capture powerful photos, film short video documentaries, write blog articles, and manage social media campaigns showcasing student transformations.',
    requirements: ['Strong photography/videography portfolio', 'Social media management skills', 'Respectful ethical storytelling'],
    responsibilities: [
      'Photograph daily center activities & events',
      'Create monthly video highlights for global donors',
      'Draft newsletters and student success profiles',
    ],
  },
  {
    id: 'vol-desert-outreach',
    title: 'Rural Community Health & Education Volunteer',
    department: 'Setrawa Desert Project',
    location: 'Setrawa Desert',
    duration: '2 Months to 6 Months',
    description: 'Immerse in rural Thar desert life assisting with health awareness workshops, children’s tutoring, and sanitary distribution camps.',
    requirements: ['Adaptable to simple rural living conditions', 'Passionate about rural development', 'Basic Hindi or willingness to learn'],
    responsibilities: [
      'Support rural center daily operations',
      'Help organize mobile health & dental camps',
      'Facilitate creative play and literacy games for children',
    ],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2007',
    title: 'Founding of Sambhali Trust',
    description: 'Govind Singh Rathore founded Sambhali Trust in Jodhpur with 1 small room, 1 sewing machine, and 10 brave women overcoming caste prejudice.',
    impactKey: '1 Center • 10 Women',
  },
  {
    year: '2010',
    title: 'Launch of Sheerni Educational Project',
    description: 'Recognizing that rural girls faced early dropouts, Sambhali established its first boarding home to send girls to private schools.',
    impactKey: '25 Girls in Full Schooling',
  },
  {
    year: '2014',
    title: 'Expansion to Thar Desert (Setrawa)',
    description: 'Extended operations deep into rural Rajasthan where female literacy was below 30%, opening empowerment centers and health clinics.',
    impactKey: '5 Centers • 500+ Women',
  },
  {
    year: '2018',
    title: 'Establishment of Nirbhaya Helpline',
    description: 'Launched Rajasthan’s 24/7 dedicated helpline offering free legal counsel, medical aid, and emergency transport for abuse survivors.',
    impactKey: '1,000+ Calls Handled Yearly',
  },
  {
    year: '2022',
    title: 'UN ECOSOC Special Consultative Status',
    description: 'Sambhali Trust was granted Special Consultative Status with the United Nations Economic and Social Council for outstanding women empowerment work.',
    impactKey: 'Global NGO Recognition',
  },
  {
    year: '2026',
    title: 'New Vocational Hub & 15,000+ Women Milestone',
    description: 'Celebrating over 15,000 lives transformed, 12 active centers, and launching our modern eco-friendly vocational training campus in Jodhpur.',
    impactKey: '15,000+ Total Beneficiaries',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Pooja Gehlot',
    role: 'Graduate Artisan & Master Instructor',
    center: 'Payal Center, Jodhpur',
    quote:
      'Before Sambhali, I was not allowed to leave my house or learn to read. Today, I earn my own wage, buy my children’s school books, and teach sewing to 30 young women every single morning. Sambhali gave me my voice.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    year: 'Sambhali Graduate 2018',
  },
  {
    id: 'test-2',
    name: 'Sunita Bhati',
    role: 'Sheerni Boarding Home Graduate',
    center: 'B.Sc. Nursing Student',
    quote:
      'I grew up in a remote desert village where girls were married at 15. The Sheerni Boarding project funded my school education from 6th grade to 12th. Now I am in my 3rd year of nursing college in Jodhpur!',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
    year: 'Sheerni Scholar',
  },
  {
    id: 'test-3',
    name: 'Hannah Weber',
    role: 'International Volunteer (Germany)',
    center: 'Jodhpur Main Center',
    quote:
      'Volunteering with Sambhali Trust for 3 months was the most humbling experience of my life. The warmth of the women, the dedication of Govind and the team, and the tangible impact every single day is truly unforgettable.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    year: 'Volunteer 2024',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Sambhali Trust Awarded Rajasthan Social Impact Pioneer 2026',
    date: 'July 14, 2026',
    category: 'Awards',
    summary: 'Recognized for pioneering sustainable female literacy and self-defense training in rural desert districts of Jodhpur and Jaisalmer.',
    readTime: '3 min read',
    image: heroImg,
    linkText: 'Read Award Details',
  },
  {
    id: 'news-2',
    title: 'Sambhali Boutique Unveils 2026 Organic Cotton Artisan Collection',
    date: 'June 28, 2026',
    category: 'Enterprise',
    summary: 'Featuring hand-block-printed quilts, scarves, and bags crafted by 60 Dalit women artisans, now available with global shipping.',
    readTime: '4 min read',
    image: boutiqueImg,
    linkText: 'Explore Collection',
  },
  {
    id: 'news-3',
    title: '120 Sheerni Boarding Students Achieve 100% Pass Rate in Class 10 & 12',
    date: 'May 19, 2026',
    category: 'Education',
    summary: 'A proud milestone as every single resident student scored distinction marks in board examinations, with 12 entering medical and teaching colleges.',
    readTime: '5 min read',
    image: educationImg,
    linkText: 'Read Student Stories',
  },
];

export const FAQS = [
  {
    q: 'What is Sambhali Trust and where is it located?',
    a: 'Sambhali Trust is a non-profit NGO based in Jodhpur, Rajasthan, India, founded in 2007 by Govind Singh Rathore. It empowers underprivileged women and children through basic literacy, vocational training (sewing, block-printing), higher education boarding, legal aid, and health initiatives.',
  },
  {
    q: 'How does Sambhali Trust ensure transparency and tax benefits for donations?',
    a: '100% of public donations directly fund centers, teacher salaries, boarding homes, and medical supplies. Donations in India are eligible for 80G Tax Exemption. Donors in the USA, UK, Germany, and Switzerland can donate via our tax-deductible partner non-profits (501c3 / registered charities). Receipts are generated instantly.',
  },
  {
    q: 'What is the Sambhali Boutique and how does it empower women?',
    a: 'Sambhali Boutique is our self-sustaining social enterprise. Women who complete our 1-year sewing course can join as paid artisans. They produce hand-crafted block-print textiles, totes, and toys, earning fair monthly wages and retaining 100% of profit allocations.',
  },
  {
    q: 'Can foreigners and local volunteers apply to work with Sambhali?',
    a: 'Yes! We welcome volunteers from around the world and India for placements ranging from 4 weeks to 1 year. Roles include English teaching, sewing pattern design, photography, social media, and medical health support in Jodhpur and Setrawa.',
  },
  {
    q: 'How can I sponsor a girl’s education through the Sheerni Project?',
    a: 'You can sponsor a girl for $85/month or $1,020/year. Your sponsorship covers private school tuition, books, uniform, residential lodging, 3 nutritious meals daily, tutoring, and regular progress reports with personal letters.',
  },
];
