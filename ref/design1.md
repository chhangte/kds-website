# blog.google — Design & Development Reference

**Website:** https://blog.google/  
**Prepared:** 9 October 2026  
**Purpose:** A practical reference for designers and developers recreating the visual language and content experience of Google's editorial website.

> **Evidence classification:** **Observed** = supported by the accessible live page's text/structure; **Reference** = supported by a third-party visual analysis of blog.google; **Proposed** = implementation recommendation, not a verified measurement of Google's source code. This is not an official Google design specification or a pixel-perfect audit. Exact breakpoints, CSS, animations, assets, and internal architecture require browser DevTools verification.

## 1. Design direction

- **Identity:** Google-native editorial publication, minimal and approachable, with large type, generous white space, rounded surfaces, vivid imagery and controlled blue accents. **[Reference]**
- **Tone:** Informative, welcoming, credible, contemporary; content rather than chrome takes priority.
- **Hierarchy:** Hero story → secondary stories → collections/updates → newsletter → footer. **[Observed]**
- **Visual contrast:** Large open sections alternate with denser story modules. **[Reference]**
- **Core principles:** Clear editorial hierarchy, concise labels, easy navigation, consistent card patterns, responsive image cropping and restrained animation. **[Proposed]**

## 2. Information architecture and page inventory

### Homepage, observed structure

1. **Skip to main content** accessibility link.
2. **Primary navigation:** Innovation & AI; Products & platforms; Company news; Feed.
3. **Hierarchical navigation panels:** topic headings, nested links, and contextual links to related Google publications. A **Back** affordance appears in the accessible content.
4. **Main story region:** featured editorial headlines, categories, supporting descriptions, images, and Read more links.
5. **More updates:** additional news/content modules.
6. **Editorial collection:** e.g. a featured thematic collection with View the collection action.
7. **Newsletter signup:** invitation, confirmation state, alternate-email affordance, privacy statement.
8. **Footer:** Privacy, Terms, Help, and selection controls.

**Important:** The accessible source establishes these elements and their order in text, not their exact on-screen positions or behavior.

### Recommended templates for a comparable build

- Homepage / featured stories
- Category landing page
- Topic / tag landing page
- Article detail (headline, deck, hero media, byline/date, article body, related stories)
- Editorial collection page
- Search / discovery page
- Newsletter signup states
- Responsive navigation menu

The additional templates are **proposed** architecture; this review did not verify each live template.

## 3. Design tokens

The following palette and typography are based on a third-party capture of **blog.google**, not a direct computed-style audit. Values should be checked against the live page before claiming exact fidelity.

### Color

| Token | Value | Suggested use | Evidence |
|---|---|---|---|
| `--color-brand-blue` | `#1A73E8` | Links, arrows, hero accents | Reference |
| `--color-brand-blue-strong` | `#3367D6` | Emphasis / hover variation | Reference |
| `--color-ink` | `#202124` | Primary copy, headlines | Reference |
| `--color-ink-muted` | `#5F6368` | Metadata, descriptions | Reference |
| `--color-surface` | `#FFFFFF` | Cards and content backgrounds | Reference |
| `--color-border-reference` | `#364043` | Reference-listed dark border tint; **do not use as a default hairline** | Reference |
| `--color-border-subtle` | `#DADCE0` | Accessible subtle borders | Proposed |
| `--color-blue-wash` | `#E8F0FE` | Pale blue hero/backdrop fallback | Proposed |
| `--color-focus` | `#1A73E8` | Visible focus outline | Proposed |

**Color behavior:** White/light editorial surfaces dominate. Use blue selectively for navigational meaning and important editorial emphasis. Keep imagery colorful; avoid adding multiple unrelated interface accent colors.

### Typography

| Style | Family | Size | Weight | Line-height | Tracking | Evidence |
|---|---|---:|---:|---:|---:|---|
| Hero display | Google Sans 18 Pt | 48px | 400 | 1.0 | -0.02em | Reference target |
| Section display | Google Sans 18 Pt | 36px | 400 | 1.05 | -0.02em | Reference target |
| Feature card heading | Google Sans 18 Pt | 32px | 400 | 1.1 | -0.015em | Reference target |
| Body | Google Sans | 16px | 400 | 1.5 | 0 | Reference target |
| Medium body / link | Google Sans | 16px | 500 | 1.5 | 0 | Reference target |
| Eyebrow | Google Sans | 12px | 500 | 1.33 | 0.04em | Reference target |
| Navigation | Google Sans | 16px | 400 | 1.4 | 0 | Reference target |

