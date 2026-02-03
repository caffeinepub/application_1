import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface ImageCardProps {
  image: {
    id: string;
    src: string;
    title: string;
    category: string;
    description: string;
  };
  onClick: () => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const categoryColors = {
    character: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    environment: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    social: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted" />
          )}
          <img
            src={image.src}
            alt={image.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className={`${categoryColors[image.category as keyof typeof categoryColors]} backdrop-blur-sm`}
            >
              {image.category}
            </Badge>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {image.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {image.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
