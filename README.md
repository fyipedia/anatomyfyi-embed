# anatomyfyi-embed

[![npm](https://img.shields.io/npm/v/anatomyfyi-embed)](https://www.npmjs.com/package/anatomyfyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/anatomyfyi-embed)

Embed **AnatomyFYI** widgets — structures, glossary terms, interactive tools, and inline elements — on any website. **7 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, clean), and live data from the [AnatomyFYI](https://anatomyfyi.com) database.

Every widget includes a "Powered by AnatomyFYI" backlink and a medical disclaimer directing readers to consult healthcare professionals.

> **Try the interactive widget builder at [widget.anatomyfyi.com](https://widget.anatomyfyi.com)**

⚕️ **Medical Disclaimer**: All Health FYI widgets include an educational disclaimer. This information is for educational purposes only and should not replace professional medical advice.

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-anatomyfyi="entity" data-slug="structures" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/anatomyfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the AnatomyFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-anatomyfyi="entity" data-slug="..."></div>` | Entity detail card |
| `glossary` | `<div data-anatomyfyi="glossary" data-slug="..."></div>` | Glossary term definition |
| `guide` | `<div data-anatomyfyi="guide" data-slug="..."></div>` | Guide summary card |
| `search` | `<div data-anatomyfyi="search" data-slug="..."></div>` | Search box |
| `compare` | `<div data-anatomyfyi="compare" data-slug="..."></div>` | Side-by-side comparison |
| `faq` | `<div data-anatomyfyi="faq" data-slug="..."></div>` | FAQ accordion |
| `system-badge` | `<div data-anatomyfyi="system-badge" data-slug="..."></div>` | Inline body system badge |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-anatomyfyi` | entity, compare, glossary, guide, search, faq, [tools] | required | Widget type |
| `data-slug` | e.g. "structures" | — | Entity slug from the AnatomyFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style-variant` | modern, clean | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Structures..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-anatomyfyi="entity" data-slug="structures" data-theme="light"></div>

<!-- Dark -->
<div data-anatomyfyi="entity" data-slug="structures" data-theme="dark"></div>

<!-- Sepia -->
<div data-anatomyfyi="entity" data-slug="structures" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-anatomyfyi="entity" data-slug="structures" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-anatomyfyi="entity" data-slug="structures" data-style-variant="modern"></div>

<!-- Clean — minimal borders, utility-focused, data-first aesthetic -->
<div data-anatomyfyi="entity" data-slug="structures" data-style-variant="clean"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<anatomyfyi-entity slug="structures" theme="light"></anatomyfyi-entity>
<anatomyfyi-compare slugs="structures,other-slug"></anatomyfyi-compare>
<anatomyfyi-search placeholder="Search Structures..."></anatomyfyi-search>

<script src="https://cdn.jsdelivr.net/npm/anatomyfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/anatomyfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/anatomyfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install anatomyfyi-embed
```

```javascript
import 'anatomyfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Clean (minimal, data-first)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: AnatomyFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Medical Disclaimer**: All widgets include an educational disclaimer footer
- **Bundle size**: Tree-shaken per site — only includes tools available on AnatomyFYI

## Learn More

Visit [anatomyfyi.com](https://anatomyfyi.com) — AnatomyFYI is a comprehensive structures reference with interactive tools, guides, and developer resources.

- **API docs**: [anatomyfyi.com/developers/](https://anatomyfyi.com/developers/)
- **Widget builder**: [widget.anatomyfyi.com](https://widget.anatomyfyi.com)
- **npm package**: [npmjs.com/package/anatomyfyi-embed](https://www.npmjs.com/package/anatomyfyi-embed)
- **GitHub**: [github.com/fyipedia/anatomyfyi-embed](https://github.com/fyipedia/anatomyfyi-embed)

## Health FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Health FYI covers anatomy, drugs, pharmacology, and nutrition. Hub: [bodyfyi.com](https://bodyfyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| **AnatomyFYI** | [anatomyfyi.com](https://anatomyfyi.com) | 14,692 anatomical structures, body systems, regions | **[npm](https://www.npmjs.com/package/anatomyfyi-embed)** |
| PillFYI | [pillfyi.com](https://pillfyi.com) | 4,934 FDA drugs, interactions, side effects | [npm](https://www.npmjs.com/package/pillfyi-embed) |
| DrugFYI | [drugfyi.com](https://drugfyi.com) | 4,009 drugs, molecular formulas, pharmacology | [npm](https://www.npmjs.com/package/drugfyi-embed) |
| NutriFYI | [nutrifyi.com](https://nutrifyi.com) | 15,236 foods, USDA nutrition data, 12 diets | [npm](https://www.npmjs.com/package/nutrifyi-embed) |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| colorfyi | [PyPI](https://pypi.org/project/colorfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/colorfyi) | Color conversion, WCAG contrast, harmonies — [colorfyi.com](https://colorfyi.com) |
| emojifyi | [PyPI](https://pypi.org/project/emojifyi/) | [npm](https://www.npmjs.com/package/emojifyi) | Emoji encoding & metadata for 3,953 emojis — [emojifyi.com](https://emojifyi.com) |
| unitfyi | [PyPI](https://pypi.org/project/unitfyi/) | [npm](https://www.npmjs.com/package/unitfyi) | Unit conversion, 220 units — [unitfyi.com](https://unitfyi.com) |
| timefyi | [PyPI](https://pypi.org/project/timefyi/) | [npm](https://www.npmjs.com/package/timefyi) | Timezone ops & business hours — [timefyi.com](https://timefyi.com) |
| holidayfyi | [PyPI](https://pypi.org/project/holidayfyi/) | [npm](https://www.npmjs.com/package/holidayfyi) | Holiday dates & Easter calculation — [holidayfyi.com](https://holidayfyi.com) |
| fyipedia | [PyPI](https://pypi.org/project/fyipedia/) | — | Unified CLI for all FYI tools — [fyipedia.com](https://fyipedia.com) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
