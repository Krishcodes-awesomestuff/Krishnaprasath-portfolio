import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shapesfit",
      category: "Gym Landing Page",
      description: "Modern, responsive landing page for a fitness center featuring interactive animations and user-friendly design to boost member engagement.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      impact: "Enhanced user engagement",
      year: "2024",
      link: "https://shapesfit.vercel.app"
    },
    {
      title: "RECHACKS",
      category: "Hackathon Platform",
      description: "Dynamic hackathon landing page with event registration, timeline, and participant showcase. Built with modern web technologies.",
      tech: ["Next.js", "Tailwind CSS", "Framer"],
      impact: "Streamlined event registration",
      year: "2024",
      link: "https://rechacks.vercel.app"
    },
    {
      title: "E-Cell REC",
      category: "Entrepreneurship Hub",
      description: "Comprehensive landing page for Entrepreneurship Development Cell featuring event showcases, team profiles, and resource sections.",
      tech: ["React", "CSS3", "JavaScript"],
      impact: "Improved community engagement",
      year: "2024",
      link: "https://edc-website-phi.vercel.app"
    },
    {
      title: "Autobots Inc",
      category: "Client Project",
      description: "Professional business website for automotive services company with service showcase, contact forms, and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      impact: "Increased client inquiries",
      year: "2024",
      link: "https://krishcodes-awesomestuff.github.io/Autobots-main"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-serif text-4xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        FEATURED WORK
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-card hover:shadow-headline transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {project.year}
                </span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-3 text-primary">
                {project.title}
              </h3>
              
              <p className="text-base leading-relaxed mb-4 text-muted-foreground">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-4 p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="text-sm font-medium text-accent-blue">
                  Impact: {project.impact}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://github.com/Krishcodes-awesomestuff', '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button size="lg" variant="outline">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;