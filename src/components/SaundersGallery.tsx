import blueSky from "/saunders-beach-blue-sky.webp";
import mason from "/saunders-beach-mason.webp";
import relaxing from "/saunders-beach-relaxing.webp";
import family from "/saunders-beach-family.webp";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  aspect: string; // tailwind aspect ratio class
}

const items: GalleryItem[] = [
  {
    src: blueSky,
    alt: "Wide landscape view of Saunders Beach Townsville under clear blue Dry Season skies.",
    caption: "Endless space and blue skies at Saunders—the ultimate North Townsville escape.",
    aspect: "aspect-[4/3]",
  },
  {
    src: mason,
    alt: "Young boy using a telescope on Saunders Beach for afternoon stargazing and wildlife spotting.",
    caption: "Not just for swimming—Saunders is a prime spot for stargazing and wildlife spotting away from city lights.",
    aspect: "aspect-[3/4]",
  },
  {
    src: relaxing,
    alt: "Relaxed POV of feet in the sand at Saunders Beach, emphasizing a quiet Sunday vibe.",
    caption: "Sunday morning rhythm: toes in the sand and nothing but the sound of the Coral Sea.",
    aspect: "aspect-[4/3]",
  },
  {
    src: family,
    alt: "Family beach setup with chairs and shade under the tree line at Saunders Beach.",
    caption: "Practical tip: The natural tree line at Saunders offers excellent afternoon shade for a family setup.",
    aspect: "aspect-[4/3]",
  },
];

const SaundersGallery = () => {
  return (
    <section className="my-10" aria-labelledby="saunders-gallery-heading">
      <div className="mb-6">
        <h3 id="saunders-gallery-heading" className="text-2xl font-bold text-foreground">
          A Local's View of Saunders Beach
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          Real photos from a quiet morning up at Saunders—North Townsville's underrated escape.
        </p>
      </div>

      {/* Masonry layout via CSS columns */}
      <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
        {items.map((item) => (
          <figure
            key={item.src}
            className="mb-5 break-inside-avoid rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={`w-full ${item.aspect} object-cover`}
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default SaundersGallery;
