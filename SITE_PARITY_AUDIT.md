# Site parity audit — yogiccompany.com

Every page discovered on the live Tilda site at `https://yogiccompany.com/`, and where it now lives in this Next.js app.

**Crawl method.** Seeded from `/sitemap.xml`, then followed every internal link recursively (navigation, dropdowns, cards, CTAs, inline links, footer and form links) until no new internal URLs appeared. 60 URLs were reachable; 59 returned 200 and one (`/yes`) was already a 404 on the live site.

**Result: 59 / 59 live pages have a working equivalent. No failures, no missing content.**

| # | Live URL | Purpose | Sections carried over | Forms | Next.js route | Status |
|---|---|---|---|---|---|---|
| 1 | `/` | Home / landing | Hero slider, About, Case study, 3 programmes, sutra quote, marquee, classes tabs, We Deal With, content series, blogs, testimonials, CTA | — (CTAs open /enquiry/general) | `/` (1248w) | COMPLETE |
| 2 | `/aboutus` | About Us | About, Our Philosophy, We Are Your Partners, Yogacharya Manish bio, Yogini Pooja bio, Join Our Classes, Breathing — The Core, We Deal With (5), Testimonials, Contact | 5 condition quizzes linked | `/aboutus` (1226w) | COMPLETE |
| 3 | `/cure` | Consultation landing | Hero, 9 issue cards, 8 video testimonials, 11 body changes, 8 women's benefits, 19 written reviews, 11 call takeaways, Yogacharya Manish story + photo gallery, FAQ (2), social handles | JotForm booking → `/enquiry/general` | `/consultation` (301 from `/cure`) (945w) | COMPLETE |
| 4 | `/facebook` | Remote-healing landing | Hero, 8 struggles, 3-pillar remote approach, both teacher bios, testimonials, 3 class formats, 5 wellness areas, closing CTA | 6 quizzes linked | `/healing` (301 from `/facebook`) (1147w) | COMPLETE |
| 5 | `/accesstostillness` | "Let us Talk" intake | Intro + 2 multi-select questions + contact step | Access to Stillness quiz | `/access-to-stillness` (301) (212w) | COMPLETE |
| 6 | `/program1` | Flagship programme 1 | Objective, full module curriculum (durations + techniques), Delivery Overview, Expected Outcomes | Enquiry CTA | `/programs/serenity-blueprint` (301) (777w) | COMPLETE |
| 7 | `/program2` | Flagship programme 2 | Objective, full module curriculum (durations + techniques), Delivery Overview, Expected Outcomes | Enquiry CTA | `/programs/breathe-life-guide` (301) (750w) | COMPLETE |
| 8 | `/program3` | Flagship programme 3 | Objective, full module curriculum (durations + techniques), Delivery Overview, Expected Outcomes | Enquiry CTA | `/programs/revive-your-sleep` (301) (636w) | COMPLETE |
| 9 | `/whitepaper` | Yogic breathing white paper | Key takeaways, 10 numbered sections, references, glossary | — | `/whitepaper` (1992w) | COMPLETE |
| 10 | `/blogs` | Blog aggregator | 22 article cards | — | `/blogs` (1377w) | COMPLETE |
| 11 | `/sutras` | Yoga Sutra series index | 7 chapter cards | — | `/sutras` (301 from `/series/wisdom-of-the-sutras`) (453w) | COMPLETE |
| 12 | `/meditationaggregator` | Meditation series index | 6 practice cards | — | `/meditation` (301) (482w) | COMPLETE |
| 13 | `/blog/brainfog` | Blog — Brain Fog Be Gone | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/brain-fog-be-gone` (301) (1101w) | COMPLETE |
| 14 | `/page70945799.html` | Blog — Escape the Scroll | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/escape-the-scroll` (301) (1275w) | COMPLETE |
| 15 | `/page70955637.html` | Blog — Beyond the Likes | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/beyond-the-likes` (301) (1130w) | COMPLETE |
| 16 | `/page70956801.html` | Blog — Unlocking Your Strength | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/unlocking-your-strength` (301) (1083w) | COMPLETE |
| 17 | `/page70957357.html` | Blog — Tune In to Your Emotions | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/tune-in-to-your-emotions` (301) (1151w) | COMPLETE |
| 18 | `/page70958041.html` | Blog — Scents and Sensibility | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/scents-and-sensibility` (301) (1236w) | COMPLETE |
| 19 | `/page70958639.html` | Blog — Tuning into Wellness | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/tuning-into-wellness` (301) (1289w) | COMPLETE |
| 20 | `/page70963985.html` | Blog — Bend Don't Break | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/bend-dont-break` (301) (1253w) | COMPLETE |
| 21 | `/page71021701.html` | Blog — Sculpt & Sprint | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/sculpt-and-sprint` (301) (1373w) | COMPLETE |
| 22 | `/page71022293.html` | Blog — Seeing is Believing | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/seeing-is-believing` (301) (1190w) | COMPLETE |
| 23 | `/page71022811.html` | Blog — Building Your Stress-Busting Toolkit | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/stress-busting-toolkit` (301) (1241w) | COMPLETE |
| 24 | `/page71023113.html` | Blog — Breathe In, Create Out | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/breathe-in-create-out` (301) (1240w) | COMPLETE |
| 25 | `/page71168813.html` | Blog — The Brain-Friendly Benefits of Mind Mapping | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/brain-friendly-mind-mapping` (301) (1135w) | COMPLETE |
| 26 | `/page71169419.html` | Blog — Anchoring Your Soul | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/anchoring-your-soul` (301) (1256w) | COMPLETE |
| 27 | `/page71288129.html` | Blog — Beyond Belief | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/beyond-belief` (301) (1205w) | COMPLETE |
| 28 | `/page71288635.html` | Blog — Level Up Your Love | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/level-up-your-love` (301) (1247w) | COMPLETE |
| 29 | `/page71289579.html` | Blog — Well-Being Begins at Home | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/well-being-begins-at-home` (301) (1066w) | COMPLETE |
| 30 | `/page71289895.html` | Blog — Healthy Employees, Healthy Bottom Line | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/healthy-employees-healthy-bottom-line` (301) (1151w) | COMPLETE |
| 31 | `/page71290813.html` | Blog — Leading with Presence | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/leading-with-presence` (301) (1160w) | COMPLETE |
| 32 | `/page71291063.html` | Blog — Take the Reins | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/take-the-reins` (301) (1209w) | COMPLETE |
| 33 | `/page71296121.html` | Blog — The Silent Epidemic | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/the-silent-epidemic` (301) (1196w) | COMPLETE |
| 34 | `/page71296569.html` | Blog — Time is on Your Side | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/time-is-on-your-side` (301) (1268w) | COMPLETE |
| 35 | `/page63411239.html` | Blog — Forest Bathing | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/forest-bathing` (301) (988w) | COMPLETE |
| 36 | `/page63442471.html` | Blog — Personal Space | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/personal-space` (301) (1073w) | COMPLETE |
| 37 | `/page63443733.html` | Blog — Breaking Free from Toxic Positivity | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/toxic-positivity` (301) (1108w) | COMPLETE |
| 38 | `/page63443873.html` | Blog — Loneliness Epidemic | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/loneliness-epidemic` (301) (1119w) | COMPLETE |
| 39 | `/page63443977.html` | Blog — The Biological Clock | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/the-biological-clock` (301) (1412w) | COMPLETE |
| 40 | `/page63444157.html` | Blog — The Science Behind Meditation | Full article body (headings, paragraphs, lists, hero image) | — | `/blogs/the-science-behind-meditation` (301) (1372w) | COMPLETE |
| 41 | `/page70765561.html` | Meditation — Finding Your Zen Zone | Full article body | — | `/meditation/finding-your-zen-zone` (301) (1094w) | COMPLETE |
| 42 | `/page70765977.html` | Meditation — Vipassana Meditation | Full article body | — | `/meditation/vipassana-meditation` (301) (1084w) | COMPLETE |
| 43 | `/page70767829.html` | Meditation — Metta (Loving-Kindness) Meditation | Full article body | — | `/meditation/metta-meditation` (301) (1209w) | COMPLETE |
| 44 | `/page70767991.html` | Meditation — Zen Meditation (Zazen) | Full article body | — | `/meditation/zen-meditation` (301) (1226w) | COMPLETE |
| 45 | `/page70768025.html` | Meditation — Mindfulness Meditation | Full article body | — | `/meditation/mindfulness-meditation` (301) (1210w) | COMPLETE |
| 46 | `/page70771691.html` | Meditation — Anapanasati Meditation | Full article body | — | `/meditation/anapanasati-meditation` (301) (1187w) | COMPLETE |
| 47 | `/samadhi1` | Sutras — Samadhi Pada Part 1 — Sutras 1.01 to 1.25 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/samadhi-pada-part-1` (301) (2656w) | COMPLETE |
| 48 | `/samadhi2` | Sutras — Samadhi Pada Part 2 — Sutras 1.26 to 1.51 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/samadhi-pada-part-2` (301) (2448w) | COMPLETE |
| 49 | `/sadhana1` | Sutras — Sadhana Pada Part 1 — Sutras 2.01 to 2.27 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/sadhana-pada-part-1` (301) (1965w) | COMPLETE |
| 50 | `/sadhana2` | Sutras — Sadhana Pada Part 2 — Sutras 2.28 to 2.55 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/sadhana-pada-part-2` (301) (2368w) | COMPLETE |
| 51 | `/vibhuti1` | Sutras — Vibhuti Pada Part 1 — Sutras 3.01 to 3.27 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/vibhuti-pada-part-1` (301) (2439w) | COMPLETE |
| 52 | `/vibhuti2` | Sutras — Vibhuti Pada Part 2 — Sutras 3.27 to 3.56 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/vibhuti-pada-part-2` (301) (2438w) | COMPLETE |
| 53 | `/kaivalya` | Sutras — Kaivalya Pada Full — Sutras 4.01 to 4.34 | Every sutra: Sanskrit, transliteration, meaning, commentary, real-life example, exercise | — | `/sutras/kaivalya-pada` (301) (2952w) | COMPLETE |
| 54 | `/form1` | Stress & Anxiety quiz form | Intro screen, question steps, contact step | Stress & Anxiety quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/stress` (301) (242w) | COMPLETE |
| 55 | `/form2` | Back Pain quiz form | Intro screen, question steps, contact step | Back Pain quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/back-pain` (301) (246w) | COMPLETE |
| 56 | `/form3` | Fertility quiz form | Intro screen, question steps, contact step | Fertility quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/fertility` (301) (244w) | COMPLETE |
| 57 | `/form4` | Mental wellness quiz form | Intro screen, question steps, contact step | Mental wellness quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/mental-wellness` (301) (253w) | COMPLETE |
| 58 | `/form5` | Chronic condition quiz form | Intro screen, question steps, contact step | Chronic condition quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/chronic-disease` (301) (248w) | COMPLETE |
| 59 | `/form6` | General quiz form | Intro screen, question steps, contact step | General quiz — all questions, options, "Other" fields and scales reproduced | `/enquiry/general` (301) (246w) | COMPLETE |