**Font availability:** Google Sans and its optical variants may be proprietary/restricted. Verify licensing; do not download fonts from unofficial sources. An alternative for a non-Google project is `Arial, Roboto, sans-serif` for text and a licensed geometric sans for display.

**Typesetting rules [Proposed]:** Keep headlines to ~8–14 words where possible; cap long-form text width around 65–75 characters; use fluid display sizing with `clamp()`; use sentence case and meaningful editorial category labels.

### Geometry and spacing

| Token | Target | Evidence |
|---|---:|---|
| Base spacing unit | 8px | Reference |
| Tight / standard / medium | 8 / 16 / 24px | Reference |
| Larger gap | 36px | Reference |
| Section separation | 72px | Reference |
| Card corner radius | 16px | Reference |
| Pill radius | 999px | Proposed |
| Hairline | 1px | Proposed |
| Container max width | 1280–1440px | Proposed; not measured |
| Desktop gutters | 32–64px | Proposed; not measured |
| Mobile gutters | 16–24px | Proposed; not measured |

### Shadows and borders

Use subtle layered shadows only for floating cards and elevated panels; rely more on whitespace and surface contrast than thick borders. The reference notes soft shadows on a large white editorial card. **[Reference]**

Example **proposed** shadow: `0 8px 32px rgba(32,33,36,.08)`.

## 4. Layout and composition

### Global shell

- Semantic `header`, `nav`, `main`, and `footer` regions. **[Proposed]**
- A spacious page container with strong left/right alignment guides.
- Large feature modules contrasted against smaller repeating story units.
- Editorial labels, headings, descriptions and link actions form the main visual rhythm.

### Featured hero

A third-party visual capture describes a **wide pale-blue atmospheric stage** with large blue headline, scattered small rounded image tiles and a **white rounded feature card** anchoring the composition. The card contains a category eyebrow, prominent headline, summary and arrow. This is a **specific captured homepage state**, not proof that every homepage visit uses the same hero. **[Reference]**

**Recreation recipe [Proposed]:**

1. Desktop: use a wide hero canvas with an editorial display title and a prominent card; position supporting image tiles carefully rather than making a uniform gallery.
2. Keep the feature card as the primary reading unit; maintain accessible source order even if desktop uses overlapping positioning.
3. Tablet/mobile: abandon arbitrary absolute image positioning where it would collide; stack headline, hero image and story card.
4. Use `object-fit: cover`, defined aspect ratios and intentional focal points.

### Story grids

- Repeatable content cards: image → category → title → short description/metadata → link. **[Proposed pattern]**
- Suggested desktop arrangement: 3 columns for compact cards, 2 for medium cards, full-width for marquee stories.
- Mobile: one column; tablet: 2 columns where content fits.
- Keep card heights flexible rather than forcing truncation of important headlines.

### Search / discovery tray

A captured design reference shows a search-like row, divider, explanatory text, suggested-search label and rounded query chips. **[Reference]**

- Input-like top row with clear focus styling.
- Suggested queries as semantic buttons/links.
- Chips wrap rather than overflow on narrow viewports.
- Distinguish search suggestions from actual search results.

### Footer and newsletter

The live accessible homepage contains a newsletter invitation, post-submission confirmation copy, privacy link, and footer utility links. **[Observed]** Implement separate idle, submitting, success and error states; do not imply a successful subscription before server confirmation. **[Proposed]**

## 5. Responsive design

**These breakpoints are proposed starting points, not observed Google breakpoints.**

| Range | Layout recommendation |
|---|---|
| `< 600px` | Single-column stories; compact header; full-width cards; stacked hero |
| `600–1023px` | Two-column cards; reduced hero spacing; compact menu if necessary |
| `1024–1439px` | Full navigation where feasible; 3-column story grid |
| `>= 1440px` | Max-width container; more generous margins; no uncontrolled text stretching |

Use content-driven breakpoints instead of relying solely on device categories. Verify at 320, 375, 768, 1024, 1280 and 1440px, including landscape and zoom at 200%.

## 6. Motion, transitions and interactions

**Verification warning:** The available sources do **not** establish exact live animation durations, easing curves, entrance choreography, scroll effects or menu timing. The following is a **proposed motion specification inspired by the site's restrained editorial appearance**, not a claim about the website's implementation.

