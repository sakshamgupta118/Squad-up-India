import { Game } from './types';

export const GAMES_DATA: Game[] = [
  {
    id: '1',
    sport: 'Football',
    title: '5-v-5 Amateur Night',
    location: 'Juhu Turf, Mumbai',
    date: 'Today',
    time: '8:00 PM',
    price: 250,
    totalSlots: 10,
    filledSlots: 8,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800',
    skillLevel: 'Intermediate',
    amenities: ['Parking', 'Showers', 'Bibs Provided']
  },
  {
    id: '2',
    sport: 'Cricket',
    title: 'Box Cricket League',
    location: 'Powai Arena, Mumbai',
    date: 'Sunday',
    time: '9:00 AM',
    price: 300,
    totalSlots: 14,
    filledSlots: 12,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800',
    skillLevel: 'Open for All',
    amenities: ['Bats Provided', 'Cafe', 'Music']
  },
  {
    id: '3',
    sport: 'Badminton',
    title: 'Mixed Doubles Social',
    location: 'Andheri Sports Club',
    date: 'Saturday',
    time: '5:00 PM',
    price: 200,
    totalSlots: 4,
    filledSlots: 3,
    image: 'https://images.unsplash.com/photo-1626224583764-84786c719794?q=80&w=800',
    skillLevel: 'Intermediate',
    amenities: ['Yonex Shuttles', 'Non-marking shoes req']
  },
  {
    id: '4',
    sport: 'Tennis',
    title: 'Morning Rally Session',
    location: 'Bandra Gymkhana',
    date: 'Sunday',
    time: '7:00 AM',
    price: 500,
    totalSlots: 2,
    filledSlots: 1,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800',
    skillLevel: 'Advanced',
    amenities: ['Clay Court', 'Ball Boy']
  },
  {
    id: '5',
    sport: 'Basketball',
    title: '3-on-3 Half Court',
    location: 'YMCA Colaba',
    date: 'Tomorrow',
    time: '6:00 PM',
    price: 150,
    totalSlots: 6,
    filledSlots: 2,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ee2?q=80&w=800',
    skillLevel: 'Open for All',
    amenities: ['Floodlights', 'Water']
  },
  {
    id: '6',
    sport: 'Volleyball',
    title: 'Beach Volley Sunset',
    location: 'Versova Beach',
    date: 'Friday',
    time: '5:30 PM',
    price: 100,
    totalSlots: 12,
    filledSlots: 10,
    image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800',
    skillLevel: 'Beginner',
    amenities: ['Sand Court', 'Music']
  },
  {
    id: '7',
    sport: 'Table Tennis',
    title: 'Ping Pong Tournament',
    location: 'Khar Gymkhana',
    date: 'Saturday',
    time: '11:00 AM',
    price: 180,
    totalSlots: 8,
    filledSlots: 5,
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=800',
    skillLevel: 'Intermediate',
    amenities: ['AC Hall', 'Robots Available']
  },
  {
    id: '8',
    sport: 'Pickleball',
    title: 'Intro to Pickleball',
    location: 'Worli Sports Complex',
    date: 'Sunday',
    time: '4:00 PM',
    price: 350,
    totalSlots: 4,
    filledSlots: 4,
    image: 'https://plus.unsplash.com/premium_photo-1679435019808-b13c1c4e1d74?q=80&w=800',
    skillLevel: 'Beginner',
    amenities: ['Paddles Provided', 'Coach']
  },
  {
    id: '9',
    sport: 'Squash',
    title: 'Squash Ladder',
    location: 'CCI Club',
    date: 'Today',
    time: '7:30 PM',
    price: 450,
    totalSlots: 2,
    filledSlots: 0,
    image: 'https://images.unsplash.com/photo-1558365849-6a8d672a3e02?q=80&w=800',
    skillLevel: 'Advanced',
    amenities: ['Wooden Floor', 'AC']
  },
  {
    id: '10',
    sport: 'Kabaddi',
    title: 'Mat Kabaddi Practice',
    location: 'Dadar Union',
    date: 'Sunday',
    time: '8:00 AM',
    price: 120,
    totalSlots: 14,
    filledSlots: 6,
    image: 'https://images.unsplash.com/photo-1518619745898-93e211629167?q=80&w=800',
    skillLevel: 'Open for All',
    amenities: ['Pro Mat', 'First Aid']
  }
];

export const MOCK_USER = {
  name: "Saksham Gupta",
  mobile: "+91 99999 99999",
  karmaScore: 92, // High score
  isLoggedIn: true
};
