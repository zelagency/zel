# ZEL — creative agency

Recreates the supplied Lusion reference through the end of “Where Creative Ideas Become Immersive Experiences”, branded ZEL.

## Run

```sh
npm install
npm run build
npm run dev
```

Preview: http://localhost:5173 (routes: `/`, `/about/`, `/projects/`, `/contact/`)

## Pages and routing

Pages are built from one shared layout (`src/site/layout.html`) plus per-page content in `src/site/pages/`; `npm run build` writes `dist/index.html`, `dist/about/index.html`, `dist/projects/index.html` and `dist/contact/index.html`, so every URL also works on a plain static host. In the browser, internal links are routed in place: the header, sound and dialogs persist while the page content is fetched and swapped under the page transition (`src/main.js` router, `src/page.js` mounts and fully tears down each page). Back and forward use the same path, and any failure falls back to a normal navigation. Each footer ends in a dark next-page band whose bar fills as it scrolls into view; continuing to scroll at the bottom moves on to the next page.

`npm run check` validates navigation, dialogs, sound controls, project collection, project brief downloads, asset paths and stylesheet syntax.

## Experience

A cobalt hero carries an original vector ZEL wordmark. Pointer movement redistributes the letters' widths with time-based damping; clicking or keyboard activation switches the colour treatment. Rendering stops once settled, offscreen, or in a hidden tab. Reduced motion keeps the wordmark static while retaining the colour switch. GSAP and Lenis coordinate scrolling, ribbons, title movement, the reel and device presentation. The pointer trail captures coalesced input where available and smooths it with a 1€ filter, whose cutoff rises with speed: slow movement loses mouse quantisation jitter while fast movement keeps the tip within a few pixels of the cursor. There is no input buffer; the trail is drawn in the same frame the (rAF-aligned) input arrives, and the browser's predicted point (`getPredictedEvents`) draws a capped step ahead to offset one frame of display latency, withdrawn as soon as input stops. After a stop the tip settles exactly on the cursor. Width and colour taper by each point's age along the actual path, so the tip is strongest and the tail thins and retracts; over media the trail stops taking input and retracts rather than vanishing. Four colour bands are offset along the path normal and drawn as batched opaque segments that fade toward white on the multiply-blended canvas. A preloader tracks what the first screen needs (the page itself and the Aeonik font, not below-the-fold media) with a filling bar and an odometer counter, folds the bar into the Z mark and lifts away into the hero intro (headline lines rise from masks, header pills pop in). Page changes and project case studies open through a page transition modelled on Lusion's TransitionOverlay: the page is seen through a huge window that spins and shrinks into a white bar, the bar prints a dot-matrix LOADING… (round LED dots with a few twinkling blue), the dots sweep away, the bar turns onto the Z's diagonal as its strokes slide out, and the Z becomes a window that spins and grows onto the new page as its headline rises. It is one canvas in the top layer drawn with plain fills and a cut-out (the page itself is never filtered or scaled), so it holds the display's full frame rate; the swap happens while the screen is covered, and a failsafe always releases the curtain. On scroll, headings and copy rise line by line out of masks (GSAP SplitText with autoSplit, so lines re-wrap on resize), project cards tilt in with perspective and settle flat, project tags decode from scrambled characters (ScrambleText, with a static copy for screen readers), and hovering a card slides an arrow in before its title. Header pills share a direction-aware fluid fill: a blue disc grows from where the pointer enters and drains out toward where it leaves (sound stays filled while on, and its waveform eases flat when off). LET’S TALK slides in an arrow; MENU turns white and rotates its dots on hover, and opens the full-screen menu. Reel and button followers use frame-based damping and reusable setters; pointer event handlers only capture their targets. Ambient audio and UI sounds activate through the sound button. Reduced motion stops continuous motion and video loops. Native page and dialog scrollbars are hidden while the custom page indicator remains. Dialogs lock both root and body scrolling and support keyboard dismissal and focus restoration. Build output uses content-versioned CSS and script URLs.