| Interaction | Proposed behavior | Duration | Easing |
|---|---|---:|---|
| Text link hover | Underline or clear color emphasis | 120–180ms | ease-out |
| Story card hover | Very slight image scale (1 → 1.02), optional subtle lift | 180–240ms | cubic-bezier(.2,0,0,1) |
| Navigation panel open | Opacity + 6–10px vertical translation | 160–220ms | ease-out |
| Chip hover | Subtle background tint | 120–160ms | ease-out |
| Focus | Immediate visible outline | 0ms | none |
| Search tray expand | Height/content reveal only if genuinely required | 180–240ms | ease-out |
| Page scroll | Native scrolling; no forced smooth scroll | native | native |

**Avoid:** perpetual floating thumbnails, aggressive parallax, exaggerated bounces, delayed reading access, hover-only functionality, autoplaying distracting animations.

**Reduced motion:** Honor `prefers-reduced-motion: reduce` by disabling decorative transforms and scroll animation.

### Behavioral specifications

**Primary navigation [Observed structure / Proposed mechanics]:** Hierarchical topic navigation exists in the page's accessible text. Implement disclosure buttons with `aria-expanded`, keyboard activation, Escape to close, focus management, and predictable Back navigation on small screens. Do not assume the live site uses this exact implementation.

**Story links [Observed]:** Read more actions appear in the homepage content. The full card can be clickable only if semantic links remain unambiguous; preserve visible focus states.

**Search suggestions [Reference / Proposed mechanics]:** Clicking a suggestion should populate a query or navigate to a results URL; document which one the product actually uses.

**Newsletter [Observed content / Proposed mechanics]:** Validate input, show progress, display success only after server confirmation, support error retry, and link to privacy policy.

## 7. Components and states

| Component | Required states | Key notes |
|---|---|---|
| Site header | default, menu open, focused | Logo, categories, Feed |
| Topic mega-menu | closed, open, keyboard-focused | Nested links and Back affordance |
| Hero feature | default, focused link | Responsive collage and feature card |
| Article card | default, hover, focus | Image, eyebrow, title, description |
| Category label | default | Short, recognizable, not solely color-coded |
| Search tray | idle, focused, typed, results, empty | Suggestions and keyboard access |
| Suggestion chip | default, hover, focus | Touch target ≥44×44px |
| Collection feature | default, focus | Collection name, description, CTA |
| Newsletter form | idle, invalid, submitting, success, error | Consent/privacy link |
| Footer | default, focus | Legal/help/navigation links |
| Media | loading, loaded, failed | Aspect-ratio placeholder and alt text |

## 8. Images and graphic language

- High-quality editorial photography, product imagery and campaign graphics supply much of the page's visual energy. **[Reference]**
- Rounded thumbnails and larger media areas should share a coherent radius system.
- For each image, store intrinsic dimensions, `alt`, focal point, credit, responsive source variants and optional caption. **[Proposed]**
- Use modern image formats (AVIF/WebP where appropriate), responsive `srcset`/`sizes`, lazy loading below the fold and priority loading for the lead visual. **[Proposed]**
- Avoid generic stock illustrations and overly decorative backgrounds.

## 9. Accessibility

- Keep a working Skip to main content link, as present in the live accessible page. **[Observed]**
- WCAG 2.2 AA target; verify text and non-text contrast.
- Visible keyboard focus; accessible disclosure navigation; no keyboard traps.
- Meaningful heading order and landmarks.
- 44px minimum comfortable touch targets as a design goal.
- Form labels, descriptions, validation messages and announced status changes.
- Alt text for informative media; empty alt for purely decorative media.
- Reduced-motion support; support 200% zoom and narrow reflow.

## 10. Development architecture (recommended, not verified)

**Do not infer Google's actual framework from this document.** A comparable implementation could use Next.js + React + TypeScript, CSS Modules or Tailwind, a headless CMS, and a CDN.

```text
src/
  app/
    page.tsx
    articles/[slug]/page.tsx
    topics/[slug]/page.tsx
    collections/[slug]/page.tsx
    search/page.tsx
  components/
    SiteHeader.tsx
    TopicMenu.tsx
    HeroFeature.tsx
    StoryCard.tsx
    StoryGrid.tsx
    SearchTray.tsx
    NewsletterForm.tsx
    SiteFooter.tsx
  styles/
    tokens.css
    globals.css
  lib/
    content.ts
    seo.ts
```

### Example CSS tokens (starter approximation)

