# Jan Morgan Legal Nurse Consulting - public site

A one-page static site. No build step, no framework, no dependencies. It is
independent of the Vite/React workspace app in the rest of this repo.

## Files

- `index.html` - the page. All copy lives here.
- `styles.css` - styles. Palette and type are CSS variables at the top.
- `site.js` - the phone-width menu and the intake form fallback.
- `assets/jan-morgan.jpg` - headshot.
- `favicon.svg` - the call-light mark.
- `robots.txt`

## Run locally

```bash
cd site && python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deploy

Upload the `site/` folder as-is to any static host (Netlify, Cloudflare
Pages, GitHub Pages, S3, or the hosting that comes with the domain). Point the
host at `site/` as the publish directory. There is nothing to build.

## The intake form

`index.html` has an intake form. Out of the box it does not post anywhere:
`site.js` turns the fields into a pre-filled email (up to about 1,500 characters; longer text is redirected to a direct email) to the address in the form's
`data-to` attribute and opens the visitor's mail program. That works without a
server but depends on the visitor having a mail program configured.

To have submissions delivered without that dependency, sign up for a form
service (Netlify Forms, Formspree, Basin, or similar), then set the form's
`action` attribute to the service's `https://` endpoint. `site.js` steps aside
automatically when `action` starts with `http`.

The form asks the visitor to confirm nothing attached contains protected health
information. Keep that checkbox; the practice does not accept records before a
Business Associate Agreement is signed.

## Editing copy

The wording is Jan's, and the practice's house style applies: no em dashes or
en dashes in the site's own prose (use a hyphen, comma, or colon). Facts on the
page were confirmed with Jan on 2026-09-14 (fees, turnaround, reply time,
travel states, Cerner and Epic, retirement from the hospital role).

## What is deliberately not on the site

- Street address (only "Elkhorn, Nebraska").
- Testimonials or case results. Add real ones only with written permission from
  the attorney, and never a verdict amount.
- A downloadable CV. Jan sends it on request.
- Anything about a specific matter or patient.
