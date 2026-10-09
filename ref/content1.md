# Kids Den School — Website Design, Development & Sitemap Specification

**Website:** https://www.kidsdenschool.in/  
**Research date:** 9 October 2026  
**Purpose:** Designer/developer handoff, content inventory, and reference for a faithful redesign or migration.

> **Evidence labels:** **Verified** = URL/page content surfaced in live indexed web results; **Discovered link/title** = linked or named in a verified page but exact URL not confirmed; **Proposed** = recommended for a future implementation, *not* a claim about the live site. The site could not be directly crawled in the execution environment, and its `sitemap.xml` could not be retrieved. Therefore this is a **best-effort sitemap, not a guaranteed exhaustive inventory**. Do not mistake suggested CSS values or motion for measurements of the live site.

## 1. Executive design summary

Kids Den School is an informational school website hosted on **Google Sites** (platform footer visible on homepage). It prioritizes admissions, institutional information, academics, news, events, gallery, jobs and contact details. Content is organized into broad sections with nested pages, editorial text, school imagery, contextual links, and a consistent contact/footer region. The home page emphasizes an admission announcement, numerical school highlights, recent posts, events, school activities and facilities, admissions call-to-action, and featured educational articles.

**Primary audiences:** prospective parents, current parents/students, teachers and job applicants, alumni/community. **Key user journeys:** admission requirements → KIDSET → fees → contact; news/events → gallery; school identity → academics → contact; careers → openings archive.

## 2. Official visual identity — authoritative brand guidance

Source: https://www.kidsdenschool.in/identity . This is the school's published identity page, not a guess from screenshots.

### 2.1 Official colors

| HEX | Descriptive name | Suggested interface role (not officially assigned) |
|---|---|---|
| `#87CEFA` | Light sky blue | Light accents, section surfaces |
| `#FADA5E` | Warm yellow | Emphasis, secondary highlights |
| `#FFFFFF` | White | Backgrounds, reversed text |
| `#3F3F3F` | Dark gray | Body text |
| `#0F52BA` | Deep blue | Primary buttons/links |
| `#FFAA1D`* | Orange | Warm accents |

*The website's extracted text renders the final orange swatch as `#F FAA1D` (with a space); `#FFAA1D` is a likely normalization, **not a verified exact hexadecimal token**. Confirm against the visual swatch/source file before treating as official.

The identity page states additional house colors, logo colors, and secondary palettes exist and can be requested; these are not enumerated here.

### 2.2 Official typography

| Medium | Use | Published fonts |
|---|---|---|
| Web/digital | Display, titles, headlines, rubrics | **Playfair Display** |
| Web/digital | Paragraphs and subheads | **Inter, Arial, Poppins, or Roboto** |
| Print | Display headings | **Arial**, bold/black recommended |
| Print | Body | **Times New Roman, Century, Bookman Old Style, Caslon, Garamond** (examples) |

The brand guide gives font families, **not measured font sizes, letter spacing, or the exact family used on each live page**.

### 2.3 Logo/identity usage

The official system contains an emblem, wordmark, wordmark with motto, logomark, vertical small and big configurations, plus spacing guides and motto variants. The emblem incorporates a prayer gesture, book, and school motto. **Do not alter, redraw or recreate the logos.** Obtain official logo files from the school's brand contact referenced at `/identity`. Preserve clear space, proportions and legibility. Do not approximate the emblem with generic icons.

## 3. Layout and information hierarchy

### 3.1 Global shell

- **Header/navigation:** school identity and site-wide navigation; Google Sites' built-in search and navigation affordances are detectable in the page structure. Include skip-to-main and skip-to-navigation links.
- **Content:** long vertically scrolling editorial sections, predominantly text and image blocks; individual pages use page title and in several cases breadcrumb/section navigation.
- **Subnavigation:** About and Community pages show “Other pages in this section” contextual lists; selected item identified by “You are at …”.
- **Footer:** school address, email, telephone, quick links (Admission, Gallery, Jobs, Academic Calendar, Privacy Policy), copyright and platform attribution.
- **Navigation conventions:** hierarchical page categories, link labels such as “View more News”, “Read More”, and contextual page links.

