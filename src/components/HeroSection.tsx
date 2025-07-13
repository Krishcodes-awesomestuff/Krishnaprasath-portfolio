import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import developerProfile from "@/assets/developer-profile.jpg";

const HeroSection = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b-2 border-primary pb-8">
        {/* Main headline */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <Badge variant="secondary" className="text-xs font-medium tracking-wide mb-4">
              BREAKING: NEW TALENT AVAILABLE
            </Badge>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
            Alex Chen
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-muted-foreground">
              Transforms Ideas Into Digital Reality
            </span>
          </h1>
          
          <div className="text-lg leading-relaxed mb-6 max-w-2xl">
            <p className="mb-4">
              <span className="font-semibold">SAN FRANCISCO</span> - A visionary UI/UX Designer and Frontend Developer 
              has emerged in the tech scene, bringing three years of expertise in crafting exceptional 
              digital experiences that bridge the gap between beautiful design and flawless functionality.
            </p>
            <p>
              Specializing in React, TypeScript, and modern design systems, this rising talent has 
              successfully delivered over 25 projects for startups and Fortune 500 companies alike.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="shadow-headline">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={developerProfile} 
              alt="Alex Chen - UI/UX Designer & Frontend Developer"
              className="w-64 h-64 object-cover rounded-full border-4 border-primary shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-headline">
              Available Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;