import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'آیا بعد از جراحی به روش محافظتی امکان افتادگی یا تغییر شکل نوک بینی وجود دارد؟',
      answer: 'خیر. در روش رینوپلاستی محافظتی (Preservation)، ساختار پایه‌ای غضروف‌ها با پیوندهای اتولوگ مستحکم و پایدار می‌شود. بر خلاف جراحی‌های فانتزی و سنتی که نوک بینی را با تخریب غضروف بالا می‌کشیدند و پس از چند سال نوک بینی دچار افتادگی می‌شد، در متد دکتر زینالی ساختار استخوانی-غضروفی مانند یک پل معلق مهندسی تثبیت می‌شود تا مادام‌العمر شکل طبیعی خود را حفظ کند.'
    },
    {
      question: 'چرا تامپون‌های نواری دردناک را به طور کامل حذف کرده‌اید و بیمار چگونه نفس می‌کشد؟',
      answer: 'تامپون‌های سنتی به دلیل چسبیدن به بافت متورم داخل بینی، خروج بسیار دردناکی داشتند و تنفس بیمار را برای روزها کاملاً مسدود می‌کردند. ما منحصراً از اسپلینت‌های سیلیکونی بسیار نرم دارای لوله تنفسی فعال استفاده می‌کنیم. به این ترتیب، بیمار بلافاصله پس از به هوش آمدن هوای تازه دریافت می‌کند و کشیدن آن بعد از چند روز طی ۳ ثانیه و کاملاً بدون درد است.'
    },
    {
      question: 'دوره نقاهت و استراحت در منزل دقیقاً چند روز است و چه زمانی می‌توان به کار برگشت؟',
      answer: 'به دلیل استفاده از دستگاه پیزوسرجری اولتراسونیک و عدم وارد آوردن ضربه‌های کوبنده به عروق خونی صورت، میزان کبودی چشم‌ها نزدیک به صفر است. قالب خارجی روی بینی (اسپلینت ترموپلاستیک) در روز هفتم برداشته می‌شود و اکثر مراجعین می‌توانند از روز هشتم به فعالیت‌های شغلی و اجتماعی خود بازگردند. ورزش‌های سنگین از هفته چهارم مجاز است.'
    },
    {
      question: 'آیا افرادی که انحراف شدید تیغه یا پولیپ دارند هم کاندید رینوپلاستی محافظتی هستند؟',
      answer: 'بله، اتفاقاً این دسته از افراد بیشترین سود را از متد دکتر زینالی می‌برند. دکتر وحید زینالی به عنوان جراح متخصص گوش، حلق و بینی ابتدا با اصلاح کامل انحراف تیغه (سپتوپلاستی) و در صورت لزوم کوچک‌سازی شاخک‌ها با رادیوفرکوئنسی، مسیر تنفسی را بازسازی کرده و سپس همزمان فرم بیرونی را هماهنگ می‌سازند.'
    },
    {
      question: 'اگر در جلسه مشاوره حضوری مشخص شود بینی من نیازی به عمل ندارد چه پاسخی می‌شنوم؟',
      answer: 'در مطب دکتر زینالی صداقت آکادمیک اولویت اول است. اگر ساختار بینی شما از نظر تنفسی و تناسب چهره مشکلی نداشته باشد، یا پوست و بافت بینی شرایط لازم برای بهبود را دارا نباشد، صراحتاً و بدون تعارف به شما گفته خواهد شد که انجام جراحی به صلاح سلامتی شما نیست. جلسه مشاوره محلی برای گفتگو و تصمیم‌گیری عاقلانه است، نه ترغیب به عمل.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-white border-b border-[#0B132B]/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>پاسخ صریح و شفاف به ابهامات بالینی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
            پرسش‌های متداول مراجعین پیش از تصمیم‌گیری
          </h2>
          <p className="text-[#5A6578] text-xs sm:text-sm font-light mt-2 leading-relaxed">
            پاسخ‌های دکتر زینالی به رایج‌ترین دغدغه‌های بیمارانی که سال‌ها از جراحی بینی واهمه داشته‌اند.
          </p>
        </div>

        {/* Accordions with rounded-2xl */}
        <div className="space-y-4 text-right">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all bg-[#F8F9FA] shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#0B132B]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-[#8A6D44]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-1 text-xs sm:text-sm text-[#5A6578] font-light leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
