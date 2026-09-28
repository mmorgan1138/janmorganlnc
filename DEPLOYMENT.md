# Deployment Checklist for janmorganlnc.com

## Step 1: Register Domain
- [ ] Register `janmorganlnc.com` (Namecheap, Google Domains, GoDaddy, or your registrar)
- [ ] Note the registrar and login credentials

## Step 2: Choose & Configure Host

Pick one (all support static sites):

### Option A: Netlify (Recommended for ease)
- [ ] Create a Netlify account
- [ ] Connect your GitHub repo (if you have one) or drag-and-drop the `site/` folder
- [ ] Point your domain: Settings → Domain Management → Add custom domain
- [ ] Netlify automatically handles SSL, caching, and compression

### Option B: Cloudflare Pages
- [ ] Create a Cloudflare account
- [ ] Add your domain to Cloudflare (change nameservers at your registrar)
- [ ] Create a Pages project, connect to your repo or upload `site/` folder
- [ ] Cloudflare handles SSL and performance

### Option C: GitHub Pages
- [ ] Create a public GitHub repo named `janmorganlnc.com`
- [ ] Upload the `site/` folder contents to the repo root
- [ ] Settings → Pages → Deploy from branch (choose `main`)
- [ ] Point domain: Add a CNAME file with `janmorganlnc.com`, update registrar nameservers

### Option D: AWS S3 + CloudFront
- [ ] Create S3 bucket named `janmorganlnc.com`
- [ ] Upload `site/` contents to bucket
- [ ] Create CloudFront distribution pointing to the bucket
- [ ] Point your domain via Route 53 or your registrar

## Step 3: SSL Certificate
- [ ] Verify HTTPS is enabled (all hosts above provide free SSL)
- [ ] Test: https://janmorganlnc.com should load without warnings

## Step 4: Search Engine Submission
- [ ] Create Google Search Console account (search.google.com/search-console)
- [ ] Add property for https://janmorganlnc.com
- [ ] Verify domain ownership (choose preferred method)
- [ ] Submit `sitemap.xml` to GSC (Sitemaps section)
- [ ] Check coverage for crawl errors in first week

- [ ] Create Bing Webmaster Tools account (submit same sitemap)

## Step 5: Local SEO
- [ ] Create Google Business Profile (business.google.com)
  - Business name: Jan Morgan Legal Nurse Consulting, LLC
  - Location: Elkhorn, Nebraska (or just state if travel-based)
  - Phone: 402-290-7913
  - Email: jan@janmorganlnc.com
  - Website: https://janmorganlnc.com
  - Service areas: Nebraska, Iowa, Missouri, Kansas, Colorado, Wyoming, South Dakota
  - Services: Expert nurse witness, Legal nurse consulting, Medical record review, Standard of care analysis
- [ ] Verify listing (Google will send a postcard or email code)
- [ ] Upload business photo (can use the headshot)

## Step 6: Email (Optional but Recommended)
- [ ] Set up email forwarding at your domain registrar (or use a mail service like Zoho Mail, Google Workspace)
  - Primary: `jan@janmorganlnc.com` (or forward to your existing email if using simple forwarding)
  - Optional aliases: `info@janmorganlnc.com`, `hello@janmorganlnc.com` (both can forward to jan@janmorganlnc.com)
- [ ] Test: Send email to the forwarder, verify it arrives

## Step 7: Performance & Monitoring
- [ ] Test page load speed: PageSpeed Insights (pagespeed.web.dev)
  - Target: >90 on both mobile and desktop
  - If <90, optimize with host's caching settings
- [ ] Test on mobile: Use mobile device or Chrome DevTools device emulation
- [ ] Monitor uptime: Use Uptime Robot (free tier) to ping the site daily
- [ ] Set up GSC email alerts for crawl errors and indexing issues

## Step 8: Ongoing
- [ ] Month 1: Monitor Google Search Console for impressions (should start appearing within 1-2 weeks)
- [ ] Month 1-3: Track keyword rankings for "expert nurse witness," "legal nurse consultant," etc. (use free tools like Ubersuggest or SE Ranking)
- [ ] Month 3+: Build backlinks (reach out to legal directories, bar associations, referral partners for mentions)
- [ ] Update sitemap.xml if content changes (last modified date will auto-update on redeploy)

## Quick Troubleshooting

**"Domain not loading"**: 
- Check DNS propagation (DNSChecker.org)
- Wait 24-48 hours for nameserver changes
- Verify host configuration points to correct origin

**"HTTPS shows warning"**:
- Wait 5-10 minutes for SSL cert issuance
- Clear browser cache (Cmd+Shift+Delete)
- Contact host support if it persists

**"Low Google ranking after 1 month"**:
- This is normal. SEO takes 3-6 months to show results
- Ensure Google Business Profile is fully verified
- Build quality backlinks (referrals, directories)
- Check GSC for indexing issues

## Done ✅

Once all steps above are complete, janmorganlnc.com is live and will start appearing in search results within 2-4 weeks. Monitor Google Search Console regularly to track performance and fix any issues.
