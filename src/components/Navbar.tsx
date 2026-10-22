import React, { useState } from 'react';
import { Calendar, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-nav px-4 sm:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group">
          <div className="w-11 h-11 rounded-2xl bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-white font-bold text-lg group-hover:border-[#C5A880] transition-colors shadow-sm">
            Z
          </div>
          <div className="flex flex-col text-right">
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg text-[#0B132B] tracking-tight leading-tight">
                دکتر وحید زینالی
              </span>
              <span className="text-[10px] text-[#8A6D44] bg-[#C5A880]/15 px-2 py-0.5 rounded-full font-medium">
                نظام: ۱۴۹۹۰۴
              </span>
            </div>
            <span className="text-[11px] text-[#5A6578] font-normal mt-0.5 tracking-wide">
              جراح متخصص گوش، حلق و بینی و پلاستیک چهره
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-[#5A6578]">
          <a href="#philosophy" className="hover:text-[#0B132B] transition-colors whitespace-nowrap">
            فلسفه محافظتی
          </a>
          <a href="#before-after" className="hover:text-[#0B132B] transition-colors whitespace-nowrap">
            نتایج قبل و بعد
          </a>
          <a href="#assessment" className="hover:text-[#0B132B] transition-colors whitespace-nowrap">
            سنجش سلامت تنفس
          </a>
          <a href="#credentials" className="hover:text-[#0B132B] transition-colors whitespace-nowrap">
            سوابق علمی و کلینیک
          </a>
        </nav>

        {/* Zone 3: Primary Action & Phone */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:09124948141"
            className="px-4 py-2.5 rounded-2xl bg-[#F8F9FA] hover:bg-slate-100 text-[#0B132B] border border-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A6D44]" />
            <span>۰۹۱۲۴۹۴۸۱۴۱</span>
          </a>
          <button
            onClick={onBookClick}
            className="px-6 py-3 rounded-2xl bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg border-b-2 border-[#C5A880] flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>درخواست مشاوره حضوری</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:09124948141"
            className="p-2.5 text-[#0B132B] bg-[#F8F9FA] border border-slate-200 rounded-xl flex items-center justify-center"
            title="تماس مستقیم با دکتر زینالی"
          >
            <Phone className="w-4 h-4 text-[#8A6D44]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B132B] hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="منوی ناوبری"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-slate-200 bg-white px-2 space-y-2 rounded-b-2xl shadow-lg">
          <div className="px-4 py-2 bg-[#F8F9FA] rounded-xl flex items-center justify-between text-xs text-[#5A6578]">
            <span>شماره نظام پزشکی:</span>
            <span className="font-bold text-[#0B132B]">۱۴۹۹۰۴</span>
          </div>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-xs font-bold text-[#0B132B] hover:bg-slate-50 rounded-xl"
          >
            فلسفه رینوپلاستی محافظتی
          </a>
          <a
            href="#before-after"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-xs font-bold text-[#0B132B] hover:bg-slate-50 rounded-xl"
          >
            نتایج جراحی (قبل و بعد)
          </a>
          <a
            href="#assessment"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-xs font-bold text-[#0B132B] hover:bg-slate-50 rounded-xl"
          >
            سنجش آنلاین سلامت تنفس
          </a>
          <a
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-xs font-bold text-[#0B132B] hover:bg-slate-50 rounded-xl"
          >
            سوابق علمی و دانشگاهی
          </a>
          <div className="pt-2 space-y-2">
            <a
              href="tel:09124948141"
              className="w-full py-3 bg-[#F8F9FA] border border-slate-200 text-[#0B132B] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#8A6D44]" />
              <span>تماس مستقیم: ۰۹۱۲۴۹۴۸۱۴۱</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 bg-[#0B132B] text-white text-xs font-bold rounded-2xl border-b-2 border-[#C5A880] flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>درخواست مشاوره حضوری</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
