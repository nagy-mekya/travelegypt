import React from 'react';
import { Page } from '../App';

interface BlogPostPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="h-[400px] w-full relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG-O4xY0ltYKv0mqfDQJP4t3PFz05orcoehpgncxNseb4qWFEdFaZScROTT0bQjwjDPsKNCsWPps1uKkXE-zCvAmdSJgZ48Y3Zp9LKPgeEsors1E3yMkDLG9BgAo85kA_D58xktTd2mNllChsFEO7SGfQuGrvjtu0b7jH0AClwqkeurFqJ0IQNPCkkAWnb4Q3qLZzNhX8F8faH3AjrAusNX-v-9ax-Hl5cPf34FDvnbesqwmhVX6PjwXTHYkYY7Z-sGGhqfolh5dZQ")'}}></div>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-16 text-white">
          <div className="max-w-4xl mx-auto w-full">
            <span className="bg-primary text-black font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 inline-block">Travel Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">10 Tips for Visiting the Pyramids</h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>Oct 12, 2023</span>
              <span>•</span>
              <span>By Sarah Jenkins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div className="prose prose-lg text-gray-600">
          <p className="lead text-xl font-medium text-text-main mb-6">Visiting the Great Pyramids of Giza is a bucket-list experience for many. Here is everything you need to know to make your trip unforgettable.</p>
          
          <h3 className="text-2xl font-bold text-text-main mt-8 mb-4">1. Go Early</h3>
          <p>The site opens at 8:00 AM. Arriving early means you beat the tour bus crowds and the midday heat. The light is also much better for photography in the morning.</p>
          
          <h3 className="text-2xl font-bold text-text-main mt-8 mb-4">2. Wear Comfortable Shoes</h3>
          <p>The Giza Plateau is sandy and rocky. You will be doing a lot of walking, so leave the sandals at the hotel and wear sturdy closed-toe shoes.</p>
          
          <h3 className="text-2xl font-bold text-text-main mt-8 mb-4">3. Bring Water and Hat</h3>
          <p>There is very little shade around the pyramids. Even in winter, the sun can be intense. Always carry a bottle of water and wear a hat to protect yourself.</p>
          
          <div className="my-8">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1xlLFqWwh5NICQWRC32tANKLI07oExs3XEh2R4IYCeYMpXd3CgFr2JlmIxgNmY1yEDpvpSD9ulh3WESB5WR2X_PI8nA8lg-56_6WIrgTweesewZ8gZHNXdSWdD7bW9-VNDzY-dEmulR6qxTi5DHfP6q5NhtOQmtOoQ0v_xFwgcH1aqqhrTTQZpiemaFVZwyVydBX6KpxeGUUkQB6CzNdAa1HIJ-bcYOTKXOLoB-vy7edQcq5ftlsECHkRzEAjmlVBBO3eSbTF8UXY" className="w-full rounded-xl" alt="Camel at Pyramids" />
             <p className="text-sm text-center mt-2 text-gray-400">Camel rides offer a classic view of the pyramids.</p>
          </div>

          <h3 className="text-2xl font-bold text-text-main mt-8 mb-4">4. Hire a Guide</h3>
          <p>While you can visit on your own, having a knowledgeable Egyptologist guide adds so much depth to the experience. They can explain the history and help you navigate the site.</p>

          <p className="mt-8">Ready to explore? Check out our <button onClick={() => onNavigate('tours')} className="text-primary font-bold hover:underline">Private Giza Pyramids Tour</button>.</p>
        </div>

        <aside className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h4 className="font-bold text-lg mb-4">Related Tours</h4>
            <div className="space-y-4">
               <div onClick={() => onNavigate('tour-details')} className="group cursor-pointer flex gap-3">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-O4xY0ltYKv0mqfDQJP4t3PFz05orcoehpgncxNseb4qWFEdFaZScROTT0bQjwjDPsKNCsWPps1uKkXE-zCvAmdSJgZ48Y3Zp9LKPgeEsors1E3yMkDLG9BgAo85kA_D58xktTd2mNllChsFEO7SGfQuGrvjtu0b7jH0AClwqkeurFqJ0IQNPCkkAWnb4Q3qLZzNhX8F8faH3AjrAusNX-v-9ax-Hl5cPf34FDvnbesqwmhVX6PjwXTHYkYY7Z-sGGhqfolh5dZQ" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm leading-tight group-hover:text-primary">Giza Pyramids & Sphinx</h5>
                    <p className="text-xs text-gray-500 mt-1">From $45</p>
                  </div>
               </div>
               <div onClick={() => onNavigate('tour-details')} className="group cursor-pointer flex gap-3">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9caYuVDq1P0oKeNe8IKJsNTrJC-nZZQg9RSCBs5dDo6DDVEeFZvjBLzSBFytycAQ5Ts72YP7EFpuVLO2qNxM4LFuvinJOXEy-a9ebirLpkerdna6spsj21mLt4jUtHZv8T9T8UarKVPnhQKOLfmaeJx7xdJjP4hNlFU56U0FJ0brvNp185bpO2NHko4dn70QzdcteEWjX58APbnt0N9s-lOxGTbOCzj76S653O6Okc_HsjxxhO1x1HHicHCTY9FfDauLHH6FtaSFz" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm leading-tight group-hover:text-primary">Museum & Citadel</h5>
                    <p className="text-xs text-gray-500 mt-1">From $60</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
            <h4 className="font-bold text-lg mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-4">Our travel experts are ready to assist you in planning your dream trip.</p>
            <button onClick={() => onNavigate('contact')} className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors">Contact Us</button>
          </div>
        </aside>
      </div>
    </div>
  );
};