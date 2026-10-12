import { createFileRoute } from '@tanstack/react-router';
import { FounderPage } from '@/components/portfolio/pages';
import { pageHead } from '@/content/portfolio';
export const Route = createFileRoute('/founder')({component:FounderPage,head:()=>pageHead('Founder & Impact','The story of Tech Faculty NG, practical technology education, mentoring and community building.','/founder')});