Pointer research: [1€ filter, Casiez et al.](https://gery.casiez.net/1euro/), [MDN predicted pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getPredictedEvents), [Chrome low-latency rendering](https://developer.chrome.com/blog/desynchronized), [MDN coalesced pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents), [MDN animation frames](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), [GSAP quickSetter](https://gsap.com/docs/v3/GSAP/gsap.quickSetter/), and [GSAP ticker](https://gsap.com/docs/v3/GSAP/gsap.ticker/). Automated checks replay the same curved pointer trajectory at different display rates and verify tip lag at 125–1000 Hz polling, slow-speed jitter attenuation, settling without overshoot, capped and withdrawn prediction, and pause/re-entry handling; these are not measured browser FPS or latency results.

Hero direction research: [Codrops kinetic typography](https://tympanus.net/codrops/2020/06/02/kinetic-typography-with-three-js/) and [Spline interactive typography](https://spline.design/solutions/3d-typography). These informed the typographic direction; the shipped SVG artwork and interaction code are original.

## Loading

The first screen waits only for the HTML, the two stylesheets, the script and the preloaded Aeonik font. Everything else loads on demand: sounds download the first time sound is switched on (Ogg, or AAC where Ogg cannot play, as in Safari before iOS 18.4), video posters a screen before their video, videos and project images as they near the viewport. With Data Saver on or on a 2G connection, the reel loop stays on its poster; opening the reel still plays it. Images are served as WebP at the size they are displayed, and the reel is muxed with `+faststart` so it plays while it streams. Work that is not on the first screen is deferred too: text reveals are split into lines, and the home page's dandelion is built, only when they come within a screen of view. The page declares itself light-only (`color-scheme`), so forced dark modes (Samsung Internet, Chrome's auto dark) leave the colours alone. On Vercel, `app.js` and the stylesheets are cached immutably (their URLs carry a content hash) and `/assets/` for a day with background revalidation.

## Selected work

Fogstores leads the work section, followed by Infinity Kitchens and BNM Cafe. Clicking a project grows its detail view out of the card. The detail view leads with a screenshot grid, customer side first, then "behind the counter" (admin, analytics, operations). Any tile opens a full-screen gallery with arrows, ←/→/Home/End, swipe and a thumbnail strip. Records, captions and grid spans live in `src/projects.js`; images are in `dist/assets/projects/screens/<project>/` as `<name>.webp` (gallery) and `<name>-thumb.webp` (grid tile).

- Fogstores: https://fogstores.vercel.app/ — storefront home, collections, product pages and search captured at desktop and phone size from the Hazestudios app run locally with `STOREFRONT_PREVIEW_LOCK=off` (October 14, 2026); admin, analytics, orders, delivery tracking, products and discounts from the admin audit captures in `Hazestudios/.codex`.
- Infinity Kitchens: https://infinitykitchensblr.com/ — customer home, menu and meal-plan screens from the September 19, 2026 capture assets, and an explainer of what the kitchen system does for the team and the owner (one board for website, Swiggy and Zomato orders; paid before it is cooked; cooks see food, owners see figures), drawn from Cloud-Kitchen's order flow.
- BNM Cafe: https://bnm-cafe-rho.vercel.app/menu — customer phone screens, the live KOT board, cashier POS, analytics and station hub from `bnm/BNM-Cafe/screenshots`.

Customer names, courier tracking numbers and the owner's email are blurred in the exported screenshots; captures showing customer contact details or addresses are left out. Source project folders are unchanged. The Infinity Kitchens live site sits behind sign-in, so its admin and kitchen screens are not captured.

The contact form asks three short steps (what to build, when, then name and email) and prepares a brief the visitor can email to support@zel.agency (it opens their mail app) or download. Nothing is submitted to a server, so a visitor without a mail app can only download it. Long dialogs (the brief on short screens, case studies) scroll inside, so their close button stays in view.

## Reference media

Design reference: https://lusion.co/ and the user’s a.png–f.png screenshots.
The ambient audio and UI sounds remain Lusion reference media, credited in the page. The flower loop is gone: the about frame on the home page now holds a dandelion drawn live on a canvas (`src/bloom.js`). Featured Work uses the user's own projects and real assets. The page and interactive wordmark are newly authored.

## Reel

The homepage reel (`dist/assets/zel-reel.mp4`, 8.5s, 1920×1080) is ZEL's own: the ZEL wordmark (digital agency, Bangalore), websites and apps customers love (shown with Fogstores, BNM Cafe and Infinity Kitchens), the systems a team runs on (website, app and in-store orders landing on one dashboard), and "We take your business digital." A 4:5 cut (`zel-reel-4x5.mp4`) tells the same story for portrait frames: the slot and the reel dialog pick it whenever their frame is closer to 4:5 than 16:9 (`videoSource` in `src/page.js`). The PLAY REEL title and a dark scrim show over the poster, step aside while the reel plays so its headlines read, and return on hover or focus. Both cuts are HyperFrames compositions (`brag-output/composition/` and `brag-output/composition-4x5/`); `npx hyperframes render --quality high` in either re-renders it. Frame 0 is the closing lockup, which is also the poster, so the idle poster and the loop point match. There is no music; the few sound effects are CC0 (Kenney).

The reference’s Aeonik Regular web font is included for accurate typography in this private visual study, with Arial/Helvetica fallbacks. The reference media and font retain their original ownership; use appropriate licenses or replacements for a public agency launch.

## Device testing

Every page was checked in headless WebKit (iPhone and iPad sizes) and Chrome (Android phones, tablets, laptops, desktop and ultrawide), 26 viewports from 320×568 to 2560×1080 in both orientations, with motion on and off: no sideways scroll, header and headline clear of each other, dialogs fit with their close buttons in view, every reveal completes, no measurable layout shift, and touch targets of at least 24px. Under 6× CPU and slow 4G throttling (a low-end Android profile), the home page's first script task takes about 450ms and total blocking time is about 500ms. Not covered: Firefox, real-device GPUs (the WebKit build used cannot render 3D transforms, so the laptop's 3D was checked in Chrome only) and perceptual audio.

To do: re-measure scroll smoothness under the same throttling (phone, tablet and desktop profiles). The last pass was disturbed by other load on the test machine, so its frame times are not reported here.
