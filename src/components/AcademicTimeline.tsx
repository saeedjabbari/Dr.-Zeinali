import React from 'react';
import { GraduationCap } from 'lucide-react';

export const AcademicTimeline: React.FC = () => {
  const credentials = [
    {
      year: '۱۴۰۲ - اکنون',
      title: 'استادیار رسمی دانشگاه علوم پزشکی و عضو هیئت ممتحنه',
      subtitle: 'گروه گوش، حلق و بینی و جراحی سر و گردن',
      description: 'آموزش و تربیت رزیدنت‌های تخصصی جراحی و نظارت بر پایان‌نامه‌های دکتری در حوزه پیزوسرجری و راینولوژی نوین.'
    },
    {
      year: '۱۴۰۰ - ۱۴۰۲',
      title: 'پژوهشگر ارشد در زمینه Preservation Rhinoplasty و آناتومی دریچه‌های تنفسی',
      subtitle: 'همکاری با مجامع بین‌المللی جراحی پلاستیک صورت اروپا (EAFPS)',
      description: 'انتشار مقالات داوری شده در ژورنال‌های معتبر ISI درباره حفظ پل بینی طبیعی و کاهش عوارض تنگی نفس ثانویه.'
    },
    {
      year: '۱۳۹۶ - ۱۴۰۰',
      title: 'رتبه برتر آزمون دانشنامه بورد تخصصی جراحی گوش، حلق و بینی',
      subtitle: 'وزارت بهداشت، درمان و آموزش پزشکی',
      description: 'کسب افتخار بورد تخصصی کشوری با درجه عالی و آغاز فعالیت جراحی فوق‌تخصصی در بیمارستان‌های مرجع تهران.'
    },
    {
      year: '۱۳۸۹ - ۱۳۹۶',
      title: 'دکتری عمومی پزشکی با درجه ممتاز',
      subtitle: 'دانشگاه علوم پزشکی شهید بهشتی تهران',
      description: 'فارغ‌التحصیل ممتاز با تمرکز بر بیولوژی ترمیم زخم، گرافت‌های پوستی و غضروفی و اصول اخلاق پزشکی.'
    }
  ];

  return (
    <section id="credentials" className="py-20 px-4 sm:px-8 bg-[#F8F9FA] border-b border-[#0B132B]/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>پشتوانه علمی و هیئت علمی دانشگاه</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
            سوابق علمی، افتخارات دانشگاهی و مقالات بین‌المللی
          </h2>
          <p className="text-[#5A6578] text-xs sm:text-sm font-normal mt-2 leading-relaxed">
            اعتماد شما بر پایه سال‌ها آموزش در بالاترین سطوح دانشگاهی و رعایت دقیق‌ترین پروتکل‌های ایمنی بنا نهاده شده است.
          </p>
        </div>

        {/* Hairline Timeline Axis */}
        <div className="relative pr-6 border-r-2 border-[#0B132B]/15 space-y-8 text-right">
          {credentials.map((item, index) => (
            <div key={index} className="relative group p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow">
              {/* Champagne Nodal Marker */}
              <div className="absolute -right-[34px] top-8 w-4 h-4 rounded-full bg-[#C5A880] ring-4 ring-[#F8F9FA] group-hover:scale-125 transition-transform" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <span className="text-xs font-bold text-[#8A6D44]">
                  {item.year}
                </span>
                <span className="text-[11px] text-[#5A6578] font-normal">
                  {item.subtitle}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0B132B] mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-[#5A6578] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* International Badges strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-[#0B132B]">عضو انجمن راینولوژی اروپا</div>
            <div className="text-[11px] text-[#5A6578] mt-0.5">ERS Member</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-[#0B132B]">انجمن جراحان پلاستیک صورت</div>
            <div className="text-[11px] text-[#5A6578] mt-0.5">EAFPS Delegate</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-[#0B132B]">بورد تخصصی کشوری گوش و حلق</div>
            <div className="text-[11px] text-[#5A6578] mt-0.5">National Board ENT</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-[#0B132B]">سازمان نظام پزشکی ایران</div>
            <div className="text-[11px] text-[#8A6D44] font-bold mt-0.5">شماره نظام: ۱۴۹۹۰۴</div>
          </div>
        </div>

      </div>
    </section>
  );
};
