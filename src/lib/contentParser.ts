import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the path to the content directory
const contentDirectory = path.join(process.cwd(), 'src/content');

export function getPostBySlug(slug: string, postsDirectory: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
    slug,
  };
}

export function getServiceBySlug(slug: string) {
  const servicesDirectory = path.join(contentDirectory, 'services');
  return getPostBySlug(slug, servicesDirectory);
}

export function getAllServiceSlugs() {
  const servicesDirectory = path.join(contentDirectory, 'services');
  const filenames = fs.readdirSync(servicesDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export function getAllServices() {
  const servicesDirectory = path.join(contentDirectory, 'services');
  const filenames = fs.readdirSync(servicesDirectory);
  const allServicesData = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const { frontmatter } = getPostBySlug(slug, servicesDirectory);
    return {
      slug,
      frontmatter,
    };
  });

  return allServicesData;
}

// Add more functions like getBlogBySlug, getResourceBySlug, etc. as needed 