import React from 'react';
import { Activity, Shield, Users, Award } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Activity,
      metric: '۹۸.۴٪',
      title: 'حفظ و ارتقای تنفس آزاد',
      desc: 'سنجش عملکرد دریچه‌ها با تست‌های رینومانومتری بالینی'
    },
    {
      icon: Shield,
      metric: '۱۰۰٪',
      title: 'حذف تامپون‌های نواری کهنه',
      desc: 'تنفس فعال و آرامش کامل از لحظه پایان بیهوشی'
    },
    {
      icon: Award,
      metric: '+۱۵ سال',
      title: 'تدریس و جراحی دانشگاهی',
      desc: 'استادیار رسمی دانشگاه و عضو انجمن راینولوژی ایران'
    },
    {
      icon: Users,
      metric: '۱ مراجع',
      title: 'پذیرش انفرادی در هر بازه',
      desc: 'تضمین خلوت مراجع و مشاوره دقیق ۴۵ دقیقه‌ای'
    }
  ];

  return (
    <section className="bg-[#0B132B] text-white py-6 sm:py-12 px-3 sm:px-8 border-y border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col text-right p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1C2541]/40 border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#1C2541] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shadow-sm shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="text-lg sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#C5A880] mt-0.5 sm:mt-1 leading-snug">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-1 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
