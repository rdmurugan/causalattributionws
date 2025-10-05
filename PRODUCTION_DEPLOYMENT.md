# Production Deployment Guide

Complete checklist and instructions for deploying the Causal Attribution API website to production.

## 📋 Pre-Deployment Checklist

### 1. Generate Required Images

**Generate favicons and OG images:**

```bash
# Run the placeholder generation script
./generate-placeholders.sh

# OR manually create branded images (recommended for production)
# See: images/IMAGE_GENERATION_GUIDE.md
```

**Required files:**
- [ ] `favicon-16x16.png` (root)
- [ ] `favicon-32x32.png` (root)
- [ ] `apple-touch-icon.png` (root)
- [ ] `images/favicon-192x192.png`
- [ ] `images/favicon-512x512.png`
- [ ] `images/og-image.png` (1200x630)
- [ ] `images/logo.png` (optional)

### 2. Add Analytics Tracking

**Add analytics to all HTML files:**

1. Choose your analytics provider (recommended: Google Analytics 4 + Microsoft Clarity)
2. Get your tracking IDs
3. Copy code from `analytics-setup.html`
4. Add to `<head>` section of:
   - [ ] `index.html`
   - [ ] `docs/documentation.html`
   - [ ] `docs/getting-started.html`
   - [ ] `docs/examples.html`
   - [ ] `docs/pricing.html`
   - [ ] `docs/benefits.html`
   - [ ] `docs/agentic-ai.html`
   - [ ] `docs/faq.html`

### 3. Update Configuration Files

**Update URLs to match your deployment:**

If deploying to a different domain, update these files:

```bash
# Find and replace all URLs
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) \
  -exec sed -i '' 's|https://rdmurugan.github.io/causallm/|https://yourdomain.com/|g' {} +
```

**Files to check:**
- [ ] `index.html` - canonical URL, OG URLs
- [ ] All `docs/*.html` files - canonical URLs, OG URLs
- [ ] `sitemap.xml` - all page URLs
- [ ] `robots.txt` - sitemap URL

### 4. SEO Verification

**Test SEO elements:**

- [ ] **Meta tags**: Verify all pages have proper title, description, keywords
- [ ] **Open Graph**: Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] **Twitter Cards**: Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] **Structured Data**: Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] **Mobile-friendly**: Test with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 5. Performance Optimization

**Minify CSS (optional):**

```bash
# Install clean-css-cli
npm install -g clean-css-cli

# Minify CSS files
cleancss -o css/style.min.css css/style.css
cleancss -o css/docs.min.css css/docs.css

# Update HTML files to use minified versions
# <link rel="stylesheet" href="css/style.min.css">
```

**Optimize Images:**

```bash
# Install optimization tools
npm install -g imagemin-cli pngquant-bin

# Optimize all PNGs
imagemin images/*.png --out-dir=images/
imagemin *.png --out-dir=./
```

