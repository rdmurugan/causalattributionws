#!/bin/bash
# Generate placeholder images for immediate deployment
# These are simple colored squares - replace with proper branded images later

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Trying with librsvg..."
    if ! command -v rsvg-convert &> /dev/null; then
        echo "❌ Neither ImageMagick nor librsvg found."
        echo "Install with: brew install imagemagick  (macOS)"
        echo "          or: sudo apt-get install imagemagick  (Linux)"
        exit 1
    fi
    # Use SVG to generate images
    rsvg-convert -w 16 -h 16 images/favicon.svg > favicon-16x16.png
    rsvg-convert -w 32 -h 32 images/favicon.svg > favicon-32x32.png
    rsvg-convert -w 180 -h 180 images/favicon.svg > apple-touch-icon.png
    rsvg-convert -w 192 -h 192 images/favicon.svg > images/favicon-192x192.png
    rsvg-convert -w 512 -h 512 images/favicon.svg > images/favicon-512x512.png
    rsvg-convert -w 512 -h 512 images/favicon.svg > images/logo.png
    rsvg-convert -w 1200 -h 630 images/favicon.svg > images/og-image-temp.png

    # Resize og-image to proper dimensions
    convert images/og-image-temp.png -resize 1200x630! -background '#2563eb' -gravity center images/og-image.png
    rm images/og-image-temp.png
else
    # Generate simple colored placeholders
    echo "Generating placeholder images..."

    # Root favicons
    convert -size 16x16 xc:'#2563eb' favicon-16x16.png
    convert -size 32x32 xc:'#2563eb' favicon-32x32.png
    convert -size 180x180 xc:'#2563eb' apple-touch-icon.png

    # Images directory
    convert -size 192x192 xc:'#2563eb' images/favicon-192x192.png
    convert -size 512x512 xc:'#2563eb' images/favicon-512x512.png
    convert -size 512x512 xc:'#2563eb' images/logo.png

    # OG image with text
    convert -size 1200x630 xc:'#2563eb' \
        -fill white -font Helvetica-Bold -pointsize 72 -gravity center \
        -annotate +0-100 'Causal Attribution API' \
        -pointsize 36 -annotate +0+0 'Scientific Marketing Attribution' \
        -pointsize 28 -annotate +0+100 '10-500x cheaper than competitors' \
        images/og-image.png
fi

echo "✅ Placeholder images generated successfully!"
echo ""
echo "Files created:"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - apple-touch-icon.png"
echo "  - images/favicon-192x192.png"
echo "  - images/favicon-512x512.png"
echo "  - images/logo.png"
echo "  - images/og-image.png"
echo ""
echo "⚠️  These are placeholder images. For production, create branded images."
echo "   See images/IMAGE_GENERATION_GUIDE.md for details."
