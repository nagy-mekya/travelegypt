import React from 'react';
import { Page } from '../App';

interface TourDetailsPageProps {
  onNavigate: (page: Page) => void;
}

export const TourDetailsPage: React.FC<TourDetailsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-[#897961] mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <button onClick={() => onNavigate('destinations')} className="hover:text-primary transition-colors">Egypt</button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <button onClick={() => onNavigate('destinations')} className="hover:text-primary transition-colors">Cairo</button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-text-main font-medium">Giza Pyramids & Sphinx</span>
      </nav>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[480px] rounded-2xl overflow-hidden mb-8">
        <div className="md:col-span-2 h-full bg-gray-200 relative group cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5UyMCslivlkXT_9NsqCdvUJ9whJQeTvJfamBDsjQ01080pfqc8wuZiI3cWUrhbs7zeuVgPEmLrCKIJ066uUouEizulQ3Dva8JZ4DhNlQ4c1qP6phqzFegZ5ga1q3QGJc_keEwl1jIDvLzjV10mghjZXFsAtvHsn6RUl9MsoXkU52Bjn7xiUyKkTBeyyjx9HlJFInbd2doxIy-ugz5hqqF6jOIv9F-kT_phnKPTXIGl5Jqd_JT1_F-prrqk6TJrZA97KkkUSGlXgmd")'}}></div>
        </div>
        <div className="hidden md:flex md:col-span-1 flex-col gap-2 h-full">
          <div className="flex-1 bg-gray-200 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzjrtvUu7Q-FZ3fEEUkmZtuON3nSo3xUCcC6U7AhnEU1dr33MPZ1RQeCgYMSM71qdM_EQd0xR5KLlNDSkEOtaDkBc_t0VhW6glG6MR43hOlKWAM0jGtlDr1r1a9nqr_MdPTIDhuevfDc73i5Lxod1NdzNg_JjtMgMrF1uFpPX4wqoNM70_Imlt9WEdAy-5Vz18f4LkVHGyf-V8EfGdvXvTNn48vu1yl3QxQMvPA6yMDJMpO-Xw6EdnZ90WTAHTLHdNzOLqcvUl8zBc")'}}></div>
          </div>
          <div className="flex-1 bg-gray-200 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7mcyBogQhEtoeFRMOrEEGHZHvNJ7nd8xyWuuo7ybVBN9MJYerHdpYSENWVfEt8Okriy2tNEXlbJdRExLwbYr7Y827DmO4KZdYmcvkU01DskR29S7LYSxMHynnXPIhqn9nQPmUTYbh7hEo4nFkiKIxVFzUsDtRfyM2S2HfcFKLTXuvFdueorU2d8nI04BD7iLTd9lYkSArN5ucJPBgf1RvYXHDNMFlMWsadklf8yRrtHee1iUf-68GIvAB8NxegYPltZPxy4g834bu")'}}></div>
          </div>
        </div>
        <div className="hidden md:flex md:col-span-1 flex-col gap-2 h-full">
          <div className="flex-1 bg-gray-200 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNzpoR7NjpqBmVw0Kb-12mlnuVFJWRyngKLZEirmpFTgRhElQndTl4K69dSDxgXFXgaamKt-35lkWA4FQESOzwrmjj2RZP_RDGacJODGdwRM8hs-Z2UwB0bkzf1scIuQpitQXERg3vvATY3SZzzY_l4eqx_AQrCeUOFh2wAwpcsOae4kx0Ud_VwbvftZJcj6kRKEbBJh5n0hXYfvAspDVR5pBiBER9QUu8eKVY3f0Y4gORPaASba0aEv5OvnMvIzGVrUjD8tgT5KIh")'}}></div>
          </div>
          <div className="flex-1 bg-gray-200 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuFEJJCfwusUJ-AKf2OZKnFgJIlW9Oga2loWMrWbh5RXvBMPblo9q9fRJ0KSiVrXe_DyROo3stBELVuTbJYnbEsGbbpoNivYmfLhycU8iB26jQBjaeixkKWEz2UHMF57aBS8Olclw5wxay4xdu73rE09oaLu1hPil1t9pPRZgZA_KueGQrjrhYjxs40BMtwtH6MffWVMGrQE0noWjaph46Fg2Iqc6J5IS65DJMk-j2etpXgKR8Y7HjL418OHOysBvTI5_BJtYO4i0r")'}}></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <span className="text-white font-bold text-lg underline decoration-primary decoration-2 underline-offset-4">View All Photos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <div className="border-b border-[#f4f3f0] pb-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-text-main mb-4">Giza Pyramids & Sphinx Half-Day Tour</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#897961]">
              <div className="flex items-center gap-1 text-text-main font-bold">
                <span className="material-symbols-outlined text-primary text-[20px] filled">star</span>
                <span>4.9</span>
                <span className="text-[#897961] font-normal underline decoration-1 underline-offset-2 ml-1 cursor-pointer">(250 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                <span>Giza, Egypt</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[20px]">translate</span>
                <span>English, Arabic, French</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'schedule', label: 'Duration', val: '4-5 Hours' },
              { icon: 'group', label: 'Group Size', val: 'Max 15' },
              { icon: 'airport_shuttle', label: 'Pickup', val: 'Included' },
              { icon: 'confirmation_number', label: 'Ticket', val: 'Mobile' }
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white border border-[#f4f3f0] rounded-xl">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-[#897961] font-medium uppercase tracking-wide">{f.label}</p>
                  <p className="text-sm font-bold text-text-main">{f.val}</p>
                </div>
              </div>
            ))}
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-main">Overview</h2>
            <div className="prose max-w-none text-[#555]">
              <p className="mb-4">
                Immerse yourself in the ancient wonders of Egypt on this comprehensive half-day tour of the Giza Plateau. Accompanied by an expert Egyptologist guide, you'll stand in awe before the Great Pyramid of Cheops, the only surviving wonder of the ancient world.
              </p>
              <p>
                Capture panoramic photos from the desert plateau, get up close to the enigmatic Sphinx, and learn about the mummification process at the Valley Temple. This tour includes comfortable air-conditioned transport from your Cairo or Giza hotel, ensuring a hassle-free experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-text-main">Itinerary</h2>
            <div className="relative pl-4 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
              {[
                { title: "Hotel Pickup", time: "8:00 AM", desc: "Your private guide will meet you at your hotel lobby in Cairo or Giza with a modern air-conditioned vehicle." },
                { title: "The Great Pyramids", time: "9:00 AM - 11:00 AM", desc: "Visit the Pyramids of Cheops, Chephren, and Mykerinus. Option to enter the Great Pyramid (extra ticket required)." },
                { title: "Panorama View & Camel Ride", time: "11:00 AM - 11:45 AM", desc: "Head to the panoramic point for the best photos of all three pyramids together. Optional 15-minute camel ride." },
                { title: "The Sphinx & Valley Temple", time: "12:00 PM - 1:00 PM", desc: "Explore the Valley Temple where kings were mummified and see the Great Sphinx face-to-face." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 size-6 rounded-full border-4 border-white bg-primary shadow-sm z-10"></div>
                  <h3 className="font-bold text-lg text-text-main mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sticky Sidebar */}
        <div className="relative">
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#f4f3f0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-sm text-gray-500 mb-1">From</span>
                <span className="text-3xl font-bold text-text-main">$45</span>
                <span className="text-sm text-gray-500 mb-1">/ person</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Free Cancellation</span>
                <span className="text-xs text-gray-400">Up to 24h in advance</span>
              </div>

              <form className="flex flex-col gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-[#897961] tracking-wide">Select Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">calendar_month</span>
                    <input type="date" className="w-full bg-[#f8f7f6] border-none rounded-lg py-3 pl-10 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/50 text-text-main" defaultValue="2023-11-24" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-[#897961] tracking-wide">Guests</label>
                  <div className="bg-[#f8f7f6] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-main">Adults</span>
                      <span className="text-xs text-gray-500">Age 12+</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" className="size-8 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-gray-100 shadow-sm">-</button>
                      <span className="text-sm font-bold w-4 text-center">2</span>
                      <button type="button" className="size-8 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-100 shadow-sm">+</button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-300 my-2 pt-4">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-gray-600">$45 x 2 Adults</span>
                    <span className="font-bold text-text-main">$90</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-text-main">Total</span>
                    <span className="text-xl font-bold text-primary">$90</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => onNavigate('booking')}
                  className="w-full bg-primary hover:bg-primary/90 text-[#181511] font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Book Now
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};