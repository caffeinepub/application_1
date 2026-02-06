# Specification

## Summary
**Goal:** Add a new interactive “Cake” section to the SPA with a tappable candle that shows a “Happy B’day!” popup and plays a simple blow-out animation.

**Planned changes:**
- Add a new top-level “Cake” page/section and expose it via the existing siteConfig-driven header/footer navigation (including enable/disable via config).
- Implement the Cake UI with a large centered cake illustration and a lit candle by default, matching existing layout patterns and light/dark theming.
- Add click/tap interaction: show a popup with the exact text “Happy B’day!” and transition the candle from lit to extinguished with a visible animation (flame fade/shrink + smoke puff); repeated taps remain stable.
- Use existing popup infrastructure (toast/dialog) without modifying any files under `frontend/src/components/ui`, and ensure the popup is usable in light/dark mode and dismissible (including Escape if using a dialog).
- Add and render the required static image assets from `frontend/public/assets/generated` via `/assets/generated/...` paths (no backend changes).

**User-visible outcome:** Users can navigate to a new “Cake” section, tap/click the cake/candle to see a “Happy B’day!” popup, and watch the candle blow out with a simple animation.
