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
    <section className="bg-[#0B132B] text-white py-12 px-4 sm:px-8 border-y border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col text-right p-6 rounded-3xl bg-[#1C2541]/40 border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-11 h-11 rounded-2xl bg-[#1C2541] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#C5A880] mt-1">{item.title}</h3>
                <p className="text-xs text-slate-400 font-normal mt-1 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
