import React from 'react';
import { Menu, User, Calendar, Shield, Info, LogOut } from 'lucide-react';
import { Tab, User as UserType } from '../types';

interface NavbarProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
  user: UserType | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange, user, onLogin, onLogout }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onTabChange('home')}>
            <div className="bg-primary-600 rounded-lg p-1.5 mr-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">SquadUp<span className="text-primary-600">India</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onTabChange('home')}
              className={`flex items-center text-sm font-medium transition-colors ${currentTab === 'home' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Menu className="w-4 h-4 mr-1.5" />
              Find Games
            </button>
            <button 
              onClick={() => onTabChange('bookings')}
              className={`flex items-center text-sm font-medium transition-colors ${currentTab === 'bookings' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              My Bookings
            </button>
            <button 
              onClick={() => onTabChange('karma')}
              className={`flex items-center text-sm font-medium transition-colors ${currentTab === 'karma' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Shield className="w-4 h-4 mr-1.5" />
              Karma Score
            </button>
            <button 
              onClick={() => onTabChange('about')}
              className={`flex items-center text-sm font-medium transition-colors ${currentTab === 'about' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Info className="w-4 h-4 mr-1.5" />
              About
            </button>
          </div>

          {/* User Auth */}
          <div className="flex items-center">
            {user && user.isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                    <p className="text-xs font-semibold text-primary-600">Hi, {user.name.split(' ')[0]}</p>
                    <p className="text-[10px] text-slate-500">Karma: <span className="text-green-600 font-bold">{user.karmaScore}</span></p>
                </div>
                <button 
                  onClick={onLogout}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={onLogin}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (simplified for this demo) */}
      <div className="md:hidden border-t border-slate-100 flex justify-around p-2 bg-white">
          <button onClick={() => onTabChange('home')} className={`p-2 rounded-full ${currentTab === 'home' ? 'text-primary-600 bg-primary-50' : 'text-slate-400'}`}><Menu size={20}/></button>
          <button onClick={() => onTabChange('bookings')} className={`p-2 rounded-full ${currentTab === 'bookings' ? 'text-primary-600 bg-primary-50' : 'text-slate-400'}`}><Calendar size={20}/></button>
          <button onClick={() => onTabChange('karma')} className={`p-2 rounded-full ${currentTab === 'karma' ? 'text-primary-600 bg-primary-50' : 'text-slate-400'}`}><Shield size={20}/></button>
      </div>
    </nav>
  );
};

export default Navbar;
