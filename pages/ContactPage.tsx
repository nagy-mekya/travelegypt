import React from 'react';
import { Page } from '../App';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-text-main mb-6">Get in Touch</h1>
          <p className="text-[#897961] mb-8 text-lg">Have a question about a tour or need a custom itinerary? Our travel experts are here to help.</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Visit Us</h3>
                <p className="text-gray-600">123 Nile Corniche, Downtown<br/>Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-gray-600">+20 2 1234 5678</p>
                <p className="text-sm text-gray-400">Mon-Fri from 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-600">hello@travelegypt.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-text-main">First Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-text-main">Last Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-text-main">Email</label>
              <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-text-main">Message</label>
              <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none"></textarea>
            </div>
            <button className="w-full bg-primary text-[#181511] font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};