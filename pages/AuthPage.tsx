import React, { useState } from 'react';
import { Page } from '../App';

interface AuthPageProps {
  onNavigate: (page: Page) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-background-light px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-floating border border-gray-100">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-5xl text-primary mb-2 filled">panorama_vertical</span>
          <h1 className="text-2xl font-bold text-text-main">Welcome to TravelEgypt</h1>
          <p className="text-gray-500 text-sm">Your gateway to ancient wonders.</p>
        </div>

        <div className="flex border-b border-gray-100 mb-6">
          <button 
            className={`flex-1 pb-3 text-sm font-bold transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button 
            className={`flex-1 pb-3 text-sm font-bold transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
              <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" required />
            </div>
          )}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
            <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
            <input type="password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" required />
          </div>

          <button className="w-full bg-primary text-[#181511] font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 mt-4">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">By continuing, you agree to our <button onClick={() => onNavigate('terms')} className="underline hover:text-primary">Terms</button> and <button onClick={() => onNavigate('privacy')} className="underline hover:text-primary">Privacy Policy</button>.</p>
        </div>
      </div>
    </div>
  );
};