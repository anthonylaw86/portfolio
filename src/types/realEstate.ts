export type PropertyType = 'residential' | 'commercial' | 'industrial' | 'land';
export type ListingType = 'sale' | 'lease';
export type PropertyStatus = 'active' | 'pending' | 'sold' | 'off-market';

export type TransactionType = 'sale' | 'lease' | 'purchase' | 'development';

export interface RealEstateListing {
  id: string;
  title: string;
  description: string;
  images: string[];
  type: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  price?: number;
  monthlyRate?: number;
  squareFootage: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  features: string[];
  amenities?: string[];
  highlights?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Property {
  id: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  squareFootage: number;
  bedrooms?: number;
  bathrooms?: number;
  yearBuilt: number;
  description: string;
  features: string[];
  images: string[];
  virtualTour?: string;
  listingDate: string;
  lastUpdated: string;
  agentNotes?: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientImage?: string;
  propertyType: PropertyType;
  quote: string;
  rating: number; // 1-5 scale
  date: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredContact: 'email' | 'phone' | 'text';
  type: 'buyer' | 'seller' | 'investor';
  budget?: {
    min: number;
    max: number;
  };
  preferences?: {
    propertyTypes: PropertyType[];
    locations: string[];
    mustHaves: string[];
    dealBreakers: string[];
  };
  notes?: string;
  lastContact: string;
}

export interface Transaction {
  id: string;
  propertyId: string;
  clientId: string;
  type: 'purchase' | 'sale' | 'lease';
  status: 'pending' | 'completed' | 'cancelled';
  offerPrice: number;
  finalPrice?: number;
  closingDate?: string;
  commission?: number;
  documents: string[];
  notes?: string;
  timeline: {
    date: string;
    event: string;
    notes?: string;
  }[];
}

export interface RealEstateContent {
  properties: Property[];
  expertise: Expertise[];
  testimonials: Testimonial[];
  featuredProperties: string[]; // Array of property IDs
  clients: Client[];
  transactions: Transaction[];
  stats: {
    totalProperties: number;
    activeListings: number;
    totalSales: number;
    averageDaysOnMarket: number;
    totalVolume: number;
    recentTransactions: Transaction[];
  };
} 