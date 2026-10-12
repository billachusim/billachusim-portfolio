import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/portfolio/home';
import { pageHead } from '@/content/portfolio';
export const Route = createFileRoute('/')({component:HomePage,head:()=>({...pageHead('Founder, Engineer & AI Product Builder','Bill Nnamdi Achusim builds software products, scalable systems and AI-powered applications, combining hands-on engineering with product thinking.','/'),scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Bill Nnamdi Achusim',jobTitle:'Founder, Senior Software Engineer & AI Product Builder'})}]})});
