# Specification

## Summary
**Goal:** Update the description text for the first visible gallery card (“Pink Dreams”) and ensure it matches everywhere that card’s details are shown.

**Planned changes:**
- In `frontend/src/content/siteConfig.ts`, change the `galleryImages` entry with id `1` (title: “Pink Dreams”) description from `This is the coolest photo of us in my gallery... uff Aesthetic log :>` to `If there was an award for the cutest photo ever taken, this would win by a mile *kuchupuchu*`.
- Ensure the same updated description appears in both the gallery card view and the image modal for that image.

**User-visible outcome:** The “Pink Dreams” gallery card and its image modal display the updated description text exactly: `If there was an award for the cutest photo ever taken, this would win by a mile *kuchupuchu*`.
