import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface FloatingConciergeProps {
  onBookClick: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onBookClick }) => {
  return (
    <aside className="fixed bottom-3 inset-x-3 sm:inset-x-6 z-40 pointer-events-none">
      <div className="max-w-3xl mx-auto h-16 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0B132B]/15 px-4 sm:px-6 flex items-center justify-between shadow-2xl pointer-events-auto">
        
        {/* Doctor Micro Profile */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#C5A880] shrink-0 bg-[#0B132B] shadow-sm">
            <img
              src="/assets/aistudio/photo_2025-10-21_01-49-55_dc82e9fe.jpg"
              alt="دکتر وحید زینالی"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-[#0B132B]">مشاوره با دکتر وحید زینالی</span>
            <span className="text-[10px] text-[#5A6578]">هماهنگی نوبت پذیرش اختصاصی جردن</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="tel:+982188000000"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0B132B] bg-[#F8F9FA] hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A6D44]" />
            <span className="hidden md:inline font-sans-en">+98 21 8800 0000</span>
            <span className="md:hidden">تماس</span>
          </a>

          <button
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold border-b-2 border-[#C5A880] shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>رزرو نوبت مشاوره</span>
          </button>
        </div>

      </div>
    </aside>
  );
};
