import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Quick Links Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2 text-white">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/events" className="hover:text-primary">Events</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2 text-white">Follow Us</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Twitter</a></li>
              {/* Add more social links as needed */}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2 text-white">Get Growth Insights</h3>
            <p className="text-sm mb-3">Sign up for our newsletter to get the latest insights.</p>
            {/* Basic placeholder for form */}
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-auto flex-grow px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md text-sm focus:ring-primary focus:border-primary outline-none placeholder-neutral-400"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Legal & Copyright Section */}
        <div className="border-t border-neutral-700 pt-6 mt-6 text-center">
          <div className="mb-2">
            <Link href="/privacy-policy" className="hover:text-primary text-sm mx-1">
              Privacy Policy
            </Link>
            <span className="mx-2 text-neutral-500">|</span>
            <Link href="/terms-of-service" className="hover:text-primary text-sm mx-1">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm">
            &copy; {currentYear} fivesixfive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
