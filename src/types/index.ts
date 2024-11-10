export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  creator: string;
  views: string;
  duration: string;
  status?: 'published' | 'draft' | 'processing';
  revenue?: number;
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  billing: 'monthly' | 'yearly';
}

export interface Analytics {
  views: number;
  watchTime: number;
  revenue: number;
  subscribers: number;
  topCountries: { country: string; views: number }[];
}