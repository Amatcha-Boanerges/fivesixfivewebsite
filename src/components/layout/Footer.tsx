import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300 p-6 text-center">
      <div className="container mx-auto">
        <div className="mb-2">
          <Link href="/privacy-policy" className="hover:text-primary text-sm">
            Privacy Policy
          </Link>
          <span className="mx-2 text-neutral-500">|</span>
          <Link href="/terms-of-service" className="hover:text-primary text-sm">
            Terms of Service
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} fivesixfive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 