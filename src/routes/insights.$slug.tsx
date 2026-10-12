import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArticlePage } from '@/components/portfolio/pages';
import { articles, pageHead } from '@/content/portfolio';
export const Route = createFileRoute('/insights/$slug')({
 loader:({params})=>{const article=articles.find(a=>a.slug===params.slug&&a.published);if(!article)throw notFound();return {article}},
 head:({loaderData,params})=>{const head=pageHead(loaderData?.article.title||'Article unavailable',loaderData?.article.summary||'Writing and technical notes.',`/insights/${params.slug}`,!loaderData?.article);return {...head,meta:head.meta.map(m=>'property' in m&&m.property==='og:type'?{...m,content:'article'}:m)}},
 component:ArticleRoute,
});
function ArticleRoute(){const {slug}=Route.useParams();return <ArticlePage slug={slug}/>}
