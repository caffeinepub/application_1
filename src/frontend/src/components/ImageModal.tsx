import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { X, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { showImageDebugInfo } from '../content/siteConfig';

interface ImageModalProps {
  image: {
    id: string;
    src: string;
    title: string;
    description: string;
  } | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  // Extract filename from src path
  const filename = image.src.split('/').pop() || '';

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-romantic-pink/30">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-romantic-pink/20"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="relative aspect-video w-full overflow-hidden bg-romantic-cream/20">
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
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    {image.title}
                    <Heart className="h-5 w-5 text-romantic-red fill-romantic-red" />
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {image.description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {showImageDebugInfo && (
              <div className="pt-4 border-t border-romantic-pink/20">
                <div className="text-xs text-muted-foreground space-y-1 font-mono">
                  <div>ID: {image.id}</div>
                  <div>File: {filename}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
