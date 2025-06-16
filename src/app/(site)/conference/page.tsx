import Hero from '@/components/sections/conference/Hero';
import AwaitYou from '@/components/sections/conference/AwaitYou';
import CountdownTimer from '@/components/sections/conference/CountdownTimer';
// import BookYourSeat from '../../components/BookYourSeat';
import WhyAttend from '@/components/sections/conference/WhyAttend';
import PastAttendees from '@/components/sections/conference/PastAttendees';
import WhatYouWillLearn from '@/components/sections/conference/WhatYouWillLearn';
import TestimonialSlider from '@/components/sections/conference/TestimonialSlider';
import FinalCTASection from '@/components/sections/conference/FinalCTASection';
import { getTestimonials } from '@/lib/contentParser-testimonials';
import ProblemSection from '@/components/sections/conference/ProblemSection';

export default async function ConferencePage() {
  const testimonials = await getTestimonials();
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <ProblemSection />
      <AwaitYou />
      <CountdownTimer />
      {/* <BookYourSeat /> */}
      <WhyAttend />
      {/* <BookYourSeat /> */}
      <WhatYouWillLearn />
      {/* <BookYourSeat /> */}
      <PastAttendees />
      <TestimonialSlider testimonials={testimonials} />
      <FinalCTASection />
    </main>
  );
} 