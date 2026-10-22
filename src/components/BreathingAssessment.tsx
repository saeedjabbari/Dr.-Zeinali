import React, { useState } from 'react';
import { Wind, Check, ClipboardCheck, ArrowLeft, RotateCcw } from 'lucide-react';
import { AssessmentStep } from '../types';

interface BreathingAssessmentProps {
  onCompleteWithAnswers: (summary: string) => void;
}

const ASSESSMENT_STEPS: AssessmentStep[] = [
  {
    id: 1,
    question: 'مهم‌ترین علت یا دغدغه شما برای در نظر گرفتن جراحی بینی چیست؟',
    options: [
      {
        label: 'مشکل تنفسی، خروپف، خشکی دهان یا انحراف شدید تیغه',
        sublabel: 'اولویت اصلی شما باز شدن مجاری هوایی و تنفس بی‌صداست',
        points: 1,
        tag: 'functional'
      },
      {
        label: 'اصلاح قوز استخوانی یا افتادگی نوک بینی با حفظ فرم طبیعی',
        sublabel: 'بدون تمایل به تغییرات فانتزی و حفظ اصالت چهره',
        points: 2,
        tag: 'preservation'
      },
      {
        label: 'هم مشکل تنفسی و هم اصلاح نامتقارن بودن ظاهر بینی',
        sublabel: 'ترکیب اصلاح عملکردی (سپتوپلاستی) و زیبایی طبیعی',
        points: 3,
        tag: 'hybrid'
      },
      {
        label: 'ترمیم آسیب یا نارضایتی از جراحی قبلی در مرکز دیگر',
        sublabel: 'جراحی ترمیمی ثانویه (Revision Rhinoplasty)',
        points: 4,
        tag: 'revision'
      }
    ]
  },
  {
    id: 2,
    question: 'وضعیت تنفس شما هنگام خوابیدن یا ورزش کردن چگونه است؟',
    options: [
      {
        label: 'یکی از سوراخ‌های بینی یا هر دو مرتباً دچار کیپ‌شدگی می‌شوند',
        sublabel: 'نیاز به بازکردن دهان در هنگام خواب شبانه',
        points: 2,
        tag: 'valve-issue'
      },
      {
        label: 'با بالا کشیدن ملایم گونه با دست، تنفس ناگهان بسیار راحت‌تر می‌شود',
        sublabel: 'نشانه بالینی کلاسیک ضعف یا کلاپس دریچه خارجی/داخلی بینی',
        points: 3,
        tag: 'valve-collapse'
      },
      {
        label: 'تنفس کاملاً روان و عادی است؛ فقط ظاهر بینی مد نظرم است',
        sublabel: 'اولویت حفظ ۱۰۰٪ دریچه‌ها با رینوپلاستی محافظتی',
        points: 1,
        tag: 'pure-aesthetic'
      }
    ]
  },
  {
    id: 3,
    question: 'آیا سابقه شکستگی، ضربه به صورت یا جراحی قبلی بینی دارید؟',
    options: [
      {
        label: 'خیر، تاکنون هیچ جراحی یا شکستگی استخوانی نداشته‌ام',
        sublabel: 'آناتومی غضروفی دست‌نخورده و کاندید اولویت اول متد محافظتی',
        points: 1,
        tag: 'primary-virgin'
      },
      {
        label: 'سابقه ضربه یا شکستگی در کودکی یا حوادث ورزشی دارم',
        sublabel: 'احتمال انحراف شدید اسکلت استخوانی-تیغه‌ای',
        points: 2,
        tag: 'trauma-history'
      },
      {
        label: 'یک یا چند بار عمل ناموفق داشته‌ام و فرم یا تنفسم تخریب شده است',
        sublabel: 'نیاز به ارزیابی جهت احتمال پیوند غضروف گوش یا دنده',
        points: 4,
        tag: 'revision-needed'
      }
    ]
  },
  {
    id: 4,
    question: 'ضخامت پوست بینی شما در لمس چگونه به نظر می‌رسد؟',
    options: [
      {
        label: 'پوست نازک یا متوسط با اسکلت استخوانی مشخص (بینی استخوانی)',
        sublabel: 'بهترین پاسخ به روش پیزوسرجری اولتراسونیک و کاهش حجم بدون اسکار',
        points: 1,
        tag: 'thin-skin'
      },
      {
        label: 'پوست ضخیم، روزنه‌دار و بافت چربی زیاد در نوک بینی (بینی گوشتی)',
        sublabel: 'نیازمند تکنیک تقویت اسکلت غضروفی نه تراش بیش از حد',
        points: 3,
        tag: 'thick-skin'
      },
      {
        label: 'مطمئن نیستم و ترجیح می‌دهم در معاینه حضوری سنجیده شود',
        sublabel: 'ارزیابی دقیق توسط دکتر زینالی با تست الاستیسیته پوست',
        points: 2,
        tag: 'unknown'
      }
    ]
  }
];

