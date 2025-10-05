# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-ready static marketing website for the Causal Attribution API. The site is built with vanilla HTML/CSS (no JavaScript framework) and features advanced SEO optimization, performance enhancements, and analytics integration.

**Key value proposition**: Scientific marketing attribution using causal inference methods, priced at 10-500x cheaper than competitors.

**Status**: Production-ready with comprehensive SEO, performance optimization, and deployment configuration.

## Architecture

### File Structure

```
causalattributionws/
├── index.html              # Landing page with hero, features, pricing
├── css/
│   ├── style.css           # Main site styles (CSS variables, components)
│   └── docs.css            # Documentation-specific styles
└── docs/                   # Documentation pages
    ├── template.html       # Template with {{PLACEHOLDERS}} for new pages
    ├── documentation.html  # API reference
    ├── getting-started.html
    ├── examples.html
    ├── pricing.html
    ├── benefits.html
    ├── agentic-ai.html
    └── faq.html
```

### Design System

All colors and spacing use CSS variables defined in `css/style.css`:
- Primary color: `--primary-color: #2563eb`
- Secondary color: `--secondary-color: #7c3aed`
- Success color: `--success-color: #10b981`
- Other variables for text, backgrounds, borders, and code blocks

### Page Template System

New documentation pages should use `docs/template.html` as the base structure. Replace these placeholders:
- `{{TITLE}}` - Browser tab title
- `{{PAGE_TITLE}}` - H1 heading on the page
- `{{PAGE_SUBTITLE}}` - Subtitle under the heading
- `{{CONTENT}}` - Main page content

All documentation pages include:
- Consistent header navigation linking back to main site
- Left sidebar navigation to all doc sections
- Footer with product, resources, and contact links

## Local Development

**Test the site locally** using any static server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Production Features

### SEO Optimization (Complete)
- All pages have comprehensive meta tags (title, description, keywords, canonical URLs)
- Open Graph tags for social media (Facebook, LinkedIn)
- Twitter Card tags for rich previews
- JSON-LD structured data (SoftwareApplication, Organization, FAQPage)
- XML sitemap (sitemap.xml) with all pages
- Robots.txt for search engine crawling
- Mobile-responsive and fast-loading

### Performance Files
- `_headers` - HTTP headers for Netlify/Cloudflare (caching, security)
- `.htaccess` - Apache server configuration (compression, caching)
- `site.webmanifest` - PWA manifest for mobile devices
- Image optimization guides in `images/IMAGE_GENERATION_GUIDE.md`

### Analytics Setup
- Templates in `analytics-setup.html` for:
  - Google Analytics 4 (GA4)
  - Microsoft Clarity
  - Plausible Analytics
  - Hotjar
- Custom event tracking templates included

## Deployment

**Complete deployment guide**: See `PRODUCTION_DEPLOYMENT.md`

**Quick deployment options**:
1. **GitHub Pages** (primary): https://rdmurugan.github.io/causallm/
2. **Netlify**: Uses `_headers` file automatically
3. **Vercel**: Fast CDN deployment
4. **Apache Server**: Uses `.htaccess` file
5. **Cloudflare Pages**: Uses `_headers` file

**Before deploying**:
1. Generate images: `./generate-placeholders.sh` (or create branded images)
2. Add analytics tracking IDs to HTML files
3. Update URLs if using custom domain

## Content Guidelines

The site emphasizes:
1. **Scientific credibility** - References peer-reviewed causal inference methods (PC Algorithm, Propensity Score Matching, Doubly Robust Estimation, Instrumental Variables)
2. **Cost advantage** - Usage-based pricing ($0.001/call, $0.00001/touchpoint) vs expensive subscriptions
3. **Causation vs correlation** - Core differentiator from traditional attribution

## Contact Information

- Email: durai@infinidatum.net
- GitHub: https://github.com/rdmurugan/causallm
