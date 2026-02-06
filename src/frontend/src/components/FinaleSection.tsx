import { Heart, Sparkles, Gift } from 'lucide-react';

export function FinaleSection() {
  return (
    <section id="finale" className="py-16 md:py-24 bg-gradient-to-br from-romantic-pink/20 via-romantic-cream/30 to-romantic-rose/20 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-romantic-red/10 border border-romantic-red/20 animate-pulse">
            <Gift className="h-4 w-4 text-romantic-red" />
            <span className="text-sm font-medium text-romantic-red">Special Message</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            To the Most{' '}
            <span className="bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
              Amazing Person
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3 justify-center">
              <Heart className="h-6 w-6 text-romantic-red mt-1 flex-shrink-0 fill-romantic-red animate-heartbeat" />
              <p className="text-left max-w-2xl">
                Mayo, you light up every room you enter and make every day brighter. 
                Your smile is contagious, your laugh is music, and your presence is a gift.
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center">
              <Sparkles className="h-6 w-6 text-romantic-rose mt-1 flex-shrink-0" />
              <p className="text-left max-w-2xl">
                From our Roblox adventures to all our shared moments, every memory with you 
                is precious. You make ordinary days extraordinary just by being you.
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center">
              <Heart className="h-6 w-6 text-romantic-red mt-1 flex-shrink-0 fill-romantic-red animate-heartbeat" />
              <p className="text-left max-w-2xl">
                On your special day, I want you to know how much you mean to me. 
                You're not just amazing, you're irreplaceable. Here's to celebrating you today 
                and always! 🎂✨
                <span className="block mt-2 text-sm md:text-base">
                  ur my fav person &gt;3
                </span>
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <div className="inline-block p-8 rounded-3xl bg-romantic-red/10 border-2 border-romantic-red/30 shadow-xl">
              <p className="text-2xl md:text-3xl font-bold text-romantic-red flex items-center gap-3 justify-center">
                <Heart className="h-8 w-8 fill-romantic-red animate-heartbeat" />
                From Avdhesh ❤️
                <Heart className="h-8 w-8 fill-romantic-red animate-heartbeat" />
              </p>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Happy Birthday, Mayo! 🎉💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
