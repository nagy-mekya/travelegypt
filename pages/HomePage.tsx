import React, { useState } from 'react';
import { Page } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

type SearchTab = 'tours' | 'hotels' | 'cruises';

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Search Widget State
  const [activeSearchTab, setActiveSearchTab] = useState<SearchTab>('tours');
  
  // Nile Cruises Carousel State
  const [cruiseIndex, setCruiseIndex] = useState(0);
  const cruises = [
    {
      id: 1,
      title: "Royal Viking Nile Cruise",
      duration: "5 Days / 4 Nights",
      rating: 5.0,
      price: "$550",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZgREyP_ILEdUVYvf-wsP1n0U9VHg0y7LpvB0pRAZdUP3oVPAWh0uNhFV8Z2jOX5vO_UlGaz9nQ1WeoD0Lzm9ZjhaQE9NbhYKZTj9O3rBhW5bBxTYk9mbRgD07Npb3J8IU-JHMDZJWY9AB_nystFqyXEGe8q034N2xB2_VOXDoPNdz9lG7Zb05XGKc7pZwDnyjLZjeXh9UnpINyAVzcrPxOazOVFqNaAO2337Epv_RJ_SnJ1TD_Ch8T9nqtnbQpG6r61wci3Sj2Rl9"
    },
    {
      id: 2,
      title: "Oberoi Philae Luxury Cruiser",
      duration: "7 Days / 6 Nights",
      rating: 4.9,
      price: "$1,200",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdh4KzK0sQIxIUSft6PeQLUJ3rX0xtdmnKZN3tOwLzT0DbRt54PSr6tmtiniUxroAhorvn_E0L5rGmWXHwKYPrsft-2aRwNcgy1l4JwlJG26xbKI7z2gU2V6ptWax-VZgy3Ms3lO8ZnzAjjua7Wb_VfkAmyURJatzl5haOteQdXjHs5sePZpGRk5AAPNRHxjy0ZLZ5_PcHF2bS6q_wE1qEa2E1eBs3lwClut0oI5nZdKcnpXhTUQbNjC1-7iZmwWPk8w1W9qa4-X4h"
    },
    {
      id: 3,
      title: "Traditional Dahabiya Experience",
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      price: "$480",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgbwuZZhWcKFae0TrtOP18ooAUEOCHVs62ObM5aUPJ-FkOgrcLobHVVl21h-tFKFeAqAi9Ann70CbtKs_rtU05zvLbqnxkF8A9e-DTfBqJMkGKt89mCzj283uN3OgPb7o_8hh1oDDkK-Pc5ndd-e8hkhDzDO8yL4w9aOUgnShPzyB1xp1IXy98azmZcKHTPIQzKYtJeMoz1w8sJp6Av36H1zGLIL6nykt01lIh7QQ3ZNp_Pus7Rp8xIu2V-D_u1579zyhumNYZemn6"
    },
    {
      id: 4,
      title: "Sonesta St. George",
      duration: "4 Days / 3 Nights",
      rating: 4.8,
      price: "$520",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7P1fQ5ErmHhXdXkVTh94vEUrNBnkBSNIETdJXhkV398hUIPw8igEn0akg90bMcpkZFmtPnBGme9Ax0ZURupoLreJELyzyeqXVOOAvBSMQozKdH497AbLJW5_vd2DJ2yiP_Qe3vLk7H69dnoPSODj9E3gsxyhgF2cIYnVz2XXAH2avhxqKzbLlgB6er2_APA75gVaTcmJo0xbQbLmv4Kciqe1Yd22wZNeaDr79-0D9EqHdHWcb17yH2q3W8UWU7gOMDQov3_qtLhrE"
    }
  ];

  const nextCruise = () => {
    if (cruiseIndex < cruises.length - 1) {
      setCruiseIndex(cruiseIndex + 1);
    }
  };

  const prevCruise = () => {
    if (cruiseIndex > 0) {
      setCruiseIndex(cruiseIndex - 1);
    }
  };

  // State for liked items
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) newLiked.delete(id);
    else newLiked.add(id);
    setLikedItems(newLiked);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjy0p-AUgJMWikvVVO2Z_dZiZe3eu0ZKRxeyJzjt4EU2iiFQtClPME9aoxMbP5OjpRFS0KGOZds_YBct1GS-FlRwZPE4hpwRtxE68A0JZXpxQR26me1FBkcq57c1REznHec8UDkcfQ04DZw0xkU-OuYXjYE2lUoXf5HQTIJd7SVEQaBjxsFWk-fWUv09KMNUhTg8W2mHEFlqiWHrzw6_hUDRjnLBAF32HWJ_LeuE0AnOUApMN4_wh8z5TZF8boC3CZ2CwOClGvjwMz")`
          }}
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-48">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl md:text-7xl font-black tracking-tight mb-6 drop-shadow-xl"
          >
            Discover Ancient Wonders <br className="hidden md:block"/> & Modern Luxuries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/90 text-lg md:text-2xl max-w-3xl font-medium drop-shadow-lg px-4 leading-relaxed"
          >
            Experience the magic of the Nile, the warmth of the desert, and unforgettable adventures tailored just for you.
          </motion.p>
        </div>

        {/* Search Widget */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 z-20">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-floating overflow-hidden border border-gray-100 p-1">
            {/* Tabs */}
            <div className="flex bg-gray-50/80 rounded-t-xl overflow-hidden">
              <button 
                onClick={() => setActiveSearchTab('tours')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all duration-300 ${
                  activeSearchTab === 'tours' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${activeSearchTab === 'tours' ? 'filled' : ''}`}>map</span>
                Tours
              </button>
              <button 
                onClick={() => setActiveSearchTab('hotels')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all duration-300 ${
                  activeSearchTab === 'hotels' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${activeSearchTab === 'hotels' ? 'filled' : ''}`}>hotel</span>
                Hotels
              </button>
              <button 
                onClick={() => setActiveSearchTab('cruises')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all duration-300 ${
                  activeSearchTab === 'cruises' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${activeSearchTab === 'cruises' ? 'filled' : ''}`}>directions_boat</span>
                Cruises
              </button>
            </div>
            
            {/* Inputs Container */}
            <div className="p-4 md:p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-end">
                <div className="flex-1 w-full space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    {activeSearchTab === 'hotels' ? 'Location' : 'Destination'}
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                      {activeSearchTab === 'hotels' ? 'apartment' : 'location_on'}
                    </span>
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 h-14 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all" 
                      placeholder={activeSearchTab === 'hotels' ? 'Where are you staying?' : 'Where do you want to explore?'} 
                    />
                  </div>
                </div>
                
                <div className="flex-1 w-full space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Dates</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                    <input type="text" className="w-full pl-12 pr-4 h-14 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all" placeholder="Check-in — Check-out" />
                  </div>
                </div>

                <div className="w-full lg:w-auto">
                  <button 
                    onClick={() => onNavigate(activeSearchTab === 'cruises' ? 'cruises' : 'tours')}
                    className="w-full h-14 bg-primary hover:bg-primary-hover text-[#181511] font-extrabold rounded-xl px-12 flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-primary/30"
                  >
                    <span className="material-symbols-outlined">search</span>
                    Find Best Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing for Search Widget */}
      <div className="h-44 lg:h-28"></div>

      {/* Featured Tours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-3 text-text-main">Trending Adventures</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
            <p className="text-gray-500 text-lg">Uncover the most requested experiences this season.</p>
          </div>
          <button onClick={() => onNavigate('tours')} className="hidden sm:flex items-center text-primary font-bold hover:gap-2 transition-all gap-1">
            Browse All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: "Classic Luxor Expedition",
              duration: "4 Days",
              location: "Luxor, Egypt",
              price: 380,
              oldPrice: 450,
              rating: 4.9,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQcocWskdk7iMEYgZNDSoI4q3l3QTDf7txI3-AQSCj5V9Q8oWb46MlJTGyTCgG9__ejpM3FJwlRJhY80KXUyDTNdUw0QG5p6LZwS_zUUPPUhgcT-xve3eRn1fQ_nDvOTtaj9imAmmingq9m7Ef2yr42zpvXc_xYN-HpJabZr_vEkhO-yTcivisr3YPSqNo7I7GSgAxU5BjCOhTK0_OVHbUZrMO7MxlRY5qoQEdP_GAzk5ZG75bCw1DEBvfzz27BscqMHK2GEdPDVj7"
            },
            {
              id: 2,
              title: "Cairo & Luxor Highlights",
              duration: "7 Days",
              location: "Cairo & Luxor",
              price: 680,
              oldPrice: 800,
              rating: 4.8,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFKTMgvnwTw25objoW1591wbzBdKI6T8n8z0qjDH3FHdgt7oVrkVZ_xiE_bCjK5kHr6Y9Orw5bmjrnDSd-IgnoJ-BBRfdUr33vsnH0RiAywwBqbSRdnN92tPMAVEzFkpNjpYDkpgmFhQLLcEBrXrEuLhCiVwOQPpqv-LoNVG8fF0sVYATgSOghLHZnY-260JCyTKxn0VMkptOlgoZQr_bfxIw-EJRsabQfCN083jWCtPRiH6HtQlDw_MTqgqDghkLDM03mrJcZkEYx"
            },
            {
              id: 3,
              title: "Private Giza Pyramids Tour",
              duration: "1 Day",
              location: "Giza, Egypt",
              price: 85,
              rating: 5.0,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-O4xY0ltYKv0mqfDQJP4t3PFz05orcoehpgncxNseb4qWFEdFaZScROTT0bQjwjDPsKNCsWPps1uKkXE-zCvAmdSJgZ48Y3Zp9LKPgeEsors1E3yMkDLG9BgAo85kA_D58xktTd2mNllChsFEO7SGfQuGrvjtu0b7jH0AClwqkeurFqJ0IQNPCkkAWnb4Q3qLZzNhX8F8faH3AjrAusNX-v-9ax-Hl5cPf34FDvnbesqwmhVX6PjwXTHYkYY7Z-sGGhqfolh5dZQ"
            },
            {
              id: 4,
              title: "Red Sea Snorkeling Escape",
              duration: "3 Days",
              location: "Hurghada",
              price: 220,
              rating: 4.7,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTpL9WK3tk3Xs_IsnmdvN4US32Nek0qX9UZH2MgHsFj1FsO2r0ZuXqA0QSZUFtw_bH1FbfA5xlzK3szOfmHFHKHd8NdURdz5RaXBpaLy57Niuid4h-5Wf6AIzaHA8kgBE0if2kVGKN6HcaA7l0Pmlb8F4HbdaxVvV1VKQpSsYzOQgQRmzpyBC2T8psPz7XAc98q5Vae3GDTp8eNjQKLXJaDLGobZB-JQXCl8h7K6FxzXapS9BLco2M5fWSOOokUMRdfeh4IPkhyeM6"
            }
          ].map((tour) => (
            <motion.div 
              key={tour.id}
              whileHover={{ y: -8 }}
              onClick={() => onNavigate('tour-details')}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-500 border border-gray-50 flex flex-col cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <button 
                  onClick={(e) => toggleLike(e, tour.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all z-10 shadow-sm"
                >
                  <span className={`material-symbols-outlined text-[22px] ${likedItems.has(tour.id) ? 'filled text-red-500' : ''}`}>favorite</span>
                </button>
                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                  <span className="material-symbols-outlined text-yellow-500 text-[18px] filled">star</span> {tour.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-text-muted font-bold uppercase tracking-wider mb-3">
                  <span className="material-symbols-outlined text-[18px]">schedule</span> {tour.duration}
                  <span className="opacity-30">|</span>
                  <span className="material-symbols-outlined text-[18px]">location_on</span> {tour.location}
                </div>
                <h3 className="font-bold text-xl leading-snug mb-4 group-hover:text-primary transition-colors">{tour.title}</h3>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">From</span>
                    <div className="text-primary font-black text-2xl">${tour.price}</div>
                  </div>
                  <div className="bg-primary/10 group-hover:bg-primary text-primary group-hover:text-[#181511] p-3 rounded-xl transition-all duration-300">
                    <span className="material-symbols-outlined font-bold">arrow_outward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nile Cruises - Premium Motion Carousel */}
      <section className="py-24 bg-[#1a150e] text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="uppercase tracking-[0.3em] text-primary text-sm font-black mb-4 block">Luxury Navigations</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Majestic Nile <br/>Journeys</h2>
              <p className="text-gray-400 max-w-xl text-lg leading-relaxed">Experience a moving panorama of ancient history from the sanctuary of a five-star floating boutique hotel.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevCruise} 
                disabled={cruiseIndex === 0}
                className={`w-14 h-14 rounded-full border transition-all duration-500 flex items-center justify-center ${
                  cruiseIndex === 0 ? 'border-white/10 text-white/20' : 'border-white/30 text-white hover:bg-white hover:text-black'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
              </button>
              <button 
                onClick={nextCruise} 
                disabled={cruiseIndex === cruises.length - 1}
                className={`w-14 h-14 rounded-full transition-all duration-500 flex items-center justify-center ${
                  cruiseIndex === cruises.length - 1 ? 'bg-white/5 text-white/20' : 'bg-primary text-[#181511] hover:scale-110 shadow-xl shadow-primary/20'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              className="flex gap-8"
              animate={{ x: -cruiseIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 320 : 500) }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Elegant "Slow" ease-out
            >
              {cruises.map((cruise) => (
                <motion.div 
                  key={cruise.id}
                  className="min-w-[300px] md:min-w-[480px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-700 group cursor-pointer"
                  onClick={() => onNavigate('cruises')}
                >
                  <div className="relative h-[300px] md:h-[400px]">
                    <img src={cruise.img} alt={cruise.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a150e] via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-primary/20 backdrop-blur-md text-primary text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/30">
                          Top Rated
                        </span>
                        <div className="flex items-center gap-1 text-primary">
                          <span className="material-symbols-outlined text-sm filled">star</span>
                          <span className="font-bold">{cruise.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-black text-2xl md:text-3xl mb-3 leading-tight group-hover:text-primary transition-colors">{cruise.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-gray-400 font-medium">
                          <span className="material-symbols-outlined text-primary">schedule</span> 
                          {cruise.duration}
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-gray-500 block">Starting at</span>
                          <span className="text-2xl font-black text-white">{cruise.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex gap-2 mt-12 justify-center">
            {cruises.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  i === cruiseIndex ? 'w-12 bg-primary' : 'w-4 bg-white/10'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Whispers of the Nile</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover why thousands of travelers trust us to curate their Egyptian escape.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVZsxkbndOnLQ-c8AIFa38FVkihZ7Q2lVJxf_v2RwlSkn4stt4pLNki1ykx3RltuwxGnIxsuJxCFRLl25HKHObn-qgfa8RSRp_CzOGjO0OeZBMUGiUYqYz3PcJlhg3dkqHF3MY6UaqQMCjH4yynxazG_k5xjA0ob48UZ4mprMdxrCkTUptInA9TgL8LWQpICGSPl1SWyk_FIc13PrwneeNeJx7wMYXCGpyfVefLioYT2cjalXKNxa5zmV0DFtvZoeraREoTFOFIUhE",
              text: "The Nile Cruise was absolutely magical. The guides were so knowledgeable about ancient history, and the organization was flawless."
            },
            {
              name: "David Chen",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVBl5kZ39MAKGp0I4ASRkkJ1hhPL7Fm5qRuGRBBjmM3_BJATMEl14hQPLsuVZt6VoJ58k6qz2c55OQUDBWKpPM_Xh6QzF6hWfgR_IGGN0PcCkdm5iV_SOcTKPI1x0INbsynAuIALHNiiKxMVIHYeXf7vgOtNoYq6Iwh3jK2cz-_ZWdeaoYgTXjx6AW_WQ_FJiIJbLe_uaEFyhK4gvpcJOk86BDJ_hzoU_W6ouKUsYKo6689Kd6N04gzyPA3mEiTgSA6_1ZnhdxG-r7",
              text: "Booked the Luxor day trip last minute. The team was super responsive and got us a private guide who made the history come alive."
            },
            {
              name: "Emma Wilson",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm2ODd79x1QElCXhybQ_89z3NfwFMIQAAEfZyXwCD74Lc4oC6s9ZRaL7bVh5dv6amGi1TyTVAyLemfeBslYPUFc-exFWE7R82O5P1EfDcJ2nnPAibF5VwUTgKrEAQ3Fu77tJe5noU2ycD_e765eCPhP99vyokbzpXoKLNZwhIJCi_zg3wfdvWwB8hm3xQz-YJ2hehxvt8gzafx5krwBzkAnf9s3tDfkgnJGKjfMxguzljKVx1js1Nhhj-dBEAhS5Z1NR9FcYN7CiV2",
              text: "Beautiful hotels and smooth transfers. It was our first time in the Middle East and we felt very safe and welcomed."
            }
          ].map((story, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-floating transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <span className="material-symbols-outlined text-7xl font-light">format_quote</span>
              </div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden ring-4 ring-primary/10">
                  <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-text-main">{story.name}</h4>
                  <div className="flex text-yellow-500 mt-1">
                    {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-[16px] filled">star</span>)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg italic leading-relaxed">"{story.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};