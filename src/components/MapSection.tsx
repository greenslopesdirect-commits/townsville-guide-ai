const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Explore Townsville & North Queensland 🌏
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Use the interactive map to explore top-rated restaurants, beaches, attractions, lookouts, and hidden gems across Townsville and Magnetic Island.
        </p>
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-center font-semibold text-foreground mb-3">
            <strong>Zoom in to find:</strong>
          </p>
          <ul className="text-left text-muted-foreground space-y-2 list-disc list-inside ml-auto mr-auto max-w-md">
            <li>Popular dining spots</li>
            <li>Beaches and walking trails</li>
            <li>Family attractions and parks</li>
            <li>Hotels and accommodation</li>
            <li>Local landmarks and scenic areas</li>
          </ul>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-tropical)] border-2 border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238179.98667765076!2d146.58848267109374!3d-19.257706399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd5d1c6e0e3a5c3%3A0x502a35af3de94b0!2sTownsville%20QLD!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Interactive map of Townsville showing attractions, beaches, restaurants and points of interest"
            aria-label="Interactive Google Map of Townsville and North Queensland region"
          />
        </div>
        
        <p className="text-center text-base text-muted-foreground mt-6">
          Tap any point of interest to learn more — or ask the AI guide for personalised recommendations.
        </p>
      </div>
    </section>
  );
};

export default MapSection;
