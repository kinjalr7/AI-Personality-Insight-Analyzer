# Visual Reference Guide

## Color Palette

### Primary Colors
```
Blue:     #3B82F6 (RGB: 59, 130, 246)
Purple:   #A855F7 (RGB: 168, 85, 247)
Green:    #10B981 (RGB: 16, 185, 129)
```

### Background Colors
```
Dark:     #0f172a (RGB: 15, 23, 42)
Slate:    #1e293b (RGB: 30, 41, 59)
Slate-2:  #334155 (RGB: 51, 65, 85)
```

### Trait Colors
```
White:    #F5F5F5 (Structure)
Blue:     #3B82F6 (Understanding)
Black:    #1F2937 (Agency)
Red:      #EF4444 (Intensity)
Green:    #10B981 (Connection)
```

---

## Typography

### Headings
```
H1 (Title):     4-5xl, bold, gradient text
H2 (Section):   2-3xl, bold, white text
H3 (Subsection): xl-2xl, semibold, white text
```

### Body Text
```
Regular:  base, normal weight, slate-300
Small:    sm, normal weight, slate-400
Tiny:     xs, normal weight, slate-500
```

### Font Family
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
```

---

## Spacing

### Margins & Padding
```
Small:    4px (0.25rem)
Medium:   8px (0.5rem)
Large:    16px (1rem)
XL:       24px (1.5rem)
2XL:      32px (2rem)
3XL:      48px (3rem)
```

### Gap Between Elements
```
Cards:    32px (2rem)
Sections: 32px (2rem)
Items:    16px (1rem)
```

---

## Components

### Buttons

#### Primary Button (Analyze)
```
Background:  Gradient (blue-500 → blue-600)
Hover:       Gradient (blue-600 → blue-700)
Text:        White, bold
Padding:     py-4 px-4
Border:      Rounded-lg
Shadow:      Shadow-lg
Hover Effect: Scale 1.05
```

#### Secondary Button (PDF Download)
```
Background:  Gradient (green-500 → emerald-600)
Hover:       Gradient (green-600 → emerald-700)
Text:        White, bold
Padding:     py-4 px-4
Border:      Rounded-lg
Shadow:      Shadow-lg
Hover Effect: Scale 1.05
```

### Cards

#### Archetype Card
```
Background:  Color-specific (blue, red, green, etc.)
Border:      2px, color-specific
Padding:     p-5
Border-radius: Rounded-xl
Hover Effect: Scale 1.05, shadow-lg
Transition:  300ms
```

#### Result Card
```
Background:  Gradient (slate-800/50 → slate-800/30)
Border:      1px, slate-700/50
Padding:     p-6 sm:p-8
Border-radius: Rounded-xl
Backdrop:    Blur effect
Shadow:      Shadow-xl
```

### Form Elements

#### Textarea
```
Background:  slate-700/40
Border:      1px, slate-600/50
Padding:     px-4 py-4
Border-radius: Rounded-lg
Focus:       Ring-2, ring-blue-500
Height:      h-48 sm:h-56
Resize:      None
```

#### Character Counter
```
Color:       slate-400 (default)
Color:       green-400 (when ready)
Icon:        ✓ (checkmark)
Position:    Bottom right
```

---

## Animations

### Spin Animation
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
Duration: 1s
Timing: linear
Iteration: infinite
```

### Loading Bar Animation
```css
@keyframes loading {
  0%, 100% { width: 0%; }
  50% { width: 100%; }
}
Duration: 2s
Timing: ease-in-out
Iteration: infinite
```

### Fade In Up Animation
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 0.6s
Timing: ease-out
```

### Slide In Right Animation
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
Duration: 0.6s
Timing: ease-out
```

### Hover Effects
```
Scale:       1.05
Transition:  300ms
Shadow:      Increased
Color:       Slightly brighter
```

---

## Gradients

### Title Gradient
```
Direction:   to right
Colors:      blue-400 → purple-400 → green-400
```

### Button Gradient (Analyze)
```
Direction:   to right
Colors:      blue-500 → blue-600 → purple-600
Hover:       blue-600 → blue-700 → purple-700
```

### Button Gradient (PDF)
```
Direction:   to right
Colors:      green-500 → green-600 → emerald-600
Hover:       green-600 → green-700 → emerald-700
```

### Card Gradient
```
Direction:   to bottom right
Colors:      slate-800/50 → slate-800/30
```

---

## Shadows

### Small Shadow
```
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
```

### Medium Shadow
```
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
```

### Large Shadow (Shadow-lg)
```
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Extra Large Shadow (Shadow-xl)
```
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

---

## Borders

