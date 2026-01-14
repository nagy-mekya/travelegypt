import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1a150e] text-white pt-16 pb-8 border-t border-[#332b21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="material-symbols-outlined text-3xl text-primary filled">panorama_vertical</span>
              <h3 className="text-xl font-bold">TravelEgypt</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for exploring the lands of Pharaohs. We craft unforgettable journeys across Egypt, from the Mediterranean to the Nubian deserts.
            </p>
            <div className="flex gap-4 pt-2">
              {['public', 'photo_camera', 'mail'].map((icon) => (
                <button key={icon} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-primary transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-primary transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('press')} className="hover:text-primary transition-colors">Press</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('help')} className="hover:text-primary transition-colors">Help Center</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('cancellation')} className="hover:text-primary transition-colors">Cancellation Policy</button></li>
              <li><button onClick={() => onNavigate('sitemap')} className="hover:text-primary transition-colors">Sitemap</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and travel inspiration.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary text-white transition-colors"
              />
              <button className="bg-primary text-[#181511] font-bold py-2 rounded hover:bg-primary-hover transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 TravelEgypt. All rights reserved.</p>
          <div className="flex gap-4 opacity-50">
            {['credit_card', 'payments', 'account_balance'].map((icon) => (
              <span key={icon} className="material-symbols-outlined">{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};