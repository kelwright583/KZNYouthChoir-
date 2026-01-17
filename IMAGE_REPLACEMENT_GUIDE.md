# KZN Youth Choir Image Replacement Guide

This guide explains which images need to be added to replace the placeholder images with actual KZN Youth Choir photos.

## Image Location
All images should be placed in: `apps/public-site/public/images/`

## Required Images

### Hero Carousel Images
- **`choir-hero-1.jpg`** - Main hero image for the carousel (should be a vibrant performance shot with choir members in traditional attire, similar to the image you shared - colorful beaded necklaces, expressive faces, raised hands)

### Home Page Images
- **`choir-about-1.jpg`** - Main about section image (choir performing together, wide shot)
- **`choir-community.jpg`** - Community values card image (choir members together, showing unity)
- **`choir-heritage.jpg`** - Heritage values card image (traditional South African elements, cultural representation)
- **`choir-youth.jpg`** - Youth values card image (young choir members)
- **`choir-excellence.jpg`** - Excellence values card image (choir in performance, showing skill)
- **`choir-performance-1.jpg`** - Achievement section background image (choir performing, preferably from Vienna competition or similar)
- **`choir-auditions.jpg`** - Join Us card image (choir members, welcoming/encouraging)
- **`choir-support.jpg`** - Support Us card image (choir in action, community support)
- **`choir-events.jpg`** - Attend Events card image (choir performing at an event)

### Component Images
- **`choir-event-default.jpg`** - Default image for events list (used when events don't have their own image)

## Image Specifications

### Recommended Dimensions
- **Hero images**: 1200x800px or larger (16:9 aspect ratio)
- **Card images**: 600x400px or larger (3:2 aspect ratio)
- **Values cards**: 400x300px or larger (4:3 aspect ratio)

### Image Format
- Use **JPG** format for photos
- Optimize images for web (keep file sizes reasonable - under 500KB each)
- Ensure images are high quality but web-optimized

## Where to Get Images

1. **Official KZN Youth Choir Gallery**: https://kznyouthchoir.co.za/gallery/
2. **Social Media**: Instagram and Facebook via https://linktr.ee/kznyouthchoir
3. **Contact the Choir**: Request high-resolution images via https://kznyouthchoir.co.za/contact-us/

## Image Style Recommendations

Based on the image you shared, look for:
- **Vibrant colors** - Traditional beaded necklaces and attire
- **Expressive faces** - Choir members singing with passion
- **Dynamic poses** - Raised hands, movement, energy
- **Cultural representation** - Traditional South African elements
- **Performance shots** - On stage, during concerts
- **Group shots** - Multiple choir members together

## Fallback Behavior

All images have fallback URLs to Unsplash placeholders. If an image file doesn't exist, the site will automatically show a placeholder until you add the actual image. This means you can add images gradually - the site will continue to work.

## Next Steps

1. Download or obtain the KZN Youth Choir images
2. Name them according to the list above
3. Place them in `apps/public-site/public/images/`
4. Refresh your browser to see the new images

## Additional Pages

The following pages also use images that can be updated:
- About page (`apps/public-site/src/app/about/page.tsx`)
- Auditions page (`apps/public-site/src/app/auditions/page.tsx`)
- Support page (`apps/public-site/src/app/support/page.tsx`)
- Media page (`apps/public-site/src/app/media/page.tsx`)
- Events page (`apps/public-site/src/app/events/page.tsx`)
- Contact page (`apps/public-site/src/app/contact/page.tsx`)

You can update these pages similarly by replacing Unsplash URLs with local image paths.

