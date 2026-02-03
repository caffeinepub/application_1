import { Heart, Sparkles, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { sectionVisibility } from '../content/siteConfig';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="relative overflow-hidden scroll-mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/assets/generated/pastel-sparkle-bg.dim_1920x1080.png)' }}
      />
      <div 
        className="absolute inset-0 bg-repeat opacity-10"
        style={{ backgroundImage: 'url(/assets/generated/hearts-pattern.dim_1024x1024.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink/20 via-background to-romantic-cream/30" />
      
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-romantic-pink/10 border border-romantic-pink/30 animate-float">
            <Calendar className="h-4 w-4 text-romantic-rose" />
            <span className="text-sm font-medium text-romantic-rose">7 February</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-romantic-rose/10 border border-romantic-rose/20">
            <Sparkles className="h-4 w-4 text-romantic-rose" />
            <span className="text-sm font-medium text-romantic-rose">Happy Birthday Mayo! 🎀</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            A Special Day for{' '}
            <span className="bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent animate-gradient">
              Someone Special
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Mayo, you're as sweet as white chocolate and bring so much joy to every moment. 
            Today is all about celebrating you and the wonderful person you are! 💕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {sectionVisibility.photos && (
              <Button 
                size="lg" 
                onClick={() => scrollToSection('photos')} 
                className="rounded-full bg-romantic-rose hover:bg-romantic-red transition-colors"
              >
                <Heart className="h-4 w-4 mr-2 fill-white" />
                View Our Memories
              </Button>
            )}
            {sectionVisibility.finale && (
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('finale')}
                className="rounded-full border-romantic-pink text-romantic-rose hover:bg-romantic-pink/10"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                See the Surprise
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
