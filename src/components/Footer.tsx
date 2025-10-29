import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Duncan's Guide – Townsville</h3>
          <p className="text-background/80">Your local AI companion for North Queensland</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-5 h-5" />
          <p className="text-base">
            Questions or suggestions?{" "}
            <a 
              href="mailto:greenslopesdirect@gmail.com" 
              className="underline hover:text-[hsl(var(--accent))] transition-colors"
            >
              Email Duncan Ross
            </a>
          </p>
        </div>
        
        <div className="pt-6 border-t border-background/20">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Duncan's Guide – Townsville. Made with love in North Queensland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
