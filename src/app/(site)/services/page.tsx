import Link from 'next/link';
import { getAllServices } from '@/lib/contentParser';

const ServicesPage = () => {
  const services = getAllServices();

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg text-neutral-600 mt-2">
          Discover how we can help you transform your organization from the inside out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            key={service.slug}
            href={`/services/${service.slug}`} 
            className="block p-6 border border-neutral-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-out"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">{service.frontmatter.title}</h2>
            <p className="text-neutral-700">{service.frontmatter.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage; 