```css
:root {
  --color-brand-blue: #1a73e8;
  --color-brand-blue-strong: #3367d6;
  --color-ink: #202124;
  --color-muted: #5f6368;
  --color-surface: #fff;
  --color-border: #dadce0;
  --color-blue-wash: #e8f0fe;
  --font-display: "Google Sans", Arial, sans-serif;
  --font-body: "Google Sans", Arial, sans-serif;
  --radius-card: 16px;
  --radius-pill: 999px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 36px;
  --space-5: 72px;
  --content-max: 1360px;
}

.container {
  width: min(calc(100% - 48px), var(--content-max));
  margin-inline: auto;
}

.display {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-weight: 400;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.story-card { border-radius: var(--radius-card); overflow: clip; }
.story-card img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
:focus-visible { outline: 3px solid var(--color-brand-blue); outline-offset: 3px; }

@media (max-width: 1023px) {
  .story-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 599px) {
  .container { width: calc(100% - 32px); }
  .story-grid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Content model

```ts
type Story = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: { label: string; slug: string };
  publishedAt: string;
  updatedAt?: string;
  authors?: { name: string; slug?: string }[];
  image: { src: string; alt: string; width: number; height: number; focalPoint?: string };
  featured?: boolean;
  relatedStoryIds?: string[];
};
```

### Engineering considerations

- **SEO:** Server-rendered content; descriptive title/meta, canonical URLs, XML sitemap, Open Graph/Twitter previews, Article structured data for articles, and breadcrumbs where appropriate.
- **Performance:** Budget LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile; responsive images, reserved image dimensions, font loading strategy, and code-splitting.
- **Content operations:** CMS preview, editorial scheduling, article revisions, alt text and structured metadata.
- **Analytics:** Privacy-aware event tracking for navigation, article opens, search and newsletter conversion.
- **Security:** Sanitize rich text, validate newsletter requests server-side, rate-limit endpoints, use CSP, avoid embedding secrets in the client.
- **Localization:** Plan for translated content, date formats and longer labels.
- **QA:** Keyboard-only navigation, mobile overflow, screen reader checks, reduced motion, slow networks, image failure, form errors, and browser compatibility.

## 11. Figma handoff recommendations

Create separate pages for **Foundations**, **Components**, **Homepage**, **Article**, **Navigation**, **Responsive**, and **Interaction states**. Use Auto Layout for cards, grids and menu content; constrain hero decorative imagery independently; define text and color styles with semantic names. Prototype menu opening, Back navigation, search suggestions and newsletter states. Export icons as SVG and photos as responsive assets. All component variants should document focus and error states, not only default and hover.

## 12. Verification checklist for exact fidelity

Before treating this as an exact reproduction, inspect the live site in Chrome/Firefox DevTools and record:

- [ ] Actual computed font-family, font-weight, font-size, line-height and font files/licenses
- [ ] Exact colors sampled from live computed CSS, including hover/focus and hero gradients
- [ ] Container widths, padding, grid tracks, card radii and shadows at multiple viewports
- [ ] Navigation menu activation model, overlay positioning, dismissal and focus behavior
- [ ] Search tray semantics, suggestions and results behavior
- [ ] Animation duration/easing, image transforms and scroll interactions
- [ ] Mobile header, navigation drawer and tablet adaptations
- [ ] Article template, author/date presentation, related articles and footer details
- [ ] Network performance, image loading, responsive image formats and CLS
- [ ] Accessibility and newsletter submission/error handling
- [ ] Current homepage variant, as content and campaign hero visuals can change

## 13. Sources and evidence limits

1. **Official site:** [Google Blog / The Keyword](https://blog.google/) — live homepage accessible text, including navigation, content sections, newsletter and footer (accessed 9 October 2026).
2. **Third-party visual reference:** [Fudge — blog.google website design](https://design.withfudge.com/share/blog.google-design) — two captured surfaces and reported color, typography, layout and visual-language targets (accessed 9 October 2026).
3. **Background context:** [Introducing The Keyword](https://blog.google/company-news/inside-google/company-announcements/introducing-the-keyword-our-new-official-blog/) — Google's editorial mission and publication context.

**Limitations:** No authenticated browser screenshot comparison, direct CSS extraction, JS runtime instrumentation, source-map inspection or full responsive audit was performed. Reported visual measurements are reference values; proposed implementation values are clearly labeled. Do not present this file as evidence of Google's internal code, framework, exact motion timings or complete design token library.
