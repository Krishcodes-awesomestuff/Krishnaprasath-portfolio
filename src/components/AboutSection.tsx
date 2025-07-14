import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-4xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        ABOUT SECTION
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">The Developer's Journey</h3>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Krishnaprasath always had a passion for coding and programming. He started his journey
              with a strong foundation in HTML, CSS, and JavaScript. From coding simple login pages and navbar to
              creating websites that had a use case and purpose.
            </p>

            <p>
            What began as a passion project during college events has now grown into a thriving 
            freelance career. Since 2025, Krishnaprasath has been collaborating with startups,
            student led ventures, and small businesses transforming ideas into responsive,
            aesthetic, and user focused websites.
            </p>
            <p>Now, as a full-time freelancer, he is committed to delivering digital experience for his clients</p>
          </div>
        </Card>
        
        <Card className="p-6 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">By The Numbers</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Internship Experience</div>
            </div>
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Professional Experience</h4>
            <div className="space-y-2">
            <Badge variant="outline">Freelance Frontend Developer</Badge>
              <Badge variant="outline">Frontend Developer @ Kenesis</Badge>
              <Badge variant="outline">Interned as ANS @ AAI</Badge>
              <Badge variant="outline">GSAP Animation Expert</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;