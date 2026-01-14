import React from 'react';
import { Page } from '../App';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-text-main mb-8">Travel Journal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "10 Tips for Visiting the Pyramids", date: "Oct 12, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-O4xY0ltYKv0mqfDQJP4t3PFz05orcoehpgncxNseb4qWFEdFaZScROTT0bQjwjDPsKNCsWPps1uKkXE-zCvAmdSJgZ48Y3Zp9LKPgeEsors1E3yMkDLG9BgAo85kA_D58xktTd2mNllChsFEO7SGfQuGrvjtu0b7jH0AClwqkeurFqJ0IQNPCkkAWnb4Q3qLZzNhX8F8faH3AjrAusNX-v-9ax-Hl5cPf34FDvnbesqwmhVX6PjwXTHYkYY7Z-sGGhqfolh5dZQ" },
          { title: "Best Time to Cruise the Nile", date: "Sep 28, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZgREyP_ILEdUVYvf-wsP1n0U9VHg0y7LpvB0pRAZdUP3oVPAWh0uNhFV8Z2jOX5vO_UlGaz9nQ1WeoD0Lzm9ZjhaQE9NbhYKZTj9O3rBhW5bBxTYk9mbRgD07Npb3J8IU-JHMDZJWY9AB_nystFqyXEGe8q034N2xB2_VOXDoPNdz9lG7Zb05XGKc7pZwDnyjLZjeXh9UnpINyAVzcrPxOazOVFqNaAO2337Epv_RJ_SnJ1TD_Ch8T9nqtnbQpG6r61wci3Sj2Rl9" },
          { title: "Egyptian Food Guide: What to Eat", date: "Sep 15, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpwi5E3NXOGKS_hnDorE1d5Q9RgAZSRMX0LpJByNd8rdslhsYMx9TBtU09pQugrgMFnLxTFjJv8PldW1M8lILuAY0U7OYLPFkttJPAbd42gkVLYIYD4IqC6JI-iykbWO8jQOsl97upV6rQTJ8e9x2T9ju4e0fkYJrnT9JfAw9H4OfMdmo0hqOuR5L-_Z9sxJsaP5TR9AlbRJC3qCDcJWlB29rCytVZs9-PGv8SkRQqSBxox1n5Ywz06L4deAj7tUg4kmEMhoAqtQnx" }
        ].map((post, i) => (
          <article 
            key={i} 
            onClick={() => onNavigate('blog-post')}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">Travel Guide</span>
              <h2 className="text-xl font-bold text-text-main mb-2 hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{post.date}</span>
                <button className="text-sm font-bold text-primary hover:underline">Read More</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};