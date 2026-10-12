import { createFileRoute, notFound } from '@tanstack/react-router';
import { ProjectDetail } from '@/components/portfolio/pages';
import { projects, pageHead } from '@/content/portfolio';
export const Route = createFileRoute('/projects/$slug')({
 loader:({params})=>{const project=projects.find(p=>p.slug===params.slug&&p.published);if(!project)throw notFound();return {project}},
 head:({loaderData,params})=>pageHead(loaderData?.project.name||'Project unavailable',loaderData?.project.summary||'Project notes and further information.',`/projects/${params.slug}`,!loaderData?.project.summary),
 component:ProjectRoute,
});
function ProjectRoute(){const {slug}=Route.useParams();return <ProjectDetail slug={slug}/>}
