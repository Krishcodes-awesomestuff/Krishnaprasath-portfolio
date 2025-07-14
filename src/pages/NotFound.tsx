import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Newspaper-style header */}
          <div className="border-b-2 border-primary pb-4 mb-8">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary tracking-tight">
              THE DEVELOPER TIMES
            </h1>
            <p className="text-sm text-muted-foreground mt-1 font-medium tracking-wider">
              ERROR EDITION
            </p>
          </div>
          
          {/* 404 Content */}
          <div className="bg-card p-8 rounded-lg shadow-card border-l-4 border-destructive">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-destructive" />
            </div>
            
            <h2 className="font-serif text-6xl font-bold text-primary mb-4">404</h2>
            <h3 className="font-serif text-2xl font-bold mb-4">PAGE NOT FOUND</h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <strong>BREAKING NEWS:</strong> The page you're looking for has gone missing! 
              Our investigative team is on the case, but in the meantime, 
              let's get you back to the main story.
            </p>
            
            <div className="bg-newsprint p-4 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Error Details:</strong> Attempted to access <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
              </p>
            </div>
            
            <Button size="lg" className="shadow-headline">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Button>
          </div>
          
          <footer className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Krishnaprasath. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
