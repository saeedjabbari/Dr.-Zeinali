import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { PreservationPhilosophy } from './components/PreservationPhilosophy';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { BreathingAssessment } from './components/BreathingAssessment';
import { SanctuaryTour } from './components/SanctuaryTour';
import { AcademicTimeline } from './components/AcademicTimeline';
import { FaqSection } from './components/FaqSection';
import { ConsultationBooking } from './components/ConsultationBooking';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('dialogue-stage');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAssessment = () => {
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentComplete = (summary: string) => {
    setPrefilledNotes(summary);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191C1D] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#0B132B]">
      
      {/* Top Header & Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Dr. Zeinali's authentic portrait */}
        <Hero
          onBookClick={scrollToBooking}
          onAssessmentClick={scrollToAssessment}
        />

        {/* 2. Trust Stats & Quantitative Signals */}
        <TrustStats />

        {/* 3. Preservation Rhinoplasty & Piezosurgery Philosophy */}
        <PreservationPhilosophy />

        {/* 4. Interactive Before/After Tactical Slider */}
        <BeforeAfterSlider />

        {/* 5. Interactive Breathing & Suitability Assessment */}
        <BreathingAssessment
          onCompleteWithAnswers={handleAssessmentComplete}
        />

        {/* 6. Clinic Sanctuary Ambience & Architecture */}
        <SanctuaryTour />

        {/* 7. Academic Timeline & University Credentials */}
        <AcademicTimeline />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 9. VIP Consultation Booking Stage */}
        <ConsultationBooking
          prefilledNotes={prefilledNotes}
          onClearNotes={() => setPrefilledNotes('')}
        />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
