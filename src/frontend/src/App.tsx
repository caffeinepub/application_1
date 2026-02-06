import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RobloxSection } from './components/RobloxSection';
import { Gallery } from './components/Gallery';
import { CakeSection } from './components/CakeSection';
import { FinaleSection } from './components/FinaleSection';
import { Footer } from './components/Footer';
import { MusicControl } from './components/MusicControl';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { sectionVisibility } from './content/siteConfig';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        {sectionVisibility.musicControl && <MusicControl />}
        <main>
          {sectionVisibility.hero && <Hero />}
          {sectionVisibility.roblox && <RobloxSection />}
          {sectionVisibility.photos && <Gallery />}
          {sectionVisibility.cake && <CakeSection />}
          {sectionVisibility.finale && <FinaleSection />}
        </main>
        {sectionVisibility.footer && <Footer />}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
