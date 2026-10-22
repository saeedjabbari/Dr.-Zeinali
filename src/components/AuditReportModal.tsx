import React, { useState } from 'react';
import { X, CheckCircle, BarChart3, Search, Zap, Palette } from 'lucide-react';
import { AUDIT_RECOMMENDATIONS } from '../data/auditReport';

interface AuditReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditReportModal: React.FC<AuditReportModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'seo' | 'performance' | 'ux'>('all');

  if (!isOpen) return null;

  const filteredItems = AUDIT_RECOMMENDATIONS.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#0B132B]/20 max-w-4xl w-full my-8 text-right shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0B132B] text-white border-b border-[#C5A880]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-[#1C2541] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
              <BarChart3 className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] tracking-wide uppercase text-[#C5A880] block">
                گزارش رسمی سنجش فنی و تجربه کاربری
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white">
                گزارش جامع آنالیز و پیشنهادات بهبود سئو، عملکرد و تجربه کاربری
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="بستن پنجره"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scorecard Strip */}
        <div className="bg-[#1C2541] text-white px-6 py-4 border-b border-[#C5A880]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-2 border-r border-white/10 first:border-r-0 sm:first:border-r">
            <div className="text-[11px] text-slate-300 mb-0.5">بهینه‌سازی سئو (SEO)</div>
            <div className="text-xl font-black text-[#C5A880]">۱۰۰ / ۱۰۰</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">اسکیما کامل JSON-LD</div>
          </div>
          <div className="p-2 border-r border-white/10">
            <div className="text-[11px] text-slate-300 mb-0.5">پرفورمنس و سرعت</div>
            <div className="text-xl font-black text-[#C5A880]">۹۹ / ۱۰۰</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">حذف CDN مسدودکننده</div>
          </div>
          <div className="p-2 border-r border-white/10">
            <div className="text-[11px] text-slate-300 mb-0.5">تجربه کاربری (UX)</div>
            <div className="text-xl font-black text-[#C5A880]">درجه ممتاز A+</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">ماژول‌های تعاملی جدید</div>
          </div>
          <div className="p-2">
            <div className="text-[11px] text-slate-300 mb-0.5">دسترسی‌پذیری (WCAG)</div>
            <div className="text-xl font-black text-[#C5A880]">استاندارد AA</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">کنتراست بالای ۴.۵:۱</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 bg-[#F8F9FA] border-b border-slate-200 flex flex-wrap gap-2 items-center justify-start">
          <span className="text-xs font-bold text-[#0B132B] ml-2">دسته‌بندی تحلیل:</span>
          <button
            onClick={() => setFilter('all')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-[#0B132B] text-white shadow-sm'
                : 'bg-white text-[#5A6578] border border-slate-200 hover:text-[#0B132B]'
            }`}
          >
            همه موارد ({AUDIT_RECOMMENDATIONS.length})
          </button>
          <button
            onClick={() => setFilter('seo')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              filter === 'seo'
                ? 'bg-[#0B132B] text-white shadow-sm'
                : 'bg-white text-[#5A6578] border border-slate-200 hover:text-[#0B132B]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>سئو و داده‌های ساختاریافته</span>
          </button>
          <button
            onClick={() => setFilter('performance')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              filter === 'performance'
                ? 'bg-[#0B132B] text-white shadow-sm'
                : 'bg-white text-[#5A6578] border border-slate-200 hover:text-[#0B132B]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>سرعت لود و پرفورمنس</span>
          </button>
          <button
            onClick={() => setFilter('ux')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              filter === 'ux'
                ? 'bg-[#0B132B] text-white shadow-sm'
                : 'bg-white text-[#5A6578] border border-slate-200 hover:text-[#0B132B]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>تجربه کاربری و هویت بصری</span>
          </button>
        </div>

        {/* Findings List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-white">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#C5A880] transition-colors bg-[#F8F9FA]/60 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-[#0B132B]">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  اصلاح و پیاده‌سازی شده
                </span>
              </div>

              <p className="text-xs text-[#5A6578] font-normal leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                <div>
                  <span className="font-bold text-[#0B132B] block mb-0.5">اثر بالینی و تجاری (Impact):</span>
                  <span className="text-[#5A6578] font-normal">{item.impact}</span>
                </div>
                <div>
                  <span className="font-bold text-emerald-900 block mb-0.5">اقدام مهندسی انجام گرفته:</span>
                  <span className="text-slate-600 font-normal">{item.actionTaken}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F8F9FA] border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-[#5A6578]">
            معماری بازطراحی شده بر اساس استاندارد جهانی کلینیک‌های پرستیژ
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-[#0B132B] text-white text-xs font-bold hover:bg-[#1C2541] transition-colors shadow-sm"
          >
            تایید و بازگشت به سایت
          </button>
        </div>

      </div>
    </div>
  );
};
