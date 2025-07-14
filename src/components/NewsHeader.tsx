import { Calendar, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NewsHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      });
      
      gsap.from(subtitleRef.current, {
        duration: 0.8,
        y: 20,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out"
      });
      
      gsap.from(".header-details", {
        duration: 0.6,
        x: 30,
        opacity: 0,
        delay: 0.6,
        ease: "power2.out"
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="relative border-b-4 border-primary pb-6 mb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex-1 relative">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <div className="h-0.5 w-16 bg-gradient-accent rounded-full"></div>
          </div>
          
          <h1 ref={titleRef} className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight leading-none">
            THE DEVELOPER
            <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-accent bg-clip-text text-transparent">
              TIMES
            </span>
          </h1>
          
          <p ref={subtitleRef} className="text-base md:text-lg text-muted-foreground mt-3 font-medium tracking-[0.2em] uppercase">
            Portfolio Edition • Est. 2025
          </p>
        </div>
        
        <div className="header-details flex flex-col items-start lg:items-end text-sm text-muted-foreground space-y-3">
          <div className="flex items-center gap-3 px-4 py-2 bg-gradient-card rounded-lg shadow-card">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-medium">{currentDate}</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-gradient-card rounded-lg shadow-card">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">Tamil Nadu, India</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t-2 border-dashed border-border">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-hero rounded-full shadow-headline">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="text-sm font-bold text-primary tracking-[0.15em] uppercase">
              Crafting Digital Experiences Through Code & Design
            </div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;