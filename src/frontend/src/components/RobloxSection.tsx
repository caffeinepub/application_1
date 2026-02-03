import { Gamepad2, Heart, Sparkles } from 'lucide-react';

export function RobloxSection() {
  return (
    <section id="roblox" className="py-16 md:py-24 bg-romantic-cream/30 scroll-mt-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-romantic-pink/10 border border-romantic-pink/20">
              <Gamepad2 className="h-4 w-4 text-romantic-rose" />
              <span className="text-sm font-medium text-romantic-rose">Gaming Adventures</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Roblox{' '}
              <span className="bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
                Adventures
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-romantic-rose mt-1 flex-shrink-0 fill-romantic-rose" />
                  <p className="text-muted-foreground leading-relaxed">
                    Remember all those fun times we spent together in Roblox? Building worlds, 
                    exploring adventures, and just hanging out in our favorite games.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-romantic-rose mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    Every moment with you in Roblox has been special. From racing through obstacle 
                    courses to creating our dream homes, it's always better when we're together.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-romantic-rose mt-1 flex-shrink-0 fill-romantic-rose" />
                  <p className="text-muted-foreground leading-relaxed">
                    You make every game more fun, every challenge easier, and every victory sweeter. 
                    Here's to many more adventures together! 🎮✨
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-romantic-pink/30 shadow-2xl shadow-romantic-pink/20 animate-float-slow">
                <img 
                  src="/assets/7871793065_93267441414138_1760290340209.png" 
                  alt="Roblox Adventures" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-romantic-rose text-white rounded-full p-4 shadow-lg animate-bounce-slow">
                <Gamepad2 className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
