# AGENTS.md

## Purpose of this repository

This repository publishes the public Digital Unity website at `https://digitalunity.co.uk` using GitHub Pages.

The site is not intended to be a generic software-agency brochure. It is the live market-validation artefact for Digital Unity's evidence-backed proposition.

Before changing positioning, service language, case-study claims, analytics, conversion paths, visual identity or public contact details, read:

- `docs/PROJECT-CONTEXT.md`
- `docs/BRAND.md`

## Core positioning

Digital Unity helps businesses untangle messy operations across people, spreadsheets and systems so they become easier to understand, easier to run and easier to improve.

The key principle is:

> **Technology follows the problem.**

Do not reposition Digital Unity primarily as:

- a bespoke software house;
- an AI automation agency;
- a CRM vendor;
- an IT support company;
- a body-shop development team;
- a cloud consultancy;
- an integration shop.

These can be delivery capabilities. They are not the core proposition.

## Public language rules

- Do **not** expose `Digital Unity V2` on the public website. `V2` is an internal project/version label only.
- Public contact address is `hello@digitalunity.co.uk`.
- Do not replace that with `chris@digitalunity.co.uk` in public-facing site copy.
- Do not invent quantified outcomes, ROI, productivity savings or percentages that are not supported by primary evidence.
- Prefer recognisable operational language such as chasing, duplicate entry, workarounds, unclear ownership, hidden rules, source of truth and systems that no longer match the operation.
- Avoid generic claims such as "digital transformation", "cutting-edge automation", "end-to-end technology solutions" or "AI-powered transformation" unless a specific page has evidence and a reason to use them.
- AI is a tool, not the brand identity.

## Three-stage service model

Keep the service proposition aligned with these stages unless an explicit product decision changes it:

1. **Operational Diagnosis — Understand it.**
   Work out what is really happening, what is getting in the way and what is worth changing.

2. **Solution Design & Architecture — Design it.**
   Define the improved operating model and make the important decisions before implementation makes them expensive to change.

3. **Delivery & Stewardship — Make it real.**
   Build, integrate or oversee the change, prove it works in the real operation and put long-term ownership in the right place.

Each stage must remain independently valuable. Do not write copy that implies the client is automatically locked into the next stage or into Digital Unity implementation.

## Evidence discipline

The six flagship cases currently used by the site are:

- Custom Kitchens
- Abbey Taylor Jones
- iProsurv
- Whinfrey Briggs
- BE-Together
- Food Test Labs

The evidence is strongest for:

- operation-first discovery;
- recovering tacit business rules and meaning;
- making workflow, state, responsibility and next action explicit;
- selective automation around human judgement;
- pragmatic system/integration design;
- continued learning from live use;
- long-term stewardship, simplification and handover.

Historical evidence is weaker on formal before/after ROI and productivity measurement. Preserve that caveat unless better evidence is added to the repository.

## Website role in Phase 4

The site is being used to validate the current market hypothesis through real behaviour rather than abstract preference interviews.

When changing content, consider what can actually be learned from the change.

Current validation goals include:

- whether buyers recognise the problem language;
- whether they understand what Digital Unity does;
- which case studies attract attention;
- whether the three-stage model is understandable;
- whether visitors express contact intent;
- whether live opportunities support paid diagnosis and later-stage demand.

Do not over-optimise for traffic or vanity metrics at the expense of correct buyer understanding.

## Analytics and attribution

GA4 web stream:

- Measurement ID: `G-52ND6VWQBK`
- Stream ID: `15428903107`

`assets/validation.js` currently:

- loads GA4;
- preserves `src` and UTM attribution during a browser session;
- tracks `contact_intent` on contact CTAs;
- tracks `generate_lead` on the public email link;
- carries source/campaign/landing-page/CTA context into enquiry emails.

Do not remove this behaviour casually. If replacing it, preserve equivalent validation capability and document the change.

## Site structure

Current MVP information architecture:

- `/` — Home / buyer problem / proposition
- `/services.html` — three-stage engagement model
- `/cases.html` — flagship evidence
- `/company.html` — approach and principles
- `/contact.html` — problem-led enquiry path
- `/about.html` — legacy redirect to Company

The visual direction is intentionally restrained and professional. Do not introduce a large design-system rewrite, stock-heavy agency aesthetic or fashionable effects unless explicitly requested.

## Change discipline

For material changes:

1. Read `docs/PROJECT-CONTEXT.md` and `docs/BRAND.md`.
2. Inspect the current page and supporting evidence before editing.
3. Work on a branch for non-trivial changes.
4. Keep claims evidence-backed.
5. Compare the branch against `main` before merge.
6. Avoid unrelated cleanup in the same change.
7. Verify public email and analytics instrumentation remain intact.

## Canonical context outside this repository

The broader Digital Unity strategy and historical evidence live in the user's Digital Unity Obsidian/Google Drive knowledge base. The repository should contain enough context to work safely on the website, but it is not intended to duplicate the complete internal vault.

If a proposed claim or strategic change is not supported by this repository, consult the canonical source material rather than guessing.
