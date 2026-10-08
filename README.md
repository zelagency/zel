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

Custom Three.js sculpture made from hollow rounded cross forms, drawn in three material batches. Pointer movement tilts the composition; clicks scatter it; dragging rotates it. Physics use a fixed 120 Hz simulation step and time-based damping, with rendering paused offscreen or in a hidden tab. GSAP and Lenis coordinate scrolling, ribbons, title movement, the reel and device presentation. Reused pointer tweens and four smooth pointer-paint strokes reduce event and drawing overhead. Ambient audio and UI sounds activate through the sound button. Reduced motion stops continuous motion and video loops. Navigation and media dialogs support keyboard dismissal and focus restoration.

## Selected work

Fogstores leads the work section, followed by Infinity Kitchens and BNM Cafe. Each project opens a detail view and links to its actual live site. Source records and project descriptions are defined in `src/projects.js`.

- Fogstores: https://fogstores.vercel.app/ — original campaign and look photography from `Hazestudios/public/fogstores`.
- Infinity Kitchens: https://infinitykitchensblr.com/ — original food photography and brand mark from Cloud-Kitchen, with actual customer homepage and menu screenshots recorded in its September 19, 2026 capture assets.
- BNM Cafe: https://bnm-cafe-rho.vercel.app/menu — actual mobile menu screenshot and cafe logo from `bnm/BNM-Cafe`.

The covers compose these real assets for ZEL's portfolio; the detail views identify actual screenshots and photography. Source project folders are unchanged. At inspection, the Fogstores and Infinity URLs served sign-in pages, so their authenticated interfaces were not captured from the live sites.

The contact form prepares a local downloadable brief. No messages are submitted to a server; a real contact destination should be configured before a public agency launch.

## Reference media

Design reference: https://lusion.co/ and the user’s a.png–f.png screenshots.
The flower loop, creative reference reel, ambient audio and UI sounds remain Lusion reference media, credited in the page and reel viewer. Featured Work now uses the user's own projects and real assets. The page and 3D implementation are newly authored.

The reference’s Aeonik Regular web font is included for accurate typography in this private visual study, with Arial/Helvetica fallbacks. The reference media and font retain their original ownership; use appropriate licenses or replacements for a public agency launch.

Browser surfaces were unavailable in the execution session. Functional checks and build validation were performed; viewport screenshot comparison and perceptual audio verification remain unverified.
