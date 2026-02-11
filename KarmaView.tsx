import React from 'react';
import { Shield, AlertTriangle, TrendingUp, UserCheck } from 'lucide-react';
import { User } from '../types';

interface KarmaViewProps {
  user: User | null;
}

const KarmaView: React.FC<KarmaViewProps> = ({ user }) => {
  const score = user ? user.karmaScore : 0;
  
  // Determine color based on score
  let scoreColor = 'text-green-500';
  let progressColor = 'bg-green-500';
  let status = 'Reliable Player';
  
  if (score < 50) {
    scoreColor = 'text-red-500';
    progressColor = 'bg-red-500';
    status = 'At Risk';
  } else if (score < 80) {
    scoreColor = 'text-orange-500';
    progressColor = 'bg-orange-500';
    status = 'Needs Improvement';
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Karma Score</h2>
        <p className="text-slate-500 mt-2">Our proprietary reliability rating. Stop Flaking. Start Playing.</p>
      </div>

      {/* Score Card */}
      {user?.isLoggedIn ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 text-center border border-slate-100 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-2 ${progressColor}`}></div>
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Your Current Score</h3>
            <div className={`text-6xl md:text-8xl font-black ${scoreColor} mb-4`}>
              {score}
            </div>
            <div className="inline-block bg-slate-100 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 mb-6">
              Status: {status}
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 max-w-md mx-auto">
              <div 
                className={`h-4 rounded-full transition-all duration-1000 ${progressColor}`} 
                style={{ width: `${score}%` }}
              ></div>
            </div>
             <p className="mt-6 text-sm text-slate-500 italic">
                "You are in the top 15% of reliable players in Mumbai!"
             </p>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Login to see your Score</h3>
            <p className="text-blue-700">Join the community to start building your reputation.</p>
        </div>
      )}

      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Earn Points</h4>
          <p className="text-sm text-slate-600">
            Play games, arrive on time, and get positive peer reviews to increase your score.
            <span className="block mt-2 font-semibold text-green-600">+5 pts per completed game.</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Lose Points</h4>
          <p className="text-sm text-slate-600">
            Last-minute cancellations and no-shows hurt the team and your score drastically.
            <span className="block mt-2 font-semibold text-red-600">-50 pts for No-Shows.</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Unfair Advantage</h4>
          <p className="text-sm text-slate-600">
            Higher Karma unlocks <span className="text-amber-500 font-bold">Gold Tier</span> lobbies, priority booking, and zero cancellation fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KarmaView;
