interface AdvertiserAdBlockProps {
  className?: string;
}

const AdvertiserAdBlock = ({ className = "" }: AdvertiserAdBlockProps) => {
  return (
    <div
      className={`border border-border rounded-lg p-4 bg-muted/30 text-center ${className}`}
    >
      <a
        href="#"
        className="block"
        aria-label="Advertiser space"
      >
        {/* Placeholder image area */}
        <div className="w-full max-w-[336px] mx-auto aspect-[336/280] bg-muted rounded flex items-center justify-center mb-3">
          <span className="text-muted-foreground text-sm">300×250</span>
        </div>
        <p className="font-semibold text-foreground text-sm">Advertiser Space</p>
        <p className="text-muted-foreground text-xs">Your ad could be here soon</p>
      </a>
    </div>
  );
};

export default AdvertiserAdBlock;
