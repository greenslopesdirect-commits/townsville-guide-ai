const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Find Your Way Around
        </h2>
        
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-tropical)] border-2 border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119394.94738795227!2d146.71539792140147!3d-19.257413884961923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd5da0d8d51d9a9%3A0x5017d681632bec0!2sTownsville%20QLD!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
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
