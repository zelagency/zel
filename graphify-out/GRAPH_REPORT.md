# Graph Report - .  (2026-10-14)

## Corpus Check
- Corpus is ~10,865 words - fits in a single context window. You may not need a graph.

## Summary
- 484 nodes · 781 edges · 36 communities (34 shown, 2 thin omitted)
- Extraction: 79% EXTRACTED · 20% INFERRED · 1% AMBIGUOUS · INFERRED: 159 edges (avg confidence: 0.88)
- Token cost: 291,347 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_About Page & Site Checks|About Page & Site Checks]]
- [[_COMMUNITY_Canvas Effect Modules|Canvas Effect Modules]]
- [[_COMMUNITY_App Shell State|App Shell State]]
- [[_COMMUNITY_Brief & Gallery Hooks|Brief & Gallery Hooks]]
- [[_COMMUNITY_Check Script Utilities|Check Script Utilities]]
- [[_COMMUNITY_Hero Wordmark & Audio|Hero Wordmark & Audio]]
- [[_COMMUNITY_Dandelion Bloom Simulation|Dandelion Bloom Simulation]]
- [[_COMMUNITY_Build & Deploy Pipeline|Build & Deploy Pipeline]]
- [[_COMMUNITY_Design System & Layout|Design System & Layout]]
- [[_COMMUNITY_Next Page, Reel & Route Map|Next Page, Reel & Route Map]]
- [[_COMMUNITY_Header Pills & Dialogs|Header Pills & Dialogs]]
- [[_COMMUNITY_Page Transition & Projects|Page Transition & Projects]]
- [[_COMMUNITY_Build Script Data|Build Script Data]]
- [[_COMMUNITY_Lazy Media & Low-End Budget|Lazy Media & Low-End Budget]]
- [[_COMMUNITY_Pointer Trail Rendering|Pointer Trail Rendering]]
- [[_COMMUNITY_Scroll Reveals|Scroll Reveals]]
- [[_COMMUNITY_Contact Brief Form|Contact Brief Form]]
- [[_COMMUNITY_Routing & Page Template|Routing & Page Template]]
- [[_COMMUNITY_Transition Overlay Module|Transition Overlay Module]]
- [[_COMMUNITY_Client Router|Client Router]]
- [[_COMMUNITY_Package Manifest|Package Manifest]]
- [[_COMMUNITY_PointerTrail Class|PointerTrail Class]]
- [[_COMMUNITY_Router Functions|Router Functions]]
- [[_COMMUNITY_Pill Fill Effects|Pill Fill Effects]]
- [[_COMMUNITY_Project Settings|Project Settings]]
- [[_COMMUNITY_Smooth Scroll & Counters|Smooth Scroll & Counters]]
- [[_COMMUNITY_Vercel Config|Vercel Config]]
- [[_COMMUNITY_Pointer Trail Tests|Pointer Trail Tests]]
- [[_COMMUNITY_Page Intro Animation|Page Intro Animation]]
- [[_COMMUNITY_Preloader Boot Sequence|Preloader Boot Sequence]]
- [[_COMMUNITY_Commit Attribution Rules|Commit Attribution Rules]]
- [[_COMMUNITY_Static Hosting Config|Static Hosting Config]]
- [[_COMMUNITY_Dev Server|Dev Server]]
- [[_COMMUNITY_Paint Trail Functions|Paint Trail Functions]]
- [[_COMMUNITY_Dialog Scroll Lock|Dialog Scroll Lock]]
- [[_COMMUNITY_Project Case Study Opening|Project Case Study Opening]]

## God Nodes (most connected - your core abstractions)
1. `$()` - 68 edges
2. `$()` - 32 edges
3. `mountPage()` - 23 edges
4. `Shared page layout template (layout.html)` - 21 edges
5. `Page render loop (placeholder fill, aria-current, versioned URLs)` - 19 edges
6. `$$()` - 16 edges
7. `navigate() client-side router` - 13 edges
8. `Home page content (home.html)` - 12 edges
9. `scripts` - 11 edges
10. `buildBloom() dandelion scene` - 11 edges

## Surprising Connections (you probably didn't know these)
- `JSDOM harness running dist/app.js on dist/index.html` --references--> `Reduced motion support`  [INFERRED]
  scripts/check.mjs → README.md
