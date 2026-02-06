// Centralized site content configuration
// Toggle sections and customize content from this single file

export interface SectionVisibility {
  hero: boolean;
  roblox: boolean;
  photos: boolean;
  finale: boolean;
  cake: boolean;
  musicControl: boolean;
  footer: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  hidden?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
  icon?: 'heart' | 'camera' | 'sparkles' | 'cake';
}

// Section visibility toggles
export const sectionVisibility: SectionVisibility = {
  hero: true,
  roblox: true,
  photos: true,
  finale: true,
  cake: true,
  musicControl: true,
  footer: true,
};

// Debug toggle - set to true to show image ID and filename in modal
export const showImageDebugInfo = false;

// Gallery images configuration
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/7871793065_135557112817050_1765479427408.png',
    title: 'Pink Dreams',
    description: 'If there was an award for the cutest photo ever taken, this would win by a mile *kuchupuchu*',
  },
  {
    id: '2',
    src: '/assets/7871793065_87527722861483_1765480477796.png',
    title: 'Night Drive',
    description: 'This is the coolest photo of us in my gallery... uff Aesthetic log :>',
  },
  {
    id: '3',
    src: '/assets/7871793065_87527722861483_1765480617622.png',
    title: 'photopglu',
    description: 'ik ye game thoda ajeeb tha or me uper pose dene ke liye bol raha tha niche side dekho muheheh XD',
  },
  {
    id: '4',
    src: '/assets/7871793065_135557112817050_1765479410004.png',
    title: 'Sweet Moments',
    description: 'Sitting with your plush bunny friend 💕',
  },
  {
    id: '5',
    src: '/assets/7871793065_135557112817050_1765479431655.png',
    title: 'Peaceful Pose',
    description: 'Relaxed in a tranquil setting 🌸',
  },
  {
    id: '6',
    src: '/assets/7871793065_93267441414138_1760290340209.png',
    title: 'Mountain Adventure',
    description: 'Exploring colorful landscapes 🏔️',
    hidden: true,
  },
  {
    id: '7',
    src: '/assets/7871793065_10006853131_1763829497689.png',
    title: 'Starlit Serenity',
    description: 'Magical night under the aurora 🌌',
    hidden: true,
  },
  {
    id: '8',
    src: '/assets/7871793065_117666668264601_1763839830856.png',
    title: 'Tropical Embrace',
    description: 'Romantic moment in paradise 🌴',
    hidden: true,
  },
  {
    id: '9',
    src: '/assets/7871793065_98376454759719_1762978327058.png',
    title: 'Festival Fun',
    description: 'Enjoying the vibrant festival together 🎉',
    hidden: true,
  },
  {
    id: '10',
    src: '/assets/7871793065_10006853131_1763829468763.png',
    title: 'Winter Wonderland',
    description: 'Cozy gathering under the mystical tree ❄️',
    hidden: true,
  },
  {
    id: '11',
    src: '/assets/7871793065_10006853131_1763829497689-1.png',
    title: 'Starry Night',
    description: 'Under the soft light of the stars , those beautiful movement were enough to make time stand still >3',
  },
  {
    id: '12',
    src: '/assets/7871793065_93267441414138_1760290340209-1.png',
    title: 'Adventure Time',
    description: 'Exploring new worlds together 🎮',
    hidden: true,
  },
  {
    id: '13',
    src: '/assets/7871793065_117666668264601_1763839819296.png',
    title: 'zepeto!!!',
    description: 'when you tried a Zepeto fit for the first time and said meri height itni choti kyu hai :>',
    hidden: true,
  },
  {
    id: '14',
    src: '/assets/7871793065_10006853131_1763829468763-1.png',
    title: 'Magical Evening',
    description: 'we used to explore the entire map in that game  n look for beautiful locations... best din the yawrrr',
  },
  {
    id: '15',
    src: '/assets/7871793065_98376454759719_1762978327058-1.png',
    title: 'Zepeto!',
    description: 'when u tried a zepeto fit for the first time and said meri height itne choti kyu hai :p #bauni',
  },
  {
    id: '16',
    src: '/assets/7871793065_117666668264601_1763839819296-1.png',
    title: 'cutuuu hug :D',
    description: 'when we went into that game we spend half time time just clicking photos or maybe apko yaad hoga mene ek edit bheja tha iss photo ka but you didn\'t realize you were in the photo too :p',
  },
  {
    id: '17',
    src: '/assets/7871793065_117666668264601_1763839830856-1.png',
    title: 'Paradise Found',
    description: 'Together in our happy place 💖',
    hidden: true,
  },
];

// Get visible images (filter out hidden ones)
export function getVisibleImages(): GalleryImage[] {
  return galleryImages.filter((img) => !img.hidden);
}

// Get navigation items based on enabled sections
export function getNavigationItems(): NavigationItem[] {
  const items: NavigationItem[] = [];

  if (sectionVisibility.hero) {
    items.push({ id: 'intro', label: 'Intro', sectionId: 'intro' });
  }

  if (sectionVisibility.roblox) {
    items.push({ id: 'roblox', label: 'Roblox', sectionId: 'roblox' });
  }

  if (sectionVisibility.photos) {
    items.push({ id: 'photos', label: 'Photos', sectionId: 'photos', icon: 'camera' });
  }

  if (sectionVisibility.cake) {
    items.push({ id: 'cake', label: 'Cake', sectionId: 'cake', icon: 'cake' });
  }

  if (sectionVisibility.finale) {
    items.push({ id: 'finale', label: 'Finale', sectionId: 'finale', icon: 'heart' });
  }

  return items;
}
