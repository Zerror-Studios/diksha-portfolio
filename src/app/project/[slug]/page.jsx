import ProjectDetail from '@/components/common/ProjectDetail'
import { createMetadata } from '@/lib/seo'
import { client } from '@/sanity/lib/client'
import { PROJECT_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const revalidate = 60;

const getProject = async (slug) => {
  return client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
}

const getPublicProject = (project) => {
  if (!project) return null;

  const { projectPassword, slides = [], unlockedSlidesCount = 0, lockProject, ...publicProject } = project;
  const isLocked = lockProject === true && Boolean(projectPassword);
  const visibleSlidesCount = isLocked ? Math.max(0, unlockedSlidesCount || 0) : slides.length;
  const visibleSlides = isLocked ? slides.slice(0, visibleSlidesCount) : slides;

  return {
    ...publicProject,
    lockProject,
    isLocked,
    hasMoreLockedSlides: isLocked && slides.length > visibleSlidesCount,
    unlockedSlidesCount: visibleSlidesCount,
    slides: visibleSlides,
  };
}

export async function generateStaticParams() {
  const projects = await client.fetch(PROJECT_SLUGS_QUERY);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }
  const publicProject = getPublicProject(project);

  return (
    <>
        <ProjectDetail project={publicProject}/>
    </>
  )
}

export default page


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  const projectPath = `/project/${encodeURIComponent(slug)}`;

  if (!project) {
    return createMetadata({
      title: 'Project Not Found',
      path: projectPath,
      noIndex: true,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/project/${encodeURIComponent(project.slug)}`,
    image: project.coverImage?.asset?.url,
    type: 'article',
  });
}
