export const profile = {
  name: 'Bill Nnamdi Achusim',
  positioning: 'Founder. Senior Software Engineer. AI Product Builder.',
  email: '', github: '', linkedin: '', cvUrl: '', portrait: '', contactEndpoint: '',
};
export type Project = {
  id: string; slug: string; name: string; summary: string; categories: string[];
  technologies: string[]; status: 'Live' | 'In Development' | 'Concept' | 'Archived' | 'Status to be confirmed';
  role?: string; thumbnail?: string; gallery: string[]; liveUrl?: string; repositoryUrl?: string;
  appStoreUrl?: string; featured: boolean; published: boolean; date?: string;
  sections: { title: string; content: string }[]; metrics: { label: string; value: string; reportingDate: string; definition: string }[];
};
const seed: { name: string; slug: string; summary: string; categories: string[]; featured?: boolean; sections?: Project['sections'] }[] = [
  {name:'Dear Claire',slug:'dear-claire',summary:'A personal mobile product exploring diary and chat-based experiences.',categories:['Mobile Applications'],featured:true,sections:[{title:'A personal product, built over time',content:'Dear Claire is part of my work building personal mobile experiences. It brings diary and chat-based interaction into my product journey. I see it as an opportunity to tell the story of long-term product ownership, once the architecture, publishing history and product milestones are documented.'}]},
  {name:'AI Clopedia',slug:'ai-clopedia',summary:'An AI-powered application for asking questions and interacting with artificial intelligence.',categories:['AI & Intelligent Applications'],featured:true},
  {name:'Campulse',slug:'campulse',summary:'A progressive web application concept for Nigerian tertiary institutions and schools.',categories:['Web Applications','Experiments & Concepts'],featured:true},
  {name:'Reengage African Voices',slug:'reengage-african-voices',summary:'Digital preservation infrastructure involving AI-powered workflows, APIs and WhatsApp integration.',categories:['Backend & APIs','AI Agents & Automation'],sections:[{title:'Technology for digital preservation',content:'My work with Reengage African Voices connects backend engineering with digital preservation and African knowledge. The project involves AI-powered workflows, APIs and WhatsApp integration. Private architecture, internal data and sensitive business information are deliberately excluded from this portfolio.'}]},
  {name:'PetCareCard',slug:'petcarecard',summary:'A digital pet care product exploring accessible care information.',categories:['Web Applications','SaaS & Digital Products']},
  {name:'Tech Faculty NG',slug:'tech-faculty-ng',summary:'My technology education and innovation venture, connecting practical learning with real-world building.',categories:['Entrepreneurship & Education'],featured:true,sections:[{title:'Building beyond software',content:'I founded Tech Faculty NG to connect technology education with practical software development, mentoring and professional growth. My work includes campus and community engagement, industry-oriented learning and an evolving focus on AI-first and agent-based training.'},{title:'Community and continuity',content:'Community initiatives such as Nnewi Tech Meetup are part of this story. I want learning to extend beyond a classroom, bringing people together around the work of building useful technology.'}]},
  ...['Eavesdrop','Nkwo Nnewi App','Dialer App','HomeUni','MoxieHomes','OutreachStudio','Palmshop Admin','Techup','NTMHack'].map(name=>({name,slug:name.toLowerCase().replaceAll(' ','-'),summary:'',categories: name==='Dialer App'?['Mobile Applications']:[]})),
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
 {organization:'Tech Faculty NG',role:'Founder & technology education leader',dates:'Founding date to be confirmed',type:'Founder',description:'I build a technology education and innovation venture with a focus on practical training, mentoring and community development.'},
];
export const skillGroups = [
 {title:'Programming & application development',items:['Python','JavaScript & TypeScript','Dart & Flutter','Node.js','SQL']},
 {title:'Backend & systems',items:['REST API design','Backend development','Database design & integration','Authentication & authorization','System architecture','Cloud & Firebase-based systems']},
 {title:'AI engineering',items:['LLM applications','AI API integration','Prompt engineering','Agents & workflow automation','AI model evaluation','Data annotation & labeling','RLHF fundamentals & AI safety evaluation']},
 {title:'Product engineering',items:['Web & mobile products','Product prototyping','Application architecture','Testing & debugging','Deployment & maintenance','AI-assisted development']},
];
export type Article = {title:string;slug:string;summary:string;publicationDate:string;tags:string[];coverImage?:string;content:string[];published:boolean};
export const articles: Article[] = [];
export const verifiedMetrics: {label:string;value:string;reportingDate:string;definition:string}[] = [];
export function pageHead(title: string, description: string, path: string, noindex=false) {
 return {meta:[{title:`${title} — Bill Nnamdi Achusim`},{name:'description',content:description},{property:'og:title',content:`${title} — Bill Nnamdi Achusim`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'},...(noindex?[{name:'robots',content:'noindex, follow'}]:[])],links:[{rel:'canonical',href:path}]};
}
