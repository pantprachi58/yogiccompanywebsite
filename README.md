# yogiccompany.com

The Yogic Company website, built with Next.js (App Router). Content is migrated
from the live site at `https://yogiccompany.com/` — see
[SITE_PARITY_AUDIT.md](SITE_PARITY_AUDIT.md) for the page-by-page mapping.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production build + server
```

## Environment

| Variable | Purpose |
| --- | --- |
| `ENQUIRY_WEBHOOK_URL` | Where every quiz form posts. Until it is set, `/api/enquiry` logs the submission and the form honestly tells the visitor it was not delivered. |

```bash
# .env.local
ENQUIRY_WEBHOOK_URL=https://your-crm.example.com/hooks/yogic-enquiry
```

## Stack

| Concern | Library |
| --- | --- |
| Framework | Next.js 16 (App Router, JavaScript) + React 19 |
| Grid & UI primitives | Bootstrap 5 + React-Bootstrap (`Offcanvas`, `Accordion`) |
| Sliders | Swiper |
| Icons | react-icons (Feather + Font Awesome 6) |
| Scroll animation | AOS |
| Lightbox | yet-another-react-lightbox |
| Forms | react-hook-form (contact/booking), custom multi-step quiz component |
| Fonts | `next/font/google` — Newsreader (display) + Albert Sans (body), self-hosted at build time |

## Structure

```
app/                 routes, plus sitemap.js, robots.js, not-found.js, api/enquiry
  globals.css        the whole design system: tokens, components, responsive rules
components/
  layout/            Header, Navigation, MobileNav, Logo, Footer
  ui/                Button, SectionHeading, PageHeader, Reveal, Marquee, Glyph,
                     LeafOrnament, ProgramCard, ArticleCard, ConditionCard,
                     TestimonialCard,
                     RichBlocks, GoToTop, AosProvider
  sections/          Hero, AboutIntro, CaseStudyBand, ProgramsSection, ClassTabs,
                     ClassesSection, ConditionsSection, BreathingCore, TeacherProfile,
                     SeriesSection, JournalPreview, ArticleIndex, ArticleLayout,
                     Testimonials (Instagram-linked cards), ReviewGallery,
                     VideoTestimonials, GalleryGrid,
                     FaqAccordion, CtaBand, SocialStrip, SutraQuote
  forms/             QuizForm (multi-step), ContactForm, BookingForm, NewsletterForm
lib/
  site.js            company details, socials, navigation and footer link maps
  redirects.mjs      every legacy live URL → its new route
  content/           blogs, meditation, sutras, whitepaper, programs, classes,
                     conditions, team, testimonials, reviews, forms, faq, gallery
public/images/       brand, hero, about, team, studio, conditions, programs,
                     articles, reviews, testimonials
```

All copy lives in `lib/content/` — editing a page's text should not mean touching JSX.

## Content pipeline

Long-form content (28 blog articles, 6 meditation practices, 7 Yoga Sutra chapters,
the white paper) was extracted from the live pages into structured blocks
(`{type: "h2" | "h3" | "p" | "ul" | "ol", …}`) and is rendered by
`components/ui/RichBlocks.jsx`. Inline HTML in those blocks is restricted to a
whitelist of `a`/`strong`/`em`/`b`/`i`/`sup`/`sub` applied at migration time.

## Legacy URLs

`lib/redirects.mjs` holds 62 permanent redirects so every published Yogic Company
link keeps working — `/aboutus`, `/cure`, `/facebook`, `/program1-3`, `/form1-6`,
`/accesstostillness`, `/samadhi1`, and all 34 `/pageNNNNNNNN.html` article URLs.

## Design tokens

Defined once on `:root` in `app/globals.css`:

`--yc-primary #4b6355` · `--yc-secondary #babdb1` · `--yc-tint #dadfd3` ·
`--yc-cream #eae4d8` · `--yc-cream-light #f3efe8` · `--yc-muted #9ba497` ·
`--yc-text #7b8a7c` · `--yc-heading #3f5347`

## Things still to wire up

- **Quiz forms** need `ENQUIRY_WEBHOOK_URL` (see above). The contact and booking
  forms in `components/forms/ContactForm.jsx` and `BookingForm.jsx` also need an
  endpoint; both say so on the page.
- **Vibhuti Pada part 2** — the live site serves the same content at `/vibhuti1`
  and `/vibhuti2`. The real second half (sutras 3.28–3.56) needs supplying.
- **Testimonial attributions** — the live home page and About page disagree on
  which wellness area belongs to which person, and the About page's own mobile
  and desktop layouts swap Santul's and Shabir's; the desktop version is used.
- `site.url` in `lib/site.js` is `https://yogiccompany.com` — change it if the site
  is deployed elsewhere, since canonicals, OG tags and the sitemap derive from it.
