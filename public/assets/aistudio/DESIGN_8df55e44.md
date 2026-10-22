---
name: Atelier Medical Prestige
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76767e'
  outline-variant: '#c6c6ce'
  surface-tint: '#565d79'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131a33'
  on-primary-container: '#7b83a0'
  inverse-primary: '#bec5e5'
  secondary: '#725b38'
  on-secondary: '#ffffff'
  secondary-container: '#fedeb2'
  on-secondary-container: '#78603e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111a36'
  on-tertiary-container: '#7a83a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#bec5e5'
  on-primary-fixed: '#131a33'
  on-primary-fixed-variant: '#3e4660'
  secondary-fixed: '#fedeb2'
  secondary-fixed-dim: '#e0c298'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#584323'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#bdc5e9'
  on-tertiary-fixed: '#111a36'
  on-tertiary-fixed-variant: '#3d4664'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 40px
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 42px
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 34px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-xs:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  margin-tablet: 2.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2.25rem
  space-xl: 3.5rem
---

## Brand & Style
This design system defines an ultra-refined, high-prestige medical aesthetic tailored for academic and facial plastic surgery practices. The visual language blends clinical rigor with architectural luxury, positioning surgical artistry alongside university-grade faculty credibility.

The emotional signature is composed, surgical, reassuring, and uncompromisingly immaculate. It replaces aggressive clinical austerity with an editorial, gallery-like poise that respects patient vulnerability while showcasing elite technical competence.

The aesthetic fuses **Architectural Luxury Minimalism** with **Tactile High-Precision Micro-Details**:
- Expansive, breathing negative space that mirrors clinical sterilization and mental calm.
- Micro-thin editorial borders (1px) evoking surgical incisions and structural discipline.
- Deliberate restraint in accents: gold is treated as warm brushed champagne metal, never saturated or ostentatious.
- Typographic hierarchy centered on sculptural titles and meticulous, readable clinical typography.

## Colors
The palette balances authoritative deep naval tones with warm champagne accents and luminous clinical neutrals.

- **Primary (`#0B132B` — Midnight Navy)**: Grounding color conveying deep academic authority, institutional integrity, and high-end prestige. Used for primary typography, authoritative headers, and deep-toned structural anchors.
- **Secondary (`#C5A880` — Brushed Champagne)**: Understated warm luxury representing cosmetic precision, organic skin warmth, and sculptural craft. Used strictly for surgical highlights, active statuses, delicate hairline rules, and high-value conversion elements.
- **Tertiary (`#1C2541` — Deep Slate)**: Supporting container tone for elevated surfaces, contrast cards, footers, and consultation modules.
- **Neutral Surface Palette**:
  - Base Canvas: `#FFFFFF` (pure daylight clarity)
  - Secondary Canvas: `#F8F9FA` (soft porcelain wash for subtle card stratification)
  - Border Hairline: `#E2E8F0` / `rgba(11, 19, 43, 0.08)`
  - Slate Muted Text: `#5A6578` (WCAG AAA compliant on light canvases)

## Typography
The system employs a dual-character typographic engine: an editorial, authoritative serif (`Newsreader`) paired with an ultra-clean, humanist geometric sans (`Plus Jakarta Sans`). When rendering Persian/RTL scripts, the implementation transparently maps these roles to modern, clean typographic equivalents (`Shabnam` or `Vazirmatn FD`) maintaining proportional vertical metrics and balanced weights.

- **Headlines (`Newsreader` / Serif Luxury)**: Used for surgical procedure titles, doctor philosophy quotes, and academic honors. Radiates medical scholarship, clinical tradition, and surgical refinement.
- **Body & Labels (`Plus Jakarta Sans` / Clean Sans)**: Engineered for medical reports, consultation forms, clinical timelines, and before/after metadata with strict clarity.
- **RTL Considerations**: Ensure line-height values are increased by at least 15% when switching to Persian scripts to accommodate vertical accents without clipping.

## Layout & Spacing
The layout relies on a 12-column fluid grid system bounded by generous architectural margins, reflecting the calm order of an executive medical clinic.

