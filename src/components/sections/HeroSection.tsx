"use client";

import Button from '@/components/common/Button';

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center text-white bg-gradient-to-br from-primary to-secondary"
      style={{ 
        minHeight: '100vh',
       }}


    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
      {/* adding background video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
          Empower Your People...
        </h1>
        <h2 className="text-xl md:text-2xl font-light max-w-3xl mb-8">
          Hands-on consultants...
        </h2>
        <Button onClick={() => console.log("CTA clicked!")}>
          Book a Free Discovery Call
        </Button>
      </div>
    </section>
  );
};

export default HeroSection; 