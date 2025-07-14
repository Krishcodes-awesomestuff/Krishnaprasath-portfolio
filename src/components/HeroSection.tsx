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
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
            Krishnaprasath Venkadesan
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-muted-foreground">
            Designing Code, Building Stories
            </span>
          </h1>
          
          <div className="text-lg leading-relaxed mb-6 max-w-2xl">
            <p className="mb-4">
              <span className="font-semibold">INDIA</span> - An UI/UX designer and frontend developer with a passion for creating digital experiences
               that are both beautiful and intuitive. With a strong foundation in React, Next.js, and
                modern design systems, Krishnaprasath love turning complex ideas into simple, engaging interfaces.
                Whether refining a user flow or adding a subtle touch of humor, his goal is always to
                make the web a more delightful place one project at a time.
            </p>
            
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:webdev.prasath@gmail.com">
              <Button size="lg" className="shadow-headline">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </a>

            <a href="https://drive.google.com/file/d/1MmdF7UQcBxGkENV6J4EkMM7er_4pJuJq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
            
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;