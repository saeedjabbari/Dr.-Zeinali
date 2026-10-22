import React, { useState } from 'react';
import { Check, X, Shield, Cpu, Wind } from 'lucide-react';

export const PreservationPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preservation' | 'piezo' | 'tamponless'>('preservation');

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-8 bg-white border-b border-[#0B132B]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            <span>رویکرد نوین و بدون تخریب بافت</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B132B] tracking-tight">
            رینوپلاستی محافظتی (Preservation Rhinoplasty) چیست؟
          </h2>
          <p className="text-[#5A6578] text-sm sm:text-base font-light mt-3 leading-relaxed">
            تفاوت اصلی جراحی مدرن در این است که به جای قطع‌کردن استخوان و غضروف، ساختار طبیعی بینی به آرامی در جایگاه آناتومیک ایده‌آل هدایت می‌شود تا خطوط طبیعی چهره و دریچه‌های تنفس کاملاً دست‌نخورده بمانند.
          </p>

          {/* Interactive Feature Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] max-w-xl mx-auto shadow-sm">
            <button
              onClick={() => setActiveTab('preservation')}
              className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'preservation'
                  ? 'bg-[#0B132B] text-white shadow-md border-b-2 border-[#C5A880]'
                  : 'text-[#5A6578] hover:text-[#0B132B]'
              }`}
            >
              اصول رینوپلاستی محافظتی
            </button>
            <button
              onClick={() => setActiveTab('piezo')}
              className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'piezo'
                  ? 'bg-[#0B132B] text-white shadow-md border-b-2 border-[#C5A880]'
                  : 'text-[#5A6578] hover:text-[#0B132B]'
              }`}
            >
              فناوری پیزوسرجری اولتراسونیک
            </button>
            <button
              onClick={() => setActiveTab('tamponless')}
              className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'tamponless'
                  ? 'bg-[#0B132B] text-white shadow-md border-b-2 border-[#C5A880]'
                  : 'text-[#5A6578] hover:text-[#0B132B]'
              }`}
            >
              تجربه عمل بدون تامپون
            </button>
          </div>
        </div>

        {/* Tab 1: Preservation Comparison */}
        {activeTab === 'preservation' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Modern Approach Card */}
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border-2 border-[#0B132B] shadow-lg flex flex-col justify-between text-right relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#0B132B] text-[#C5A880] text-[10px] font-bold px-4 py-1.5 uppercase tracking-wider font-sans-en rounded-br-xl">
                Advanced Preservation Standard
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h3 className="text-xl font-black text-[#0B132B]">
                    رینوپلاستی محافظتی در کلینیک دکتر زینالی
                  </h3>
                </div>
                <p className="text-xs text-[#5A6578] leading-relaxed mb-6">
                  بر مبنای فلسفه حفظ اسکلت طبیعی (Dorsum Preservation)؛ در این متد به جای شکستن سقف استخوانی، پایه‌های بینی از زیر تنظیم و پایین کشیده می‌شوند.
                </p>

                <ul className="space-y-3.5 text-xs text-[#0B132B]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>حفظ خطوط طبیعی پل بینی:</strong> عدم ایجاد فرورفتگی، ناهمواری یا حالت پله‌ای با گذشت زمان</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>عدم آسیب به دریچه داخلی تنفس (Internal Valve):</strong> تضمین ۹۸٪ تنفس بی‌صدا و آزاد بعد از نقاهت</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>کاهش تورم و کبودی تا ۶۰٪:</strong> به دلیل حفظ عروق لنفاوی و بافت‌های نرم زیرپوستی</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>نتیجه طبیعی و ماندگار مادام‌العمر:</strong> جلوگیری از کلاپس و بدفرمی نوک بینی در سنین بالاتر</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] text-[#8A6D44] font-bold flex items-center justify-between">
                <span>تکنیک برگزیده مجامع راینولوژی آلمان و فرانسه</span>
                <span className="font-sans-en">Pushdown & Letdown Tech</span>
              </div>
            </div>

            {/* Conventional Traditional Surgery Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between text-right opacity-85">
              <div>
                <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wide mb-2">
                  روش سنتی منسوخ شده (Structural Reduction)
                </div>
                <h3 className="text-lg font-bold text-[#0B132B] mb-3">
                  تکنیک‌های تهاجمی سنتی (برش و شکستن استخوان)
                </h3>
                <p className="text-xs text-[#5A6578] leading-relaxed mb-6">
                  روش‌هایی که طی دهه‌های گذشته به کار می‌رفتند و ساختار بینی را برای کوچک کردن بیش از حد تخریب می‌کردند.
                </p>

                <ul className="space-y-3.5 text-xs text-[#5A6578]">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>برش و سوهان‌کشی شدید استخوان که اغلب منجر به نامنظمی‌های قابل لمس روی تیغه می‌شود</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>آسیب به ساختار دریچه‌ها و ایجاد تنگی نفس، خروپف و صدای تو دماغی پس از جراحی</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>کبودی شدید زیر چشم‌ها و دوره نقاهت طولانی به علت ضربه‌های قلم و چکش جراحی</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>خطر افتادگی نوک بینی و نیاز به جراحی‌های ترمیمی مکرر در سال‌های بعد</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] text-slate-400">
                منسوخ در مراکز مدرن جراحی پلاستیک جهان
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Piezosurgery Technology */}
        {activeTab === 'piezo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-right">
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#0B132B]/10 shadow-xl">
              <img
                src="/src/assets/images/surgical_piezo_technology_1792647499977.jpg"
                alt="تجهیزات پیزوسرجری اولتراسونیک کلینیک دکتر زینالی"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] w-fit shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                <span>دقت میکرومتری با امواج اولتراسونیک</span>
              </div>
              <h3 className="text-2xl font-black text-[#0B132B]">
                پیزوسرجری: پایان دوران ضربه با چکش به استخوان بینی
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6578] font-light leading-relaxed">
                دستگاه پیزوسرجری با نوسانات فراصوت (امواج اولتراسونیک) با فرکانس کنترل‌شده کار می‌کند. ویژگی منحصربه‌فرد این فناوری این است که <strong>تنها بر بافت سخت استخوانی اثر می‌گذارد</strong> و در برخورد با پوست، مخاط، عصب و رگ‌های خونی هیچ برشی ایجاد نمی‌کند.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-bold text-[#0B132B]">صفر درصد خونریزی بافت نرم</div>
                  <p className="text-[11px] text-[#5A6578] mt-1 font-light">عدم پارگی عروق خونی مخاط داخلی</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm">
                  <div className="text-xs font-bold text-[#0B132B]">تراش بی‌نهایت ظریف</div>
                  <p className="text-[11px] text-[#5A6578] mt-1 font-light">اصلاح خط تقارن با خطای کمتر از ۰.۱ میلیمتر</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tampon-less Experience */}
        {activeTab === 'tamponless' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-right">
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-lg flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#8A6D44] w-fit shadow-sm">
                <Wind className="w-3.5 h-3.5" />
                <span>تنفس راحت و بدون ترس</span>
              </div>
              <h3 className="text-2xl font-black text-[#0B132B]">
                چرا دیگر نباید از کشیدن تامپون بترسید؟
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6578] font-light leading-relaxed">
                بزرگترین خاطره منفی اطرافیان شما از جراحی بینی، گازهای پارچه‌ای متری (تامپون) بود که مخاط بینی به آن می‌چسبید و خارج کردن آن درد طاقت‌فرسایی داشت. در مطب دکتر وحید زینالی این روش کاملاً متوقف شده است.
              </p>
              <div className="space-y-3.5 text-xs text-[#0B132B]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>اسپلینت‌های سیلیکونی پزشکی دارای کانال هوایی:</strong> بیمار بلافاصله پس از به هوش آمدن از طریق بینی نفس می‌کشد.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>سطح صیقلی نچسب:</strong> بدون هیچ‌گونه چسبندگی به مخاط و خروج ظرف ۲ ثانیه بدون کوچک‌ترین احساس درد.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>پیشگیری از خشکی گلو و سردرد:</strong> عدم نیاز به تنفس اجباری دهانی در طول هفته اول.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0B132B] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-sans-en">
                  CLINICAL COMMITMENT
                </span>
                <h4 className="text-lg font-bold text-white mt-2 mb-3">
                  تعهد مکتوب کلینیک به سلامت تنفس
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  ما پیش از ورود به اتاق عمل، با بررسی سی‌تی‌اسکن ۳بعدی و تست جریان هوایی، تضمین می‌کنیم که عملکرد تنفسی شما پس از جراحی دست‌نخورده باقی بماند یا بهبود یابد.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#C5A880] flex items-center justify-between">
                <span>اولویت مطلق با عملکرد تنفسی</span>
                <Shield className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
