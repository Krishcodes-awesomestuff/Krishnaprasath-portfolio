import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-4xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        EXCLUSIVE INTERVIEW
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">The Story Behind the Code</h3>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              "My journey began with a simple question: How can technology make people's lives better?" 
              explains Chen during our exclusive interview at their modern San Francisco studio.
            </p>
            <p>
              With a background in both Computer Science and Design, Chen brings a unique perspective 
              that bridges technical excellence with user-centered thinking.
            </p>
            <p>
              "I don't just write code or create pretty interfaces. I solve problems that real people face, 
              and I do it with both functionality and beauty in mind."
            </p>
          </div>
        </Card>
        
        <Card className="p-6 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">By The Numbers</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-newsprint rounded-lg">
              <div className="font-serif text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
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
            <h4 className="font-semibold mb-3">Education & Credentials</h4>
            <div className="space-y-2">
              <Badge variant="outline">B.S. Computer Science</Badge>
              <Badge variant="outline">UX Design Certificate</Badge>
              <Badge variant="outline">Google Analytics Certified</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;