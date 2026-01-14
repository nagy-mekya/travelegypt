import React from 'react';
import { Page } from '../App';

interface BookingFlowPageProps {
  onNavigate: (page: Page) => void;
}

export const BookingFlowPage: React.FC<BookingFlowPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex justify-center py-8 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-[1200px] flex flex-col gap-8">
        {/* Stepper */}
        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
          {['Selection', 'Details'].map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 text-[#897961]">
                <div className="flex items-center justify-center size-6 rounded-full border border-[#897961] text-xs">{i+1}</div>
                <span>{step}</span>
              </div>
              <span className="text-[#897961]">/</span>
            </React.Fragment>
          ))}
          <div className="flex items-center gap-2 text-primary font-bold">
            <div className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">3</div>
            <span>Review & Submit</span>
          </div>
          <span className="text-[#897961]">/</span>
          <div className="flex items-center gap-2 text-[#897961] opacity-60">
            <div className="flex items-center justify-center size-6 rounded-full border border-[#897961] text-xs">4</div>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Review Your Booking</h1>
              <p className="text-[#897961] text-base font-normal">Please take a moment to review your details before final submission.</p>
            </div>

            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h2 className="text-text-main text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span> Guest Information
                </h2>
                <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">edit</span> Edit
                </button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div><span className="text-[#897961] text-sm">Primary Guest</span><div className="text-text-main font-medium">Sarah Jenkins</div></div>
                <div><span className="text-[#897961] text-sm">Email Address</span><div className="text-text-main font-medium">sarah.j@example.com</div></div>
                <div><span className="text-[#897961] text-sm">Phone Number</span><div className="text-text-main font-medium">+1 555 0123</div></div>
                <div><span className="text-[#897961] text-sm">Special Requests</span><div className="text-text-main font-medium">Vegetarian Meal, Late Check-in</div></div>
              </div>
            </section>

            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h2 className="text-text-main text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">credit_card</span> Payment Method
                </h2>
                <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">edit</span> Edit
                </button>
              </div>
              <div className="p-6 flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded border border-gray-200"><span className="material-symbols-outlined">credit_card</span></div>
                <div><p className="text-text-main font-medium">Visa ending in 4242</p><p className="text-[#897961] text-sm">Expires 12/28</p></div>
              </div>
            </section>

            <section className="bg-primary/5 rounded-xl border border-primary/20 p-6 flex gap-4 items-start">
              <div className="shrink-0 bg-primary/20 rounded-full p-2 text-primary"><span className="material-symbols-outlined">info</span></div>
              <div>
                <h3 className="text-text-main font-bold mb-1">Cancellation Policy</h3>
                <p className="text-[#897961] text-sm leading-relaxed">Free cancellation until 48 hours before the trip. If you cancel later, you will be charged 50% of the booking total.</p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
                <div className="h-40 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkeuUxFBElgd4vxHf2XpT4ZUfAH8CnnQ8IXH6BP5DFgvUzQmQcUb1eIAvXQnvhaPp7EhMyFBU2qsGbh1Vg0TmIcEylScLCRPBplwG8lvM1tp6R9hBhTIDvgwN0dq5eDTtobnuywxDh2gQYE8sr9kHtEfU6LUU8il1d59tUuozmQIR7FhlpInF3eEDI9x9rD5skmXMY6qF41VWswHiHoX0ON-NpCJrGSU3V-wZRYLHhUbXOCUNNhMUL134dV699HqVao6lrrb6QLsUz")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-bold text-lg drop-shadow-sm">Luxury Nile Cruise</h3>
                    <p className="text-sm opacity-90 flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Luxor, Egypt</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-3 pb-4 border-b border-gray-200">
                    <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-0.5">calendar_month</span><div><p className="text-text-main font-medium text-sm">Fri, Oct 24 - Sun, Oct 26</p><p className="text-[#897961] text-xs">3 Days, 2 Nights</p></div></div>
                    <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-0.5">group</span><div><p className="text-text-main font-medium text-sm">2 Adults, 1 Child</p><p className="text-[#897961] text-xs">Deluxe River View Suite</p></div></div>
                  </div>
                  <div className="flex flex-col gap-2 pb-4 border-b border-gray-200 text-sm">
                    <div className="flex justify-between"><span className="text-[#897961]">Subtotal</span><span className="text-text-main font-medium">$1,200.00</span></div>
                    <div className="flex justify-between"><span className="text-[#897961]">Taxes & Fees</span><span className="text-text-main font-medium">$150.00</span></div>
                    <div className="flex justify-between text-green-600"><span>Discount (Early Bird)</span><span className="font-medium">-$50.00</span></div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div><span className="text-[#897961] text-sm block">Total Price</span><span className="text-xs text-[#897961]">Includes all taxes</span></div>
                    <span className="text-2xl font-black text-primary tracking-tight">$1,300.00</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-2" onClick={() => onNavigate('dashboard')}>
                    Complete Booking <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};