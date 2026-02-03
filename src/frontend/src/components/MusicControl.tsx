import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/music/soft-romantic.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error('Audio play failed:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-romantic-pink/90 hover:bg-romantic-rose border-romantic-pink/50 shadow-lg backdrop-blur-sm"
          >
            <Volume2 className="h-4 w-4 text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48" side="top">
          <div className="space-y-2">
            <p className="text-sm font-medium">Volume</p>
            <Slider
              value={[volume * 100]}
              onValueChange={(value) => setVolume(value[0] / 100)}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </PopoverContent>
      </Popover>

      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full bg-romantic-rose hover:bg-romantic-red shadow-lg h-14 w-14"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-white fill-white" />
        ) : (
          <Play className="h-6 w-6 text-white fill-white" />
        )}
      </Button>
    </div>
  );
}
