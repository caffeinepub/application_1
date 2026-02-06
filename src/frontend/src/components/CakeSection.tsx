import { useState } from 'react';
import { Cake } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export function CakeSection() {
  const [isLit, setIsLit] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isBlowingOut, setIsBlowingOut] = useState(false);

  const handleCakeClick = () => {
    if (isLit && !isBlowingOut) {
      setIsBlowingOut(true);
      setShowPopup(true);
      
      // Animate the blow-out
      setTimeout(() => {
        setIsLit(false);
        setIsBlowingOut(false);
      }, 800);
    } else if (!isLit) {
      // Allow showing popup even after candle is out
      setShowPopup(true);
    }
  };

  return (
    <section
      id="cake"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-romantic-cream/30 via-romantic-pink/10 to-background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-romantic-pink/20 animate-float">
          <Cake className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 right-16 text-romantic-rose/20 animate-float" style={{ animationDelay: '1s' }}>
          <Cake className="h-16 w-16" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-romantic-pink/15 animate-float" style={{ animationDelay: '2s' }}>
          <Cake className="h-10 w-10" />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
            Make a Wish! 🎂
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tap the cake to blow out the candle and celebrate!
          </p>

          {/* Interactive Cake */}
          <div className="relative inline-block">
            <button
              onClick={handleCakeClick}
              className="relative focus:outline-none focus:ring-4 focus:ring-romantic-pink/50 rounded-2xl transition-all hover:scale-105 active:scale-95"
              aria-label="Blow out the candle"
            >
              {/* Main cake image */}
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
                <img
                  src={isLit ? '/assets/generated/cake-lit.dim_1200x1200.png' : '/assets/generated/cake-out.dim_1200x1200.png'}
                  alt="Birthday cake"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Animated flame overlay (only when lit) */}
                {isLit && (
                  <div
                    className={`absolute top-[15%] left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${
                      isBlowingOut ? 'animate-flame-out' : 'animate-flame-flicker'
                    }`}
                  >
                    <img
                      src="/assets/generated/candle-flame.dim_256x256.png"
                      alt="Candle flame"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Smoke effect (only during blow-out) */}
                {isBlowingOut && (
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 animate-smoke-rise">
                    <img
                      src="/assets/generated/candle-smoke.dim_256x256.png"
                      alt="Smoke"
                      className="w-full h-full object-contain opacity-0 animate-smoke-fade"
                    />
                  </div>
                )}
              </div>
            </button>

            {/* Status indicator */}
            <div className="mt-6 text-sm font-medium text-muted-foreground">
              {isLit ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-romantic-red rounded-full animate-pulse"></span>
                  Candle is lit
                </span>
              ) : (
                <span className="text-romantic-rose">
                  Candle blown out! 🎉
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Birthday Popup Dialog */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md border-romantic-pink/30 bg-gradient-to-br from-romantic-cream/95 to-romantic-pink/20 backdrop-blur-xl">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-romantic-pink to-romantic-rose rounded-full flex items-center justify-center animate-bounce-slow">
              <Cake className="h-10 w-10 text-white" />
            </div>
            <DialogTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
              Happy B'day!
            </DialogTitle>
            <DialogDescription className="text-lg text-foreground/80">
              Wishing you the most amazing birthday filled with love, joy, and all your favorite things! 🎉✨
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-center pt-4">
            <div className="flex gap-2">
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🎂</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎈</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
