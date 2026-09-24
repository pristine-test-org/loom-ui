---
name: Loom
description: Calm, dense product UI. Warm linen neutrals, one indigo accent, soft single-layer elevation, a seven-step Inter type scale on a 4px grid.

# Every value below mirrors src/tokens.css. That file is the source of truth;
# this frontmatter is the portable export. If a token changes there, change it
# here in the same commit.
colors:
  # Light theme (the :root defaults)
  bg: "#f8f7f4"              # neutral-50, the page behind everything
  surface: "#ffffff"         # neutral-0, cards, dialogs, fields
  surface-sunk: "#f0eee9"    # neutral-100, hovers, neutral badges, disabled fields
  text: "#1b1916"            # neutral-900, headings and body
  text-muted: "#5c574d"      # neutral-600, secondary copy, descriptions
  text-faint: "#716b5f"      # neutral-500, placeholders and meta, still 4.5:1 on bg
  border: "#e3e0d8"          # neutral-200, hairlines and card edges
  border-strong: "#cdc8bd"   # neutral-300, field borders, secondary button
  accent: "#3d4aab"          # indigo-600, primary buttons, selected tab
  accent-hover: "#323c8b"    # indigo-700
  accent-subtle: "#eef0fb"   # indigo-50, accent badge ground, focus halo
  accent-text: "#323c8b"     # indigo-700, accent-coloured text
  on-accent: "#ffffff"       # text on accent fills
  focus: "#4f5fc6"           # indigo-500, focus rings
  success: "#23754a"
  success-subtle: "#ebf6ef"
  success-text: "#1c5e3b"
  warning: "#9a5f06"
  warning-subtle: "#fcf4e2"
  warning-text: "#7c4c05"
  danger: "#b3302a"
  danger-hover: "#922620"
  danger-subtle: "#fcefed"
  danger-text: "#922620"
  on-danger: "#ffffff"

  # Dark theme, applied under [data-theme="dark"]
  dark-bg: "#11100e"
  dark-surface: "#1b1916"
  dark-surface-sunk: "#0b0a09"
  dark-text: "#f8f7f4"
  dark-text-muted: "#cdc8bd"
  dark-text-faint: "#a39d91"
  dark-border: "#2c2924"
  dark-border-strong: "#443f37"
  dark-accent: "#96a2e4"
  dark-accent-hover: "#bcc4ef"
  dark-accent-text: "#bcc4ef"
  dark-on-accent: "#1c2249"
  dark-focus: "#96a2e4"
  dark-success: "#7fc79b"
  dark-warning: "#e8b75a"
  dark-danger: "#ec8f86"
  dark-on-danger: "#11100e"

typography:
  scale:
    # Seven steps at a 16px root. Every font-size in a component reads one of
    # these. An eighth size is a design decision, not a convenience.
    xs: "0.75rem"      # badges, meta, help text
    sm: "0.875rem"     # controls, labels, card body
    md: "1rem"         # body copy
    lg: "1.125rem"     # card titles
    xl: "1.375rem"     # dialog titles
    2xl: "1.75rem"     # section headings
    3xl: "2.25rem"     # page headings
  body:
    fontFamily: '"Inter Variable", Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: '"Inter Variable", Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
  title:
    fontFamily: '"Inter Variable", Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
    lineHeight: 1.25
  eyebrow:
    fontFamily: '"Inter Variable", Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    lineHeight: 1.5

rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"

spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"

elevation:
  sm: "0 1px 2px rgb(27 25 22 / 0.06), 0 1px 1px rgb(27 25 22 / 0.04)"
  md: "0 4px 12px rgb(27 25 22 / 0.08), 0 1px 3px rgb(27 25 22 / 0.06)"
  lg: "0 16px 40px rgb(27 25 22 / 0.14), 0 4px 12px rgb(27 25 22 / 0.08)"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    borderColor: "{colors.border-strong}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
    shadow: "{elevation.sm}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    borderColor: "{colors.border-strong}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.75rem"
  badge:
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0.125rem 0.5rem"
  dialog:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
    shadow: "{elevation.lg}"
  avatar:
    backgroundColor: "{colors.accent-subtle}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.pill}"
  tab-selected:
    textColor: "{colors.text}"
    borderColor: "{colors.accent}"
---

# Loom design system

Loom is the component library behind our product surfaces. This file describes
the tokens and the components built on them. The tokens live in
`src/tokens.css`; the components live in `src/components/`, each with its
stories.

