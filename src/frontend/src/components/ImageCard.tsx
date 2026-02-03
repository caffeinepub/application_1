import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ImageCardProps {
  image: {
    id: string;
    src: string;
    title: string;
    description: string;
  };
  onClick: () => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-romantic-pink/30 hover:border-romantic-rose transition-all duration-300 hover:shadow-lg hover:shadow-romantic-pink/20 animate-float-card"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-romantic-cream/20">
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-romantic-cream/40" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-romantic-pink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-romantic-red/90 backdrop-blur-sm rounded-full p-2">
              <Heart className="h-4 w-4 text-white fill-white" />
            </div>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-romantic-rose transition-colors">
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