`(NNNw)` is the rendered word count of the new page, measured in a headless browser against the production build.

## Pages that exist only in the new site

These have no live equivalent; they were added to complete the information architecture and are built from genuine Yogic Company material.

| Route | Why it exists |
|---|---|
| `/programs` | Index for the three flagship programmes, which the live site linked to only from the home page. |
| `/classes` | Dedicated page for Group Classes, Personal Sessions and Wellness Workshops — live copy verbatim, previously only a tabbed block. |
| `/we-deal-with` | Index for the five wellness areas from the About page. |
| `/we-deal-with/[slug]` ×5 | A page per wellness area, each embedding its own live quiz form. |
| `/gallery` | Lightbox gallery built from migrated Yogic Company photography. |
| `/faq` | Combines the two live consultation FAQs with additional questions answerable from live material. |
| `/contact` | Contact details (phone, email, Dehradun, socials) gathered from across the live site into one page. |
| `/book` | Session-request form. |
| `/privacy-policy`, `/terms` | Required policy pages; the live site had none. |
| `/api/enquiry` | Server route every quiz posts to. |

## Testimonials

Each of the eight testimonial cards links to that client's Instagram post, as on the live site. On the live Tilda build these links exist only in the mobile layout (the desktop block renders the photos without anchors); here they work at every breakpoint. The eight pairings were read off the live mobile DOM, where each testimonial photo is wrapped in its own `instagram.com/p/…` anchor, and all eight URLs were checked to return 200.

