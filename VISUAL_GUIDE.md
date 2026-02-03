# 🎨 Visual Design Guide - Amazon Home Studio

## 🎨 Color Palette

### Primary Colors
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  #8B5CF6  ████████  Purple Principal
  #7C3AED  ████████  Purple Dark (hover)
  #A78BFA  ████████  Purple Light (accents)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Accent Colors
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  #F59E0B  ████████  Amber/Gold (CTA)
  #D97706  ████████  Amber Dark (hover)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Neutrals
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  #1F2937  ████████  Dark Gray (text headers)
  #374151  ████████  Medium Gray
  #6B7280  ████████  Light Gray (text body)
  #9CA3AF  ████████  Muted Gray
  #E5E7EB  ████████  Border Light
  #F9FAFB  ████████  Background Light
  #0F172A  ████████  Background Dark (footer)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎨 Gradients Used

### Hero Background
```css
background: linear-gradient(135deg, 
  #0F172A 0%,    /* Deep dark blue */
  #1E293B 50%,   /* Slate gray */
  #312E81 100%   /* Indigo */
);
```

### Accent Gradient (buttons, badges)
```css
background: linear-gradient(135deg, 
  #8B5CF6 0%,    /* Purple */
  #7C3AED 100%   /* Dark purple */
);
```

### Text Gradient (titles)
```css
background: linear-gradient(135deg, 
  #A78BFA 0%,    /* Purple light */
  #F59E0B 100%   /* Amber */
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Hover Underline
```css
background: linear-gradient(90deg, 
  #8B5CF6,       /* Purple */
  #F59E0B        /* Amber */
);
```

---

## 📐 Layout Grid

### Desktop (1280px+)
```
┌─────────────────────────────────────────────┐
│              HEADER (sticky)                 │
│  🎧 Logo         Nav Nav Nav                │
├─────────────────────────────────────────────┤
│                                              │
│              HERO SECTION                    │
│         [ Gradient Background ]              │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│         CONTENT GRID (3 columns)             │
│  ┌─────┐  ┌─────┐  ┌─────┐                 │
│  │Card │  │Card │  │Card │                 │
│  └─────┘  └─────┘  └─────┘                 │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│      CATEGORY GRID (3 columns)               │
│  ┌─────┐  ┌─────┐  ┌─────┐                 │
│  │ Cat │  │ Cat │  │ Cat │                 │
│  └─────┘  └─────┘  └─────┘                 │
│                                              │
├─────────────────────────────────────────────┤
│                                              │
│        FOOTER (4 columns)                    │
│  About   Nav   Categories   Info             │
│                                              │
│      [ Amazon Disclaimer Box ]               │
│              © 2026                          │
└─────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────┐
│    HEADER    │
│   🎧 Logo    │
│ Nav Nav Nav  │
├──────────────┤
│              │
│     HERO     │
│  [Gradient]  │
│              │
├──────────────┤
│              │
│  ┌────────┐  │
│  │ Card   │  │
│  └────────┘  │
│  ┌────────┐  │
│  │ Card   │  │
│  └────────┘  │
│              │
├──────────────┤
│  ┌────────┐  │
│  │Category│  │
│  └────────┘  │
│              │
├──────────────┤
│    FOOTER    │
│ (stacked)    │
│              │
│ Disclaimer   │
│   © 2026     │
└──────────────┘
```

---

## 🎭 Component Styles

### Card Component
```
┌───────────────────────────┐ ← Border: 1px solid #F3F4F6
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Top gradient bar (on hover)
│ ┌─────────────────────┐   │
│ │                     │   │
│ │      IMAGE          │   │ ← Height: 220px, scale on hover
│ │                     │   │
│ └─────────────────────┘   │
│                           │
│  [BADGE]  ← Gradient      │
│                           │
│  Title in Bold            │ ← Color → purple on hover
│  Secondary text...        │
│                           │
│  Read more →              │ ← Arrow moves on hover
│                           │
└───────────────────────────┘
    ↓ Hover: translateY(-8px)
    ↓ Shadow: sm → lg
```

### Button Component
```
┌─────────────────────────┐
│  ╔═══════════════════╗  │
│  ║  CTA Button Text  ║  │ ← Gradient background
│  ╚═══════════════════╝  │   Purple → Dark Purple
│      ✨ Shimmer          │ ← ::before shimmer on hover
└─────────────────────────┘
    ↓ Hover: translateY(-2px)
    ↓ Shadow elevation
