import React from 'react';
import { Sparkles, MapPin, Coffee, Car, Lock } from 'lucide-react';

export const SanctuaryTour: React.FC = () => {
  return (
    <section id="sanctuary" className="py-20 px-4 sm:px-8 bg-white border-b border-[#0B132B]/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-right">
          
          {/* Visual Architecture Showcase (Col 7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#0B132B]/10 shadow-2xl group">
              <img
                src="/src/assets/images/clinic_sanctuary_interior_1792647499641.jpg"
                alt="فضای مشاوره اختصاصی کلینیک دکتر زینالی با نور طبیعی و چوب راش"
                className="w-full aspect-[16/10] object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-sans-en bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  PRIVATE CONSULTATION SANCTUARY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                  سوئیت مشاوره انفرادی با نور طبیعی روز و معماری آرامش‌بخش
                </h3>
              </div>
            </div>
          </div>

          {/* Editorial Content (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>محیط بالینی بازطراحی شده برای آرامش ذهن</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-4">
              فضایی که ضربان قلب و اضطراب شما را مهار می‌کند
            </h2>

            <p className="text-xs sm:text-sm text-[#5A6578] font-light leading-relaxed mb-6">
              بیمارستان‌ها و مطب‌های شلوغ سنتی با بوی تند مواد ضدعفونی‌کننده و همهمه‌ی اتاق انتظار، استرس ناخودآگاه ایجاد می‌کنند. ما فضای کلینیک را بر اساس اصول روان‌شناسی فضا بازطراحی کرده‌ایم تا هر جلسه گفتگو، تجربه‌ای آرام، محترمانه و به دور از تشویش باشد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B] mb-1">
                  <Lock className="w-4 h-4 text-[#8A6D44]" />
                  <span>پذیرش تک‌نفره (VIP)</span>
                </div>
                <p className="text-[11px] text-[#5A6578] font-light">
                  تضمین عدم تلاقی مراجعین و صیانت مطلق از حریم خصوصی
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B] mb-1">
                  <Coffee className="w-4 h-4 text-[#8A6D44]" />
                  <span>پذیرایی ارگانیک</span>
                </div>
                <p className="text-[11px] text-[#5A6578] font-light">
                  دمنوش‌های آرام‌بخش و تهویه با فیلتر هپای پزشکی و رایحه طبیعی
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B] mb-1">
                  <Car className="w-4 h-4 text-[#8A6D44]" />
                  <span>پارکینگ اختصاصی</span>
                </div>
                <p className="text-[11px] text-[#5A6578] font-light">
                  دسترسی راحت از بزرگراه‌های اصلی تهران (حقانی و همت)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B] mb-1">
                  <MapPin className="w-4 h-4 text-[#8A6D44]" />
                  <span>موقعیت مکانی معتبر</span>
                </div>
                <p className="text-[11px] text-[#5A6578] font-light">
                  تهران، خیابان ولیعصر، بالاتر از توانیر، ساختمان پزشکان شماره یک
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
