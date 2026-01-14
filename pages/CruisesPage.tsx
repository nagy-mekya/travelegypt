import React, { useState } from 'react';
import { Page } from '../App';

interface CruisesPageProps {
  onNavigate: (page: Page) => void;
}

export const CruisesPage: React.FC<CruisesPageProps> = ({ onNavigate }) => {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent navigation
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-main">Luxury Nile Cruises</h1>
        <p className="text-[#897961] mt-2">Sail between Luxor and Aswan in 5-star comfort.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8 hidden lg:block">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-text-main">Duration</h3>
            <div className="space-y-2">
              {['3 Nights / 4 Days', '4 Nights / 5 Days', '7 Nights / 8 Days'].map((label, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-text-main group-hover:text-primary transition-colors text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Listings */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 201, title: "Royal Viking Nile Cruise", days: "5 Days / 4 Nights", price: 550, rating: 5.0, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZgREyP_ILEdUVYvf-wsP1n0U9VHg0y7LpvB0pRAZdUP3oVPAWh0uNhFV8Z2jOX5vO_UlGaz9nQ1WeoD0Lzm9ZjhaQE9NbhYKZTj9O3rBhW5bBxTYk9mbRgD07Npb3J8IU-JHMDZJWY9AB_nystFqyXEGe8q034N2xB2_VOXDoPNdz9lG7Zb05XGKc7pZwDnyjLZjeXh9UnpINyAVzcrPxOazOVFqNaAO2337Epv_RJ_SnJ1TD_Ch8T9nqtnbQpG6r61wci3Sj2Rl9" },
              { id: 202, title: "Oberoi Philae Luxury Cruiser", days: "7 Days / 6 Nights", price: 1200, rating: 4.9, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdh4KzK0sQIxIUSft6PeQLUJ3rX0xtdmnKZN3tOwLzT0DbRt54PSr6tmtiniUxroAhorvn_E0L5rGmWXHwKYPrsft-2aRwNcgy1l4JwlJG26xbKI7z2gU2V6ptWax-VZgy3Ms3lO8ZnzAjjua7Wb_VfkAmyURJatzl5haOteQdXjHs5sePZpGRk5AAPNRHxjy0ZLZ5_PcHF2bS6q_wE1qEa2E1eBs3lwClut0oI5nZdKcnpXhTUQbNjC1-7iZmwWPk8w1W9qa4-X4h" },
              { id: 203, title: "Sonesta St. George", days: "4 Days / 3 Nights", price: 480, rating: 4.8, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7P1fQ5ErmHhXdXkVTh94vEUrNBnkBSNIETdJXhkV398hUIPw8igEn0akg90bMcpkZFmtPnBGme9Ax0ZURupoLreJELyzyeqXVOOAvBSMQozKdH497AbLJW5_vd2DJ2yiP_Qe3vLk7H69dnoPSODj9E3gsxyhgF2cIYnVz2XXAH2avhxqKzbLlgB6er2_APA75gVaTcmJo0xbQbLmv4Kciqe1Yd22wZNeaDr79-0D9EqHdHWcb17yH2q3W8UWU7gOMDQov3_qtLhrE" },
              { id: 204, title: "Movenpick Royal Lily", days: "5 Days / 4 Nights", price: 600, rating: 4.7, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgbwuZZhWcKFae0TrtOP18ooAUEOCHVs62ObM5aUPJ-FkOgrcLobHVVl21h-tFKFeAqAi9Ann70CbtKs_rtU05zvLbqnxkF8A9e-DTfBqJMkGKt89mCzj283uN3OgPb7o_8hh1oDDkK-Pc5ndd-e8hkhDzDO8yL4w9aOUgnShPzyB1xp1IXy98azmZcKHTPIQzKYtJeMoz1w8sJp6Av36H1zGLIL6nykt01lIh7QQ3ZNp_Pus7Rp8xIu2V-D_u1579zyhumNYZemn6" }
            ].map((cruise, idx) => (
              <article key={idx} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer" onClick={() => onNavigate('booking')}>
                <div className="relative h-64 overflow-hidden">
                  <img src={cruise.img} alt={cruise.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button 
                    onClick={(e) => toggleLike(e, cruise.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors z-10"
                  >
                    <span className={`material-symbols-outlined text-[20px] ${likedItems.has(cruise.id) ? 'filled text-red-500' : ''}`}>favorite</span>
                  </button>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-primary text-sm mb-2">
                    <span className="material-symbols-outlined text-[16px] filled">star</span>
                    <span className="font-bold">{cruise.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main leading-tight mb-2 group-hover:text-primary transition-colors">{cruise.title}</h3>
                  <p className="text-sm text-[#897961] mb-4">{cruise.days}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#897961]">Starting from</span>
                      <div className="text-xl font-bold text-text-main">${cruise.price}</div>
                    </div>
                    <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-[#181511] text-sm font-bold rounded-lg transition-colors shadow-sm">View Details</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};