# Causal Attribution API - Website

This folder contains the marketing website for the Causal Attribution API.

## Structure

```
causalattributionws/
├── index.html              # Main landing page
├── css/
│   ├── style.css           # Main website styles
│   └── docs.css            # Documentation page styles
├── docs/                   # Documentation HTML pages (to be created)
│   ├── documentation.html  # API reference
│   ├── getting-started.html
│   ├── examples.html
│   ├── pricing.html
│   ├── benefits.html
│   ├── agentic-ai.html
│   └── faq.html
└── README.md               # This file
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/causalattributionws`
   - Save

2. **Access website:**
   - URL: `https://rdmurugan.github.io/causallm/`
   - Or custom domain if configured

### Option 2: Netlify

1. **Deploy to Netlify:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy from this directory
   cd causalattributionws
   netlify deploy --prod
   ```

2. **Or use Netlify Drop:**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `causalattributionws` folder

### Option 3: Vercel

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy from this directory
   cd causalattributionws
   vercel --prod
   ```

### Option 4: Custom Server

Upload files to any web server:
```bash
# Example: Using SCP to upload
scp -r causalattributionws/* user@yourserver.com:/var/www/html/
```

## Documentation Pages

The `docs/` folder should contain HTML versions of the documentation:

- **documentation.html** - Complete API reference
- **getting-started.html** - Step-by-step setup guide
- **examples.html** - Code examples in multiple languages
- **pricing.html** - Pricing details and comparisons
- **benefits.html** - Benefits of causal attribution
- **agentic-ai.html** - AI agent integration guide
- **faq.html** - Frequently asked questions

### Converting Markdown to HTML

The markdown documentation in `/causalattribution` can be converted to HTML using:

**Option 1: Manual conversion**
- Copy content from markdown files
- Wrap in HTML template with navigation
- Add proper styling with docs.css

**Option 2: Using Pandoc**
```bash
# Install pandoc
brew install pandoc  # macOS
# or: sudo apt-get install pandoc  # Linux

# Convert each markdown file
pandoc ../causalattribution/API_DOCUMENTATION.md -o docs/documentation.html --standalone --css=../css/docs.css
```

**Option 3: Static site generator**
Use Jekyll, Hugo, or MkDocs to automatically convert markdown to HTML.

## Local Development

To test the website locally:

**Option 1: Python**
```bash
cd causalattributionws
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option 2: Node.js**
```bash
npx http-server causalattributionws -p 8000
# Visit: http://localhost:8000
```

**Option 3: PHP**
```bash
cd causalattributionws
php -S localhost:8000
# Visit: http://localhost:8000
```

## Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Accent color */
    --success-color: #10b981;      /* Success states */
    /* ... */
}
```

### Content

- **Landing page**: Edit `index.html`
- **Navigation**: Update nav links in `index.html` header
- **Footer**: Edit footer section in `index.html`
- **Documentation**: Create/edit HTML files in `docs/` folder

## SEO Optimization

Add to `<head>` section for better SEO:

```html
<meta name="description" content="Causal Attribution API - Scientific marketing attribution using causal inference. 10-500x cheaper than competitors.">
<meta name="keywords" content="marketing attribution, causal inference, API, data science">
<meta property="og:title" content="Causal Attribution API">
<meta property="og:description" content="Scientific marketing attribution powered by causal inference">
<meta property="og:image" content="https://yoursite.com/og-image.png">
<meta name="twitter:card" content="summary_large_image">
```

## Analytics

Add analytics tracking:

**Google Analytics:**
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Performance

The website is optimized for performance:
- No external dependencies
- Minimal CSS (~10KB gzipped)
- No JavaScript required
- Mobile-responsive design
- Fast loading (< 1 second)

## Browser Support

Supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about the website:
- **Email**: durai@infinidatum.net
- **GitHub**: https://github.com/rdmurugan/causallm

## License

Content and design for the Causal Attribution API website.
