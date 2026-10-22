import React, { useState, useEffect } from 'react';
import { Calendar, Lock, CheckCircle2, MessageSquare, ArrowLeft, X } from 'lucide-react';

interface ConsultationBookingProps {
  prefilledNotes?: string;
  onClearNotes?: () => void;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({ prefilledNotes, onClearNotes }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [surgeryType, setSurgeryType] = useState('عمل اول (تاکنون جراحی نشده‌ام)');
  const [city, setCity] = useState('');
  const [concern, setConcern] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  useEffect(() => {
    if (prefilledNotes) {
      setConcern(prev => (prev ? `${prev} | نتایج سنجش تنفس: ${prefilledNotes}` : `نتایج سنجش هوشمند تنفس: ${prefilledNotes}`));
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const randomId = 'VZ-' + Math.floor(1000 + Math.random() * 9000);
    setTrackingCode(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setCity('');
    setConcern('');
    if (onClearNotes) onClearNotes();
  };

  return (
    <section id="dialogue-stage" className="py-20 px-4 sm:px-8 bg-[#F8F9FA] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card with rounded-3xl */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#0B132B]/10 shadow-2xl text-right relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="w-14 h-14 rounded-2xl bg-[#0B132B] text-[#C5A880] inline-flex items-center justify-center mb-4 border border-[#C5A880]/30 shadow-md">
              <Calendar className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
              درخواست گفتگوی اختصاصی ۴۵ دقیقه‌ای
            </h2>
            <p className="text-[#5A6578] text-xs sm:text-sm mt-2 font-normal leading-relaxed">
              مشخصات خود را مرقوم فرمایید. دستیار ارشد بالینی دکتر زینالی ظرف کمتر از ۲۴ ساعت جهت هماهنگی ساعت دقیق جلسه با شما تماس حاصل خواهد نمود.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0B132B]">نام و نام خانوادگی گرامی</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="مثال: مریم انصاری"
                  className="px-4 py-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-xs focus:bg-white focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all text-right"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0B132B]">شماره تماس همراه (جهت پیامک و هماهنگی)</label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0912..."
                  className="px-4 py-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-xs focus:bg-white focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all text-left"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0B132B]">نوع و سابقه جراحی مورد نظر</label>
                <select
                  value={surgeryType}
                  onChange={(e) => setSurgeryType(e.target.value)}
                  className="px-4 py-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-xs focus:bg-white focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all text-right"
                >
                  <option>عمل اول (تاکنون جراحی نشده‌ام)</option>
                  <option>جراحی ترمیمی ثانویه (سابقه عمل ناموفق پیشین)</option>
                  <option>مشکل اصلی انسداد تنفسی، انحراف و سینوزیت</option>
                  <option>مشاوره صرفاً جهت آنالیز علمی و بدون تصمیم قطعی</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#0B132B]">شهر یا کشور محل سکونت</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="تهران / سایر استان‌ها / مقیم خارج از ایران"
                  className="px-4 py-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-xs focus:bg-white focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all text-right"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#0B132B]">
                اصلی‌ترین دغدغه یا سؤالی که مایلید با دکتر زینالی مطرح نمایید
              </label>
              <textarea
                rows={3}
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                placeholder="مثلاً: دغدغه حفظ تنفس، ترس از تامپون، پرهیز از قوس عروسکی، یا وضعیت کجی استخوان..."
                className="px-4 py-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-xs focus:bg-white focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all text-right"
              />
            </div>

            {/* Privacy Guarantee Note */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] text-[#5A6578] text-xs flex items-center gap-2.5 border border-[#E2E8F0] font-normal">
              <Lock className="w-4 h-4 text-[#8A6D44] shrink-0" />
              <span>
                اطلاعات شما نزد مطب دکتر وحید زینالی کاملاً محرمانه تلقی شده و هیچ‌گونه تماس بازاریابی یا اصرار به عمل وجود نخواهد داشت.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#0B132B] hover:bg-[#1C2541] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all border-b-2 border-[#C5A880] flex items-center justify-center gap-2"
            >
              <span>ثبت درخواست مشاوره حضوری</span>
              <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
            </button>

          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#0B132B]/20 p-8 max-w-lg w-full text-right shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={handleReset}
              className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </span>
              <div>
                <span className="text-[11px] text-emerald-800 font-bold block">
                  درخواست شما با موفقیت ثبت شد
                </span>
                <h3 className="text-lg font-black text-[#0B132B]">
                  جناب / سرکار خانم {fullName}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#5A6578] font-normal leading-relaxed mb-6">
              پیام و سوابق شما در سامانه پذیرش VIP دکتر وحید زینالی ثبت گردید. دستیار بالینی مطب حداکثر تا پایان وقت اداری فردا با شماره <strong>{phone}</strong> جهت هماهنگی روز و ساعت حضور تماس خواهد گرفت.
            </p>

            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] space-y-2.5 mb-6 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#5A6578]">کد پیگیری اختصاصی پرونده:</span>
                <span className="font-bold text-[#0B132B] text-sm tracking-wider bg-white px-3 py-1 rounded-xl border border-slate-200">
                  {trackingCode}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5A6578]">نوع جلسه:</span>
                <span className="font-bold text-[#0B132B]">مشاوره ۴۵ دقیقه‌ای تک‌نفره</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5A6578]">مکان:</span>
                <span className="font-bold text-[#0B132B]">مطب جردن، ولیعصر تهران</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/989124948141?text=${encodeURIComponent(
                  `با سلام، اینجانب ${fullName} با کد پیگیری ${trackingCode} درخواست مشاوره با دکتر زینالی را ثبت نمودم.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ارتباط مستقیم در واتس‌اپ: ۰۹۱۲۴۹۴۸۱۴۱</span>
              </a>

              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0B132B] text-xs font-bold transition-colors"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
