import React, { useState, useRef } from 'react';
import { CASE_STUDIES } from '../data/casesData';
import { SlidersHorizontal, CheckCircle2, Clock, Activity } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    if (width <= 0) return;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(Math.round(percentage));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 px-4 sm:px-8 bg-[#F8F9FA] border-b border-[#0B132B]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>مقایسه دقیق و تعاملی قبل و بعد از عمل</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B132B] tracking-tight">
            نتایج واقعی با حفظ هویت منحصر‌به‌فرد چهره
          </h2>
          <p className="text-[#5A6578] text-sm sm:text-base font-normal mt-3 leading-relaxed">
            نشانگر طلایی را به طرفین بکشید تا تغییرات قوز استخوانی، موقعیت نوک بینی و تقارن چهره را پیش و پس از جراحی با دقت بررسی کنید.
          </p>

          {/* Case Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCaseId(c.id);
                  setSliderPosition(50);
                }}
                className={`py-3 px-5 rounded-2xl text-xs font-bold transition-all border shadow-sm ${
                  selectedCaseId === c.id
                    ? 'bg-[#0B132B] text-white border-[#0B132B] ring-2 ring-[#C5A880]/50'
                    : 'bg-white text-[#5A6578] border-[#E2E8F0] hover:border-[#C5A880] hover:text-[#0B132B]'
                }`}
              >
                {c.categoryLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Viewer & Case Study Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Split Frame (Col 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              className="relative aspect-[4/3.2] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden select-none cursor-ew-resize bg-slate-900 border border-[#0B132B]/10 shadow-2xl touch-none"
              style={{ userSelect: 'none' }}
            >
              {/* Image 1 (BEFORE - Base Layer, shown on the right side) */}
              <img
                src={currentCase.beforeImage}
                alt={`${currentCase.title} - وضعیت پیش از عمل`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />

              {/* Before Indicator Badge (Right) */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#1C2541]/90 backdrop-blur-md text-[#C5A880] text-xs font-bold border border-[#C5A880]/30 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                <span>وضعیت پیش از عمل</span>
              </div>

              {/* Image 2 (AFTER - Clipped Layer, shown on the left side) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              >
                <img
                  src={currentCase.afterImage}
                  alt={`${currentCase.title} - نتیجه بعد از عمل`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* After Indicator Badge (Left) */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#0B132B]/85 backdrop-blur-md text-white text-xs font-bold border border-white/10 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>نتیجه بعد از عمل</span>
              </div>

              {/* Champagne 3px Surgical Dividing Cursor */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{
                  left: `${sliderPosition}%`,
                  transform: 'translateX(-50%)',
                  width: '3px',
                  backgroundColor: '#C5A880',
                  boxShadow: '0 0 14px rgba(197, 168, 128, 0.8)'
                }}
              >
                {/* Center Tactile Drag Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B132B] border-2 border-[#C5A880] shadow-2xl flex items-center justify-center text-[#C5A880] transition-transform hover:scale-110">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Drag Guidance */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center z-20 pointer-events-none">
                <span className="text-xs text-white/95 bg-black/65 backdrop-blur-md px-4 py-1.5 rounded-full font-medium shadow-md">
                  روی تصویر بکشید یا نشانگر طلایی را به چپ و راست حرکت دهید
                </span>
              </div>
            </div>

            {/* Accessible Range Input Control - Fully Synchronized in direction (Left=After, Right=Before) */}
            <div 
              dir="ltr"
              className="mt-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 text-xs text-[#5A6578]"
            >
              <div className="shrink-0 flex items-center gap-1.5 font-bold text-[#0B132B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>نتیجه بعد از عمل ({sliderPosition}٪)</span>
              </div>
              
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="کنترل میزان مقایسه قبل و بعد"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
              />

              <div className="shrink-0 flex items-center gap-1.5 font-bold text-[#8A6D44]">
                <span>وضعیت پیش از عمل ({100 - sliderPosition}٪)</span>
                <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              </div>
            </div>
          </div>

          {/* Clinical Details Column (Col 5) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-lg flex flex-col justify-between text-right">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8A6D44] font-bold mb-2">
                <span>{currentCase.timeframe}</span>
                <span className="text-[#5A6578]">سن مراجع: {currentCase.patientAge}</span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 leading-snug">
                {currentCase.title}
              </h3>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border-r-4 border-[#C5A880] text-xs text-[#5A6578] leading-relaxed mb-6 font-normal">
                {currentCase.quote}
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-[#0B132B] uppercase tracking-wider">
                  اقدامات جراحی و ویژگی‌های پرونده:
                </h4>
                <ul className="space-y-2 text-xs text-[#5A6578]">
                  {currentCase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
              <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-100">
                <div className="flex items-center justify-center gap-1 text-[11px] text-[#5A6578] mb-0.5">
                  <Activity className="w-3 h-3 text-[#8A6D44]" />
                  <span>شاخص سلامت تنفس</span>
                </div>
                <div className="text-sm font-bold text-[#0B132B]">{currentCase.breathingScore}</div>
              </div>
              <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-slate-100">
                <div className="flex items-center justify-center gap-1 text-[11px] text-[#5A6578] mb-0.5">
                  <Clock className="w-3 h-3 text-[#8A6D44]" />
                  <span>دوره بازتوانی</span>
                </div>
                <div className="text-sm font-bold text-[#0B132B]">{currentCase.recoveryDays}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
