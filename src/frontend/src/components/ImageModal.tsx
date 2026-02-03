import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface ImageModalProps {
  image: {
    id: string;
    src: string;
    title: string;
    category: string;
    description: string;
  } | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  const categoryColors = {
    character: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    environment: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    social: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  };

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 space-y-4">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <DialogTitle className="text-2xl">{image.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {image.description}
                  </DialogDescription>
                </div>
                <Badge 
                  variant="secondary"
                  className={categoryColors[image.category as keyof typeof categoryColors]}
                >
                  {image.category}
                </Badge>
              </div>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
