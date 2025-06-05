const PartnershipProofSection = () => {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Key Bullets Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">Why Partner With Us?</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {/* Placeholder for text from Content Blueprint [cite: 7] */}
            We partner long-term to embed new mindsets and capabilities, ensuring your growth is sustained.
          </p>
          {/* Placeholder for more bullet points if available */}
        </div>

        {/* Client Logo Montage Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {/* Placeholder for client logos [cite: 6] */}
            <div className="p-4 border border-dashed border-neutral-300 rounded-lg text-neutral-400">Client Logo</div>
            <div className="p-4 border border-dashed border-neutral-300 rounded-lg text-neutral-400">Client Logo</div>
            <div className="p-4 border border-dashed border-neutral-300 rounded-lg text-neutral-400">Client Logo</div>
            <div className="p-4 border border-dashed border-neutral-300 rounded-lg text-neutral-400">Client Logo</div>
            <div className="p-4 border border-dashed border-neutral-300 rounded-lg text-neutral-400">Client Logo</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PartnershipProofSection; 