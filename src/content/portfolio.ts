export const profile = {
  name: 'Bill Nnamdi Achusim',
  positioning: 'Founder. Senior Software Engineer. AI Product Builder.',
  email: '', github: '', linkedin: 'https://www.linkedin.com/in/billachusim', twitter: 'https://x.com/billachusim', degree: 'Master’s degree in Systems Engineering', university: 'University of Lagos', founderYear: '2022', founderLocation: 'Digital Village, Nnewi, Anambra State', license: 'Licensed by FMSTI through NBTI', authorUrl: '', cvUrl: '', portrait: '', contactEndpoint: '',
};
export type Project = {
  id: string; slug: string; name: string; summary: string; categories: string[];
  technologies: string[]; status: 'Live' | 'In Development' | 'Concept' | 'Archived' | 'Status to be confirmed';
  role?: string; thumbnail?: string; gallery: string[]; liveUrl?: string; repositoryUrl?: string;
  appStoreUrl?: string; featured: boolean; published: boolean; date?: string;
  sections: { title: string; content: string }[]; metrics: { label: string; value: string; reportingDate: string; definition: string }[];
};
const seed: { name: string; slug: string; summary: string; categories: string[]; featured?: boolean; sections?: Project['sections'] }[] = [
  {name:'Dear Claire: Secret Diary Chat',slug:'dear-claire',summary:'My flagship mobile product: a 100% anonymous secret diary with supportive audio and text perspectives, and a community where users earn Loves.',categories:['Mobile Applications'],featured:true,sections:[{title:'A personal product, built over time',content:'Dear Claire: Secret Diary Chat is my flagship mobile product under Social Faculty / Tech Faculty. It is a 100% anonymous secret diary with supportive audio and text perspectives. Its community support model lets users earn Loves. The product is available on Google Play and the App Store, with a reported 4.5★ rating and over 1M+ downloads.'}]},
  {name:'AI Clopedia: Ask AI Anything',slug:'ai-clopedia',summary:'An AI-powered conversational encyclopedia with visual answers, prompt memory, question history, and curiosity tracking.',categories:['AI & Intelligent Applications'],featured:true},
  {name:'Campulse',slug:'campulse',summary:'A progressive web application concept for Nigerian tertiary institutions and schools.',categories:['Web Applications','Experiments & Concepts'],featured:true},
  {name:'Reengage African Voices',slug:'reengage-african-voices',summary:'Digital preservation infrastructure involving AI-powered workflows, APIs and WhatsApp integration.',categories:['Backend & APIs','AI Agents & Automation'],sections:[{title:'Technology for digital preservation',content:'My work with Reengage African Voices connects backend engineering with digital preservation and African knowledge. The project involves AI-powered workflows, APIs and WhatsApp integration. Private architecture, internal data and sensitive business information are deliberately excluded from this portfolio.'}]},
  {name:'PetCareCard',slug:'petcarecard',summary:'A digital pet care product exploring accessible care information.',categories:['Web Applications','SaaS & Digital Products']},
  {name:'Tech Faculty NG',slug:'tech-faculty-ng',summary:'My technology education and innovation venture, connecting practical learning with real-world building.',categories:['Entrepreneurship & Education'],featured:true,sections:[{title:'Building beyond software',content:'I founded Tech Faculty NG to connect technology education with practical software development, mentoring and professional growth. My work includes campus and community engagement, industry-oriented learning and an evolving focus on AI-first and agent-based training.'},{title:'Community and continuity',content:'Community initiatives such as Nnewi Tech Meetup are part of this story. I want learning to extend beyond a classroom, bringing people together around the work of building useful technology.'}]},
  {name:'Alter Ego: Private Self Map',slug:'alter-ego',summary:'A personal psychology and self-discovery product. 100% local: no account, no cloud, no tracking. Explore inner identities across 8 dimensions and consult an inner council.',categories:['Mobile Applications'],sections:[{title:'Self-discovery, kept private',content:'Alter Ego: Private Self Map is a separate product from Dear Claire. It maps inner identities across 8 dimensions and lets users consult an inner council. The experience is 100% local, without an account, cloud or tracking.'}]},
  {name:'Eavesdrop: Live Stories',slug:'eavesdrop',summary:'Interactive live audio rooms for real-time conversations and diverse topics, with hand-raising and room scheduling.',categories:['Mobile Applications'],sections:[{title:'A space for live conversation',content:'Eavesdrop: Live Stories brings real-time conversations into interactive live listening rooms. Users can explore diverse topics, raise a hand to participate and schedule rooms.'}]},
  ...['Nkwo Nnewi App','Dialer App','HomeUni','MoxieHomes','OutreachStudio','Palmshop Admin','Techup','NTMHack'].map(name=>({name,slug:name.toLowerCase().replaceAll(' ','-'),summary:'',categories: name==='Dialer App'?['Mobile Applications']:[]})),
  {name:'Pooliverse',slug:'pooliverse',summary:'A product idea exploring a crowdfunding-oriented forum.',categories:['Experiments & Concepts']},
  {name:'PR Faculty / AutoPR',slug:'pr-faculty-autopr',summary:'An idea for public relations and PR automation.',categories:['Experiments & Concepts']},
  {name:'ExamsAI.ng',slug:'examsai-ng',summary:'An AI-related examination product concept.',categories:['AI & Intelligent Applications','Experiments & Concepts']},
];
export const projects: Project[] = seed.map(p=>({...p,id:p.slug,technologies:[],status:'Status to be confirmed',gallery:[],featured:p.featured??false,published:true,sections:p.sections??[],metrics:[]}));
export const categories = ['AI & Intelligent Applications','AI Agents & Automation','Web Applications','Mobile Applications','Backend & APIs','SaaS & Digital Products','Entrepreneurship & Education','Experiments & Concepts'];
export function filterProjects(query: string, category: string, status: string) {
 const normalized=query.trim().toLowerCase();
 return projects.filter(p=>p.published && (category==='All projects'||p.categories.includes(category)) && (status==='All statuses'||p.status===status) && [p.name,p.summary,...p.categories,...p.technologies].join(' ').toLowerCase().includes(normalized));
}
export const experience = [
 {organization:'Micro1',role:'Senior Software Engineer',dates:'2026 — Present',type:'Professional role',description:'My current career history includes a senior software engineering role with Micro1. Specific responsibilities and engagement details will be added when confirmed.'},
 {organization:'Reengage African Voices',role:'Senior Backend Engineer',dates:'2026 — Present',type:'Professional role',description:'I work on backend engineering in the context of digital preservation, AI-powered workflows and integrations.'},
 {organization:'Mercor',role:'AI project & evaluation work',dates:'2026 · Period to be confirmed',type:'Project engagement',description:'My experience includes AI-related project and evaluation work. This is listed as a project engagement, not a claim of full-time employment.'},
 {organization:'Stanford University',role:'Software Engineering Fellowship',dates:'June — July 2026',type:'Completed fellowship',description:'I completed a software engineering fellowship at Stanford University in June–July 2026.'},
 {organization:'Tech Faculty NG',role:'Founder & Lead Technical Developer',dates:'2022 — Present',type:'Founder',description:'I founded Tech Faculty NG in 2022 at Digital Village, Nnewi, Anambra State. Licensed by FMSTI through NBTI, the venture connects practical training, mentoring and community. I am the lead technical architect behind its learning platforms and Talent Pool, matching graduates to paid tech roles.'},
];
export const skillGroups = [
 {title:'Programming & application development',items:['Python','JavaScript & TypeScript','Dart & Flutter','Node.js','SQL']},
 {title:'Backend & systems',items:['REST API design','Backend development','Database design & integration','Authentication & authorization','System architecture','Cloud & Firebase-based systems']},
 {title:'AI engineering',items:['LLM applications','AI API integration','Prompt engineering','Agents & workflow automation','AI model evaluation','Data annotation & labeling','RLHF fundamentals & AI safety evaluation']},
 {title:'Product engineering',items:['Web & mobile products','Product prototyping','Application architecture','Testing & debugging','Deployment & maintenance','AI-assisted development']},
];
export type Article = {title:string;slug:string;summary:string;publicationDate:string;tags:string[];coverImage?:string;content:string[];published:boolean};
export const articles: Article[] = [];
export const verifiedMetrics = [{label:'Dear Claire downloads',value:'1M+',reportingDate:'2026-10-12',definition:'Reported across Google Play and App Store, supplied from Tech Faculty product page.'},{label:'Dear Claire rating',value:'4.5★',reportingDate:'2026-10-12',definition:'Reported product rating from Tech Faculty product page.'},{label:'Tech Faculty NG founded',value:'2022',reportingDate:'2026-10-12',definition:'Founded at Digital Village, Nnewi, Anambra State.'}];
projects.find(p=>p.slug==='dear-claire')?.metrics.push(...verifiedMetrics.slice(0,2));
export function pageHead(title: string, description: string, path: string, noindex=false) {
 return {meta:[{title:`${title} — Bill Nnamdi Achusim`},{name:'description',content:description},{property:'og:title',content:`${title} — Bill Nnamdi Achusim`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'},...(noindex?[{name:'robots',content:'noindex, follow'}]:[])],links:[{rel:'canonical',href:path}]};
}