- **Desktop (1200px+)**: 12 columns, `1.5rem` (24px) gutters, and minimum `4rem` (64px) outer page margins. Section padding uses multiples of `space-xl` (56px-112px) to preserve unhurried, luxury pacing.
- **Tablet (768px - 1199px)**: 8 columns, `1.25rem` (20px) gutters, `2.5rem` margins.
- **Mobile (< 768px)**: 4 columns, `1rem` (16px) gutters, `1.25rem` (20px) canvas margin.
- **Spacing Principle**: Whitespace is structural, not ornamental. Clinical credentials and surgical photography must never be cramped. Cards and interactive modules utilize comfortable interior padding (`space-lg`) to preserve optical breathing room.

## Elevation & Depth
This design system avoids heavy drop shadows, instead using **low-contrast architectural outlines and layered tonal micro-elevations**:

- **Tonal Layering**: Depth is created primarily through surface transitions: stacking `#FFFFFF` cards atop `#F8F9FA` backgrounds, bordered with a hairline stroke of `rgba(11, 19, 43, 0.08)`.
- **Soft Ambient Light**: For elevated overlays, modal dialogs, and interactive before/after interactive sliders, use a diffused, cold-tinted ambient shadow:
  `box-shadow: 0 16px 40px -12px rgba(11, 19, 43, 0.07), 0 2px 6px -1px rgba(11, 19, 43, 0.03);`
- **Frosted Veil (Glassmorphism for Sticky Navigations)**:
  `background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(11, 19, 43, 0.06);`
- **Dark Mode Elevation (Navy Inversion Surfaces)**: When dark slate surfaces (`#0B132B`) are invoked, depth is delineated by subtle interior borders (`border: 1px solid rgba(197, 168, 128, 0.18)`) rather than shadows.

## Shapes
The shape language is **Soft (`0.25rem` base, `0.5rem` cards, `0.75rem` floating panels)**. 

Sharp or overly rounded geometry does not fit this space: pure rectangular edges feel overly harsh and industrial, while high-radius pill buttons diminish medical seriousness. A micro-softened edge communicates exact surgical incision, precision engineering, and approachable sophistication.

## Components

### Buttons
- **Primary Action (VIP Consultation / Booking)**: Solid `#0B132B` background, `#FFFFFF` text, `border-radius: 0.25rem`. On hover, transitions cleanly to `#1C2541` with a fine champagne bottom edge (`border-bottom: 2px solid #C5A880`).
- **Prestige Accent Action**: Solid `#C5A880` background, `#0B132B` deep navy text. Hover shifts to a muted gold gleam with soft luminescence.
- **Secondary / Minimal Action**: Ghost style with 1px border `rgba(11, 19, 43, 0.2)`, `#0B132B` text. On hover, background shifts to `rgba(197, 168, 128, 0.08)` and border tint deepens.

### Chips & Badges
- **Academic Credentials & Board Certifications**: Compact padding (`0.25rem 0.75rem`), typographic label style (`label-xs`, uppercase/tracked), subtle surface (`#F8F9FA`), bordered with 1px hairline `rgba(11, 19, 43, 0.1)`. Highlighted badges use champagne tint: `background: rgba(197, 168, 128, 0.12); color: #8A6D44; border: 1px solid rgba(197, 168, 128, 0.3);`.

### Interactive Clinical Cards
- Surfaces feature pure white (`#FFFFFF`) with 1px outer stroke (`#E2E8F0`).
- Generous padding (`space-lg`). Interactive cards smoothly lift 2px with an ambient shadow transition on hover, subtly shifting the border to `#C5A880`.

### Form Input Fields
- Understated, clean borders (`1px solid #E2E8F0`), `#FFFFFF` background, generous internal padding (`0.75rem 1rem`).
- Focus state avoids thick rings; instead, applies a surgical, crisp 1px border in `#C5A880` paired with an ultra-light gold ambient glow (`0 0 0 3px rgba(197, 168, 128, 0.15)`).

### Specialized Before / After Interactive Viewers
- Surgical comparison frames must feature an ultra-thin 1px dividing cursor in brushed champagne (`#C5A880`).
- Floating position pill badge in frosted midnight navy (`rgba(11, 19, 43, 0.85)`) with white micro-typography indicating "Before / After" or "قبل / بعد".

### Academic Timeline & Publication Lists
- Clean hairline vertical axis (`1px solid rgba(11, 19, 43, 0.1)`) punctuated by 6px solid gold-champagne nodal markers.
- Distinct horizontal hierarchy isolating year/date in muted slate and publication titles in authoritative serif typography.