**Unverified:** exact header height, whether sticky, mobile menu animation, grid gutters, image crops, card radii and breakpoint values. Capture browser screenshots and computed styles before pixel-accurate reconstruction.

### 3.2 Homepage — `/`

Verified section order in indexed page content:

1. **Admissions alert/announcement:** “Admission Information for 2027-2028 Session” with View link.
2. **School at a glance:** school founding year (2011), enrollment (800+), staff (50+), interactive smartboards (100%), student/staff ratio (16:1), books (900+ as displayed on homepage); About link.
3. **Latest from Us:** image-led recent announcements and news links.
4. **Events:** image-led cards with dates; “View more Events”.
5. **Explore:** co-curricular sports, life skills, intellectual activities, and modern laboratories.
6. **Admissions CTA:** rhetorical prompt and admission-process link.
7. **Featured Articles:** National Education Policy 2020; Teaching Pedagogy.
8. **Contact + Quick Links footer.**

**Content caveat:** homepage says “900+ books”, while `/learning` says “over 1,000”; do not silently harmonize without content-owner approval.

### 3.3 Inner-page templates

| Template | Examples | Structure |
|---|---|---|
| Editorial/institutional | About pages, Learning | Page title → paragraphs → supporting media → related navigation → footer |
| Admissions | `/admission`, `/admission/kidset` | Process steps → criteria grouped by grade → fee information/links → footer |
| Calendar | `/community/academic-calendar` | Academic year → terms → months → dated activities/holidays |
| Gallery/index | `/community/gallery` | Section navigation → event/photo collection titles and dates → footer |
| Careers | `/jobs`, `/jobs/archive` | Introduction/current status → prior openings → detailed vacancy blocks and document links |
| Contact | `/contact` | Office hours → address → campus maps/directions → footer |
| Brand reference | `/identity` | Logo samples → palette → typography → contact |

## 4. Best-effort sitemap and route inventory

**Base URL:** `https://www.kidsdenschool.in`  
**Key:** `[V]` verified exact URL; `[D]` page/label discovered but exact path unverified. Do not generate an actual router from `[D]` items without verifying their destinations.

```text
/                                       [V] Home
├── /identity                           [V] Branding and Identity Guidelines
├── /about/recognition-and-affiliations [V] Recognitions and Affiliation
├── /about/school-song                  [V] School Song
├── About section                       [D] Parent/landing URL not confirmed
│   ├── Introduction                    [D]
│   ├── Aims and Values                 [D]
│   ├── Milestones                      [D]
│   └── Meet the Team                   [D]
├── /learning                           [V] Learning
│   ├── /learning/curriculum            [V] Curriculum
│   ├── Smart Classrooms                [D] Section; standalone route unconfirmed
│   ├── Co-curricular Activities        [D] Section; standalone route unconfirmed
│   └── Library                         [D] Section; standalone route unconfirmed
├── /admission                          [V] Admission (process and fees)
│   ├── /admission/kidset               [V] KIDSET eligibility test
│   ├── Admission Updates               [D] Exact target not confirmed
│   └── Fee Portal                      [D] External or internal destination unconfirmed
├── Community section                   [D] Parent route not confirmed
│   ├── /community/gallery              [V] Gallery
│   ├── /community/academic-calendar    [V] Academic Calendar
│   ├── Events                          [D] Exact target not confirmed
│   ├── Campus Crafts                   [D] Exact target not confirmed
│   ├── Campus Clusters                 [D] Exact target not confirmed
│   └── Blog                            [D] Exact target not confirmed
├── News                                [D] News listing and posts linked from home
├── /jobs                               [V] Careers / vacancies
│   └── /jobs/archive                   [V] Previous openings
├── /contact                            [V] Contact, buildings, directions
├── Privacy Policy                      [D] Linked from homepage; path unconfirmed
└── /home--27-02-2026                   [V] Older/archived home page
```

### 4.1 Exact confirmed paths and their purpose

