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
            Krishnaprasath Venkadesan
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-muted-foreground">
              Crafting Digital Experiences with Code & Design
            </span>
          </h1>
          
          <div className="text-lg leading-relaxed mb-6 max-w-2xl">
            <p className="mb-4">
              <span className="font-semibold">INDIA</span> - A passionate UI/UX Designer and Frontend Developer 
              making waves in the tech industry, bringing expertise in React, Next.js, and modern design systems 
              to create exceptional digital experiences that blend beautiful design with seamless functionality.
            </p>
            <p>
              Previously interned at Kenesis as Frontend Developer and ANS at AAI - Chennai Airport, 
              this talented developer has successfully delivered 7+ projects with expertise in GSAP animations and user research.
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
              alt="Krishnaprasath Venkadesan - UI/UX Designer & Frontend Developer"
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