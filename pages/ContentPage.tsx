import React from 'react';
import { Page } from '../App';

interface ContentPageProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

export const ContentPage: React.FC<ContentPageProps> = ({ page, onNavigate }) => {
  const contentMap: Record<string, { title: string; content: React.ReactNode }> = {
    about: {
      title: "About Us",
      content: (
        <>
          <p className="mb-4">TravelEgypt was founded with a simple mission: to share the timeless magic of Egypt with the world. We are a team of passionate historians, local guides, and travel experts dedicated to crafting unforgettable journeys.</p>
          <p className="mb-4">From the bustling streets of Cairo to the serene banks of the Nile in Aswan, we ensure every moment of your trip is filled with wonder, comfort, and authenticity.</p>
          <div className="my-8 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
             <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQcocWskdk7iMEYgZNDSoI4q3l3QTDf7txI3-AQSCj5V9Q8oWb46MlJTGyTCgG9__ejpM3FJwlRJhY80KXUyDTNdUw0QG5p6LZwS_zUUPPUhgcT-xve3eRn1fQ_nDvOTtaj9imAmmingq9m7Ef2yr42zpvXc_xYN-HpJabZr_vEkhO-yTcivisr3YPSqNo7I7GSgAxU5BjCOhTK0_OVHbUZrMO7MxlRY5qoQEdP_GAzk5ZG75bCw1DEBvfzz27BscqMHK2GEdPDVj7")'}}></div>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p>To provide immersive, educational, and sustainable travel experiences that honor Egypt's rich heritage while supporting local communities.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <>
          <p className="mb-4">Welcome to TravelEgypt. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
          <h3 className="text-xl font-bold mb-2">1. Booking & Payments</h3>
          <p className="mb-4">All bookings are subject to availability. A deposit is required to secure your reservation, with full payment due 30 days prior to departure.</p>
          <h3 className="text-xl font-bold mb-2">2. User Conduct</h3>
          <p className="mb-4">You agree to use our platform only for lawful purposes and in a way that does not infringe the rights of others.</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p className="mb-4">Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
          <h3 className="text-xl font-bold mb-2">Data Collection</h3>
          <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a booking, or contact support.</p>
        </>
      )
    },
    careers: {
      title: "Careers",
      content: <p>We are always looking for passionate individuals to join our team. Please send your CV to careers@travelegypt.com.</p>
    },
    press: {
      title: "Press Room",
      content: <p>For media inquiries, please contact press@travelegypt.com. Download our media kit here.</p>
    },
    help: {
      title: "Help Center",
      content: <p>Need assistance? Browse our FAQ or contact our 24/7 support team.</p>
    },
    cancellation: {
      title: "Cancellation Policy",
      content: <p>We understand plans change. Cancel up to 48 hours before your trip for a full refund. Cancellations within 48 hours are subject to a 50% fee.</p>
    },
    sitemap: {
      title: "Sitemap",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><button onClick={() => onNavigate('home')} className="text-primary hover:underline">Home</button></li>
          <li><button onClick={() => onNavigate('tours')} className="text-primary hover:underline">Tours</button></li>
          <li><button onClick={() => onNavigate('destinations')} className="text-primary hover:underline">Destinations</button></li>
          <li><button onClick={() => onNavigate('blog')} className="text-primary hover:underline">Blog</button></li>
          <li><button onClick={() => onNavigate('contact')} className="text-primary hover:underline">Contact</button></li>
        </ul>
      )
    }
  };

  const data = contentMap[page] || { title: "Page Not Found", content: "The content you are looking for does not exist." };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh]">
      <h1 className="text-4xl font-bold text-text-main mb-8 border-b pb-4">{data.title}</h1>
      <div className="prose prose-lg text-gray-600 max-w-none">
        {data.content}
      </div>
    </div>
  );
};