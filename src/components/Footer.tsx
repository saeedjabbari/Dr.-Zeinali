import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-white/80 text-xs text-right border-t border-[#C5A880]/30 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Doctor Credentials (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#1C2541] border border-[#C5A880] flex items-center justify-center text-white font-bold text-base shadow-sm">
                Z
              </div>
              <div>
                <span className="font-black text-white text-base block">مطب دکتر وحید زینالی</span>
                <span className="text-[#C5A880] text-xs block font-normal">
                  استادیار دانشگاه علوم پزشکی • شماره نظام پزشکی: ۱۴۹۹۰۴
                </span>
              </div>
            </div>

            <p className="text-slate-400 font-normal leading-relaxed mb-6 max-w-md text-xs">
              پایگاه تخصصی رینوپلاستی محافظتی و جراحی بینی بدون تامپون. تعهد به شفافیت کامل، محافظت از دریچه‌های تنفس و پرهیز از الگوهای یک‌شکل و عروسکی.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5A880]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>پذیرش کلیه مراجعین صرفاً به صورت انفرادی و با تعیین وقت قبلی</span>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-wider text-[#C5A880]">
              دسترسی سریع
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  فلسفه رینوپلاستی محافظتی
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  پرونده‌های واقعی قبل و بعد
                </a>
              </li>
              <li>
                <a href="#assessment" className="hover:text-white transition-colors">
                  سنجش آنلاین کاندیداتوری عمل
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition-colors">
                  سوابق و افتخارات دانشگاهی
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Contact & Working Hours (Col 4) */}
          <div className="lg:col-span-4 space-y-3.5 text-xs text-slate-300">
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-wider text-[#C5A880]">
              اطلاعات تماس و موقعیت
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>تهران، خیابان ولیعصر، بالاتر از توانیر، نبش کوچه شمس، ساختمان پزشکان شماره یک</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div className="flex items-center gap-2">
                <span>تلفن همراه و مشاوره مستقیم:</span>
                <a href="tel:09124948141" className="text-white font-bold hover:text-[#C5A880] transition-colors" dir="ltr">
                  ۰۹۱۲۴۹۴۸۱۴۱
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              <span>تلفن مطب: ۰۲۱-۸۸۰۰۰۰۰۰</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>شنبه تا چهارشنبه: ۱۴:۰۰ الی ۲۰:۰۰ (نوبت‌دهی خصوصی)</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Ethics Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-right">
          <div>
            کلیه حقوق این پایگاه متعلق به دکتر وحید زینالی (شماره نظام پزشکی: ۱۴۹۹۰۴) می‌باشد.
          </div>
          <div className="text-slate-400">
            کلینیک آرامش و تناسب چهره دکتر زینالی • ۱۴۰۵
          </div>
        </div>

      </div>
    </footer>
  );
};
