import React, { useState } from 'react';
import { Page } from '../App';

interface UserDashboardPageProps {
  onNavigate: (page: Page) => void;
}

export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <section>
              <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6">Welcome back, Ahmed!</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Upcoming Trips', val: '2', icon: 'flight_takeoff', bg: 'bg-blue-50 text-blue-600' },
                  { label: 'Completed Trips', val: '14', icon: 'check_circle', bg: 'bg-green-50 text-green-600' },
                  { label: 'Loyalty Points', val: '2,450', icon: 'loyalty', bg: 'bg-primary/10 text-primary' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className={`size-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#897961]">{stat.label}</p>
                      <p className="text-2xl font-bold text-text-main">{stat.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-text-main">Next Trip</h2>
                <button onClick={() => setActiveTab('My Bookings')} className="text-primary text-sm font-semibold hover:underline">View all bookings</button>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row group">
                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7P1fQ5ErmHhXdXkVTh94vEUrNBnkBSNIETdJXhkV398hUIPw8igEn0akg90bMcpkZFmtPnBGme9Ax0ZURupoLreJELyzyeqXVOOAvBSMQozKdH497AbLJW5_vd2DJ2yiP_Qe3vLk7H69dnoPSODj9E3gsxyhgF2cIYnVz2XXAH2avhxqKzbLlgB6er2_APA75gVaTcmJo0xbQbLmv4Kciqe1Yd22wZNeaDr79-0D9EqHdHWcb17yH2q3W8UWU7gOMDQov3_qtLhrE")'}}></div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span> Confirmed
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-[#897961] text-sm mb-1">
                        <span className="material-symbols-outlined text-lg">hotel</span>
                        <span>Hotel Booking • ID: #TRV-8821</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-main mb-2">Grand Nile Tower</h3>
                      <div className="flex items-center gap-1 text-[#897961] text-sm mb-4">
                        <span className="material-symbols-outlined text-primary text-lg">location_on</span> Cairo, Egypt
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-[#897961] mb-1">Total Paid</p>
                      <p className="text-xl font-bold text-text-main">$410.40</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 my-2">
                    <div>
                      <p className="text-xs font-semibold text-[#897961] uppercase mb-1">Check-In</p>
                      <p className="font-bold text-text-main flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">calendar_today</span> Oct 12, 2023
                      </p>
                      <p className="text-xs text-[#897961] pl-7">After 2:00 PM</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#897961] uppercase mb-1">Check-Out</p>
                      <p className="font-bold text-text-main flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">event_available</span> Oct 15, 2023
                      </p>
                      <p className="text-xs text-[#897961] pl-7">Before 12:00 PM</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-3">
                    <button className="bg-primary text-text-main font-bold py-2.5 px-5 rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center gap-2">
                      <span className="material-symbols-outlined">confirmation_number</span> Voucher
                    </button>
                    <button className="bg-white border border-gray-200 text-text-main font-semibold py-2.5 px-5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined">directions</span> Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'My Bookings':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between mb-4">
                   <h3 className="font-bold text-lg">Giza Pyramids Tour</h3>
                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Completed</span>
                </div>
                <p className="text-gray-500 text-sm">Sept 20, 2023</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between mb-4">
                   <h3 className="font-bold text-lg">Grand Nile Tower</h3>
                   <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Upcoming</span>
                </div>
                <p className="text-gray-500 text-sm">Oct 12, 2023</p>
              </div>
            </div>
          </div>
        );
      case 'Saved Items':
        return (
          <div className="text-center py-20">
             <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">favorite</span>
             <h2 className="text-xl font-bold text-gray-400">No saved items yet</h2>
             <button onClick={() => onNavigate('tours')} className="mt-4 text-primary font-bold hover:underline">Browse Tours</button>
          </div>
        );
      case 'Profile Settings':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <div className="bg-white p-8 rounded-xl border border-gray-100 space-y-4 max-w-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">AH</div>
                <button className="text-primary font-bold text-sm">Change Photo</button>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" defaultValue="Ahmed Hassan" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" defaultValue="ahmed@example.com" />
              </div>
              <button className="bg-primary text-[#181511] font-bold py-3 px-6 rounded-lg mt-4">Save Changes</button>
            </div>
          </div>
        );
       case 'Payment Methods':
        return (
           <div>
            <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-between mb-4">
               <div className="flex items-center gap-4">
                 <div className="bg-gray-100 p-2 rounded"><span className="material-symbols-outlined">credit_card</span></div>
                 <div>
                   <p className="font-bold">Visa ending in 4242</p>
                   <p className="text-xs text-gray-500">Expires 12/28</p>
                 </div>
               </div>
               <button className="text-red-500 text-sm font-bold">Remove</button>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold"><span className="material-symbols-outlined">add</span> Add New Card</button>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex mb-8 text-sm text-[#897961]">
        <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button>
        <span className="mx-2">/</span>
        <span className="text-text-main font-medium">Dashboard</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-100 bg-primary/5">
              <p className="text-xs font-bold text-[#897961] uppercase mb-1">My Account</p>
              <h3 className="text-lg font-bold text-text-main">Dashboard</h3>
            </div>
            <nav className="p-2 space-y-1">
              {[
                { name: 'Overview', icon: 'dashboard' },
                { name: 'My Bookings', icon: 'luggage', count: 2 },
                { name: 'Saved Items', icon: 'favorite' },
                { name: 'Profile Settings', icon: 'manage_accounts' },
                { name: 'Payment Methods', icon: 'credit_card' }
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${activeTab === item.name ? 'bg-primary/10 text-primary font-semibold' : 'text-[#897961] hover:text-text-main hover:bg-gray-50'}`}
                >
                  <span className={`material-symbols-outlined ${activeTab === item.name ? 'filled' : ''}`}>{item.icon}</span>
                  {item.name}
                  {item.count && <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.count}</span>}
                </button>
              ))}
              <button 
                onClick={() => onNavigate('home')}
                className="w-full flex items-center gap-3 px-4 py-3 text-[#897961] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-4 text-left"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            </nav>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-8 min-h-[500px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};