---
name: Luminous Wellness
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ffb0cd'
  on-secondary: '#640039'
  secondary-container: '#aa0266'
  on-secondary-container: '#ffbad3'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#4d8eff'
  on-tertiary-container: '#00285d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  sidebar_width: 280px
  container_max_width: 1440px
  gutter: 24px
  margin_page: 40px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 32px
  stack_xl: 64px
---

## Brand & Style

The design system is engineered to evoke a sense of calm authority and futuristic vitality. Aimed at high-performance individuals seeking a premium health experience, the aesthetic balances the depth of a nocturnal environment with the energetic pulse of bio-data. 

The style is rooted in **Glassmorphism**, utilizing multi-layered translucency to represent the clarity of health insights. By blending deep charcoal surfaces with vibrant, ethereal gradients, this design system transforms technical nutrition tracking into a sophisticated lifestyle ritual. Every interaction should feel fluid and lightweight, emphasizing a "flow" state through generous white space (negative space) and soft, atmospheric lighting.

## Colors

This design system utilizes a "Deep Charcoal" foundation to reduce eye strain and allow vibrant accent colors to pop. The primary palette consists of a trio of "Vibrant Neons"—Purple, Blue, and Pink—used primarily in gradients to represent energy and biological data.

- **Canvas**: A near-black charcoal that provides infinite depth.
- **Surface**: Semi-transparent glass layers that catch the light from background gradients.
- **Accents**: Used sparingly for call-to-actions, progress rings, and high-priority data visualizations.
- **Semantic Colors**: Success (Emerald), Warning (Amber), and Error (Rose) are muted to maintain the premium feel but remain legible.

## Typography

The typography strategy prioritizes readability and architectural hierarchy. **Manrope** is used for headlines to provide a modern, slightly geometric character that feels both professional and approachable. **Inter** handles all functional and body text, ensuring maximum clarity for complex nutritional data.

Spacious leading (1.6 for body) is essential to this design system to maintain a "minimal" feel despite high information density. Tracking is slightly tightened on large display headers for a premium, editorial look, while small labels receive increased tracking for better legibility on dark backgrounds.

## Layout & Spacing

The layout utilizes a 12-column responsive fluid grid with a persistent **Left Sidebar Navigation**. This sidebar is treated as a high-level glass layer, allowing background glows to bleed through slightly.

The spacing rhythm is strictly based on an 8px scale. High-impact content blocks should use the `stack_xl` spacing to create a sense of premium "breathing room." Data cards are arranged in a dynamic grid, where primary insights span 8 columns and secondary metrics span 4 columns.

## Elevation & Depth

Elevation is achieved through **Backdrop Blurs** and **Ambient Glows** rather than traditional black shadows. 

1.  **Base Level**: The Deep Charcoal canvas.
2.  **Level 1 (Cards/Sidebar)**: `surface_glass` with a 20px blur and a `border_subtle` (1px).
3.  **Level 2 (Modals/Popovers)**: Higher opacity glass with a soft, diffused shadow tinted with the primary purple hex at 10% opacity.

Background "blobs" of gradient colors are positioned behind glass cards to create a sense of immersive depth and to highlight specific areas of the interface.

## Shapes

The shape language is characterized by **Generous Roundedness**. Large containers and cards use a 24px radius to soften the technical nature of health data. Interactive elements like buttons use a slightly sharper 12px radius to differentiate them as actionable items.

Nested elements (like images or sub-charts inside a card) must follow a "concentric radius" rule, typically using `radius_inner` (16px) to maintain visual harmony with the outer card container.

## Components

### Buttons
Primary buttons use the `gradient_primary` with white text and a subtle outer glow on hover. Secondary buttons are "ghost" style with a `border_subtle` and no fill, turning slightly opaque on interaction.

### Glass Cards
The signature component. Must include a 1px solid top-border (white at 10% opacity) to simulate light catching the "edge" of the glass. The content within should have 32px of internal padding.

### Data Visualization
Charts should use "Sleek Stroke" styling—using thin 2px lines for line charts with a gradient area fill below the line that fades to 0% opacity. Points on charts should be glowing orbs using the accent pink.

### Left Sidebar
A full-height glass panel. Navigation items use high-contrast white for active states and 50% opacity white for inactive states. Icons should be minimalist "duotone" styles using the primary purple.

### Progress Rings
Utilize the `gradient_accent` for the track. The track background should be a dark, desaturated version of the accent color to show the "remaining" goal.