| Path | Page | Main purpose |
|---|---|---|
| `/` | Home | Admission announcement, school statistics, news, events, featured content |
| `/identity` | Branding and Identity Guidelines | Logos, palette, typography |
| `/about/recognition-and-affiliations` | Recognitions and Affiliation | Registration, recognition, associations and curriculum note |
| `/about/school-song` | School Song | History, contributors and credits |
| `/learning` | Learning | Curriculum, smart classrooms, CCA and library |
| `/learning/curriculum` | Curriculum | CISCE-based curriculum and smart classroom information |
| `/admission` | Admission | Application process, KIDSET overview, grade-based fees |
| `/admission/kidset` | KIDSET | Grade-specific assessment criteria |
| `/community/gallery` | Gallery | Gallery/event collection index |
| `/community/academic-calendar` | Academic Calendar | School dates and holidays by term/month |
| `/jobs` | Careers | Current vacancy status and careers introduction |
| `/jobs/archive` | Jobs Archive | Historic vacancy announcements |
| `/contact` | Contact Us | Office details, campus locations, directions |
| `/home--27-02-2026` | Archived homepage | Historic home page content; assess SEO/noindex before migration |

### 4.2 Links and external destinations requiring verification

- News listing and individual announcement pages; featured article links.
- Events listing and individual event pages; image galleries and photo album destinations.
- About Introduction, Aims and Values, Milestones, Meet the Team.
- Campus Crafts, Campus Clusters, Blog.
- Admission updates, payment/fee portal, downloadable prospectus or instructions.
- Privacy Policy.
- Contact page's three building map links, bus-stand directions, Instagram links.
- Jobs archive downloadable bio-data sheet and sample sheet.

These names are grounded in the site's page text or visible links, but **the destination URLs have not been established**. Do not manufacture slugs or claim this is the full live sitemap.

## 5. Detailed page behaviors and content requirements

### Admission

Present a numbered three-step journey: buy/submit prospectus, qualify through KIDSET, then receive dates/requirements/results. Preserve separate assessment groupings for Classes IV–VIII, I–III, KG-II, KG-I and preschool. Show fees by grade with update timestamp and payment instructions. Because fees and session information change, model these as CMS-editable data with explicit effective dates. The source page includes a likely typo “Admission Updates 2028-2028”; flag for editorial review rather than replicating as unquestioned fact.

### Community / gallery / calendar

Gallery has named event/photo collections and dates. Calendar organizes school activities and holidays into three terms and months; distinguish school activity vs holiday with **both label and visual treatment**, not color alone. Content is date-specific and should support archival academic years. The retrieved calendar was 2025–2026: verify current calendar before launch.

### Careers

Current jobs page states no vacancies (at research time) and points to historical openings. Jobs Archive shows multiple vacancy cards with qualifications, salary, dates, interview logistics and downloadable sheets. Treat vacancy status, opening/closing date and archive visibility as structured fields; do not display expired listings as active.

### Contact

Include address, mailto/tel links, office hours, separate campus map links and transit guidance. Main office address: A-II A/40, Chaltlang Salem Veng, Aizawl, Mizoram, India 796012. Office hours displayed: 09:00–15:00 Monday–Friday. Confirm before publishing a replacement site.

## 6. Component inventory

**Observed/content-grounded components:** SiteHeader, SiteNavigation, SearchEntry, AnnouncementBanner, SchoolStatistics, NewsPreviewCard, EventPreviewCard, ExploreFeature, AdmissionsCTA, FeaturedArticleLink, PageHeading, Breadcrumbs, SectionNavigation, EditorialBody, ImageBlock, FooterContact, FooterQuickLinks, AdmissionStep, GradeCriteriaSection, FeeSection, CalendarTerm, CalendarMonth, GalleryCollection, VacancyDetail, ContactDetails, MapLink, BrandSwatch, LogoVariant.

**Recommended reusable component APIs (proposed):**

```ts
type NavItem = { label: string; href: string; children?: NavItem[] };
type NewsItem = { slug: string; title: string; publishedAt: string; image?: string; excerpt?: string };
type EventItem = { slug: string; title: string; eventDate: string; image?: string; albumUrl?: string };
type CalendarEntry = { id: string; date: string; endDate?: string; title: string; type: 'school' | 'holiday' };
type Vacancy = { slug: string; role: string; postedAt: string; deadline?: string; status: 'open' | 'closed'; description: string; documents?: { label: string; url: string }[] };
type Fee = { level: string; admissionNew: number; admissionExisting?: number; annual: number; monthly: number; effectiveAt: string };
```

## 7. Interaction and behavior specification

### Confirmed at content/structure level

