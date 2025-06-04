import Navbar from '@/components/layout/Navbar'; // Using path alias
import Footer from '@/components/layout/Footer'; // Using path alias

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 