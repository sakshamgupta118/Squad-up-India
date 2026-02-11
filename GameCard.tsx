import React from 'react';
import { MapPin, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onBook: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onBook }) => {
  const isFillingFast = game.totalSlots - game.filledSlots <= 2;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-slate-900 uppercase tracking-wide">
          {game.sport}
        </div>
        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
          {game.skillLevel}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{game.title}</h3>
        
        <div className="space-y-2 mt-3 mb-5">
          <div className="flex items-center text-sm text-slate-600">
            <MapPin className="w-4 h-4 mr-2 text-primary-500" />
            <span className="truncate">{game.location}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Calendar className="w-4 h-4 mr-2 text-primary-500" />
            <span>{game.date}</span>
            <span className="mx-2 text-slate-300">|</span>
            <Clock className="w-4 h-4 mr-2 text-primary-500" />
            <span>{game.time}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-medium text-slate-700">{game.filledSlots}/{game.totalSlots} Joined</span>
            {isFillingFast && <span className="text-red-500 font-semibold animate-pulse">{game.totalSlots - game.filledSlots} Spots Left!</span>}
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${isFillingFast ? 'bg-orange-500' : 'bg-primary-500'}`} 
              style={{ width: `${(game.filledSlots / game.totalSlots) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-500 block">Per Person</span>
            <span className="text-lg font-bold text-slate-900">₹{game.price}</span>
          </div>
          <button 
            onClick={() => onBook(game)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
          >
            Book Now
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
