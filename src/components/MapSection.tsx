const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Explore Townsville
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Zoom in to discover the city's landmarks, restaurants, and attractions.
        </p>
        
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-tropical)] border-2 border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238179.98667765076!2d146.58848267109374!3d-19.257706399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd5d1c6e0e3a5c3%3A0x502a35af3de94b0!2sTownsville%20QLD!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Townsville Map"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
