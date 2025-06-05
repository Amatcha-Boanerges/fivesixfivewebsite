import { getServiceBySlug, getAllServiceSlugs } from '@/lib/contentParser';
import { MDXRemote } from 'next-mdx-remote/rsc';

type PageProps = {
  params: {
    slug: string;
  };
};

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

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs;
}

export default ServiceDetailPage; 