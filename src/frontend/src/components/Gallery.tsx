import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageCard } from './ImageCard';
import { ImageModal } from './ImageModal';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'character' | 'environment' | 'social';
  description: string;
}

const images: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/7871793065_135557112817050_1765479427408.png',
    title: 'Pink Dreams',
    category: 'character',
    description: 'Adorable pink-haired avatar with a cute companion in a serene mint background'
  },
  {
    id: '2',
    src: '/assets/7871793065_87527722861483_1765480477796.png',
    title: 'Night Drive',
    category: 'environment',
    description: 'Stylish avatar in an urban showroom with luxury vehicles'
  },
  {
    id: '3',
    src: '/assets/7871793065_87527722861483_1765480617622.png',
    title: 'Showroom Vibes',
    category: 'social',
    description: 'Friends hanging out in a modern automotive exhibition space'
  },
  {
    id: '4',
    src: '/assets/7871793065_135557112817050_1765479410004.png',
    title: 'Sweet Moments',
    category: 'character',
    description: 'Charming avatar sitting with a plush bunny friend'
  },
  {
    id: '5',
    src: '/assets/7871793065_135557112817050_1765479431655.png',
    title: 'Peaceful Pose',
    category: 'character',
    description: 'Relaxed avatar in a tranquil mint-green setting'
  },
  {
    id: '6',
    src: '/assets/7871793065_93267441414138_1760290340209.png',
    title: 'Mountain Adventure',
    category: 'environment',
    description: 'Exploring a low-poly mountain landscape with vibrant colors'
  },
  {
    id: '7',
    src: '/assets/7871793065_10006853131_1763829497689.png',
    title: 'Starlit Serenity',
    category: 'environment',
    description: 'Peaceful moment under a magical night sky with aurora lights'
  },
  {
    id: '8',
    src: '/assets/7871793065_117666668264601_1763839830856.png',
    title: 'Tropical Embrace',
    category: 'social',
    description: 'Romantic moment in a lush tropical paradise'
  },
  {
    id: '9',
    src: '/assets/7871793065_98376454759719_1762978327058.png',
    title: 'Festival Fun',
    category: 'social',
    description: 'Couple enjoying a vibrant festival with floating islands'
  },
  {
    id: '10',
    src: '/assets/7871793065_10006853131_1763829468763.png',
    title: 'Winter Wonderland',
    category: 'environment',
    description: 'Cozy gathering under a mystical tree in a snowy landscape'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredImages = activeTab === 'all' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of stunning virtual world captures
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="character">Characters</TabsTrigger>
            <TabsTrigger value="environment">Worlds</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found in this category</p>
          </div>
        )}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
