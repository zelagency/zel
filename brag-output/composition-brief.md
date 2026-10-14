# Hyperframes Composition Brief: ZEL

## Objective
8-second agency reel for the ZEL homepage "PLAY REEL" slot: who ZEL is and its main selling point.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape 1920x1080, 30fps
- Duration: 8.5s (user-specified 7–9s; overrides /brag 15–25s default)
- Portrait cut: `composition-4x5/` → `brag-4x5.mp4` (1080×1350), same timeline
- Safe band: key content within y≈155–925 (site slot crops to ~2.5:1)

## Source Material
- Project root: `C:/Users/Ammaar/Desktop/Zel`
- Files read: `src/site/pages/home.html`, `src/site/pages/about.html`, `src/projects.js`, `PRODUCT.md`, `DESIGN.md`, `README.md`, `dist/style.css`
- Product name: ZEL
- Strongest claim: "We build both sides of the counter" (About hero)
- Key visuals: ZEL vector wordmark paths (home hero SVG); project screenshots (Fogstores, BNM Cafe, Infinity Kitchens); "3→1" kitchen ticket ledger stat
- Verbatim copy: "Ideas into reality.", "FRONT OF HOUSE", "BACK OF HOUSE", "both sides of the counter"

## Creative Direction
- Tone: polished + cinematic accents. Confident agency sizzle; oversized Aeonik type; expo/power4 easing; real holds.
- Hook: kinetic ZEL wordmark on cobalt.
- Outro: "We build both sides of the counter." + ZEL wordmark on a drawn counter line.
- Avoid: generic SaaS language, abstract filler, any Lusion reference media.

## Visual Identity
- Paper #f0f1fa · ink #000 · cobalt #1a2ffb · dark #2d2f3b · ivory #f6f3ea · aqua #47dfe9
- Font: Aeonik Regular (local `assets/fonts/Aeonik-Regular.woff2`)
- 20px media radii, pill chips, uppercase 0.04em tracking for eyebrows

## Storyboard
See `brag-plan.md`. Scenes: ZEL 0–1.64 · Front of house 1.64–3.83 · Back of house 3.83–6.01 · Both sides 6.01–8.0

## Audio
- Music: `assets/music/bed.mp3` (vol-12 excerpt 8.19–16.19s, pre-trimmed), volume 0.4, fade out 7.4→8.0
- Cue guidance: preset `<skill-dir>/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`; strong cue at 4.92s (merge); beat grid 0.545s
- Audio-reactive: subtle bass → glow on cobalt scenes / ticket presence (`assets/music/audio-data.json`)
- SFX: sparse, chosen per animation from `<skill-dir>/assets/sfx/sfx-analysis.md`
