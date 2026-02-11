import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" 
          alt="Sports background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Stop Waiting. <br/>
            <span className="text-primary-500">Start Playing.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl font-light">
            The "Uber for Pickup Sports". Join individual slots in organized matches near you. 
            No more coordination fatigue. Guaranteed games.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              Find a Game
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <div className="flex items-center text-sm text-slate-400 gap-6 px-2">
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> 10+ Sports</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Instant Booking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
