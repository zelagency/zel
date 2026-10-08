# ZEL — creative agency visual study

Recreates the supplied Lusion reference through the end of “Where Creative Ideas Become Immersive Experiences”, branded ZEL.

## Run

```sh
npm install
npm run build
npm run dev
```

Preview: http://localhost:5173

`npm run check` validates navigation, dialogs, sound controls, project collection, project brief downloads, asset paths and stylesheet syntax.

## Experience

A cobalt hero carries an original vector ZEL wordmark. Pointer movement redistributes the letters' widths with time-based damping; clicking or keyboard activation switches the colour treatment. Rendering stops once settled, offscreen, or in a hidden tab. Reduced motion keeps the wordmark static while retaining the colour switch. GSAP and Lenis coordinate scrolling, ribbons, title movement, the reel and device presentation. The pointer trail captures coalesced input where available, resamples by timestamp, and draws four continuous curves per animation frame. Reel and button followers use frame-based damping and reusable setters; pointer event handlers only capture their targets. Ambient audio and UI sounds activate through the sound button. Reduced motion stops continuous motion and video loops. Native page and dialog scrollbars are hidden while the custom page indicator remains. Dialogs lock both root and body scrolling and support keyboard dismissal and focus restoration. Build output uses content-versioned CSS and script URLs.

Pointer research: [MDN coalesced pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents), [MDN animation frames](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), [GSAP quickSetter](https://gsap.com/docs/v3/GSAP/gsap.quickSetter/), and [GSAP ticker](https://gsap.com/docs/v3/GSAP/gsap.ticker/). Automated checks replay the same curved pointer trajectory at different display rates and verify pause/re-entry handling; these are not measured browser FPS results.

Hero direction research: [Codrops kinetic typography](https://tympanus.net/codrops/2020/06/02/kinetic-typography-with-three-js/) and [Spline interactive typography](https://spline.design/solutions/3d-typography). These informed the typographic direction; the shipped SVG artwork and interaction code are original.

## Selected work

Fogstores leads the work section, followed by Infinity Kitchens and BNM Cafe. Each project opens a detail view and links to its actual live site. Source records and project descriptions are defined in `src/projects.js`.

- Fogstores: https://fogstores.vercel.app/ — streetwear feature cover from `Hazestudios/public/fogstores/men/hero-desktop.webp`, with original campaign and look photography from `Hazestudios/public/fogstores` in the detail gallery.
- Infinity Kitchens: https://infinitykitchensblr.com/ — original food photography and brand mark from Cloud-Kitchen, with actual customer homepage and menu screenshots recorded in its September 19, 2026 capture assets.
- BNM Cafe: https://bnm-cafe-rho.vercel.app/menu — actual mobile menu screenshot and cafe logo from `bnm/BNM-Cafe`.

The covers compose these real assets for ZEL's portfolio; the detail views identify actual screenshots and photography. Source project folders are unchanged. At inspection, the Fogstores and Infinity URLs served sign-in pages, so their authenticated interfaces were not captured from the live sites.

The contact form prepares a local downloadable brief. No messages are submitted to a server; a real contact destination should be configured before a public agency launch.

## Reference media

Design reference: https://lusion.co/ and the user’s a.png–f.png screenshots.
The flower loop, creative reference reel, ambient audio and UI sounds remain Lusion reference media, credited in the page and reel viewer. Featured Work now uses the user's own projects and real assets. The page and interactive wordmark are newly authored.

The reference’s Aeonik Regular web font is included for accurate typography in this private visual study, with Arial/Helvetica fallbacks. The reference media and font retain their original ownership; use appropriate licenses or replacements for a public agency launch.

Browser surfaces were unavailable in the execution session. Functional checks and build validation were performed; viewport screenshot comparison and perceptual audio verification remain unverified.
