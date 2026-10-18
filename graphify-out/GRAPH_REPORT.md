# Graph Report - zel  (2026-10-18)

## Corpus Check
- 30 files · ~13,281 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 553 nodes · 874 edges · 41 communities (37 shown, 4 thin omitted)
- Extraction: 81% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 161 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7bdcb227`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]

## God Nodes (most connected - your core abstractions)
1. `$()` - 73 edges
2. `$()` - 40 edges
3. `mountPage()` - 23 edges
4. `Shared page layout template (layout.html)` - 21 edges
5. `Page render loop (placeholder fill, aria-current, versioned URLs)` - 19 edges
6. `$$()` - 16 edges
7. `navigate() client-side router` - 13 edges
8. `Home page content (home.html)` - 12 edges
9. `scripts` - 11 edges
10. `buildBloom() dandelion scene` - 11 edges

## Surprising Connections (you probably didn't know these)
- `HTTP Range (206) support` --conceptually_related_to--> `Reel`  [INFERRED]
  scripts/serve.mjs → README.md
- `Deploy to Vercel workflow` --references--> `Vercel project config (vercel.json)`  [INFERRED]
  .github/workflows/deploy.yml → vercel.json
- `JSDOM harness running dist/app.js on dist/index.html` --conceptually_related_to--> `Ribbon SVGs (blue and aqua)`  [AMBIGUOUS]
  scripts/check.mjs → src/site/pages/home.html
- `Pre-deploy build and check gate` --references--> `Page render loop (placeholder fill, aria-current, versioned URLs)`  [INFERRED]
  .github/workflows/deploy.yml → scripts/build.mjs
- `footer(next) generator` --implements--> `Next-page footer band (scroll to continue)`  [INFERRED]
  scripts/build.mjs → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AI attribution prevention (rules, settings, hook, hooksPath)** — claude_commit_authorship_rule, agents_commit_authorship_rule, commit_msg_hook, settings_attribution_disabled, package_prepare_hookspath [EXTRACTED 1.00]
- **Masked text reveal hooks driven by SplitText** — readme_text_reveals, home_hook_data_reveal_heading, home_hook_data_reveal_lines, about_hook_data_reveal_words, home_hook_data_intro_lines [INFERRED 0.85]
- **Content-hash cache busting pipeline** — build_hash_of, build_versions, readme_content_versioned_assets, vercel_immutable_cache, check_route_page_assertions [INFERRED 0.95]
- **SPA page swap under the page transition** — main_navigate, transition_cover, page_intro_handle, page_mountpage, reveals_prepareintro, transition_reveal, reveals_playintro [EXTRACTED 1.00]
- **Per-page module lifecycle (init returns cleanup, torn down on unmount)** — page_mountpage, hero_inithero, confetti_initconfetti, route_initroute, bloom_initbloom, next_page_initnextpage, reveals_initreveals [EXTRACTED 1.00]
- **Scroll-scrubbed SVG stroke drawing** — route_initroute, page_scroll_scenes, reveals_pledge [INFERRED 0.85]

## Communities (41 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (38): data-count hook (ledger stat counters), data-reveal-words hook (manifesto), About page content (about.html), Pledge signature and ink stamp SVG, data-route services route map (data-route-point), Project, case study and lightbox assertions, Aeonik Regular typeface, Cabinet Grotesk (Infinity Kitchens cover only) (+30 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (49): briefForm, contact, contactLinks, escapeAttr(), footer(), labels, layout, notFound (+41 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (28): playPreloader(), $(), audio, briefUrls, closeMenu(), contact, ctx, currentRoute (+20 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (26): data-back-projects hook, data-brief-back hook, data-brief-count hook, data-brief-form hook, data-brief-next hook, data-close hook, data-gallery-project hook, data-index hook (brief steps) (+18 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (20): $(), answers, canvasStub, dom, html, idle(), interruptedTrail, jitter (+12 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (22): draw() (hero), frame() (hero), initHero() kinetic wordmark, reset() (hero), schedule() (hero), targets() letter weights, data-letter hook, data-opening hook (dialog state) (+14 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (19): buildBloom() dandelion scene, draw() (bloom), drawHead(), Film grain tile, Pointer blow interaction, pose() head projection, project() seed tips, release() seed (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (22): contactLinks HTML, esbuild bundle src/main.js to dist/app.js, footer(next) generator, hashOf() content hash, orgSchema JSON-LD Organization, Page render loop (placeholder fill, aria-current, versioned URLs), pages route table, site URL constant (zel-tau.vercel.app) (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.18
Nodes (13): Frame-independent tilt damping test, Hero colour toggle assertions, Kinetic ZEL vector wordmark hero, #hero-visual interactive wordmark button, data-letter hook (Z/E/L vector letters), Accessibility & Inclusion, Brand Personality, Product Purpose (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (15): data-layout hook (project grid), data-next-page hook, data-project-count hook, data-reel hook, data-route hook, data-route-point hook, openReel(), initNextPage() (+7 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (16): BLUE, briefFileName(), briefPdf(), CODES, context(), encodable(), GREY, infoString() (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (14): data-contact hook, Delegated contact trigger listener, openProject(), showDialog(), cover(), createPageTransition(), drawDots(), finish() (transition) (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Commit authorship, graphify, Project rules

### Community 13 - "Community 13"
Cohesion: 0.19
Nodes (13): initBloom(), Defer work until needed (low-end budget), data-poster hook, data-src / data-src-portrait hook, data-start hook (video start time), Reduced-motion change handler, liteData(), Poster prefetch observer (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.28
Nodes (13): Menu/contact/media dialog and root scroll-lock assertions, Fixed 54px pill navigation, Contact dialog (#contact-dialog), Header pill navigation, data-close hook (dialog close buttons), data-contact hook (opens contact dialog), Screenshot lightbox (#lightbox), Media dialog (#media-dialog) (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.20
Nodes (12): data-project hook, data-reveal-heading hook, data-reveal-lines hook, data-reveal-words hook, projectCard(), Scroll-scrubbed page scenes, initReveals(), Pledge strike, signature and stamp (+4 more)

### Community 18 - "Community 18"
Cohesion: 0.18
Nodes (8): createPageTransition(), expoIn, expoInOut, expoOut, GLYPHS, T, windowIn, windowOut

### Community 19 - "Community 19"
Cohesion: 0.18
Nodes (12): JSDOM harness running dist/app.js on dist/index.html, Pre-deploy build and check gate, Deploy to Vercel workflow, scripts, build, check, dev, prepare (+4 more)

### Community 20 - "Community 20"
Cohesion: 0.20
Nodes (9): dependencies, gsap, lenis, devDependencies, esbuild, jsdom, name, private (+1 more)

### Community 21 - "Community 21"
Cohesion: 0.17
Nodes (15): Animated ribbons behind large text, Dandelion canvas (canvas.bloom), 3D laptop device scene (Fogstores screen), data-reel hook (reel frame button), Home page content (home.html), Reel video (data-src/data-poster + portrait variants), Ribbon SVGs (blue and aqua), OpenAI static hosting config (dist) (+7 more)

### Community 22 - "Community 22"
Cohesion: 0.29
Nodes (8): jump(), jumpNow(), mount(), navigate(), routeOf(), scrollToHash(), syncNav(), toTop()

### Community 23 - "Community 23"
Cohesion: 0.43
Nodes (7): drainPill(), fillOf(), fillPill(), initPills(), initSoundWave(), isPinned(), locate()

### Community 24 - "Community 24"
Cohesion: 0.20
Nodes (9): attribution, commit, pr, hooks, PreToolUse, UserPromptSubmit, includeCoAuthoredBy, permissions (+1 more)

### Community 25 - "Community 25"
Cohesion: 0.29
Nodes (6): Reduced-motion fallbacks, data-count hook, data-lenis-prevent hook, Lenis smooth scroll (startSmoothScroll), lockScroll(), Ledger count-up

### Community 26 - "Community 26"
Cohesion: 0.25
Nodes (7): buildCommand, framework, headers, outputDirectory, redirects, $schema, trailingSlash

### Community 27 - "Community 27"
Cohesion: 0.29
Nodes (11): Brief step 3: name, email, project, Brief step 1: what to build (needs), Brief step controls (data-brief-next/back/submit/count), Brief form partial (brief-form.html), Brief step 2: launch timeline, contact config (support@zel.agency, @agency.zel), Brief form flow assertions, Contact hero confetti canvas (canvas.confetti) (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.47
Nodes (6): data-intro-lines hook, Page handle (prepareIntro / playIntro / unmount), headerEls(), playIntro(), prepareIntro(), set() empty-safe gsap.set

### Community 29 - "Community 29"
Cohesion: 0.27
Nodes (8): data-page hook (body), data-page-root hook, Delegated same-origin link router, mount(), navigate() client-side router, routeOf(), ROUTES set, scrollToHash()

### Community 30 - "Community 30"
Cohesion: 0.70
Nodes (5): Commit authorship rule (Codex), Commit authorship rule (Claude), commit-msg AI attribution stripper, prepare script: core.hooksPath = .githooks, Claude Code attribution disabled (settings.json)

### Community 31 - "Community 31"
Cohesion: 0.50
Nodes (3): project_id, static, directory

### Community 33 - "Community 33"
Cohesion: 0.67
Nodes (3): drawPaint(), resetPaint(), sizePaint()

### Community 34 - "Community 34"
Cohesion: 0.67
Nodes (3): lockScroll(), openReel(), showDialog()

### Community 35 - "Community 35"
Cohesion: 0.67
Nodes (3): openFrom(), openProject(), renderProject()

### Community 36 - "Community 36"
Cohesion: 0.40
Nodes (6): fastHeadLag() tip-lag test, Pointer trail settle/jitter/prediction/pause tests, pointerReplay() display-rate trajectory test, Pointer trail canvas (#fluid-canvas), 1-euro filter (Casiez et al.), Pointer trail (coalesced + predicted events, 1-euro smoothing)

### Community 37 - "Community 37"
Cohesion: 0.47
Nodes (6): finish() preloader exit, playPreloader(), setCount() odometer, tick() (preloader progress), First-load boot sequence, syncNav()

### Community 38 - "Community 38"
Cohesion: 0.21
Nodes (11): drawPaint() pointer trail renderer, Pointer paint input handler, resetPaint(), sizePaint(), trailBands colour stack, alpha() smoothing factor, PointerTrail.clear(), PointerTrail.frame() (+3 more)

### Community 39 - "Community 39"
Cohesion: 0.25
Nodes (9): Sound button assertions, Asset path, sound file and colour-scheme checks, Skip to content link, Sound toggle pill (.sound), Accessibility and inclusion requirements, Device testing, Direction-aware fluid pill fill, Light-only colour scheme (+1 more)

## Ambiguous Edges - Review These
- `Design Principles` → `Reference media`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to
- `Ribbon SVGs (blue and aqua)` → `JSDOM harness running dist/app.js on dist/index.html`  [AMBIGUOUS]
  scripts/check.mjs · relation: conceptually_related_to
- `showBriefStep()` → `data-step hook (lightbox arrows)`  [AMBIGUOUS]
  src/main.js · relation: conceptually_related_to
- `openProject()` → `run()`  [AMBIGUOUS]
  src/main.js · relation: conceptually_related_to

## Knowledge Gaps
- **158 isolated node(s):** `commit`, `pr`, `includeCoAuthoredBy`, `allow`, `PreToolUse` (+153 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Design Principles` and `Reference media`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Ribbon SVGs (blue and aqua)` and `JSDOM harness running dist/app.js on dist/index.html`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `showBriefStep()` and `data-step hook (lightbox arrows)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `openProject()` and `run()`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `$()` connect `Community 2` to `Community 33`, `Community 34`, `Community 35`, `Community 1`, `Community 4`, `Community 10`, `Community 18`, `Community 22`, `Community 23`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `mountPage()` connect `Community 9` to `Community 3`, `Community 5`, `Community 6`, `Community 11`, `Community 13`, `Community 15`, `Community 28`, `Community 29`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `$()` connect `Community 4` to `Community 1`, `Community 10`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._