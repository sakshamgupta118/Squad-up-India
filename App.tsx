import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import GameCard from './GameCard';
import BookingModal from './BookingModal';
import KarmaView from './KarmaView';
import BookingsView from './BookingsView';
import AboutView from './AboutView';
import { GAMES_DATA, MOCK_USER } from './constants';
import { Tab, Game, User, Booking, SportCategory } from './types';
import { Filter } from 'lucide-react';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [user, setUser] = useState<User | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  
  // Filter states
  const [selectedSport, setSelectedSport] = useState<SportCategory | 'All'>('All');

  const handleLogin = () => {
    // Simulate login for Navbar button
    setUser(MOCK_USER);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentTab('home');
  };

  const handleBookClick = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleBookingComplete = () => {
    if (selectedGame) {
      const newBooking: Booking = {
        id: `SQ-${Date.now().toString().slice(-6)}`,
        gameId: selectedGame.id,
        gameTitle: selectedGame.title,
        date: selectedGame.date,
        time: selectedGame.time,
        status: 'Confirmed',
        pricePaid: selectedGame.price + 20, // incl fee
        bookingTime: new Date().toISOString()
      };
      setMyBookings([newBooking, ...myBookings]);
      
      // Update filled slots locally for visual feedback
      // In a real app, this would re-fetch data
      selectedGame.filledSlots += 1; 

      // Switch to bookings tab so user sees their new booking when modal closes
      setCurrentTab('bookings');
    }
  };

  // Filter games logic
  const filteredGames = selectedSport === 'All' 
    ? GAMES_DATA 
    : GAMES_DATA.filter(g => g.sport === selectedSport);

  const categories: (SportCategory | 'All')[] = ['All', 'Football', 'Cricket', 'Badminton', 'Tennis', 'Basketball', 'Pickleball'];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar 
        currentTab={currentTab} 
        onTabChange={setCurrentTab} 
        user={user} 
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <Hero />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Section Header & Filter */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Upcoming Lobbies</h2>
                    <p className="text-slate-500 text-sm mt-1">Join a game near you.</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                  <Filter className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  <div className="flex space-x-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedSport(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                          selectedSport === cat 
                            ? 'bg-slate-900 text-white shadow-md' 
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onBook={handleBookClick} 
                  />
                ))}
              </div>
            </div>

            {/* Banner for SquadUp Gold */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-12">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="text-white mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold">SquadUp Gold</h3>
                      <p className="opacity-90">Early access to slots, zero cancellation fee, and premium support.</p>
                  </div>
                  <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-amber-50 transition-colors">
                      Join for ₹199/month
                  </button>
               </div>
            </div>
          </>
        )}

        {currentTab === 'bookings' && (
           <BookingsView bookings={myBookings} />
        )}

        {currentTab === 'karma' && (
           <KarmaView user={user} />
        )}

        {currentTab === 'about' && (
           <AboutView />
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <span className="text-xl font-bold text-white tracking-tight">SquadUp<span className="text-primary-500">India</span></span>
                <p className="mt-4 text-sm max-w-xs">
                    SVKM's Narsee Monjee College of Commerce and Economics. <br/>
                    Entrepreneurship Management Project.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                    <li>support@squadup.in</li>
                    <li>+91 98765 43210</li>
                    <li>Mumbai, India</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
            &copy; 2024 SquadUp India. All rights reserved.
        </div>
      </footer>

      {selectedGame && (
        <BookingModal 
          game={selectedGame}
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          isLoggedIn={!!user}
          onLoginSuccess={() => setUser(MOCK_USER)}
          onBookingComplete={handleBookingComplete}
        />
      )}
    </div>
  );
};

export default App;