## Principles

**Quiet by default.** Most of the screen is linen neutrals. Colour is for the
one thing a person should do next and for status, never for decoration.

**One accent.** Indigo marks the primary action, the selected tab and focus.
If two indigo buttons sit side by side, one of them should be `secondary`.

**Tokens, not literals.** Every colour, font size, space, radius and shadow in
a component reads a `--loom-*` custom property. A hex value or an off-scale
size in a component stylesheet is a bug; hairline widths are the exception.

**Accessible first.** Text tokens clear 4.5:1 against the surfaces they sit on,
in both themes. Focus is always visible. Colour never carries meaning alone:
status badges and toasts always have a word.

## Colour

Two layers. The raw scales (`--loom-neutral-*`, `--loom-indigo-*`, and the
green, amber and red status steps) are the palette. The semantic layer
(`--loom-color-*`) names what a colour is for. Components read only the semantic
layer.

- `text`, `text-muted` and `text-faint` are the three ink tiers. `text-faint`
  is for placeholders and meta only.
- `border` is for hairlines; `border-strong` is for things you can click or
  type into.
- `accent` fills primary actions; `accent-text` is for indigo text on light
  grounds; `accent-subtle` is the halo and badge ground.
- Each status has a fill, a `-subtle` ground and a `-text` for words on that
  ground.

## Dark theme

Dark mode is a swap of the semantic layer under `[data-theme="dark"]` and
nothing else. The scales do not change. Surfaces step up from `bg` to
`surface`; the accent lightens to indigo-300 with dark text on it so it keeps
contrast; shadows get darker rather than lighter.

## Type

One family, Inter, at seven sizes from `xs` (12px) to `3xl` (36px). Controls
and labels use `sm` at weight 500; titles use weight 600 with a -0.01em
tracking. Nothing is smaller than `xs`, and `xs` is never used for a sentence
longer than one line.

## Spacing, radius and elevation

A 4px base in eight steps, `--loom-space-1` (4px) to `--loom-space-8` (64px).
Inside a component use `space-4` or smaller; between components use `space-5`
and up.

Radius: `sm` for small inner parts, `md` for controls, `lg` for containers
(cards, dialogs), `pill` for badges.

Elevation is soft and single-layered. Cards sit at `shadow-sm` with a hairline
border, toasts at `shadow-md`, dialogs at `shadow-lg`. Nothing nests shadows.

## Components

- **Button**: `primary`, `secondary`, `ghost` and `danger`, in `sm`, `md` and
  `lg`. Secondary is a white surface with a `border-strong` edge and `text`
  ink. A `loading` state swaps the leading icon for a spinner.
- **Card**: optional eyebrow, title, description, body and footer. `raised`
  (hairline and `shadow-sm`) or `outlined` (a `border-strong` edge, no shadow).
  Padding is `space-5`.
- **Badge**: a pill in five tones: neutral, accent, success, warning, danger.
  An optional dot for live status.
- **Input**: label above, hint or error below, linked with
  `aria-describedby`. Focus is an accent border and an `accent-subtle` halo;
  errors swap both to danger.
- **Select**: a native `<select>` styled to match Input, with an optional
  placeholder option.
- **Dialog**: the native `<dialog>` element, modal, with a title, description,
  body and right-aligned footer. Escape, the close button and a backdrop click
  all call `onClose`.
- **Tabs**: an underline tab list with the selected tab marked in `accent`.
  Arrow keys, Home and End move between tabs.
- **Toast**: a surface with a 3px status stripe on the left, a title, an
  optional description, an optional action and a dismiss button. `ToastRegion`
  stacks them in the bottom-right corner.
- **Avatar**: a round image, or the person's initials on `accent-subtle` when
  there is no image or it fails to load. `sm`, `md` and `lg`, with an optional
  presence dot. `AvatarGroup` overlaps them and collapses the rest into a
  `+n` count.

## Do and do not

**Do** read a token for every value. **Do** put the primary action last in a
footer. **Do** keep one accent-filled button per view. **Do** check both
themes in Storybook before merging.

**Do not** hard-code a hex value, an off-scale size or a shadow in a component.
**Do not** add a font size outside the seven steps. **Do not** put text on
`border` or `accent-subtle` without checking contrast. **Do not** use colour
alone to carry meaning.
