import React, { useState, useEffect } from 'react';
import { Game } from '../types';
import { X, CheckCircle, ShieldCheck, Banknote, Loader2 } from 'lucide-react';

interface BookingModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLoginSuccess: () => void;
  onBookingComplete: () => void;
}

type Step = 'details' | 'auth' | 'payment' | 'success';

const BookingModal: React.FC<BookingModalProps> = ({ game, isOpen, onClose, isLoggedIn, onLoginSuccess, onBookingComplete }) => {
  const [step, setStep] = useState<Step>('details');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('details');
      setMobile('');
      setOtp('');
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const convenienceFee = 20;
  const totalAmount = game.price + convenienceFee;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
      setStep('details'); // Go back to details to proceed to payment
    }, 1500);
  };

  const handlePayment = () => {
    setLoading(true);
    // Simulate Payment Gateway
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      onBookingComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          {/* Header */}
          <div className="bg-slate-50 px-4 py-3 sm:px-6 flex justify-between items-center border-b border-slate-100">
            <h3 className="text-lg leading-6 font-semibold text-slate-900" id="modal-title">
              {step === 'success' ? 'Booking Confirmed' : game.title}
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-500 focus:outline-none">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-4 py-5 sm:p-6">
            
            {/* Step 1: Match Details & Rules */}
            {step === 'details' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <img className="h-16 w-16 rounded-lg object-cover" src={game.image} alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">{game.location}</p>
                    <p className="text-sm text-blue-700">{game.date} at {game.time}</p>
                    <p className="text-xs text-blue-600 mt-1">{game.sport} • {game.skillLevel}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">House Rules</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      Non-marking shoes are MANDATORY.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      Bring your own equipment (unless specified).
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      Report 15 mins before start time.
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Match Fee</span>
                    <span className="font-medium">₹{game.price}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-slate-600">Convenience Fee</span>
                    <span className="font-medium">₹{convenienceFee}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900">
                    <span>Total</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>

                <button
                  onClick={() => isLoggedIn ? setStep('payment') : setStep('auth')}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md"
                >
                  {isLoggedIn ? `Proceed to Pay ₹${totalAmount}` : 'Login to Book'}
                </button>
              </div>
            )}

            {/* Step 2: Auth (Mock OTP) */}
            {step === 'auth' && (
              <div className="text-center space-y-6">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100">
                  <ShieldCheck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Secure Login</h3>
                  <p className="text-sm text-slate-500 mt-1">We use OTP to ensure real players.</p>
                </div>
                
                <form onSubmit={handleAuth} className="space-y-4 text-left">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-slate-700">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 99999 99999"
                      className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  {mobile.length >= 10 && (
                    <div className="animate-fade-in">
                       <label htmlFor="otp" className="block text-sm font-medium text-slate-700">OTP (Simulation: Any 4 digits)</label>
                        <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="1234"
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        required
                        />
                         <p className="text-xs text-green-600 mt-1">OTP Simulation Mode Active</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={loading || otp.length < 4}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin"/> : 'Verify & Continue'}
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: Payment (Mock UPI) */}
            {step === 'payment' && (
              <div className="text-center space-y-6">
                 <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Scan using any UPI App</h4>
                    <div className="w-48 h-48 bg-white mx-auto p-2 shadow-sm rounded-lg flex items-center justify-center">
                        {/* Fake QR Code */}
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=squadup@okhdfcbank&pn=SquadUpIndia&am=${totalAmount}&cu=INR`} 
                            alt="Payment QR" 
                            className="w-full h-full"
                        />
                    </div>
                    <p className="mt-4 text-xs text-slate-400">Merchant: SquadUp India Sports Pvt Ltd</p>
                 </div>
                 
                 <div className="flex items-center justify-between bg-green-50 px-4 py-2 rounded-md border border-green-100">
                     <span className="text-sm text-green-800">Amount to Pay</span>
                     <span className="font-bold text-green-800">₹{totalAmount}</span>
                 </div>

                 <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none disabled:opacity-75"
                  >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2"/> Processing...
                        </>
                    ) : 'I Have Paid'}
                  </button>
                  <button onClick={() => setStep('details')} className="text-sm text-slate-500 hover:text-slate-700">Cancel Transaction</button>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 'success' && (
              <div className="text-center py-6">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're In!</h3>
                <p className="text-slate-500 mb-6">Your spot is confirmed. The digital ticket has been added to 'My Bookings'.</p>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left border border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Booking ID</p>
                    <p className="font-mono text-lg font-bold text-slate-900 mb-3">#SQ-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">{game.title}</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">PAID</span>
                    </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  View My Ticket
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
