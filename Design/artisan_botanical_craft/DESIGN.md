---
name: Artisan Botanical Craft
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#414846'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#48645c'
  primary: '#07231d'
  on-primary: '#ffffff'
  primary-container: '#1e3932'
  on-primary-container: '#86a399'
  inverse-primary: '#afcdc3'
  secondary: '#695b5b'
  on-secondary: '#ffffff'
  secondary-container: '#efdbdb'
  on-secondary-container: '#6e5f5f'
  tertiary: '#311900'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d2d07'
  on-tertiary-container: '#c39465'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe9df'
  primary-fixed-dim: '#afcdc3'
  on-primary-fixed: '#04201a'
  on-primary-fixed-variant: '#314c44'
  secondary-fixed: '#f2dedd'
  secondary-fixed-dim: '#d5c2c2'
  on-secondary-fixed: '#231919'
  on-secondary-fixed-variant: '#514444'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
  bg-canvas: '#F9F6F0'
  bg-surface: '#FFFFFF'
  bg-card: '#F7F5F2'
  starbucks-green: '#006241'
  starbucks-cream: '#F2F0EB'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2.5rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system embodies an editorial, refined, and serene specialty coffee identity. Balancing organic warmth with structured modern precision, the brand evokes calm indulgence, deliberate craftsmanship, and welcoming sophistication. 

The design style fuses **Modern Editorial** clarity with **Contemporary Soft-Clean** aesthetics:
- Generous whitespace that honors products as culinary craft rather than transactional commodities.
- Deliberate hierarchy through clean geometric typography and confident proportion.
- Tactile, organic calm delivered via warm neutral surfaces paired with high-contrast botanical tones.
- Accessible and effortless interaction models that prioritize clear dietary signaling, sensory product imagery, and frictionless customization.

## Colors
The palette grounds the experience in authentic coffee craft and botanical heritage:

- **Primary (`#1E3932`)**: Deep Forest Green. Used for signature branding elements, category headers, active state accents, and high-impact structural touchpoints.
- **Secondary (`#3B2F2F`)**: Rich Espresso Brown. Applied to secondary controls, selected chip borders, and warm contrast dividers.
- **Tertiary (`#D4A373`)**: Warm Amber Gold. Reserved as an accent for promotional badges, seasonal indicators, nutrition highlights, and active customization toggles.
- **Neutral (`#1F2937`)**: Dark Charcoal. Serves as the primary typographic and icon tone, replacing harsh jet black to maintain a softer, high-contrast editorial legibility.
- **Surface & Canvas**:
  - `bg-canvas` (`#F9F6F0`): Warm Cream background evoking natural parchment and steamed milk.
  - `bg-surface` (`#FFFFFF`): Crisp pure white for elevated slide-over drawers, modal surfaces, and selected interactive states.
  - `bg-card` (`#F7F5F2`): Soft muted neutral to demarcate circular product modules and menu grouping sections without hard grid lines.

## Typography
Typographic rhythm combines geometric, friendly warmth in headings with crisp utilitarian legibility for menus and configuration states:

- **Display & Headlines (`Plus Jakarta Sans`)**: Delivers friendly geometric polish reminiscent of bespoke café branding. Generous aperture and clean curves reflect modern beverage packaging design.
- **Body & Labels (`Inter`)**: Neutral, highly legible grotesque providing crisp contrast against expressive photography, nutrition specs, ingredient tags, and complex modifier lists.
- **Sizing Strategy**: Large display headings step down on mobile screens to preserve balanced white margins and prevent awkward character wrapping on compact viewports.

## Layout & Spacing
The layout model employs a fluid 12-column responsive grid on desktop and tablet, converting to an adaptable single or dual-column stream on mobile screens.

- **Desktop (1024px+)**: 12-column grid with `margin: 2.5rem` and `gutter: 1.5rem`. Circular menu items align in structured 3- or 4-column patterns with comfortable negative space. Sticky left-hand category navigation anchors the browse state.
- **Tablet (768px - 1023px)**: 8-column layout with horizontal-scrolling category navigation, maintaining `space-md` gaps between drink modules.
- **Mobile (<768px)**: Single or dual-column presentation with `margin-sm: 1rem` and `gutter-sm: 1rem`. Circular items scale down proportionately to fit clean 2-wide browsing grids. Customization workflows transition from side-drawers to full-height bottom sheets.

## Elevation & Depth
Depth in the system is understated and organic, avoiding aggressive drop shadows in favor of tonal layering and soft ambient lift:

- **Baseline Surface**: The primary backdrop sits on warm cream canvas (`#F9F6F0`). 
- **Card Tier**: Menu modules use flat `#F7F5F2` card backdrops with a 1px soft tone border (`rgba(31, 41, 55, 0.05)`).
- **Hover Elevation**: On pointer hover, circular drink cards elevate with a warm, diffuse ambient shadow: `0 8px 24px -4px rgba(30, 57, 50, 0.08), 0 2px 6px -1px rgba(30, 57, 50, 0.04)`.
- **Slide-over Drawer Modal**: Overlays elevated at `0 20px 48px rgba(31, 41, 55, 0.16)` paired with a soft background scrim (`rgba(31, 41, 55, 0.4)` with `backdrop-filter: blur(4px)`).

## Shapes
The shape language celebrates organic fluid curves with a pill-shaped baseline:

- **Circular Elements**: Drink images, category icons, and stepper buttons are set in full circles (`50%` / `rounded-full`).
- **Interactive Controls**: Buttons, filter chips, and category selectors use full pill contours (`1rem` to `2rem`).
- **Cards & Drawers**: Menu category groupings and modal containers carry generous rounded corners (`rounded-xl: 1.5rem` to `rounded-2xl: 2rem`) to echo the approachable, handcrafted spirit of the café experience.

## Components

### Buttons
- **Primary**: Pill-shaped container filled with Deep Forest Green (`#1E3932`), Crisp White (`#FFFFFF`) bold label, `space-sm` vertical and `space-lg` horizontal padding. On hover, background shifts to slightly deeper green (`#172D27`) with soft subtle lift.
- **Secondary**: Transparent background with a 1.5px solid border in Forest Green or Charcoal, matching label color.
- **Accent / Seasonal CTA**: Warm Gold (`#D4A373`) background with `#1F2937` or `#FFFFFF` typography for limited-time offers.

### Circular Menu Item Cards
- Cards feature a centered circular cutout photo (`50%` radius) over a subtle `#F7F5F2` rounded backdrop.
- Clear title in `headline-sm`, subtitle/size metadata in `body-sm` (`#1F2937` muted at 75%), and price pinned cleanly beneath.
- Quick "Add / Customize" floating circular action button (`+`) nested on the card boundary.

### Chips & Filters
- **Dietary & Category Chips**: Pill-shaped tags (`label-md`). Inactive state features `#FFFFFF` background with 1px border (`#1F2937` at 12%). Active state fills with Deep Forest Green (`#1E3932`) with white text.

### Customization Slide-Over Drawer
- Slides smoothly from the right viewport boundary on desktop (440px fixed width) or from the bottom on mobile viewports.
- Contains categorized accordion sections for milk alternatives, syrup pumps, ice levels, espresso shot intensity, and toppings.
- Persistent bottom action dock featuring current drink build, real-time price update, and an full-width "Add to Order" primary pill button.

### Form Inputs & Steppers
- Input fields display rounded-lg contours, crisp `#FFFFFF` backgrounds, and a 1px neutral border that transitions to a 2px `#1E3932` focus ring.
- Quantity counters feature dual circular `+` and `-` buttons wrapping a centered numeric label.