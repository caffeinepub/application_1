import { useState } from 'react';
import { ImageCard } from './ImageCard';
import { ImageModal } from './ImageModal';
import { Heart, Camera } from 'lucide-react';
import { getVisibleImages, GalleryImage } from '../content/siteConfig';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const visibleImages = getVisibleImages();

  return (
    <section id="photos" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-romantic-pink/10 border border-romantic-pink/20">
            <Camera className="h-4 w-4 text-romantic-rose" />
            <span className="text-sm font-medium text-romantic-rose">Our Memories</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Beautiful{' '}
            <span className="bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-red bg-clip-text text-transparent">
              Moments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every photo tells a story of our amazing times together 💕
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
