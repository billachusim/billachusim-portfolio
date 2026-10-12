import claireArt from "@/assets/dear-claire.webp.asset.json";
import alterArt from "@/assets/alter-ego.webp.asset.json";
import eavesdropArt from "@/assets/eavesdrop.webp.asset.json";
import aiArt from "@/assets/ai-clopedia.webp.asset.json";
import portraitImg from "@/assets/photos/bill-portrait.webp";
import outdoorImg from "@/assets/photos/bill-outdoor.webp";
import speakingImg from "@/assets/photos/meetup-speaking.webp";
import certificateImg from "@/assets/photos/meetup-certificate.webp";
import audienceImg from "@/assets/photos/meetup-audience.webp";
import fellowshipImg from "@/assets/photos/ai-fellowship-laptop.webp";
import trainingImg from "@/assets/photos/training-class.webp";
import sessionImg from "@/assets/photos/nnewi-session.webp";
export const profile = {
  name: "Bill Nnamdi Achusim",
  positioning: "Founder. Senior Software Engineer. AI Product Builder.",
  email: "",
  github: "",
  linkedin: "https://www.linkedin.com/in/billachusim",
  twitter: "https://x.com/billachusim",
  instagram: "https://www.instagram.com/billachusim/",
  facebook: "https://www.facebook.com/billachusim/",
  medium: "https://medium.com/@socialfaculty",
  degree: "Master’s degree in Systems Engineering",
  university: "University of Lagos",
  founderYear: "2022",
  founderLocation: "Digital Village, Nnewi, Anambra State",
  license: "Licensed by FMSTI through NBTI",
  authorUrl: "https://techfaculty.ng/team/bill-achusim",
  cvUrl: "",
  portrait: portraitImg,
  /** Informal photo used on the About page. */
  aboutPhoto: outdoorImg,
  contactEndpoint: "",
};
export type Project = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  categories: string[];
  technologies: string[];
  status: "Live" | "In Development" | "Concept" | "Archived" | "Status to be confirmed";
  role?: string;
  thumbnail?: string;
  /** Store icon, loaded from the official listing. */
  icon?: string;
  tagline?: string;
  highlights?: string[];
  gallery: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  published: boolean;
  date?: string;
  sections: { title: string; content: string }[];
  metrics: { label: string; value: string; reportingDate: string; definition: string }[];
};
const seed: {
  name: string;
  slug: string;
  summary: string;
  categories: string[];
  featured?: boolean;
  thumbnail?: string;
  sections?: Project["sections"];
}[] = [
  {
    name: "Dear Claire: Secret Diary Chat",
    slug: "dear-claire",
    summary:
      "My flagship mobile product: a 100% anonymous secret diary with supportive audio and text perspectives, and a community where users earn Loves.",
    categories: ["Mobile Applications"],
    featured: true,
    sections: [
      {
        title: "Where Claire came from",
        content:
          "Before Claire was an app, it was Social Faculty, the youth guidance community I started in 2012. Hundreds of young people wrote to us every day about relationships, school, work and family. Between 2015 and 2016 we held real-time guidance conversations with more than 3,000 new people on WhatsApp alone. Claire was my answer to that demand: a diary that actually replies.",
      },
      {
        title: "Launch and early traction",
        content:
          "Dear Claire launched on 17 November 2017. It trended in the social category on Google Play from December 2017 to February 2018, reached 35,000 users without an advertising budget, and attracted a US$10,000 angel investment from Fahim Saleh, the founder of Gokada, within its first six months (figures as reported in 2019).",
      },
      {
        title: "The product today",
        content:
          "Users write or record a diary session, stay 100% anonymous, and receive kind, honest perspectives. Others can follow sessions, leave positive advice and earn Loves that convert to cash. Recent releases added Auto Diary, audio and video sessions with Claire, the Love Store, referrals and automatic translations. It is live on Google Play and the App Store, where it holds a 4.5★ rating from about 900 Google Play reviews.",
      },
    ],
  },
  {
    name: "AI Clopedia: Ask AI Anything",
    slug: "ai-clopedia",
    summary:
      "An AI-powered conversational encyclopedia with visual answers, prompt memory, question history, and curiosity tracking.",
    categories: ["AI & Intelligent Applications"],
    featured: true,
  },
  {
    name: "Campulse",
    slug: "campulse",
    summary:
      "A progressive web application concept for Nigerian tertiary institutions and schools.",
    categories: ["Web Applications", "Experiments & Concepts"],
    featured: true,
  },
  {
    name: "Reengage African Voices",
    slug: "reengage-african-voices",
    summary:
      "Digital preservation infrastructure involving AI-powered workflows, APIs and WhatsApp integration.",
    categories: ["Backend & APIs", "AI Agents & Automation"],
    sections: [
      {
        title: "Technology for digital preservation",
        content:
          "My work with Reengage African Voices connects backend engineering with digital preservation and African knowledge. The project involves AI-powered workflows, APIs and WhatsApp integration. Private architecture, internal data and sensitive business information are deliberately excluded from this portfolio.",
      },
    ],
  },
  {
    name: "PetCareCard",
    slug: "petcarecard",
    summary: "A digital pet care product exploring accessible care information.",
    categories: ["Web Applications", "SaaS & Digital Products"],
  },
  {
    name: "Tech Faculty NG",
    slug: "tech-faculty-ng",
    summary:
      "My technology education and innovation venture, connecting practical learning with real-world building.",
    categories: ["Entrepreneurship & Education"],
    featured: true,
    thumbnail: trainingImg,
    sections: [
      {
        title: "Building beyond software",
        content:
          "I founded Tech Faculty NG to connect technology education with practical software development, mentoring and professional growth. My work includes campus and community engagement, industry-oriented learning and an evolving focus on AI-first and agent-based training.",
      },
      {
        title: "Community and continuity",
        content:
          "Community initiatives such as Nnewi Tech Meetup are part of this story. I want learning to extend beyond a classroom, bringing people together around the work of building useful technology.",
      },
    ],
  },
  {
    name: "Alter Ego: Private Self Map",
    slug: "alter-ego",
    summary:
      "A personal psychology and self-discovery product. 100% local: no account, no cloud, no tracking. Explore inner identities across 8 dimensions and consult an inner council.",
    categories: ["Mobile Applications"],
    sections: [
      {
        title: "Self-discovery, kept private",
        content:
          "Alter Ego: Private Self Map is a separate product from Dear Claire. It maps inner identities across 8 dimensions and lets users consult an inner council. The experience is 100% local, without an account, cloud or tracking.",
      },
    ],
  },
  {
    name: "Eavesdrop: Live Stories",
    slug: "eavesdrop",
    summary:
      "Interactive live audio rooms for real-time conversations and diverse topics, with hand-raising and room scheduling.",
    categories: ["Mobile Applications"],
    sections: [
      {
        title: "A space for live conversation",
        content:
          "Eavesdrop: Live Stories brings real-time conversations into interactive live listening rooms. Users can explore diverse topics, raise a hand to participate and schedule rooms.",
      },
    ],
  },
  ...[
    "Nkwo Nnewi App",
    "Dialer App",
    "HomeUni",
    "MoxieHomes",
    "OutreachStudio",
    "Palmshop Admin",
    "Techup",
    "NTMHack",
  ].map((name) => ({
    name,
    slug: name.toLowerCase().replaceAll(" ", "-"),
    summary: "",
    categories: name === "Dialer App" ? ["Mobile Applications"] : [],
  })),
  {
    name: "Pooliverse",
    slug: "pooliverse",
    summary: "A product idea exploring a crowdfunding-oriented forum.",
    categories: ["Experiments & Concepts"],
  },
  {
    name: "PR Faculty / AutoPR",
    slug: "pr-faculty-autopr",
    summary: "An idea for public relations and PR automation.",
    categories: ["Experiments & Concepts"],
  },
  {
    name: "ExamsAI.ng",
    slug: "examsai-ng",
    summary: "An AI-related examination product concept.",
    categories: ["AI & Intelligent Applications", "Experiments & Concepts"],
  },
];
export const projects: Project[] = seed.map((p) => ({
  ...p,
  id: p.slug,
  technologies: [],
  status: "Status to be confirmed",
  gallery: [],
  featured: p.featured ?? false,
  published: true,
  sections: p.sections ?? [],
  metrics: [],
}));
export const categories = [
  "AI & Intelligent Applications",
  "AI Agents & Automation",
  "Web Applications",
  "Mobile Applications",
  "Backend & APIs",
  "SaaS & Digital Products",
  "Entrepreneurship & Education",
  "Experiments & Concepts",
];
export function filterProjects(query: string, category: string, status: string) {
  const normalized = query.trim().toLowerCase();
  return projects.filter(
    (p) =>
      p.published &&
      (category === "All projects" || p.categories.includes(category)) &&
      (status === "All statuses" || p.status === status) &&
      [p.name, p.summary, ...p.categories, ...p.technologies]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
  );
}
export const experience = [
  {
    organization: "Micro1",
    role: "Senior Software Engineer",
    dates: "2026 — Present",
    type: "Professional role",
    description:
      "My current career history includes a senior software engineering role with Micro1. Specific responsibilities and engagement details will be added when confirmed.",
  },
  {
    organization: "Reengage African Voices",
    role: "Senior Backend Engineer",
    dates: "2026 — Present",
    type: "Professional role",
    description:
      "I work on backend engineering in the context of digital preservation, AI-powered workflows and integrations.",
  },
  {
    organization: "Mercor",
    role: "AI project & evaluation work",
    dates: "2026 · Period to be confirmed",
    type: "Project engagement",
    description:
      "My experience includes AI-related project and evaluation work. This is listed as a project engagement, not a claim of full-time employment.",
  },
  {
    organization: "Stanford University",
    role: "Software Engineering Fellowship",
    dates: "June — July 2026",
    type: "Completed fellowship",
    description:
      "I completed a software engineering fellowship at Stanford University in June–July 2026.",
  },
  {
    organization: "Tech Faculty NG",
    role: "Founder & Lead Technical Developer",
    dates: "2022 — Present",
    type: "Founder",
    description:
      "I founded Tech Faculty NG in 2022 at Digital Village, Nnewi, Anambra State. Licensed by FMSTI through NBTI, it has trained 6,000+ students, and 75% of graduates are in paid tech work within six months. I am the lead technical architect behind its learning platforms and the Talent Pool that matches graduates to paid roles, and I founded the monthly Nnewi Tech Meetup and the AI for Everything Fellowship.",
  },
  {
    organization: "Social Faculty",
    role: "Founder · Creator of Dear Claire",
    dates: "2012 — Present",
    type: "Founder",
    description:
      "I started Social Faculty as a youth guidance community and grew it into the publisher of four live consumer apps: Dear Claire, Alter Ego, Eavesdrop and AI Clopedia, all on Google Play and the App Store.",
  },
];
export const skillGroups = [
  {
    title: "Programming & application development",
    items: ["Python", "JavaScript & TypeScript", "Dart & Flutter", "Node.js", "SQL"],
  },
  {
    title: "Backend & systems",
    items: [
      "REST API design",
      "Backend development",
      "Database design & integration",
      "Authentication & authorization",
      "System architecture",
      "Cloud & Firebase-based systems",
    ],
  },
  {
    title: "AI engineering",
    items: [
      "LLM applications",
      "AI API integration",
      "Prompt engineering",
      "Agents & workflow automation",
      "AI model evaluation",
      "Data annotation & labeling",
      "RLHF fundamentals & AI safety evaluation",
    ],
  },
  {
    title: "Product engineering",
    items: [
      "Web & mobile products",
      "Product prototyping",
      "Application architecture",
      "Testing & debugging",
      "Deployment & maintenance",
      "AI-assisted development",
    ],
  },
];
export type Article = {
  title: string;
  slug: string;
  summary: string;
  publicationDate: string;
  tags: string[];
  coverImage?: string;
  content: string[];
  published: boolean;
  sourceUrl?: string;
};
export const articles: Article[] = [
  {
    title: "Online vs Physical Tech Bootcamps in Nigeria: Which Should You Choose in 2026?",
    slug: "online-vs-physical-tech-bootcamp-nigeria-2026",
    summary:
      "Online, hybrid or physical? A comparison of cost, discipline, power and data, networking and certificates.",
    publicationDate: "2026-10-08",
    tags: ["Technology education"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/online-vs-physical-tech-bootcamp-nigeria-2026",
  },
  {
    title: "Best Tech Hubs & Training Institutes in Nigeria by City (2026)",
    slug: "best-tech-hubs-and-training-institutes-in-nigeria-by-city-2026",
    summary:
      "A city-by-city guide to what you can study in Lagos, Abuja, Enugu, Nnewi, Aba, Owerri, Port Harcourt, Ibadan and Kano.",
    publicationDate: "2026-09-13",
    tags: ["Technology education"],
    content: [],
    published: true,
    sourceUrl:
      "https://techfaculty.ng/blog/best-tech-hubs-and-training-institutes-in-nigeria-by-city-2026",
  },
  {
    title: "Top Tech Hubs in Africa: Where to Learn Tech in 2026",
    slug: "top-tech-hubs-in-africa-where-to-learn-tech-2026",
    summary:
      "A country-by-country guide to Africa’s leading tech hubs: Nigeria, Kenya, Ghana, Rwanda, South Africa and Egypt.",
    publicationDate: "2026-09-13",
    tags: ["Technology education"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/top-tech-hubs-in-africa-where-to-learn-tech-2026",
  },
  {
    title: "Virtual SIWES in Nigeria (2026): Online IT & Logbook Signing",
    slug: "virtual-siwes-nigeria-2026-online-it-logbook-signing",
    summary:
      "How to do SIWES or IT online, get your logbook reviewed, signed and stamped, and delivered back before your deadline.",
    publicationDate: "2026-08-28",
    tags: ["Career development"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/virtual-siwes-nigeria-2026-online-it-logbook-signing",
  },
  {
    title: "How Much Do Tech Courses Cost in Nigeria in 2026? Real Naira Prices",
    slug: "tech-course-fees-nigeria-2026",
    summary:
      "What tech courses cost in Nigeria in 2026, with real naira prices for web, data, AI, cybersecurity, cloud, design and marketing, plus SIWES fees.",
    publicationDate: "2026-10-08",
    tags: ["Technology education"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/tech-course-fees-nigeria-2026",
  },
  {
    title: "Best Tech Bootcamps in Anambra and the South East (2026): An Honest Guide",
    slug: "best-tech-bootcamps-anambra-south-east-nigeria-2026",
    summary:
      "An honest guide to training hubs in Awka, Nnewi, Onitsha, Enugu, Owerri and Aba—and how to choose one.",
    publicationDate: "2026-10-08",
    tags: ["Technology education"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/best-tech-bootcamps-anambra-south-east-nigeria-2026",
  },
  {
    title: "SIWES for Computer Science and ICT Students in Nigeria (2026 Guide)",
    slug: "siwes-computer-science-ict-students-nigeria-2026",
    summary:
      "Where to do SIWES, what work to do, what to write in your logbook, online IT, and costs.",
    publicationDate: "2026-10-08",
    tags: ["Career development"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/siwes-computer-science-ict-students-nigeria-2026",
  },
  {
    title: "AI Automation for Nigerian Businesses: A Practical 2026 Playbook",
    slug: "ai-automation-for-nigerian-businesses-2026",
    summary:
      "Practical AI automation for businesses: removing repetitive tasks from a human’s day without needing a data science team.",
    publicationDate: "2026-08-14",
    tags: ["AI & automation"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/ai-automation-for-nigerian-businesses-2026",
  },
  {
    title: "How to Verify a Tech Certificate in Nigeria (2026 Guide for Employers and Graduates)",
    slug: "how-to-verify-tech-certificate-nigeria",
    summary:
      "How to check that a tech or bootcamp certificate is genuine, with steps for graduates and employers to verify credentials.",
    publicationDate: "2026-10-08",
    tags: ["Career development"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/how-to-verify-tech-certificate-nigeria",
  },
  {
    title: "How Much Does It Cost to Build a Website in Nigeria in 2026?",
    slug: "cost-to-build-a-website-in-nigeria-2026",
    summary:
      "Why website quotes vary widely—and how to understand the different work behind the price.",
    publicationDate: "2026-08-14",
    tags: ["Product development"],
    content: [],
    published: true,
    sourceUrl: "https://techfaculty.ng/blog/cost-to-build-a-website-in-nigeria-2026",
  },
];
export type Metric = {
  label: string;
  value: string;
  reportingDate: string;
  definition: string;
  sourceUrl: string;
};
/** Headline numbers. Each carries its own definition and public source. */
export const verifiedMetrics: Metric[] = [
  {
    label: "Students trained at Tech Faculty NG",
    value: "6,000+",
    reportingDate: "2026-10",
    definition: "Everyone who enrolled and attended since 2022, counted once.",
    sourceUrl: "https://techfaculty.ng/outcomes",
  },
  {
    label: "Graduates in paid tech work within 6 months",
    value: "75%",
    reportingDate: "2026-10",
    definition:
      "Certified graduates in paid tech work within six months; unreachable graduates count as not employed.",
    sourceUrl: "https://techfaculty.ng/outcomes",
  },
  {
    label: "Consumer apps live on both app stores",
    value: "4",
    reportingDate: "2026-10-12",
    definition: "Dear Claire, Alter Ego, Eavesdrop and AI Clopedia, published by Social Faculty.",
    sourceUrl: "https://techfaculty.ng/products",
  },
  {
    label: "Dear Claire rating on Google Play",
    value: "4.5★",
    reportingDate: "2026-10-12",
    definition: "Google Play rating from about 895 reviews.",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.mobymagic.clairediary",
  },
];
const dearClaireRating = verifiedMetrics.find(
  (m) => m.label === "Dear Claire rating on Google Play",
);
if (dearClaireRating)
  projects.find((p) => p.slug === "dear-claire")?.metrics.push(dearClaireRating);
export function pageHead(title: string, description: string, path: string, noindex = false) {
  return {
    meta: [
      { title: `${title} — Bill Nnamdi Achusim` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Bill Nnamdi Achusim` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

// Store artwork is loaded from the official App Store and Google Play image CDNs.
const appStoreShot = (path: string) =>
  `https://is1-ssl.mzstatic.com/image/thumb/${path}/600x1300bb.webp`;
const playIcon = (id: string) => `https://play-lh.googleusercontent.com/${id}=s256-rw`;

const productAssets = [
  {
    slug: "dear-claire",
    art: claireArt.url,
    ios: "https://apps.apple.com/ng/app/dear-claire-secret-diary-chat/id1635333304",
    android: "https://play.google.com/store/apps/details?id=com.mobymagic.clairediary",
    icon: playIcon(
      "JPC5qPvrrJMgqBBkCfExvoXQe2CJjyLUichkN6cs38rwuf8FiSkxpGSdDW9I-ZY3GgQA_DjVfb6qK4N7moCCRdU",
    ),
    tagline: "The diary that replies.",
    highlights: [
      "Anonymous text and voice diary sessions",
      "Kind, honest replies from Claire and the community",
      "Earn Loves for good advice and convert them to cash",
      "Auto Diary, audio and video sessions, Love Store",
    ],
    screenshots: [
      "PurpleSource126/v4/6c/18/0a/6c180ab7-a391-efec-0330-df41257a7e8a/db77a55e-7caf-44b7-81f8-c6f54fec3074_Apple_iPhone_11_Pro_Max_Screenshot_0.png",
      "PurpleSource116/v4/e7/ef/76/e7ef7640-df84-1507-d047-8e7c94a46eb8/029b9d85-e6f1-40a9-ae3c-f9ce56ec6d2d_Apple_iPhone_11_Pro_Max_Screenshot_1.png",
      "PurpleSource116/v4/7a/7d/89/7a7d897b-0eb0-41a7-1403-e3d6ba9c1738/9027ebe7-2ddb-4fc2-bdbe-6799c2bf8a08_Apple_iPhone_11_Pro_Max_Screenshot_2.png",
      "PurpleSource126/v4/45/7f/85/457f8568-fb8b-2df8-5752-b60e4f7b48b7/a67b9168-02ee-4d01-a4af-39f938f86f13_Apple_iPhone_11_Pro_Max_Screenshot_3.png",
    ],
  },
  {
    slug: "alter-ego",
    art: alterArt.url,
    ios: "https://apps.apple.com/app/alter-ego-know-all-yourselves/id6759404823",
    android: "https://play.google.com/store/apps/details?id=com.socialfaculty.alter_ego",
    icon: playIcon(
      "2c9r2azUmIYoOV9xi3Ac1c0udTzHr7qTOGRR8HUmpNSqmw5fKBzDcmdzGpO3potXm1L_1XdyTRIJDtYog0sFyo0",
    ),
    tagline: "You are not one personality. You are many.",
    highlights: [
      "Map your inner identities across 8 dimensions",
      "Consult your inner council before you decide",
      "Radar chart of your balance over time",
      "100% local: no account, no cloud, no tracking",
    ],
    screenshots: [
      "PurpleSource211/v4/ed/2e/8c/ed2e8cca-593c-4d25-53c4-7149d0eb00c8/aescreen1__U00281_U0029.png",
      "PurpleSource221/v4/21/02/54/210254db-a69e-21b1-3c60-5c831c70b7cb/aescreen2__U00281_U0029.png",
      "PurpleSource221/v4/7b/02/41/7b0241b9-bf2f-2b1a-b029-0bed89f4a991/aescreen3__U00281_U0029.png",
      "PurpleSource221/v4/c3/af/91/c3af91c9-b494-6851-dca5-11c3bc1f2c84/aescreen4__U00281_U0029.png",
    ],
  },
  {
    slug: "eavesdrop",
    art: eavesdropArt.url,
    ios: "https://apps.apple.com/us/app/eavesdrop-live-stories/id6759225893",
    android: "https://play.google.com/store/apps/details?id=com.socialfaculty.eavesdrop",
    icon: playIcon(
      "3mA9Dd5dIjvb6A9cBp6R1vEJD9owd4BW0EdyWc4pwHdapTuejPwbZOqvZ6ZUfLXR_32SJNDoIk-MYhlGGGIm1A",
    ),
    tagline: "Always live. Always human.",
    highlights: [
      "Listen quietly to live conversations on any topic",
      "Raise a hand to join the stage",
      "Host your own room or book a private call",
    ],
    screenshots: [
      "PurpleSource211/v4/d2/d1/28/d2d128bd-a684-772d-d3ae-bfd9aa95410e/eaveiphonescreen1.png",
      "PurpleSource211/v4/20/c4/b7/20c4b7d3-08f5-4217-945f-8f55871a32c0/eaveiphonescreen2.png",
      "PurpleSource221/v4/ea/a3/3c/eaa33cf6-4804-c113-402a-59b1637c03fd/eaveiphonescreen3.png",
      "PurpleSource221/v4/dd/e3/f7/dde3f7ac-f5f2-40c8-ea54-5c5e9684c374/eaveiphonescreen4.png",
    ],
  },
  {
    slug: "ai-clopedia",
    art: aiArt.url,
    ios: "https://apps.apple.com/us/app/ai-clopedia-ask-ai-anything/id6447000971",
    android: "https://play.google.com/store/apps/details?id=com.socialfaculty.AiClopedia",
    icon: playIcon(
      "JSCDkRaZnM_A17QbtPrMeVSTop2pVRZS5ad6B6SoR2wxpRKNFYrRM0IdCZVe8NZ12wN5WqcFmnywe_O5EPqe",
    ),
    tagline: "Your AI-powered encyclopedia.",
    highlights: [
      "Clear answers with an image for every question",
      "Featured questions and a community feed",
      "Your own question history to follow your curiosity",
    ],
    screenshots: [
      "PurpleSource116/v4/2c/af/d1/2cafd16c-659a-0df4-2652-14efb0c6a130/22ff504d-46d9-47b8-a692-0c0daf5c408f_Apple_iPhone_11_Pro_Max_Screenshot_0.png",
      "Purple126/v4/8a/a3/f6/8aa3f663-871b-715a-8fc9-0040025681e0/79e5ec67-2d95-424d-84e5-a0363d77b8db_Apple_iPhone_11_Pro_Max_Screenshot_1.png",
      "Purple126/v4/d5/fb/2d/d5fb2dde-31a9-b17e-9f5c-bf6313a6fe8b/ce9d00e8-1742-4413-811d-d7272e2ada07_Apple_iPhone_11_Pro_Max_Screenshot_2.png",
      "Purple126/v4/09/bf/b2/09bfb254-d814-d57e-e89a-2b227298c2e3/bf9c99c6-2006-43f8-971b-f77ebce49eb4_Apple_iPhone_11_Pro_Max_Screenshot_3.png",
    ],
  },
];
for (const asset of productAssets) {
  const project = projects.find((p) => p.slug === asset.slug);
  if (project) {
    project.thumbnail = asset.art;
    project.appStoreUrl = asset.ios;
    project.liveUrl = asset.android;
    project.status = "Live";
    project.icon = asset.icon;
    project.tagline = asset.tagline;
    project.highlights = asset.highlights;
    project.gallery = asset.screenshots.map(appStoreShot);
    project.role = "Founder & product lead · Social Faculty";
  }
}
/** The four live apps, in showcase order. */
export const liveApps = productAssets
  .map((a) => projects.find((p) => p.slug === a.slug))
  .filter((p): p is Project => Boolean(p));

/**
 * Photographs of Bill. Add uploaded image URLs here; empty entries are never rendered.
 * Social platforms block automated downloads, so these await supplied files.
 */
export const photos: { src: string; alt: string; caption: string }[] = [
  {
    src: speakingImg,
    alt: "Bill Achusim speaking to the room at the Nnewi Tech Meetup",
    caption: "Hosting the Nnewi Tech Meetup",
  },
  {
    src: trainingImg,
    alt: "A full Tech Faculty NG training class working at computers",
    caption: "A training class at Tech Faculty NG",
  },
  {
    src: certificateImg,
    alt: "Bill Achusim presenting a certificate to a participant",
    caption: "Certificate presentation, Nnewi Tech Meetup",
  },
  {
    src: audienceImg,
    alt: "Attendees seated at the Nnewi Tech Meetup",
    caption: "The meetup audience",
  },
  {
    src: fellowshipImg,
    alt: "Bill Achusim at a laptop wearing an AI for Everything shirt",
    caption: "AI for Everything Fellowship",
  },
  {
    src: sessionImg,
    alt: "A Nnewi Tech Faculty session with students around a table",
    caption: "A session at Nnewi Tech Faculty",
  },
];

export const milestones: { year: string; title: string; text: string; sourceUrl?: string }[] = [
  {
    year: "2012",
    title: "Started Social Faculty",
    text: "A youth guidance community on relationships, school, work and life that later counselled thousands of young people directly.",
    sourceUrl:
      "https://medium.com/@socialfaculty/the-claire-app-solution-to-everyday-problems-by-bill-achusim-5a2fe30d58ac",
  },
  {
    year: "2017",
    title: "Launched Dear Claire",
    text: "Released on 17 November 2017. Trended on Google Play within weeks and raised an angel cheque from Gokada founder Fahim Saleh.",
    sourceUrl:
      "https://medium.com/@socialfaculty/the-claire-app-solution-to-everyday-problems-by-bill-achusim-5a2fe30d58ac",
  },
  {
    year: "2022",
    title: "Founded Tech Faculty NG",
    text: "A licensed tech school at the Digital Village in Nnewi, built on one idea: train, certify, employ.",
    sourceUrl: "https://techfaculty.ng/about",
  },
  {
    year: "2026",
    title: "Nnewi Tech Meetup and AI for Everything",
    text: "Hosting a monthly community meetup and launching an AI Agents & Data Training Fellowship, while shipping Alter Ego, Eavesdrop and AI Clopedia.",
    sourceUrl: "https://techfaculty.ng/events/nnewi-tech-meetup",
  },
  {
    year: "2026",
    title: "Stanford fellowship · Senior engineering",
    text: "Completed a software engineering fellowship at Stanford University and took on senior engineering and AI evaluation work.",
  },
  {
    year: "2026",
    title: "micro1 Frontier Engineering Challenge",
    text: "Took part in micro1’s Frontier Engineering Challenge 2026 and received a certificate of participation on 10 September 2026.",
  },
];

export const communityInitiatives = [
  {
    name: "Nnewi Tech Meetup",
    summary:
      "A free monthly gathering on the last Saturday of the month at the Technology Incubation Centre, Nnewi: product demos, lightning talks, hiring conversations and open networking. Six editions in 2026 so far.",
    url: "https://techfaculty.ng/events/nnewi-tech-meetup",
  },
  {
    name: "AI for Everything Fellowship",
    summary:
      "Tech Faculty’s AI Agents & Data Training Fellowship. Participants use AI agents on real tasks and learn to train the models behind intelligent systems. The first cohort had about 20 participants.",
    url: "https://techfaculty.ng/",
  },
  {
    name: "Talent Pool & SIWES",
    summary:
      "A public Talent Pool that matches graduates to paid client work, plus SIWES industrial-training placements for university students at a licensed centre.",
    url: "https://techfaculty.ng/talent/pool",
  },
];

export const press = [
  {
    outlet: "AfiaTV",
    title: "Nnewi-based tech entrepreneur Bill Achusim shares his journey",
    kind: "Feature",
    url: "https://www.facebook.com/afiatvofficial/posts/nnewi-based-tech-entrepreneur-bill-achusim-billachusim-shares-his-remarkable-jou/398625532691170/",
  },
  {
    outlet: "Nnewi Tech Faculty",
    title: "Every builder has a story: on the journey into tech and lessons from failure",
    kind: "Interview",
    url: "https://www.facebook.com/NnewiTech/videos/every-builder-has-a-storywe-sat-down-with-nnamdi-bill-achusim-founder-of-nnewi-t/988718227109665/",
  },
  {
    outlet: "Anambra Tech Revamp, Awka",
    title: "Interview on building a tech hub in Nnewi",
    kind: "Interview",
    url: "https://www.facebook.com/techfacultyng/videos/nnewi-tech-faculty-at-anambra-tech-revamp/806862410518668/",
  },
  {
    outlet: "CEDTV",
    title: "Tech integration can save your business",
    kind: "Talk",
    url: "https://youtu.be/MBw58WljMjU",
  },
  {
    outlet: "Medium",
    title: "The Claire App solution to everyday problems",
    kind: "Essay",
    url: "https://medium.com/@socialfaculty/the-claire-app-solution-to-everyday-problems-by-bill-achusim-5a2fe30d58ac",
  },
];
