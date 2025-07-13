import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-4xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        GET IN TOUCH
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">Let's Create Something Amazing</h3>
          <p className="text-base leading-relaxed mb-6 text-muted-foreground">
            Whether you're a startup looking to make your mark or an established company 
            ready to innovate, I'm here to help bring your digital vision to life. 
            Let's discuss how we can work together to create exceptional user experiences.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-medium">alex.chen@developer.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">San Francisco, CA</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <Button size="sm" variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" variant="outline">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </Card>
        
        <Card className="p-8 shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
          
          <div className="space-y-6">
            <div className="p-4 bg-newsprint rounded-lg border-l-4 border-accent">
              <h4 className="font-semibold mb-2">Available for:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Consulting & code reviews</li>
                <li>• Speaking engagements</li>
              </ul>
            </div>
            
            <div className="p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2 text-accent-blue">Response Time:</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. 
                For urgent matters, feel free to call directly.
              </p>
            </div>
            
            <div className="text-center pt-4">
              <Button size="lg" className="w-full shadow-headline">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <footer className="mt-12 pt-8 border-t-2 border-primary">
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-medium">
            © 2024 Alex Chen. All rights reserved. | Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This portfolio is a testament to clean code, beautiful design, and attention to detail.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;