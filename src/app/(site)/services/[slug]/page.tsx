import { getServiceBySlug, getAllServiceSlugs } from '@/lib/contentParser';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';

// Explicitly define the type for the params object
interface PageParams {
  slug: string;
}

// Explicitly define the type for the page component's props
interface PageProps {
  params: PageParams;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const { frontmatter } = getServiceBySlug(slug);
  return {
    title: `${frontmatter.title} | Fivesixfive`,
    description: frontmatter.summary,
  };
}

// This component fetches and displays a single service page.
const ServiceDetailPage = async ({ params }: PageProps) => {
  const { slug } = params;
  const { frontmatter, content } = getServiceBySlug(slug);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Display the title from the MDX frontmatter */}
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-lg text-neutral-600 mb-8">{frontmatter.summary}</p>
      
      {/* Render the MDX content */}
      <article className="prose lg:prose-xl max-w-none">
        <MDXRemote source={content} />
      </article>
    </div>
  );
};

// --- FIX IS HERE ---
// Remove `async` and the Promise return type
export function generateStaticParams(): PageParams[] {
  const slugs = getAllServiceSlugs();
  return slugs;
}
// --- END FIX ---

export default ServiceDetailPage; 