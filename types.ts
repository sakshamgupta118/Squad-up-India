export type SportCategory = 'Football' | 'Cricket' | 'Badminton' | 'Tennis' | 'Basketball' | 'Volleyball' | 'Table Tennis' | 'Pickleball' | 'Squash' | 'Kabaddi';

export interface Game {
  id: string;
  sport: SportCategory;
  title: string;
  location: string;
  date: string;
  time: string;
  price: number;
  totalSlots: number;
  filledSlots: number;
  image: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Open for All';
  amenities: string[];
}

export interface User {
  name: string;
  mobile: string;
  karmaScore: number;
  isLoggedIn: boolean;
}

export interface Booking {
  id: string;
  gameId: string;
  gameTitle: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  pricePaid: number;
  bookingTime: string;
}

export type Tab = 'home' | 'bookings' | 'karma' | 'about';