```

### Hero Section
```
╔═══════════════════════════════════════╗
║                                       ║
║     🎧 Guide Expert Badge             ║ ← Glassmorphism
║                                       ║
║   Équipez votre [Home Studio]         ║ ← Gradient on span
║         avec les meilleurs            ║
║                                       ║
║   Subtitle text with description      ║
║                                       ║
╚═══════════════════════════════════════╝
 └── Background: Dark → Purple → Indigo
     Radial overlays for depth
```

---

## 📏 Typography Scale

```
H1: 64px (desktop) → 32px (mobile)
    font-weight: 800
    letter-spacing: -0.04em
    line-height: 1.1

H2: 40px (desktop) → 28px (mobile)
    font-weight: 800
    letter-spacing: -0.03em
    line-height: 1.2

H3: 28px (desktop) → 20px (mobile)
    font-weight: 700
    letter-spacing: -0.02em
    line-height: 1.3

Body: 18px
    font-weight: 400
    letter-spacing: -0.01em
    line-height: 1.7-1.8

Small: 16px (never below on mobile)
```

---

## 🎯 Shadow Elevation System

```
Level 1 (sm):    0 1px 2px rgba(0,0,0,0.05)
  └─ Resting cards

Level 2 (base):  0 4px 6px rgba(0,0,0,0.1)
  └─ Buttons, badges

Level 3 (md):    0 10px 15px rgba(0,0,0,0.1)
  └─ Hover states

Level 4 (lg):    0 20px 25px rgba(0,0,0,0.1)
  └─ Active/focused elements

Level 5 (hover): 0 25px 50px rgba(139,92,246,0.25)
  └─ Special purple glow
```

---

## 🎨 Usage Examples

### Primary Button
```css
background: linear-gradient(135deg, #8B5CF6, #7C3AED);
color: white;
padding: 1rem 2rem;
border-radius: 12px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);

hover: {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Card Badge
```css
background: linear-gradient(135deg, #8B5CF6, #7C3AED);
color: white;
padding: 0.4rem 0.9rem;
border-radius: 6px;
font-size: 0.8rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

### Gradient Text
```css
background: linear-gradient(135deg, #A78BFA, #F59E0B);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 🎨 Interactive States

### Link Hover
```
Before:  Link Text
         ─────────  (invisible)

Hover:   Link Text
         ▓▓▓▓▓▓▓▓  (gradient grows)
```

### Card Hover
```
Before:  Card at Y=0, shadow-sm
Hover:   Card at Y=-8px, shadow-lg
         + Top gradient border appears
         + Title color → purple
```

### Button Hover
```
Before:  [Button]  shadow-sm, Y=0
Hover:   [Button]  shadow-md, Y=-2px
         + Shimmer effect sweeps across
```

---

## 📐 Spacing System

```
4px   (0.25rem)  - Tiny gaps
8px   (0.5rem)   - Small spacing
12px  (0.75rem)  - Default gaps
16px  (1rem)     - Standard spacing
24px  (1.5rem)   - Medium spacing
32px  (2rem)     - Large spacing
48px  (3rem)     - Section spacing
64px  (4rem)     - Major sections
96px  (6rem)     - Hero padding
```

---

## 🎯 Responsive Breakpoints

```
┌───────────────────────────────────┐
│  1280px+  Desktop (3 columns)     │
├───────────────────────────────────┤
│  1024px   Large Tablet (2-3 col)  │
├───────────────────────────────────┤
│  768px    Tablet (1-2 columns)    │
├───────────────────────────────────┤
│  480px    Mobile (1 column)       │
├───────────────────────────────────┤
│  <480px   Small Mobile (optimized)│
└───────────────────────────────────┘
```

---

## ✨ Animation Timing

```
Fast:    150ms  - Micro-interactions
Normal:  300ms  - Standard transitions
Slow:    500ms  - Complex animations

Easing:  cubic-bezier(0.4, 0, 0.2, 1)
         "ease-out" variant
```

---

## 📊 Component Inventory

```
✅ Header (glassmorphism)
✅ Hero Section (gradient + badge)
✅ Content Card (hover effects)
✅ Category Card (overlay gradient)
✅ Product Card (top border accent)
✅ Button Primary (gradient + shimmer)
✅ Button Secondary (outline)
✅ Footer (4 columns + disclaimer)
✅ Navigation Links (underline animation)
✅ Badge (gradient background)
✅ Table (hover row effects)
```

---

**Design System:** Complete  
**Components:** 11 styled  
**Color Variables:** 15  
**Gradients:** 5 defined  
**Shadows:** 5 levels  
**Responsive:** 4 breakpoints

🎨 **Ready to use!**