| Person | Wellness area | Instagram post |
|---|---|---|
| Rebecca | Sleep Disorder | `instagram.com/p/C52I0XWvBIg/` |
| Daler Mehndi | Holistic Wellness | `instagram.com/p/CzlZcXovSp4/` |
| Zohran | Stress & Acne | `instagram.com/p/Cn8WWmYjsQH/` |
| Sakshi Malik | Rejuvination & Healing | `instagram.com/p/CznKkhdvKrM/` |
| Jagriti | Anxiety Attacks | `instagram.com/p/C7a4XDgoTHx/` |
| Christian | Spiritual Guidance | `instagram.com/p/C6u_9bQPnkc/` |
| Santul | Lower Back Pain | `instagram.com/p/C0ExzA5vE8U/` |
| Shabir Bagsarawala | Sleep Apnea & Snoring | `instagram.com/p/DAQl8YixIkx/` |

## Forms

| Live form | Fields reproduced | New route | Backend |
|---|---|---|---|
| `/form1` stress | 4 questions (3 multi-select + 1–10 scale) + name/phone | `/enquiry/stress` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/form2` back pain | 5 multi/single-select questions + name/phone | `/enquiry/back-pain` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/form3` fertility | 4 questions + name/phone | `/enquiry/fertility` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/form4` mental wellness | 4 questions + name/phone | `/enquiry/mental-wellness` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/form5` chronic disease | 4 questions + 0–10 scale + name/phone | `/enquiry/chronic-disease` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/form6` general query | 4 questions + 0–10 scale + name/phone | `/enquiry/general` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/accesstostillness` | 2 multi-select questions + name/phone | `/access-to-stillness` | **Needs `ENQUIRY_WEBHOOK_URL`** |
| `/cure` JotForm button | — | `/enquiry/general` | Replaced with the site's own quiz |

