import React from 'react';
import { Booking } from '../types';
import { Calendar, Clock, MapPin, CheckCircle, Ticket } from 'lucide-react';

interface BookingsViewProps {
  bookings: Booking[];
}

const BookingsView: React.FC<BookingsViewProps> = ({ bookings }) => {
  if (bookings.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <Ticket className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">No Bookings Yet</h2>
        <p className="text-slate-500">Go find a game and join the squad!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Match History</h2>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            {/* Status Strip */}
            <div className={`h-2 md:h-auto md:w-2 ${booking.status === 'Confirmed' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
            
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{booking.gameTitle}</h3>
                  <p className="text-sm text-slate-400 font-mono mt-1">Ref: {booking.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {booking.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                  {booking.date}
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2 text-primary-500" />
                  {booking.time}
                </div>
                 <div className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Paid ₹{booking.pricePaid}
                </div>
              </div>
            </div>

            {/* Ticket Action */}
            <div className="bg-slate-50 p-6 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-slate-100 min-w-[150px]">
              <div className="w-24 h-24 bg-white p-2 rounded shadow-sm mb-2">
                 <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${booking.id}`} alt="Ticket QR" className="w-full h-full opacity-80"/>
              </div>
              <span className="text-xs text-slate-500">Scan at Venue</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsView;
