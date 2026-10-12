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

A cobalt hero carries an original vector ZEL wordmark. Pointer movement redistributes the letters' widths with time-based damping; clicking or keyboard activation switches the colour treatment. Rendering stops once settled, offscreen, or in a hidden tab. Reduced motion keeps the wordmark static while retaining the colour switch. GSAP and Lenis coordinate scrolling, ribbons, title movement, the reel and device presentation. The pointer trail captures coalesced input where available and smooths it with a 1€ filter, whose cutoff rises with speed: slow movement loses mouse quantisation jitter while fast movement keeps the tip within a few pixels of the cursor. There is no input buffer; the trail is drawn in the same frame the (rAF-aligned) input arrives, and the browser's predicted point (`getPredictedEvents`) draws a capped step ahead to offset one frame of display latency, withdrawn as soon as input stops. After a stop the tip settles exactly on the cursor. Width and colour taper by each point's age along the actual path, so the tip is strongest and the tail thins and retracts; over media the trail stops taking input and retracts rather than vanishing. Four colour bands are offset along the path normal and drawn as batched opaque segments that fade toward white on the multiply-blended canvas. A preloader tracks real page loading with a filling bar and an odometer counter, folds the bar into the Z mark and lifts away into the hero intro (headline lines rise from masks, header pills pop in). Menu navigation, project case studies and the all-projects view open through a page transition instead of a spinner: black wedges close diagonally over the dimming page, a dot-matrix LOADING… (round LED dots with a few twinkling blue) assembles, its dots stream into a dot-built Z, and the wedges retract to reveal the destination; the jump happens while the screen is covered, and a failsafe always completes the navigation and removes the curtain. On scroll, headings and copy rise line by line out of masks (GSAP SplitText with autoSplit, so lines re-wrap on resize), project cards tilt in with perspective and settle flat, project tags decode from scrambled characters (ScrambleText, with a static copy for screen readers), and hovering a card slides an arrow in before its title. Header pills share a direction-aware fluid fill: a blue disc grows from where the pointer enters and drains out toward where it leaves (sound stays filled while on, and its waveform eases flat when off). LET’S TALK slides in an arrow; MENU turns white and rotates its dots on hover, and opens the full-screen menu. Reel and button followers use frame-based damping and reusable setters; pointer event handlers only capture their targets. Ambient audio and UI sounds activate through the sound button. Reduced motion stops continuous motion and video loops. Native page and dialog scrollbars are hidden while the custom page indicator remains. Dialogs lock both root and body scrolling and support keyboard dismissal and focus restoration. Build output uses content-versioned CSS and script URLs.

Pointer research: [1€ filter, Casiez et al.](https://gery.casiez.net/1euro/), [MDN predicted pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getPredictedEvents), [Chrome low-latency rendering](https://developer.chrome.com/blog/desynchronized), [MDN coalesced pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents), [MDN animation frames](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), [GSAP quickSetter](https://gsap.com/docs/v3/GSAP/gsap.quickSetter/), and [GSAP ticker](https://gsap.com/docs/v3/GSAP/gsap.ticker/). Automated checks replay the same curved pointer trajectory at different display rates and verify tip lag at 125–1000 Hz polling, slow-speed jitter attenuation, settling without overshoot, capped and withdrawn prediction, and pause/re-entry handling; these are not measured browser FPS or latency results.

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
