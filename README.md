# Bill Nnamdi Achusim — personal portfolio

A React / TypeScript portfolio built with TanStack Start and Tailwind CSS v4.

## Content and factual standards
All editable content is in `src/content/portfolio.ts`. Keep unverified technologies, dates, metrics, statuses, responsibilities and links empty. Unknown project status is stored as `Status to be confirmed` and is not claimed on project details. Alter Ego is confirmed as a separate product. Four products now include verified artwork and official app store links. Headline metrics in `verifiedMetrics` each carry a definition, reporting date and public source URL.

## Photographs and artwork
Live apps show screenshots and icons loaded from their official App Store and Google Play listings (`productAssets` in `src/content/portfolio.ts`). They hide themselves if a listing image disappears; re-upload them as Lovable Assets for permanence. Bill's supplied photographs live in `src/assets/photos/` as compressed WebP files (about 1400px on the long edge) and are listed in `photos`; add new ones the same way, with descriptive alt text.

`profile.portrait` (home hero) and `profile.aboutPhoto` (About page) point at Bill's own photographs. Project tiles are explicitly labelled typographic artwork placeholders, not product screenshots or logos. Set a project's `thumbnail` and `gallery` to your supplied image URLs to replace them. Use Lovable Assets for uploaded files. The shared image layout maintains stable aspect ratios.

## Projects, experience and skills
Add or edit entries in the `seed` project collection and extend fields through the typed project data. Each project supports categories, technologies, status, role, dates, thumbnail, gallery, live/repository/app-store URLs, featured and published flags, sections and verified metrics. Search matches names, summaries, categories and technologies; category and status filters combine. Add verified case-study sections for context, role, solution, architecture, trade-offs, outcomes and lessons as available. Project detail pages are generated from the same data. Unknown-description details carry noindex.

Update `experience` with confirmed dates, engagement types, responsibilities and achievements. The page preserves distinctions between roles, project engagements and fellowships. Skills are grouped without numeric proficiency claims.

## Articles
Add entries to `articles` with a unique slug, title, summary, publicationDate, tags, coverImage, content paragraphs and `published: true`. They appear in Insights and at `/insights/your-slug`. Six real article previews are included with their verified publication dates and links to the originals at Tech Faculty NG. No unsupplied full article content has been invented.

## CV and professional links
`profile.cvUrl` points at `public/bill-achusim-cv.pdf`, Bill's two-page CV (tuned from his August 2026 résumé); replace that file to update it. LinkedIn and X are already configured with verified details. Set `profile.email` when supplied. Missing links stay out of public view.

## Contact delivery — NOT CONFIGURED
The form validates real inputs, but is explicitly unable to send yet. Its Check inquiry action never reports delivery. Set `profile.contactEndpoint` only after integrating a real delivery service. The endpoint must accept JSON `{ name, email, organization, type, message }`, validate server-side, enforce rate limits and spam protection, send/store the inquiry, and return a successful HTTP status only after acceptance. Keep email service keys server-side. Contact currently requires no account or database. If adding server delivery, enable Lovable Cloud and follow the runtime and server-function rules first.

## SEO and publishing
Each content route provides its own title, description, Open Graph metadata and relative self-referencing canonical. No domain is invented. When a production domain is configured, replace relative canonical and og:url values with the actual origin and generate the production sitemap at that origin. Sitemap installation is deferred until the production domain is known; XML sitemap locations require absolute public URLs. Never use the preview domain as the canonical public domain. Bundled temporary images are intentionally not tagged as absolute sharing images. The hosting platform supplies the preview. Add a correctly sized sharing rendition of supplied artwork only when available.

## Checks
Run `bun run test`. Preview with the managed development server. The site includes keyboard focus states, a skip link, reduced-motion behavior and an accessible mobile navigation menu. Missing pages receive the custom 404.

## Still needed from Bill
Professional email; contact delivery integration; confirmed project technologies, current statuses, roles, milestones and case-study evidence; experience engagement details; dated impact metrics; any additional original articles.