- Navigation and cross-links among pages; home cards/link labels route to further content.
- Search input exists in the Google Sites page structure; precise results behavior not verified.
- Accessibility skip links exist for main content and navigation.
- Section navigation and breadcrumb conventions appear on some inner pages.
- External directions, social links and document downloads are represented in content.

### Proposed implementation behavior — not verified as live animations

| Element | Recommended interaction | Motion guidance |
|---|---|---|
| Header navigation | Desktop nested menu; mobile disclosure | 150–200 ms opacity/height, no layout jank |
| Text links | Underline/focus indicator | 120–160 ms color transition |
| News/event cards | Whole card or explicit title link | 160–220 ms subtle background/image emphasis |
| Buttons | Hover, pressed, disabled and keyboard focus | 120–180 ms; avoid large transforms |
| Image gallery | Accessible modal/lightbox only if required | 180–240 ms fade; escape to close |
| Search | Keyboard accessible submit/results | Immediate feedback; loading only if async |
| Anchor navigation | Standard browser behavior | Prefer native; smooth scroll only if useful |
| Reduced motion | Respect OS preference | Disable nonessential movement |

**Do not claim parallax, scroll reveals, sliders, sticky-header transitions, animated counters, or hover zoom as existing site features** without direct browser verification.

## 8. Responsive layout and spacing (proposed tokens, not measured)

- Mobile: 320–767 px; one-column editorial and card stacks; collapsible nav.
- Tablet: 768–1023 px; 2-column card grids where space allows.
- Desktop: 1024 px+; full navigation and 2–3 column previews.
- Content max width: 1120–1200 px; prose max width: 680–760 px.
- Horizontal padding: 20 px mobile, 32 px tablet, 48 px desktop.
- Vertical sections: 48–64 px mobile, 72–96 px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Proposed radius: 0–8 px for a restrained editorial feel; exact live radii unknown.
- Proposed shadows: none by default, minimal only when separation is needed.

### Recommended typography scale

| Style | Mobile | Desktop | Weight/line-height |
|---|---|---|---|
| Hero heading | 36 px | 56 px | Playfair Display, 600–700 / 1.12 |
| Page H1 | 32 px | 48 px | Playfair Display, 600–700 / 1.2 |
| H2 | 26 px | 36 px | Playfair Display, 600 / 1.25 |
| H3 | 21 px | 26 px | Playfair Display, 600 / 1.3 |
| Body | 16 px | 17 px | Inter / 1.6 |
| Meta/caption | 13 px | 14 px | Inter / 1.45 |

All sizes are **design proposals**, not extracted computed CSS.

## 9. Starter design tokens (proposed mapping of published colors)

```css
:root {
  --kds-sky: #87cefa;
  --kds-yellow: #fada5e;
  --kds-white: #ffffff;
  --kds-ink: #3f3f3f;
  --kds-blue: #0f52ba;
  --kds-orange-candidate: #ffaa1d; /* confirm official swatch */
  --color-bg: var(--kds-white);
  --color-text: var(--kds-ink);
  --color-link: var(--kds-blue);
  --color-focus: var(--kds-blue);
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
  --content-max: 1160px;
  --reading-max: 720px;
  --space-section: clamp(3rem, 6vw, 6rem);
  --transition-fast: 160ms ease;
}

.container { width: min(calc(100% - 40px), var(--content-max)); margin-inline: auto; }
.prose { max-width: var(--reading-max); line-height: 1.65; }
a:focus-visible, button:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

Check contrast before placing white text on sky blue or yellow. Color names/roles are recommended usage, not official assignments.

## 10. Implementation architecture (for a rebuild)

The current website visibly credits **Google Sites**. The following is a **possible migration stack**, not a claim about its present backend:

- Next.js App Router + TypeScript; CSS modules or Tailwind CSS.
- Server-rendered static/informational pages; incremental regeneration or CMS webhooks for news and updates.
- Headless CMS or simple structured Markdown/MDX content for staff-managed admissions, announcements, events, vacancies, calendar and articles.
- Optimized responsive images, with proper alt text and photographer/usage permissions.
- Route definitions mirroring verified URLs, with permanent redirects only when confirmed.
- XML sitemap generated from **published actual routes**, excluding drafts and archival/duplicate pages as appropriate.
- Metadata per page, canonical URLs, Open Graph image, robots directives, structured data for `School` and relevant articles/events when valid.
- Analytics with privacy-respecting configuration and a clear privacy policy.

### Suggested Next.js file organization

```text
app/
  layout.tsx
  page.tsx
  identity/page.tsx
  admission/page.tsx
  admission/kidset/page.tsx
  learning/page.tsx
  learning/curriculum/page.tsx
  about/recognition-and-affiliations/page.tsx
  about/school-song/page.tsx
  community/gallery/page.tsx
  community/academic-calendar/page.tsx
  jobs/page.tsx
  jobs/archive/page.tsx
  contact/page.tsx
  sitemap.ts
