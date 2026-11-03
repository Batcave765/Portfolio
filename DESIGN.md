# Signal-cut

Recruiters scan this portfolio on a laptop in a bright office, moving quickly between candidates; a clear light first visit, visible proof, and direct résumé access serve that moment. A manually selected dark theme supports evening reading and remains equally colorful.

The voice is precision-cut, signal-painted, and kinetic. The art direction borrows the sharp silhouettes and high-visibility color of technical sports equipment, with a personal portrait to keep the engineering grounded in a person. This is a portfolio, not a terminal or a dashboard.

## Color

Full palette: the existing lime, violet, and plum identity carries forward. Lime signals impact and local-first engineering; violet frames the portrait, audio project, and contact section. Neutral surfaces give work history breathing room. Colors are defined in OKLCH, with dark text on saturated panels in both themes. Dark mode uses a lifted plum background rather than black.

## Type

Chakra Petch brings the square, clipped shapes of precision equipment markings. Manrope gives body text a softer, readable contrast. Both ship as local WOFF2 assets with their OFL licenses; the main weights are preloaded. Reflex choices considered and rejected: Space Grotesk, IBM Plex Mono, and Inter. Display sizes stay below 96px and tracking never goes below -0.035em. Body lines stay below 70 characters.

## Composition

The first screen introduces Sriram, his focus, current employer, and portrait. The lime band states two attributable outcomes as sentences rather than decorative metrics. Work history uses employer/role columns. Projects alternate architecture artwork and concise explanation; native details expose technical depth. The toolkit is a grouped definition list. Contact is a violet closing surface.

Project artwork is an architectural illustration, not an application screenshot or measured output. No fabricated project links, availability claims, or extra performance numbers.

## Behavior

Light is the first-visit default; explicit light/dark preferences persist via the existing `theme` storage key, with safe storage failure handling. Navigation stays visible without JavaScript. On small screens, the menu supports Escape, outside click, link selection, and inert closed content. Résumé and professional links use real supplied destinations. No added runtime dependencies.

Motion is a short transform-only entrance and restrained hover feedback. Reduced-motion preferences disable it. Mobile layouts stack in reading order, keep the portrait, and use touch-friendly controls.
