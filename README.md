# Loom UI

Loom is a small React component library: eight components (Button, Card, Badge,
Input, Select, Dialog, Tabs, Toast) built on design tokens written as CSS custom
properties, with a light and a dark theme. There is no app here; the components
are documented and previewed in Storybook.

Used as an Impeccable test repository.

## Requirements

- Node 22 (see `.nvmrc`)
- [bun](https://bun.sh)

## Run Storybook

```sh
bun install
bun run storybook        # http://localhost:6006
```

Use the Theme button in the Storybook toolbar to switch between light and dark.
The **Foundations** pages show the palette, the type scale, spacing, radius and
elevation, read live from `src/tokens.css`.

To build a static Storybook:

```sh
bun run build-storybook  # writes storybook-static/
bunx serve storybook-static
```

## Build the library

```sh
bun run build            # writes dist/loom-ui.js, dist/loom-ui.css and types
```

```tsx
import '@loom-ui/react/style.css';
import { Button, Card } from '@loom-ui/react';
```

## Layout

- `src/tokens.css`: every colour, type, spacing, radius and shadow token
- `src/components/<Name>/`: the component, its CSS module and its stories
- `src/foundations/`: the Foundations story pages
- `DESIGN.md`: the design system in words, with the tokens mirrored in its frontmatter
