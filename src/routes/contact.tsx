import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/portfolio/pages';
import { pageHead } from '@/content/portfolio';
export const Route = createFileRoute('/contact')({component:ContactPage,head:()=>pageHead('Contact','Discuss software engineering opportunities, AI collaboration, product development, partnerships and education.','/contact')});
