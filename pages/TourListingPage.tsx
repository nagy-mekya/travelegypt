import React, { useState, useMemo, useEffect } from 'react';
import { Page } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface TourListingPageProps {
  onNavigate: (page: Page) => void;
}

interface Tour {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  img: string;
  tag: string;
  oldPrice?: number;
  duration: 'hours' | 'day' | 'multiday';
  category: 'Historical' | 'Adventure' | 'Cultural' | 'Cruises';
}

const MOCK_TOURS: Tour[] = [
  { id: 101, title: "Pyramids of Giza & Sphinx Private Tour", price: 45, rating: 4.9, reviews: 1203, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI15tKx2Knf6ZqtbBdchr8CYcaUlZpaHen0mAFVl_iQQadJRJjn8BQqAiEIj7cE7VwkppcEHwqcV00B3-1RydLQkpsyC8GQd2xCYWBgsrmxpazgEHQuIQMJdSQLP1wtFLdGlS34j0RR12PTmkj598f-OvEeVI4rC8hy4Nk6bjOp2X8JeXNbty1v4unAeqGNp_GFvcTcdVi6Aezdvw1tUwoDllEz7PFiZGuCJJOwuO8LO-BWhasS9gXVrPQ_6qHK1Uf-MSJZiQQKGy", tag: "Best Seller", duration: 'day', category: 'Historical' },
  { id: 102, title: "Classic Nile Felucca Sunset Sail", price: 25, rating: 4.7, reviews: 845, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMjHK5k6CerEhFHm_oa6z4xWIRUorENwZL1gkQ_zZviunhRS5nm0K9QiigQjJLiKfVeLk4ff-taW-aEuFvSvCT8uCTYW-lNVXN99lLPb7jJITFw3MjIkol7SWpMUxvZ1WIEEm6Yh5L2qz7GZqRTFZhTKwAxstVdGbuKxEzawlwodDB2AFmZT-hsUHzJpkhLMWU96Q9Qh9wtgqUk3U79evNnFgnY-1ehMsUBZMUuCyo0hceYr3_R0RlorMI_3jWmza2-IhMd9ZnkIpx", tag: "", duration: 'hours', category: 'Adventure' },
  { id: 103, title: "Egyptian Museum & Citadel Tour", price: 60, rating: 4.8, reviews: 562, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9caYuVDq1P0oKeNe8IKJsNTrJC-nZZQg9RSCBs5dDo6DDVEeFZvjBLzSBFytycAQ5Ts72YP7EFpuVLO2qNxM4LFuvinJOXEy-a9ebirLpkerdna6spsj21mLt4jUtHZv8T9T8UarKVPnhQKOLfmaeJx7xdJjP4hNlFU56U0FJ0brvNp185bpO2NHko4dn70QzdcteEWjX58APbnt0N9s-lOxGTbOCzj76S653O6Okc_HsjxxhO1x1HHicHCTY9FfDauLHH6FtaSFz", tag: "-20% Off", oldPrice: 75, duration: 'day', category: 'Historical' },
  { id: 104, title: "Khan el-Khalili Market Walking Tour", price: 30, rating: 4.6, reviews: 320, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpwi5E3NXOGKS_hnDorE1d5Q9RgAZSRMX0LpJByNd8rdslhsYMx9TBtU09pQugrgMFnLxTFjJv8PldW1M8lILuAY0U7OYLPFkttJPAbd42gkVLYIYD4IqC6JI-iykbWO8jQOsl97upV6rQTJ8e9x2T9ju4e0fkYJrnT9JfAw9H4OfMdmo0hqOuR5L-_Z9sxJsaP5TR9AlbRJC3qCDcJWlB29rCytVZs9-PGv8SkRQqSBxox1n5Ywz06L4deAj7tUg4kmEMhoAqtQnx", tag: "", duration: 'hours', category: 'Cultural' },
  { id: 105, title: "Sunset Camel Ride at Giza Pyramids", price: 35, rating: 5.0, reviews: 98, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1xlLFqWwh5NICQWRC32tANKLI07oExs3XEh2R4IYCeYMpXd3CgFr2JlmIxgNmY1yEDpvpSD9ulh3WESB5WR2X_PI8nA8lg-56_6WIrgTweesewZ8gZHNXdSWdD7bW9-VNDzY-dEmulR6qxTi5DHfP6q5NhtOQmtOoQ0v_xFwgcH1aqqhrTTQZpiemaFVZwyVydBX6KpxeGUUkQB6CzNdAa1HIJ-bcYOTKXOLoB-vy7edQcq5ftlsECHkRzEAjmlVBBO3eSbTF8UXY", tag: "Popular", duration: 'hours', category: 'Adventure' },
  { id: 106, title: "Old Cairo & Coptic Churches Tour", price: 40, rating: 4.8, reviews: 210, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDokg2b8Vrg3PfJN47disZoiIeZeVDXUJu0BHH2Ui8MDKXMVlMrlXr3Y83kY9nppe2Z2WziiXVkl34QyIB8vfUnedOgvh55idhR1a0czkuHgAaUZJ-Hjr_l16K5S2vhEzZGChd9HDEk38DdqCnbbdYUIUYRF0F0nYf1MB6fbasAs97sfLBXW7n-oD_OnjJNRfY--R1gaV-bd96fPLYgQ0CBE1_H5Fba1kQiIyQlVORaaawqUw3VT1yeKql5u4uxDztKsRcXMiNvWrOl", tag: "", duration: 'day', category: 'Cultural' },
  { id: 107, title: "Royal Nile River Cruise Experience", price: 550, rating: 5.0, reviews: 45, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZgREyP_ILEdUVYvf-wsP1n0U9VHg0y7LpvB0pRAZdUP3oVPAWh0uNhFV8Z2jOX5vO_UlGaz9nQ1WeoD0Lzm9ZjhaQE9NbhYKZTj9O3rBhW5bBxTYk9mbRgD07Npb3J8IU-JHMDZJWY9AB_nystFqyXEGe8q034N2xB2_VOXDoPNdz9lG7Zb05XGKc7pZwDnyjLZjeXh9UnpINyAVzcrPxOazOVFqNaAO2337Epv_RJ_SnJ1TD_Ch8T9nqtnbQpG6r61wci3Sj2Rl9", tag: "Luxury", duration: 'multiday', category: 'Cruises' },
];

type SortOption = 'Recommended' | 'Price: Low to High' | 'Price: High to Low' | 'Highest Rated';

export const TourListingPage: React.FC<TourListingPageProps> = ({ onNavigate }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  
  // Sorting State
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('Recommended');

  // Filter States
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) newLiked.delete(id);
    else newLiked.add(id);
    setLikedItems(newLiked);
  };

  const handleDurationToggle = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) ? prev.filter(d => d !== duration) : [...prev, duration]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const resetFilters = () => {
    setMaxPrice(1000);
    setSelectedDurations([]);
    setSelectedCategories([]);
  };

  // Memoized filtered and sorted tours
  const processedTours = useMemo(() => {
    let result = MOCK_TOURS.filter(tour => {
      const matchesPrice = tour.price <= maxPrice;
      const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(tour.duration);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tour.category);
      return matchesPrice && matchesDuration && matchesCategory;
    });

    switch (sortBy) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Highest Rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'Recommended' - use initial order or custom logic
        break;
    }

    return result;
  }, [maxPrice, selectedDurations, selectedCategories, sortBy]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between font-bold text-text-main shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tune</span>
              Filters
              {(selectedDurations.length > 0 || selectedCategories.length > 0 || maxPrice < 1000) && (
                <span className="size-2 bg-primary rounded-full ml-1"></span>
              )}
            </span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${showMobileFilters ? 'rotate-180' : ''}`}>expand_more</span>
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`w-full lg:w-72 flex-shrink-0 space-y-6 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-xl text-text-main">Filters</h3>
              <button onClick={resetFilters} className="text-xs font-bold text-primary hover:underline">Reset All</button>
            </div>

            <div className="space-y-10">
              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-text-main uppercase tracking-widest">Max Price</h4>
                  <span className="text-primary font-bold text-lg">${maxPrice}</span>
                </div>
                <div className="px-1 relative h-6 flex items-center">
                  <input 
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" 
                    type="range" 
                    min="20" 
                    max="1000" 
                    step="5"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-text-muted font-bold">
                  <span>$20</span>
                  <span>$1,000+</span>
                </div>
              </div>
              
              {/* Duration */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-text-main uppercase tracking-widest">Duration</h4>
                <div className="space-y-3">
                  {[
                    { id: 'hours', label: 'Up to 4 hours' },
                    { id: 'day', label: 'Full Day' },
                    { id: 'multiday', label: 'Multi-day' }
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          checked={selectedDurations.includes(item.id)}
                          onChange={() => handleDurationToggle(item.id)}
                          className="peer appearance-none w-5 h-5 rounded border-2 border-gray-200 checked:bg-primary checked:border-primary transition-all cursor-pointer" 
                        />
                        <span className="material-symbols-outlined absolute text-white text-[16px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none">check</span>
                      </div>
                      <span className={`text-sm transition-colors ${selectedDurations.includes(item.id) ? 'text-primary font-bold' : 'text-text-muted group-hover:text-text-main'}`}>
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

               {/* Categories */}
               <div className="space-y-4">
                <h4 className="font-bold text-sm text-text-main uppercase tracking-widest">Category</h4>
                <div className="space-y-3">
                  {['Historical', 'Adventure', 'Cultural', 'Cruises'].map((label) => (
                    <label key={label} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          checked={selectedCategories.includes(label)}
                          onChange={() => handleCategoryToggle(label)}
                          className="peer appearance-none w-5 h-5 rounded border-2 border-gray-200 checked:bg-primary checked:border-primary transition-all cursor-pointer" 
                        />
                        <span className="material-symbols-outlined absolute text-white text-[16px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none">check</span>
                      </div>
                      <span className={`text-sm transition-colors ${selectedCategories.includes(label) ? 'text-primary font-bold' : 'text-text-muted group-hover:text-text-main'}`}>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Listings Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 sm:px-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-sm font-bold text-text-main">
              <span className="text-primary mr-1">{processedTours.length}</span> experiences found
            </div>
            
            {/* Custom Advanced Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-text-muted font-medium">Sort by:</span>
                <button 
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl font-bold text-text-main min-w-[180px] transition-colors border border-gray-100"
                >
                  {sortBy}
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isSortDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
              </div>

              <AnimatePresence>
                {isSortDropdownOpen && (
                  <>
                    {/* Backdrop to close */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsSortDropdownOpen(false)}></div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-full sm:w-[220px] bg-white border border-gray-100 shadow-floating rounded-2xl overflow-hidden z-20 p-1"
                    >
                      {(['Recommended', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'] as SortOption[]).map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setIsSortDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                            sortBy === option ? 'bg-primary/10 text-primary' : 'text-text-main hover:bg-gray-50 hover:text-primary'
                          }`}
                        >
                          {option}
                          {sortBy === option && <span className="material-symbols-outlined text-[18px] filled">check_circle</span>}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {processedTours.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {processedTours.map((tour) => (
                  <motion.article 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={tour.id} 
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-floating transition-all duration-500 border border-gray-100 cursor-pointer" 
                    onClick={() => onNavigate('tour-details')}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                      {tour.tag && (
                        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl backdrop-blur-md ${tour.tag.includes('%') || tour.tag === 'Luxury' ? 'bg-primary text-[#181511]' : 'bg-white/90 text-text-main'}`}>
                          {tour.tag}
                        </div>
                      )}
                      <button 
                        onClick={(e) => toggleLike(e, tour.id)}
                        className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all z-10 shadow-sm"
                      >
                        <span className={`material-symbols-outlined text-[22px] ${likedItems.has(tour.id) ? 'filled text-red-500' : ''}`}>favorite</span>
                      </button>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 text-primary text-sm mb-3">
                        <span className="material-symbols-outlined text-[18px] filled">star</span>
                        <span className="font-black">{tour.rating}</span>
                        <span className="text-text-muted font-medium">({tour.reviews})</span>
                        <span className="mx-1 text-gray-300">•</span>
                        <span className="text-text-muted text-xs font-bold uppercase tracking-wide">{tour.category}</span>
                      </div>
                      <h3 className="text-lg font-black text-text-main leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">{tour.title}</h3>
                      
                      <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex flex-col">
                          {tour.oldPrice && <span className="text-xs text-text-muted line-through font-medium">${tour.oldPrice}.00</span>}
                          <div className="flex items-baseline gap-1">
                            {!tour.oldPrice && <span className="text-xs text-text-muted font-bold">From</span>}
                            <span className="text-2xl font-black text-text-main tracking-tight">${tour.price}.00</span>
                          </div>
                        </div>
                        <button className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-[#181511] text-xs font-extrabold rounded-xl transition-all shadow-md active:scale-95">BOOK NOW</button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200"
              >
                <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
                <h3 className="text-xl font-bold text-text-main mb-2">No tours match your filters</h3>
                <p className="text-text-muted mb-8">Try adjusting your filters to discover more experiences.</p>
                <button 
                  onClick={resetFilters}
                  className="bg-primary/10 text-primary font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};