import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EcoTrack Dashboard",
      category: "Featured Project",
      description: "A comprehensive sustainability tracking platform built for Fortune 500 company. Features real-time analytics, custom reporting, and mobile-responsive design.",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      impact: "Reduced reporting time by 60%",
      year: "2024"
    },
    {
      title: "MindfulSpace App",
      category: "Mobile Innovation",
      description: "Mental wellness application with guided meditation, mood tracking, and community features. Designed from concept to launch.",
      tech: ["React Native", "Firebase", "Figma"],
      impact: "10K+ active users",
      year: "2023"
    },
    {
      title: "LocalBiz Platform",
      category: "E-Commerce Solution",
      description: "Multi-vendor marketplace connecting local businesses with customers. Complete redesign and development of user experience.",
      tech: ["Vue.js", "Tailwind", "Stripe API"],
      impact: "300% increase in conversions",
      year: "2023"
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
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline">
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