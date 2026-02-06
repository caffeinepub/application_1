import { getNavigationItems } from '../content/siteConfig';

export function Footer() {
  const navigationItems = getNavigationItems();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-romantic-pink/20 bg-romantic-cream/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {navigationItems.length > 0 && (
            <div className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-sm text-muted-foreground hover:text-romantic-rose transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