**Test performance:**
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [GTmetrix](https://gtmetrix.com/)
- [ ] [WebPageTest](https://www.webpagetest.org/)

## 🚀 Deployment Methods

### Method 1: GitHub Pages (Recommended)

**Steps:**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production-ready deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/` (root)
   - Click Save

3. **Verify deployment:**
   - Wait 2-5 minutes
   - Visit: `https://yourusername.github.io/reponame/`

4. **Add custom domain (optional):**
   - Add `CNAME` file with your domain
   - Configure DNS settings
   - Enable HTTPS in GitHub Pages settings

**Files used:**
- `_headers` (not supported by GitHub Pages - use Netlify instead)
- `.htaccess` (not supported by GitHub Pages - Apache only)

### Method 2: Netlify

**Steps:**

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Deploy:**
   ```bash
   # Initial deployment
   netlify init

   # Or direct deploy
   netlify deploy --prod
   ```

3. **Configure:**
   - The `_headers` file will be automatically used
   - Configure custom domain in Netlify dashboard
   - Enable HTTPS (automatic)

**Files used:**
- `_headers` ✅ (fully supported)
- `netlify.toml` (optional - for advanced config)

### Method 3: Vercel

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Configure:**
   - Create `vercel.json` for headers:
     ```json
     {
       "headers": [
         {
           "source": "/(.*)",
           "headers": [
             { "key": "X-Frame-Options", "value": "DENY" },
             { "key": "X-Content-Type-Options", "value": "nosniff" }
           ]
         }
       ]
     }
     ```

### Method 4: Apache Server

**Steps:**

1. **Upload files via FTP/SSH:**
   ```bash
   # Using SCP
   scp -r * user@server.com:/var/www/html/

   # Using rsync
   rsync -avz --exclude='.git' . user@server.com:/var/www/html/
   ```

2. **Verify `.htaccess`:**
   - Ensure `.htaccess` is uploaded
   - Verify Apache has `mod_rewrite`, `mod_headers`, `mod_expires` enabled

3. **Test configuration:**
   ```bash
   # SSH into server
   apachectl configtest
   ```

**Files used:**
- `.htaccess` ✅ (fully supported)

### Method 5: Cloudflare Pages

**Steps:**

1. **Connect GitHub repository:**
   - Visit [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: (none)
     - Build output directory: `/`

2. **Deploy:**
   - Cloudflare will auto-deploy on git push

3. **Configure:**
   - Add `_headers` file (supported)
   - Configure custom domain
   - Enable automatic HTTPS

## 📊 Post-Deployment Tasks

### 1. Submit to Search Engines

**Google Search Console:**
```bash
# Submit sitemap
https://search.google.com/search-console
# Add property: https://yourdomain.com
# Submit sitemap: https://yourdomain.com/sitemap.xml
```

**Bing Webmaster Tools:**
```bash
# Submit sitemap
https://www.bing.com/webmasters
# Add site: https://yourdomain.com
# Submit sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Monitor Performance

**Setup monitoring:**
- [ ] Google Analytics - Track traffic
- [ ] Microsoft Clarity - User behavior
- [ ] Google Search Console - Search performance
- [ ] UptimeRobot - Uptime monitoring (free)

### 3. SEO Optimization

**Key actions:**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create backlinks to the site
- [ ] Share on social media
- [ ] Add to API directories (RapidAPI, APIs.io, etc.)
- [ ] Write blog posts about causal attribution
- [ ] Create YouTube videos/demos

### 4. Social Media Setup

**Share optimized links:**
- [ ] LinkedIn - Share with causal attribution hashtags
- [ ] Twitter/X - Tweet about the API
- [ ] Reddit - Post in r/webdev, r/marketing, r/datascience
- [ ] Hacker News - Submit to Show HN
- [ ] Product Hunt - Launch the product

### 5. Ongoing Maintenance

**Monthly tasks:**
- [ ] Check Google Search Console for errors
- [ ] Review analytics for traffic patterns
- [ ] Update content based on user behavior
- [ ] Check for broken links
- [ ] Update sitemap lastmod dates for changed pages

**Quarterly tasks:**
- [ ] Audit SEO performance
- [ ] Update meta descriptions based on performance
- [ ] Review and update pricing/features
- [ ] Check competitor websites for new features

## 🔍 SEO Best Practices

### Technical SEO Checklist
- [✅] All pages have unique title tags
- [✅] All pages have unique meta descriptions
- [✅] All pages have canonical URLs
- [✅] Sitemap.xml created and submitted
- [✅] Robots.txt configured properly
- [✅] Structured data (JSON-LD) implemented
- [✅] Open Graph tags for social sharing
- [✅] Twitter Card tags configured
- [✅] Mobile-responsive design
- [✅] Fast page load times (<3 seconds)
- [✅] HTTPS enabled (after deployment)
- [✅] No broken links
- [✅] Images have alt text
- [✅] Proper heading hierarchy (H1 → H6)

### Content SEO Checklist
- [ ] High-quality, original content
- [ ] Target keywords in titles and headings
- [ ] Internal linking between pages
- [ ] External links to authoritative sources
- [ ] Regular content updates
- [ ] Blog or news section (future)
- [ ] FAQ page with common questions
- [ ] Use case examples and case studies

## 🛠️ Troubleshooting

### Images not loading
```bash
# Check file paths
ls -la images/
ls -la *.png

# Verify permissions
chmod 644 images/*.png
chmod 644 *.png
```

### Headers not working
```bash
# For Netlify: Check _headers syntax
# For Apache: Check .htaccess syntax
# Test headers: curl -I https://yourdomain.com
```

### Sitemap not found
```bash
# Verify sitemap.xml in root directory
# Check URL: https://yourdomain.com/sitemap.xml
# Ensure no .gitignore blocking it
```

### Analytics not tracking
```bash
# Verify tracking ID is correct
# Check browser console for errors
# Test with Google Tag Assistant Chrome extension
```

## 📈 Expected Results

### Week 1-2
- Site indexed by Google
- Initial traffic from direct visits
- Social media shares

### Month 1
- Organic search traffic starts
- Pages ranking for long-tail keywords
- 50-100 monthly visitors

### Month 3
- Main keywords starting to rank
- 500-1000 monthly visitors
- API key requests incoming

### Month 6+
- Top 10 rankings for target keywords
- 2000+ monthly visitors
- Steady API adoption

## 📞 Support

For deployment issues:
- **Email**: durai@infinidatum.net
- **GitHub Issues**: https://github.com/rdmurugan/causallm/issues

For SEO consultation:
- Consider hiring an SEO expert
- Use tools: Ahrefs, SEMrush, Moz

---

**Last Updated**: January 2025
**Version**: 1.0.0
