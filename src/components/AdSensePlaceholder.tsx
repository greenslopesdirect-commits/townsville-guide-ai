interface AdSensePlaceholderProps {
  slot: "header" | "content" | "footer";
  className?: string;
}

const AdSensePlaceholder = ({ slot, className = "" }: AdSensePlaceholderProps) => {
  const slotId = `adsense-${slot}-slot`;
  
  return (
    <>
      {/* Google AdSense {slot} slot (pending approval) */}
      <div 
        id={slotId} 
        className={`w-full ${className}`}
        aria-hidden="true"
      />
    </>
  );
};

export default AdSensePlaceholder;
