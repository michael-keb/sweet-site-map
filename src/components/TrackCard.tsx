import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TrackCardProps {
  name: string;
  duration: string;
  description: string;
  outcomes: string[];
  featured?: boolean;
}

const TrackCard = ({ name, duration, description, outcomes, featured = false }: TrackCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${featured ? 'border-accent border-2' : ''}`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-semibold">
          MOST CHOOSE THIS
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-2xl font-bold text-foreground">{name}</CardTitle>
        </div>
        <Badge variant="secondary" className="w-fit">
          {duration}
        </Badge>
        <CardDescription className="mt-3 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          What You Get
        </h4>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">{outcome}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant={featured ? "default" : "outline"}>
          Check It Out
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrackCard;
