# SEO Configuration

## In Place

- ✅ **Meta tags**: Title, description optimized for keywords (expert nurse witness, critical care, medical record review)
- ✅ **Schema.org**: ProfessionalService structured data with contact, location, service areas
- ✅ **Sitemap**: `sitemap.xml` lists all page sections for crawler discovery
- ✅ **Robots.txt**: Allows all crawlers
- ✅ **Mobile responsive**: Fast, accessible across all devices
- ✅ **Image optimization**: Headshot at 800px, ~115KB
- ✅ **Semantic HTML**: Proper heading hierarchy (h1, h2, h3), semantic elements
- ✅ **Internal links**: FAQ links to services, fees links to engagements, services link to process
- ✅ **Open Graph**: Tags ready for social sharing (requires domain substitution)

## Host Configuration (After Deployment)

When deploying to your chosen host, configure these for best performance:

### Caching Headers
```
# Cache static assets for 1 year (they have content hashes)
assets/* → Cache-Control: public, max-age=31536000

# Cache HTML for 1 hour (content updates relatively often)
*.html → Cache-Control: public, max-age=3600

# Don't cache sitemap/robots
sitemap.xml, robots.txt → Cache-Control: public, max-age=86400
```

### Compression
- Enable gzip compression on all text assets (HTML, CSS, JavaScript)
- Enable brotli if your host supports it (better compression)

### Common Hosts

**Netlify**: Automatically handles caching and compression. Just upload the `site/` folder.

**Cloudflare Pages**: Automatically handles caching and compression. Connect your domain and enable it.

**GitHub Pages**: Upload to a repo; configure caching in your workflow (see GitHub Pages docs).

**AWS S3**: Create a CloudFront distribution; configure cache headers in S3 object metadata.

## Domain Setup

Domain: **janmorganlnc.com**

✅ Already configured:
1. `sitemap.xml` → janmorganlnc.com URLs
2. `index.html` → Canonical URL and Open Graph tags live
3. Ready to deploy

Next steps when live:
1. Submit `sitemap.xml` to Google Search Console (janmorganlnc.com/sitemap.xml)
2. Create a Google Business Profile for Jan's services
3. Verify domain ownership in Google Search Console

## Keyword Targets

The site targets these primary keywords:
- expert nurse witness
- legal nurse consultant
- medical record review
- critical care expert
- nursing standard of care

And long-tail variations:
- expert nurse witness Nebraska
- legal nurse consultant critical care
- medical record review for plaintiff counsel
- expert witness testimony

## Monitoring

After launch:
1. Monitor Google Search Console for impressions, clicks, and crawl issues
2. Track rankings for primary keywords (expect 3-6 months to see movement)
3. Build backlinks: reference from legal directories, bar association resources, etc.
4. Monitor page speed with Google PageSpeed Insights (target >90 score)

## Next Steps

- Local SEO: Set up Google Business Profile (highest ROI)
- Link building: Get mentioned in legal directories, plaintiff bar associations
- Content: FAQ could be expanded into a blog for long-tail keywords
