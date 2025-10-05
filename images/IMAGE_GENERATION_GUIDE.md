# Image Generation Guide

This guide explains how to generate the required images for production deployment.

## Required Images

### 1. Favicons

Generate favicons from the provided `favicon.svg`:

**Using Online Tool (Recommended):**
- Visit https://realfavicongenerator.net/
- Upload `images/favicon.svg`
- Download package and extract:
  - `favicon-16x16.png` → root directory
  - `favicon-32x32.png` → root directory
  - `apple-touch-icon.png` → root directory
  - `favicon-192x192.png` → images/ directory
  - `favicon-512x512.png` → images/ directory

**Using ImageMagick CLI:**
```bash
# Install ImageMagick first
brew install imagemagick  # macOS
# or: sudo apt-get install imagemagick  # Linux

# Generate PNG favicons from SVG
convert images/favicon.svg -resize 16x16 favicon-16x16.png
convert images/favicon.svg -resize 32x32 favicon-32x32.png
convert images/favicon.svg -resize 180x180 apple-touch-icon.png
convert images/favicon.svg -resize 192x192 images/favicon-192x192.png
convert images/favicon.svg -resize 512x512 images/favicon-512x512.png
```

### 2. Open Graph / Social Media Image (og-image.png)

**Dimensions:** 1200 x 630 pixels
**Format:** PNG or JPG
**File:** `images/og-image.png`

**Design Requirements:**
- Brand color: #2563eb (primary blue)
- Include text: "Causal Attribution API"
- Subtitle: "Scientific Marketing Attribution"
- Add causal diagram visual (nodes with arrows)
- Include key benefit: "10-500x cheaper than competitors"

**Tools to Create:**

1. **Canva (easiest):**
   - Use template: "Facebook Post" (1200x630)
   - Add background: #2563eb
   - Add white text: "Causal Attribution API"
   - Add subtitle and graphics
   - Export as PNG

2. **Figma:**
   - Create 1200x630 frame
   - Design with brand colors
   - Export as PNG

3. **HTML to Image (automated):**
```html
<!-- Save as og-template.html and use html2canvas or similar tool -->
<div style="width: 1200px; height: 630px; background: #2563eb; color: white;
            display: flex; flex-direction: column; justify-content: center;
            align-items: center; font-family: sans-serif;">
  <h1 style="font-size: 72px; margin: 0;">Causal Attribution API</h1>
  <p style="font-size: 36px; margin: 20px 0;">Scientific Marketing Attribution</p>
  <p style="font-size: 28px; margin: 10px 0;">10-500x cheaper than competitors</p>
  <svg width="200" height="100" style="margin-top: 30px;">
    <circle cx="50" cy="50" r="15" fill="white"/>
    <circle cx="150" cy="50" r="15" fill="white"/>
    <line x1="65" y1="50" x2="135" y2="50" stroke="white" stroke-width="3"/>
  </svg>
</div>
```

### 3. Logo Image (Optional)

**File:** `images/logo.png`
**Dimensions:** 512 x 512 pixels
**Format:** PNG with transparency

Use the same design as favicon.svg but higher resolution.

## Quick Generation Script

```bash
#!/bin/bash
# generate-images.sh

# Requires: imagemagick, librsvg

# Generate favicons
rsvg-convert -w 16 -h 16 images/favicon.svg > favicon-16x16.png
rsvg-convert -w 32 -h 32 images/favicon.svg > favicon-32x32.png
rsvg-convert -w 180 -h 180 images/favicon.svg > apple-touch-icon.png
rsvg-convert -w 192 -h 192 images/favicon.svg > images/favicon-192x192.png
rsvg-convert -w 512 -h 512 images/favicon.svg > images/favicon-512x512.png
rsvg-convert -w 512 -h 512 images/favicon.svg > images/logo.png

echo "✅ Favicons generated successfully"
echo "⚠️  Still need to create og-image.png (1200x630) manually using Canva/Figma"
```

## Verification Checklist

After generating images, verify:

- [ ] `favicon-16x16.png` exists in root
- [ ] `favicon-32x32.png` exists in root
- [ ] `apple-touch-icon.png` exists in root
- [ ] `images/favicon-192x192.png` exists
- [ ] `images/favicon-512x512.png` exists
- [ ] `images/og-image.png` exists (1200x630)
- [ ] `images/logo.png` exists (optional)
- [ ] Test on https://cards-dev.twitter.com/validator
- [ ] Test on https://developers.facebook.com/tools/debug/

## Image Optimization

Before deployment, optimize images:

```bash
# Install optimization tools
npm install -g pngquant imagemin-cli

# Optimize PNGs
pngquant --quality=80-95 --ext .png --force favicon-*.png
pngquant --quality=80-95 --ext .png --force images/*.png

# Or use ImageOptim (macOS GUI app)
```

## Alternative: Use Placeholder Images

For testing, you can use placeholder images:

```bash
# Create simple colored square placeholders
convert -size 32x32 xc:#2563eb favicon-32x32.png
convert -size 16x16 xc:#2563eb favicon-16x16.png
convert -size 180x180 xc:#2563eb apple-touch-icon.png
convert -size 1200x630 xc:#2563eb images/og-image.png
```
