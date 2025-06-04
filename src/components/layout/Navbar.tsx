import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-neutral-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="/" className="text-xl font-bold text-primary">
          565_WEBSITE
        </Link>

        {/* Navigation Links Placeholder */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-primary-focus">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary-focus">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary-focus">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary-focus">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 