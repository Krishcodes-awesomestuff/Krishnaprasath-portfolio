import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "PWA", "Responsive Design", "iOS", "Android"]
    },
    {
      icon: Zap,
      title: "Tools & Technologies",
      skills: ["Git", "Webpack", "Jest", "Node.js", "GraphQL", "REST APIs"]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-serif text-4xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        TECHNICAL EXPERTISE
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6 shadow-card hover:shadow-headline transition-shadow">
            <div className="flex items-center mb-4">
              <category.icon className="w-6 h-6 text-accent mr-3" />
              <h3 className="font-serif text-lg font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-newsprint rounded-lg border-l-4 border-accent">
        <h3 className="font-serif text-xl font-bold mb-3">Current Focus Areas</h3>
        <p className="text-base leading-relaxed">
          Currently diving deep into <strong>AI-powered user interfaces</strong>, 
          <strong> serverless architectures</strong>, and <strong>advanced animation techniques</strong>. 
          Always learning, always growing, always pushing the boundaries of what's possible in digital design.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;