### Border Radius
```
Small:    rounded-lg (0.5rem)
Medium:   rounded-xl (0.75rem)
Large:    rounded-2xl (1rem)
```

### Border Width
```
Thin:     1px
Medium:   2px
Thick:    3px
```

### Border Colors
```
Primary:  slate-700/50
Secondary: slate-600/50
Accent:   blue-500
```

---

## Responsive Breakpoints

### Mobile First
```
Mobile:   < 640px
Tablet:   640px - 1024px
Desktop:  > 1024px
```

### Tailwind Breakpoints
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

---

## PDF Styling

### Page Layout
```
Orientation:  Portrait
Format:       A4
Margins:      20mm all sides
Width:        170mm (content)
Height:       257mm (content)
```

### Colors
```
Header:       #3B82F6 (Blue)
Text:         #FFFFFF (White)
Secondary:    #E2E8F0 (Light slate)
Tertiary:     #94A3B8 (Medium slate)
Background:   #0F172A (Dark)
```

### Typography
```
Title:        24pt, blue
Heading:      14pt, white
Subheading:   12pt, white
Body:         11pt, light slate
Small:        10pt, medium slate
Tiny:         8pt, medium slate
```

### Spacing
```
Page Margin:  20mm
Section Gap:  10mm
Line Height:  6-7mm
```

---

## Emoji Icons Used

### Web Interface
```
Header:       ✨ (Sparkles)
Form:         📝 (Memo)
Archetypes:   🎭 (Performing Arts)
Chart:        📊 (Bar Chart)
Entropy:      🎯 (Target)
PDF:          📄 (Document)
Loading:      ⏳ (Hourglass)
Analyzing:    ⏳ (Hourglass)
Empty State:  🔮 (Crystal Ball)
```

### PDF
```
Cover:        (None)
Archetypes:   🎭 (Performing Arts)
Traits:       📊 (Bar Chart)
Entropy:      🎯 (Target)
```

---

## Accessibility

### Color Contrast
```
Text on Dark:     WCAG AA (4.5:1 minimum)
Text on Light:    WCAG AA (4.5:1 minimum)
Large Text:       WCAG AA (3:1 minimum)
```

### Focus States
```
Outline:      2px solid blue-500
Offset:       2px
Color:        Blue (#3B82F6)
```

### Font Sizes
```
Minimum:      12px (body text)
Headings:     24px+ (h1)
Buttons:      16px+
```

---

## Browser Support

### Supported Browsers
```
Chrome:       Latest 2 versions
Firefox:      Latest 2 versions
Safari:       Latest 2 versions
Edge:         Latest 2 versions
```

### CSS Features
```
Gradients:    Supported
Animations:   Supported
Backdrop Blur: Supported
Box Shadow:   Supported
Flexbox:      Supported
Grid:         Supported
```

---

## Performance Metrics

### Build
```
Time:         ~5-6 seconds
CSS Size:     ~21KB (gzip: ~4.5KB)
JS Size:      ~150KB (gzip: ~51KB)
```

### Runtime
```
FPS:          60fps (smooth)
Animation:    GPU-accelerated
PDF Gen:      < 5 seconds
```

---

## File Structure

```
frontend/
├── src/
│   ├── App.jsx                    (Main layout)
│   ├── main.jsx                   (Entry point)
│   ├── index.css                  (Global styles)
│   └── components/
│       ├── AnalysisForm.jsx       (Form component)
│       ├── ArchetypeDisplay.jsx   (Archetypes)
│       ├── TraitsChart.jsx        (Chart)
│       ├── PDFGenerator.jsx       (PDF generation)
│       └── LoadingSpinner.jsx     (Loading state)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Quick Reference

### Most Used Colors
```
Primary Blue:     #3B82F6
Dark Background:  #0f172a
White Text:       #FFFFFF
Light Slate:      #E2E8F0
Medium Slate:     #94A3B8
```

### Most Used Spacing
```
Card Padding:     p-6 sm:p-8
Section Gap:      gap-8
Button Padding:   py-4 px-4
```

### Most Used Shadows
```
Cards:            shadow-xl
Buttons:          shadow-lg
Hover:            shadow-xl
```

### Most Used Borders
```
Cards:            rounded-xl
Buttons:          rounded-lg
Inputs:           rounded-lg
```

---

## Design System Summary

The SoulTrace design system features:
- **Modern color palette** with blue, purple, and green
- **Professional typography** with clear hierarchy
- **Smooth animations** for better UX
- **Responsive design** for all devices
- **Accessible styling** with good contrast
- **Professional PDF** with multi-page layout
- **Consistent spacing** throughout
- **Beautiful gradients** and shadows

All elements work together to create a cohesive, professional, and modern application.
