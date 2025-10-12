# Hero Images

This directory contains optimized hero section images.

## Required Images

- `hero-van-technician.webp` - Main hero image (1x, ~30-40KB)
- `hero-van-technician@2x.webp` - Retina variant (2x, ~60-80KB)

## Image Specifications

- **Format**: WebP (optimized for web)
- **Dimensions**: 400x400px (1x), 800x800px (2x)
- **Display size**: 120-160px mobile, 200-240px desktop
- **Content**: RMS Tyres van with professional technician
- **Alt text**: "RMS Tyres mobile fitting van with professional technician"

## Optimization Notes

- Use `loading="lazy"` and `fetchpriority="low"` in Next.js Image component
- Images are loaded after hero content paints for optimal FCP
- Responsive sizing with `sizes` attribute for different viewports

## Placeholder

Until actual images are provided, the hero will display the SVG pattern background only.
