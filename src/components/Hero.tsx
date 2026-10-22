import React from 'react';
import { ArrowLeft, Clock, ShieldCheck, Wind, MapPin } from 'lucide-react';
import doctorPhoto from '../assets/images/doctor_portrait.jpg';
import clinicInterior from '../assets/images/clinic_sanctuary_interior_1792647499641.jpg';

interface HeroProps {
  onBookClick: () => void;
  onAssessmentClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onAssessmentClick }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8F9FA] to-[#F8F9FA]">
      {/* Delicate background architectural grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#0B132B 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Subtle Pre-Kicker */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B132B]/10 shadow-sm text-xs font-semibold text-[#0B132B]">
            <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
            <span>طبابت انسان‌محور • بدون قالب‌های صنعتی و کلیشه‌ای</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#8A6D44] font-medium">تهران، جردن</span>
          </div>
        </div>

        {/* 2-Column Split: Editorial Prose vs Doctor Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-right">
          
          {/* Editorial Content Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0B132B] leading-[1.3] mb-6 tracking-tight">
              چهره اصیل شما؛
              <span className="block mt-2 text-[#8A6D44] font-medium">
                در اوج توازن و تنفس آزاد
              </span>
            </h1>

            <p className="text-[#5A6578] text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
              «جراحی بینی مسابقه باریک‌کردن استخوان نیست؛ بازگرداندن توازن زیستی و حس رهایی به تنفس شماست. در مطب دکتر زینالی، سلامت عملکردی بینی بر هرگونه مد زودگذر ارجحیت دارد.»
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 rounded-2xl bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all border-b-2 border-[#C5A880] flex items-center gap-2"
              >
                <span>درخواست مشاوره ۴۵ دقیقه‌ای</span>
                <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
              </button>
              
              <button
                onClick={onAssessmentClick}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#0B132B] border border-[#0B132B]/15 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 hover:border-[#C5A880] shadow-sm"
              >
                <Wind className="w-4 h-4 text-[#8A6D44]" />
                <span>سنجش آنلاین کاندیداتوری و تنفس</span>
              </button>
            </div>

            {/* Micro Quantitative Trust Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#0B132B]/10">
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] text-[#0B132B] flex items-center justify-center shrink-0 border border-slate-100">
                  <Clock className="w-5 h-5 text-[#8A6D44]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">۴۵ دقیقه مستقیم</div>
                  <div className="text-[11px] text-[#5A6578] font-normal mt-0.5">گفتگوی بی‌واسطه با جراح</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] text-[#0B132B] flex items-center justify-center shrink-0 border border-slate-100">
                  <Wind className="w-5 h-5 text-[#8A6D44]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">بدون تامپون دردناک</div>
                  <div className="text-[11px] text-[#5A6578] font-normal mt-0.5">سیلیکون تنفسی راهبُر</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] text-[#0B132B] flex items-center justify-center shrink-0 border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#8A6D44]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">تکنیک محافظتی</div>
                  <div className="text-[11px] text-[#5A6578] font-normal mt-0.5">پیزوسرجری بدون ضربه</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Carrier: Doctor Authentic Portrait (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-4 rounded-3xl border border-[#0B132B]/10 shadow-2xl overflow-hidden group">
              
              {/* Main Photo Frame */}
              <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-[#0B132B]">
                <img
                  src={doctorPhoto}
                  alt="دکتر وحید زینالی - جراح متخصص گوش، حلق و بینی و سر و گردن"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim for WCAG AA compliance */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/95 via-[#0B132B]/20 to-transparent"></div>
                
                {/* Overlay Doctor Identity */}
                <div className="absolute bottom-5 right-5 left-5 text-white text-right">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] tracking-wide bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-[#C5A880] font-medium">
                      جراح پلاستیک صورت • نظام: ۱۴۹۹۰۴
                    </span>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      پذیرش فعال در تهران
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    دکتر وحید زینالی
                  </h2>
                  <p className="text-xs text-slate-300 font-normal mt-1">
                    استادیار دانشگاه علوم پزشکی • پیشگام رینوپلاستی محافظتی (Preservation)
                  </p>
                </div>
              </div>

              {/* Clinic Sanctuary Preview Drawer */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] flex items-center gap-3.5 text-right hover:bg-white transition-colors">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  <img
                    src={clinicInterior}
                    alt="فضای کلینیک آرام دکتر زینالی"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[#0B132B] text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#8A6D44]" />
                    <span className="truncate">مطب اختصاصی جردن، ولیعصر</span>
                  </div>
                  <p className="text-[11px] text-[#5A6578] font-normal mt-0.5 truncate">
                    رزرو وقت تک‌نفره، بدون اتلاف وقت و ازدحام
                  </p>
                </div>
                <a
                  href="#sanctuary"
                  className="text-xs font-bold text-[#8A6D44] hover:text-[#0B132B] px-3.5 py-2 rounded-xl bg-white border border-slate-200 shrink-0 shadow-sm"
                >
                  مشاهده فضا
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