export const BreathingAssessment: React.FC<BreathingAssessmentProps> = ({ onCompleteWithAnswers }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const step = ASSESSMENT_STEPS[currentStepIndex];

  const handleSelectOption = (optionIndex: number) => {
    const updated = { ...selectedAnswers, [currentStepIndex]: optionIndex };
    setSelectedAnswers(updated);

    if (currentStepIndex < ASSESSMENT_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  const getAssessmentResult = () => {
    const step1Choice = selectedAnswers[0] ?? 0;
    const step2Choice = selectedAnswers[1] ?? 0;
    const step3Choice = selectedAnswers[2] ?? 0;

    let recommendationTitle = 'کاندید ایده‌آل رینوپلاستی محافظتی (Preservation)';
    let recommendationDesc = 'آناتومی شما امکان تنظیم ظریف پل بینی بدون تخریب بافت را فراهم می‌آورد. با بهره‌گیری از پیزوسرجری اولتراسونیک، هیچ‌گونه ضربه‌ای به غضروف‌های زیرین وارد نشده و تنفس شما کاملاً صیانت خواهد شد.';
    let airwayAdvice = 'بررسی سلامت دریچه داخلی در جلسه مشاوره با تست رینوسکوپی و تصویربرداری ۳بعدی انجام خواهد شد.';

    if (step3Choice === 2) {
      recommendationTitle = 'کاندید جراحی ساختاری ترمیمی (Revision Rhinoplasty)';
      recommendationDesc = 'با توجه به سابقه جراحی قبلی، تمرکز اصلی دکتر زینالی بر بازسازی ساپورت غضروفی، رفع تنگی مجاری و جلوگیری از فروپاشی بافت است. از تکنیک‌های پیوند غضروف اتولوگ استفاده خواهد شد.';
      airwayAdvice = 'انجام سی‌تی‌اسکن مجاری تنفس و سینوس‌ها قبل از جلسه مشاوره توصیه اکید می‌شود.';
    } else if (step1Choice === 0 || step2Choice === 1) {
      recommendationTitle = 'نیاز به سپتوپلاستی فانکشنال همراه با رینوپلاستی محافظتی';
      recommendationDesc = 'علائم شما نشان‌دهنده انحراف تیغه میانی یا تضعیف دریچه تنفسی است. جراحی شما همزمان بر باز شدن ۱۰۰٪ مسیر هوا و تناسب ارگونومیک با چهره متمرکز خواهد بود.';
      airwayAdvice = 'استفاده از اسپلینت سیلیکونی دارای مجرای هوا بدون نیاز به تامپون‌های دردناک سنتی.';
    }

    return {
      title: recommendationTitle,
      desc: recommendationDesc,
      airwayAdvice
    };
  };

  const result = getAssessmentResult();

  return (
    <section id="assessment" className="py-20 px-4 sm:px-8 bg-white border-b border-[#0B132B]/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B132B]/10 text-xs font-semibold text-[#8A6D44] mb-3 shadow-sm">
            <Wind className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>ابزار تشخیصی هوشمند بالینی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
            ارزیابی ۴ مرحله‌ای سلامت تنفس و کاندیداتوری عمل
          </h2>
          <p className="text-[#5A6578] text-xs sm:text-sm font-light mt-2 leading-relaxed">
            با پاسخ به ۴ پرسش کلیدی، تحلیل اختصاصی وضعیت آناتومیک و میزان آمادگی خود برای متد بدون تامپون را دریافت کنید.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-xl text-right">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-[#0B132B]">
                  پرسش {currentStepIndex + 1} از {ASSESSMENT_STEPS.length}
                </span>
                <div className="flex gap-1.5">
                  {ASSESSMENT_STEPS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStepIndex
                          ? 'w-8 bg-[#C5A880]'
                          : idx < currentStepIndex
                          ? 'w-3 bg-[#0B132B]'
                          : 'w-3 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B132B] mb-6">
                {step.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {step.options.map((option, oIdx) => {
                  const isSelected = selectedAnswers[currentStepIndex] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full p-4 rounded-2xl border text-right transition-all flex items-start justify-between gap-4 group ${
                        isSelected
                          ? 'bg-white border-[#0B132B] shadow-md ring-2 ring-[#0B132B]/20'
                          : 'bg-white border-[#E2E8F0] hover:border-[#C5A880] hover:bg-slate-50 shadow-sm'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-bold text-[#0B132B] group-hover:text-[#8A6D44] transition-colors">
                          {option.label}
                        </div>
                        {option.sublabel && (
                          <div className="text-[11px] text-[#5A6578] font-light mt-1">
                            {option.sublabel}
                          </div>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#0B132B] border-[#0B132B] text-white'
                          : 'border-slate-300 group-hover:border-[#C5A880]'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-[#C5A880]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step Navigation Back */}
              {currentStepIndex > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                    className="text-xs text-[#5A6578] hover:text-[#0B132B] font-medium"
                  >
                    ← بازگشت به سوال قبل
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Completed Result Panel */
            <div className="text-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-emerald-800 tracking-wider">
                  تحلیل بالینی اولیه بر اساس پاسخ‌های شما
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0B132B] mb-3">
                {result.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed mb-6 font-light">
                {result.desc}
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] mb-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B] mb-1">
                  <Wind className="w-4 h-4 text-[#8A6D44]" />
                  <span>توصیه ویژه درباره تنفس شما:</span>
                </div>
                <p className="text-xs text-[#5A6578] font-light leading-relaxed">
                  {result.airwayAdvice}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onCompleteWithAnswers(`${result.title} | ${result.airwayAdvice}`)}
                  className="px-6 py-3.5 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold border-b-2 border-[#C5A880] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>ثبت نوبت با نتایج این تست</span>
                  <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-[#5A6578] text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>تکرار آزمون</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
