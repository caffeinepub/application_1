import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025. Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using</span>
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#gallery" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
