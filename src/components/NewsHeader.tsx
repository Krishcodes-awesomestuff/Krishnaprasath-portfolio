import { Calendar, MapPin } from "lucide-react";

const NewsHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b-2 border-primary pb-4 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary tracking-tight">
            THE DEVELOPER TIMES
          </h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium tracking-wider">
            PORTFOLIO EDITION
          </p>
        </div>
        
        <div className="flex flex-col items-end text-sm text-muted-foreground">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{currentDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-xs text-center text-muted-foreground font-medium tracking-widest">
          "CRAFTING DIGITAL EXPERIENCES THROUGH CODE & DESIGN"
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;