- `On-demand loading strategy` --references--> `/assets/ one-day cache with stale-while-revalidate`  [INFERRED]
  README.md → vercel.json
- `HTTP Range (206) support` --conceptually_related_to--> `ZEL homepage reel (16:9 and 4:5 HyperFrames cuts)`  [INFERRED]
  scripts/serve.mjs → README.md
- `Deploy to Vercel workflow` --references--> `Vercel project config (vercel.json)`  [INFERRED]
  .github/workflows/deploy.yml → vercel.json
- `Pre-deploy build and check gate` --references--> `JSDOM harness running dist/app.js on dist/index.html`  [INFERRED]
  .github/workflows/deploy.yml → scripts/check.mjs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AI attribution prevention (rules, settings, hook, hooksPath)** — claude_commit_authorship_rule, agents_commit_authorship_rule, commit_msg_hook, settings_attribution_disabled, package_prepare_hookspath [EXTRACTED 1.00]
- **Masked text reveal hooks driven by SplitText** — readme_text_reveals, home_hook_data_reveal_heading, home_hook_data_reveal_lines, about_hook_data_reveal_words, home_hook_data_intro_lines [INFERRED 0.85]
- **Content-hash cache busting pipeline** — build_hash_of, build_versions, readme_content_versioned_assets, vercel_immutable_cache, check_route_page_assertions [INFERRED 0.95]
- **SPA page swap under the page transition** — main_navigate, transition_cover, page_intro_handle, page_mountpage, reveals_prepareintro, transition_reveal, reveals_playintro [EXTRACTED 1.00]
- **Per-page module lifecycle (init returns cleanup, torn down on unmount)** — page_mountpage, hero_inithero, confetti_initconfetti, route_initroute, bloom_initbloom, next_page_initnextpage, reveals_initreveals [EXTRACTED 1.00]
- **Scroll-scrubbed SVG stroke drawing** — route_initroute, page_scroll_scenes, reveals_pledge [INFERRED 0.85]

## Communities (36 total, 2 thin omitted)

### Community 0 - "About Page & Site Checks"
Cohesion: 0.07
Nodes (46): data-count hook (ledger stat counters), data-reveal-words hook (manifesto), About page content (about.html), Pledge signature and ink stamp SVG, data-route services route map (data-route-point), Frame-independent tilt damping test, Hero colour toggle assertions, JSDOM harness running dist/app.js on dist/index.html (+38 more)

### Community 1 - "Canvas Effect Modules"
Cohesion: 0.10
Nodes (27): buildBloom(), cross(), initBloom(), NONE, rand(), seedHead(), unit(), COLORS (+19 more)

### Community 2 - "App Shell State"
Cohesion: 0.07
Nodes (28): playPreloader(), $(), audio, briefUrls, closeMenu(), contact, ctx, currentRoute (+20 more)

### Community 3 - "Brief & Gallery Hooks"
Cohesion: 0.09
Nodes (26): data-back-projects hook, data-brief-back hook, data-brief-count hook, data-brief-form hook, data-brief-next hook, data-close hook, data-gallery-project hook, data-index hook (brief steps) (+18 more)

### Community 4 - "Check Script Utilities"
Cohesion: 0.09
Nodes (14): $(), canvasStub, dom, html, idle(), interruptedTrail, jitter, motionEnabled (+6 more)

### Community 5 - "Hero Wordmark & Audio"
Cohesion: 0.13
Nodes (22): draw() (hero), frame() (hero), initHero() kinetic wordmark, reset() (hero), schedule() (hero), targets() letter weights, data-letter hook, data-opening hook (dialog state) (+14 more)

### Community 6 - "Dandelion Bloom Simulation"
Cohesion: 0.12
Nodes (19): buildBloom() dandelion scene, draw() (bloom), drawHead(), Film grain tile, Pointer blow interaction, pose() head projection, project() seed tips, release() seed (+11 more)

### Community 7 - "Build & Deploy Pipeline"
Cohesion: 0.13
Nodes (21): esbuild bundle src/main.js to dist/app.js, hashOf() content hash, orgSchema JSON-LD Organization, Page render loop (placeholder fill, aria-current, versioned URLs), site URL constant (zel-tau.vercel.app), versions map (asset to content hash), Pre-deploy build and check gate, Deploy to Vercel workflow (+13 more)

