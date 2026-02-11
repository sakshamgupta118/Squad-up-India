import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About SquadUp India</h2>
        <p className="mt-4 text-xl text-slate-500">Solving the "Where", "When", and "Who" of urban sports.</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* The Problem */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">The Problem</h3>
            <ul className="space-y-4">
                <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">1</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">Coordination Fatigue</h4>
                        <p className="mt-1 text-slate-500">Trying to organize 10+ friends simultaneously is a nightmare. "Flakes" ruin the game.</p>
                    </div>
                </li>
                 <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">2</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">High Commitment</h4>
                        <p className="mt-1 text-slate-500">Booking a turf requires ₹2000+ upfront payment. One person usually bears the burden.</p>
                    </div>
                </li>
                 <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">3</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">Skill Mismatch</h4>
                        <p className="mt-1 text-slate-500">Games fail when skill levels vary too drastically between players.</p>
                    </div>
                </li>
            </ul>
        </div>

        {/* The Solution */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">The Solution</h3>
            <ul className="space-y-4">
                <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs">1</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">Individual Booking</h4>
                        <p className="mt-1 text-slate-500">Book 1 ticket instead of the whole venue. Pay only for yourself.</p>
                    </div>
                </li>
                 <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs">2</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">Auto-Lobbies</h4>
                        <p className="mt-1 text-slate-500">Game confirmed only when slots fill. Guaranteed full team without coordination.</p>
                    </div>
                </li>
                 <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs">3</div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-slate-900">Matchmaking</h4>
                        <p className="mt-1 text-slate-500">Bronze, Silver, & Gold tier lobbies ensure balanced competitive play.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>

      <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Target Market</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-bold">Urban Pro (22-35)</h4>
                  <p className="text-slate-300 text-sm mt-2">Busy, has disposable income, wants to play without the hassle.</p>
              </div>
               <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-bold">Ex-Athlete</h4>
                  <p className="text-slate-300 text-sm mt-2">Missing the team environment and organized structure.</p>
              </div>
               <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-primary-400 font-bold">Students</h4>
                  <p className="text-slate-300 text-sm mt-2">Seeking low-cost, non-committed games.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AboutView;
