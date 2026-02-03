import { Moon, Sun, Heart } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { getNavigationItems } from '../content/siteConfig';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigationItems = getNavigationItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button 
          onClick={() => {
            const firstSection = navigationItems[0];
            if (firstSection) {
              scrollToSection(firstSection.sectionId);
            }
          }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/assets/generated/kitty-bow-heart.dim_512x512.png" 
            alt="Mayo's Birthday" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
            Mayo's Birthday
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium text-muted-foreground hover:text-romantic-pink transition-colors flex items-center gap-1"
            >
              {item.icon === 'heart' && (
                <Heart className="h-3 w-3 fill-romantic-red text-romantic-red" />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
