export type ContentCategory = 'fitness' | 'dogs' | 'plants';

export interface Photo {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ContentCategory;
  date: string;
  tags?: string[];
}

export interface FitnessAchievement {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: 'competition' | 'milestone' | 'transformation';
  highlights?: string[];
}

export type InterestCategory = 'hobbies' | 'pets' | 'plants' | 'travel' | 'reading';

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed?: string;
  age: number;
  description: string;
  photos: string[];
  favoriteActivities: string[];
}

export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  type: string;
  careLevel: 'easy' | 'moderate' | 'difficult';
  description: string;
  photos: string[];
  careInstructions: {
    light: string;
    water: string;
    temperature: string;
    humidity: string;
  };
}

export interface Hobby {
  id: string;
  name: string;
  category: InterestCategory;
  description: string;
  photos?: string[];
  equipment?: string[];
  achievements?: string[];
  startDate: string;
}

export interface PersonalContent {
  pets: Pet[];
  plants: Plant[];
  hobbies: Hobby[];
  stats: {
    totalPets: number;
    totalPlants: number;
    favoriteHobby: string;
    recentActivities: {
      activity: string;
      date: string;
    }[];
  };
} 