### Community 8 - "Design System & Layout"
Cohesion: 0.15
Nodes (17): Stylesheet syntax check (esbuild transform), Asset path, sound file and colour-scheme checks, Aeonik Regular typeface, ZEL palette (lavender #f0f1fa, cobalt #1a2ffb, aqua), Lusion reference (lusion.co, a.png-f.png), Reel video (data-src/data-poster + portrait variants), Open Graph and Twitter meta placeholders, Custom scroll indicator (.scroll-indicator) (+9 more)

### Community 9 - "Next Page, Reel & Route Map"
Cohesion: 0.17
Nodes (15): data-layout hook (project grid), data-next-page hook, data-project-count hook, data-reel hook, data-route hook, data-route-point hook, openReel(), initNextPage() (+7 more)

### Community 10 - "Header Pills & Dialogs"
Cohesion: 0.25
Nodes (15): Menu/contact/media dialog and root scroll-lock assertions, Sound button assertions, Fixed 54px pill navigation, data-reel hook (reel frame button), Contact dialog (#contact-dialog), Header pill navigation, data-close hook (dialog close buttons), data-contact hook (opens contact dialog) (+7 more)

### Community 11 - "Page Transition & Projects"
Cohesion: 0.22
Nodes (14): data-contact hook, Delegated contact trigger listener, openProject(), showDialog(), cover(), createPageTransition(), drawDots(), finish() (transition) (+6 more)

### Community 12 - "Build Script Data"
Cohesion: 0.14
Nodes (10): briefForm, contact, contactLinks, labels, layout, orgSchema, pages, versions (+2 more)

### Community 13 - "Lazy Media & Low-End Budget"
Cohesion: 0.19
Nodes (13): initBloom(), Defer work until needed (low-end budget), data-poster hook, data-src / data-src-portrait hook, data-start hook (video start time), Reduced-motion change handler, liteData(), Poster prefetch observer (+5 more)

### Community 14 - "Pointer Trail Rendering"
Cohesion: 0.21
Nodes (11): drawPaint() pointer trail renderer, Pointer paint input handler, resetPaint(), sizePaint(), trailBands colour stack, alpha() smoothing factor, PointerTrail.clear(), PointerTrail.frame() (+3 more)

### Community 15 - "Scroll Reveals"
Cohesion: 0.20
Nodes (12): data-project hook, data-reveal-heading hook, data-reveal-lines hook, data-reveal-words hook, projectCard(), Scroll-scrubbed page scenes, initReveals(), Pledge strike, signature and stamp (+4 more)

### Community 16 - "Contact Brief Form"
Cohesion: 0.29
Nodes (11): Brief step 3: name, email, project, Brief step 1: what to build (needs), Brief step controls (data-brief-next/back/submit/count), Brief form partial (brief-form.html), Brief step 2: launch timeline, contact config (support@zel.agency, @agency.zel), Brief form flow assertions, Contact hero confetti canvas (canvas.confetti) (+3 more)

### Community 17 - "Routing & Page Template"
Cohesion: 0.24
Nodes (11): contactLinks HTML, footer(next) generator, pages route table, Per-route page assertions, body data-page attribute, data-page-root hook (swappable main), Next-page footer band (scroll to continue), Page transition (Lusion TransitionOverlay model) (+3 more)

### Community 18 - "Transition Overlay Module"
Cohesion: 0.18
Nodes (8): createPageTransition(), expoIn, expoInOut, expoOut, GLYPHS, T, windowIn, windowOut

### Community 19 - "Client Router"
Cohesion: 0.27
Nodes (8): data-page hook (body), data-page-root hook, Delegated same-origin link router, mount(), navigate() client-side router, routeOf(), ROUTES set, scrollToHash()

### Community 20 - "Package Manifest"
Cohesion: 0.20
Nodes (9): dependencies, gsap, lenis, devDependencies, esbuild, jsdom, name, private (+1 more)

### Community 22 - "Router Functions"
Cohesion: 0.29
Nodes (8): jump(), jumpNow(), mount(), navigate(), routeOf(), scrollToHash(), syncNav(), toTop()

### Community 23 - "Pill Fill Effects"
Cohesion: 0.43
Nodes (7): drainPill(), fillOf(), fillPill(), initPills(), initSoundWave(), isPinned(), locate()

### Community 24 - "Project Settings"
Cohesion: 0.29
Nodes (6): attribution, commit, pr, includeCoAuthoredBy, permissions, allow

### Community 25 - "Smooth Scroll & Counters"
Cohesion: 0.29
Nodes (6): Reduced-motion fallbacks, data-count hook, data-lenis-prevent hook, Lenis smooth scroll (startSmoothScroll), lockScroll(), Ledger count-up

### Community 26 - "Vercel Config"
Cohesion: 0.29
Nodes (6): buildCommand, framework, headers, outputDirectory, $schema, trailingSlash

### Community 27 - "Pointer Trail Tests"
Cohesion: 0.40
Nodes (6): fastHeadLag() tip-lag test, Pointer trail settle/jitter/prediction/pause tests, pointerReplay() display-rate trajectory test, Pointer trail canvas (#fluid-canvas), 1-euro filter (Casiez et al.), Pointer trail (coalesced + predicted events, 1-euro smoothing)

### Community 28 - "Page Intro Animation"
Cohesion: 0.47
Nodes (6): data-intro-lines hook, Page handle (prepareIntro / playIntro / unmount), headerEls(), playIntro(), prepareIntro(), set() empty-safe gsap.set

### Community 29 - "Preloader Boot Sequence"
Cohesion: 0.47
Nodes (6): finish() preloader exit, playPreloader(), setCount() odometer, tick() (preloader progress), First-load boot sequence, syncNav()

### Community 30 - "Commit Attribution Rules"
Cohesion: 0.70
Nodes (5): Commit authorship rule (Codex), Commit authorship rule (Claude), commit-msg AI attribution stripper, prepare script: core.hooksPath = .githooks, Claude Code attribution disabled (settings.json)

### Community 31 - "Static Hosting Config"
Cohesion: 0.50
Nodes (3): project_id, static, directory

### Community 33 - "Paint Trail Functions"
Cohesion: 0.67
Nodes (3): drawPaint(), resetPaint(), sizePaint()

### Community 34 - "Dialog Scroll Lock"
Cohesion: 0.67
Nodes (3): lockScroll(), openReel(), showDialog()

### Community 35 - "Project Case Study Opening"
Cohesion: 0.67
Nodes (3): openFrom(), openProject(), renderProject()

## Ambiguous Edges - Review These
- `Design principles (preserve reference scale, credit reference media)` → `Lusion reference media and Aeonik font licensing`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to
- `Ribbon SVGs (blue and aqua)` → `JSDOM harness running dist/app.js on dist/index.html`  [AMBIGUOUS]
  scripts/check.mjs · relation: conceptually_related_to
- `showBriefStep()` → `data-step hook (lightbox arrows)`  [AMBIGUOUS]
  src/main.js · relation: conceptually_related_to
- `openProject()` → `run()`  [AMBIGUOUS]
  src/main.js · relation: conceptually_related_to

## Knowledge Gaps
- **123 isolated node(s):** `commit`, `pr`, `includeCoAuthoredBy`, `allow`, `project_id` (+118 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Design principles (preserve reference scale, credit reference media)` and `Lusion reference media and Aeonik font licensing`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Ribbon SVGs (blue and aqua)` and `JSDOM harness running dist/app.js on dist/index.html`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `showBriefStep()` and `data-step hook (lightbox arrows)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `openProject()` and `run()`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `$()` connect `App Shell State` to `Paint Trail Functions`, `Dialog Scroll Lock`, `Project Case Study Opening`, `Canvas Effect Modules`, `Build Script Data`, `Transition Overlay Module`, `PointerTrail Class`, `Router Functions`, `Pill Fill Effects`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Why does `mountPage()` connect `Next Page, Reel & Route Map` to `Brief & Gallery Hooks`, `Hero Wordmark & Audio`, `Dandelion Bloom Simulation`, `Page Transition & Projects`, `Lazy Media & Low-End Budget`, `Scroll Reveals`, `Client Router`, `Page Intro Animation`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `Page render loop (placeholder fill, aria-current, versioned URLs)` connect `Build & Deploy Pipeline` to `About Page & Site Checks`, `Design System & Layout`, `Header Pills & Dialogs`, `Contact Brief Form`, `Routing & Page Template`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._