components/
  layout/ Header.tsx Footer.tsx Breadcrumbs.tsx SectionNav.tsx
  home/ AnnouncementBanner.tsx StatsGrid.tsx ContentPreview.tsx
  content/ ArticleBody.tsx GalleryGrid.tsx CalendarList.tsx
  admissions/ AdmissionSteps.tsx Criteria.tsx Fees.tsx
  careers/ VacancyCard.tsx
content/
  news/ events/ pages/ jobs/ calendars/
public/
  images/ logos/
styles/
  tokens.css globals.css
```

Do not create routes for unverified labels until URL mapping and content have been audited.

## 11. Accessibility, SEO, performance and content governance

- Semantic headings: one meaningful H1 per page; preserve heading hierarchy.
- Visible keyboard focus, accessible navigation disclosure, skip links and logical tab order.
- WCAG 2.2 AA contrast targets; do not communicate calendar categories through color alone.
- Image alt text: descriptive for informative school photos, empty for purely decorative graphics.
- Responsive images (`srcset`/`sizes`), lazy-load below-the-fold media, preload only critical hero assets.
- Avoid auto-playing video/audio; caption all video and provide transcripts where feasible.
- Maintain canonical links and avoid duplicated home page indexing (notably `/home--27-02-2026`).
- Publish current-year admissions and calendar data with `lastUpdated` and archive older years.
- Validate content inconsistencies: school book count; admission update heading year; old calendar; fee dates; current vacancy state.
- Minimize collection of children's personal information; do not expose private student records/photos without authorization.
- Add automated link checks, responsive screenshot regression, accessibility audits and route tests.

## 12. Verification and acceptance checklist

- [ ] Retrieve authoritative XML sitemap or Google Sites page inventory from the owner.
- [ ] Open every nested navigation item and record actual URLs.
- [ ] Check all homepage cards, articles, news, events, archives and gallery albums.
- [ ] Confirm live typography with computed styles and font network requests.
- [ ] Capture desktop/tablet/mobile screenshots for pixel measurements.
- [ ] Test actual sticky behavior, hover states, search, keyboard controls and mobile navigation.
- [ ] Obtain official vector logos and confirm orange hex swatch.
- [ ] Resolve inconsistent counts, admission session typo and outdated calendar.
- [ ] Record external links, PDF downloads and payment portal destinations.
- [ ] Audit page metadata, indexability, canonical tags and redirects.
- [ ] Test all known routes and ensure there are no broken internal links.

## 13. Primary research URLs

- https://www.kidsdenschool.in/
- https://www.kidsdenschool.in/identity
- https://www.kidsdenschool.in/admission
- https://www.kidsdenschool.in/admission/kidset
- https://www.kidsdenschool.in/learning
- https://www.kidsdenschool.in/learning/curriculum
- https://www.kidsdenschool.in/about/recognition-and-affiliations
- https://www.kidsdenschool.in/about/school-song
- https://www.kidsdenschool.in/community/gallery
- https://www.kidsdenschool.in/community/academic-calendar
- https://www.kidsdenschool.in/jobs
- https://www.kidsdenschool.in/jobs/archive
- https://www.kidsdenschool.in/contact
- https://www.kidsdenschool.in/home--27-02-2026

**Important limitation:** Source pages were inspected through indexed page text and link references, not an interactive browser DOM/CSS capture. Exact live visual measurements, motion timing, responsive breakpoints, and a complete sitemap remain unverified. This document deliberately distinguishes authoritative brand values, verified content and recommended rebuild decisions.