Every option, "Other:" free-text field, scale range and scale end-label is reproduced exactly. An email field was added to each contact step (the live forms collected only name and phone), because email is how we say we will reply.

The live forms post to Tilda's form service using a Tilda form key. That key is a credential belonging to the old site and has **not** been copied. Until `ENQUIRY_WEBHOOK_URL` is set, `/api/enquiry` logs the submission server-side and returns `delivered: false`, and the form tells the visitor plainly that their answers were not delivered and gives them the email address and WhatsApp number instead. No fake success screen is ever shown.

## Content that could not be recovered

| Item | Note |
|---|---|
| Written review screenshots on `/cure` | Carried over as images in a lightbox gallery, exactly as on the live site. The text inside them was not transcribed, so it is not selectable or indexable. |
| 8 video testimonials on `/cure` | Still served from the Yogic Company Google Drive, as on the live site, but now click-to-load rather than eight eager iframes. |
| `/vibhuti1` vs `/vibhuti2` | The live site serves near-identical content at both URLs (both begin at sutra 3.1 despite the second being labelled 3.27–3.56). Both are reproduced as-is; **the missing second half of Vibhuti Pada needs to be supplied by Yogic Company.** |
| Live testimonial attributions | The home page and About page disagree about which condition belongs to which person, and the About page's own desktop and mobile layouts swap Santul's and Shabir's conditions. The About page desktop version is used, since it is internally consistent (its pronouns match its names). Worth a check by Yogic Company. |
| Tilda form key | Deliberately not copied. |
