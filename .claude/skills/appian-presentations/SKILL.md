---
name: appian-presentations
description: Creates stunning, cinematic Appian-branded presentations with AI-generated corporate imagery. ALWAYS produces both HTML (for preview/validation) and PPTX (for delivery). Two-phase workflow - HTML first, then PPTX after user approval.
---

# Appian Presentations Skill

## Purpose

This skill creates visually impressive, Appian-branded presentations with cinematic corporate imagery. It combines brand compliance, AI image generation, and proven layout patterns to produce enterprise-quality slide decks.

**CRITICAL: This skill ALWAYS produces BOTH formats:**
1. **HTML** — Interactive web presentation for preview and validation
2. **PPTX** — PowerPoint file for Google Slides/Microsoft PowerPoint delivery

---

## Required Two-Phase Workflow

```
┌─────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: HTML Preview                                                  │
│  ─────────────────────                                                  │
│  1. Create full HTML presentation with all slides                       │
│  2. Open in browser for user to review                                  │
│  3. ASK USER: "Please review the presentation. Let me know if you'd    │
│     like any changes before I generate the PPTX version."              │
│  4. Make any requested changes to HTML                                  │
│                                                                         │
│  PHASE 2: PPTX Generation (after user approval)                        │
│  ──────────────────────────────────────────────────────────────────────│
│  5. Once user confirms HTML is correct, generate PPTX                   │
│  6. Deliver both files: presentation.html + presentation.pptx           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Why this workflow?**
- PPTX generation requires rasterising assets and converting HTML
- Changes are much faster to make in HTML than regenerating PPTX
- User can preview interactively in browser before committing to PPTX
- Saves time by avoiding multiple PPTX regeneration cycles

**IMPORTANT:** After creating the HTML, you MUST ask the user if they want changes before proceeding to PPTX generation. Do not skip this step.

---

## Prerequisites

Before using this skill, ensure the environment is set up. Run:
```
/environment-setup
```

This will install all required dependencies (Node.js packages, Playwright browsers, etc.).

---

## When to Use

- Creating customer-facing pitch decks
- Building strategic presentations for executives
- Producing thought leadership slide content
- Designing internal presentations requiring brand compliance

---

## CRITICAL: Fixed Element Positioning

**EVERY SLIDE MUST HAVE:**

| Element | Position | CSS | Notes |
|---------|----------|-----|-------|
| **Appian Logo** | **Bottom-right** | `bottom: 40px; right: 60px;` | White on dark, Blue on light backgrounds |
| **Page Counter** | **Bottom-left** | `bottom: 40px; left: 60px;` | Format: `01 / 12` |

**These positions are NON-NEGOTIABLE.** The logo is ALWAYS bottom-right, the page counter is ALWAYS bottom-left. Never swap them, never omit them.

```
┌─────────────────────────────────────────┐
│                                         │
│           SLIDE CONTENT                 │
│                                         │
│                                         │
│ 01 / 12                      [APPIAN]   │
└─────────────────────────────────────────┘
   ↑                              ↑
   Page counter                   Logo
   (ALWAYS bottom-left)           (ALWAYS bottom-right)
```

---

## Presentation Structure

### Standard Layout

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│           SLIDE CONTENT                 │
│                                         │
│                                         │
│ 01 / 12                      [APPIAN]   │
└─────────────────────────────────────────┘
   ↑                              ↑
   Page counter                   Logo
   (bottom-left)                  (bottom-right)
```

### Fixed Positioning Rules

| Element | Position | CSS |
|---------|----------|-----|
| **Logo** | Bottom-right | `bottom: 40px; right: 60px;` |
| **Page counter** | Bottom-left | `bottom: 40px; left: 60px;` |
| **Content padding** | All sides | `padding: 60px 80px;` |

### CSS z-index Layering Warning

When adding z-index rules to ensure content appears above background images, you MUST exclude the logo and page counter:

```css
/* CORRECT: Excludes logo and counter so they keep position: absolute */
.slide > *:not(.slide-bg-image):not(.logo):not(.slide-counter) {
    position: relative;
    z-index: 1;
}

/* WRONG: Will break logo/counter positioning */
.slide > *:not(.slide-bg-image) {
    position: relative;
    z-index: 1;
}
```

**If you don't exclude them, their `position: absolute` gets overridden and they appear at the wrong location.**

---

## Appian Brand Compliance

### Colour Palette (CSS Variables)

```css
:root {
    --dark-blue: #020A51;      /* Primary backgrounds */
    --appian-blue: #2322F0;    /* Digital accents (NOT for print) */
    --white: #FFFFFF;          /* Text on dark backgrounds */
    --pale-blue: #DEEBF8;      /* Secondary text, light backgrounds */
    --dark-purple: #252182;    /* Gradient partner with dark-blue */
    --warm-gray: #64656D;      /* Muted text */
    --carbon: #282728;         /* Dark alternative */
    --cyan: #00BCD2;           /* Accent colour (use sparingly - 10%) */
    --turbo-purple: #8859A5;   /* Accent colour */
    --cheddar: #FCB245;        /* Warning/attention accent */
    --orange: #EE752E;         /* Warning/attention accent */
}
```

### The 60-30-10 Rule

- **Primary (60%):** Dark Blue for backgrounds
- **Secondary (30%):** Dark Purple, gradients for depth
- **Accent (10%):** Cyan for highlights, CTAs, key elements

### Typography

```css
/* Headlines */
font-family: 'Poppins', sans-serif;
font-weight: 600-700;

/* Body copy */
font-family: 'Ubuntu', sans-serif;
font-weight: 300-400;
```

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Logo Usage

**Always use inline SVG** for logos to avoid external dependencies.

**White logo** (for dark backgrounds):
```svg
<svg class="logo" viewBox="0 0 1201.67 461.66">
  <path fill="#fff" d="M690.73,144.71c-5.98,6.32-7.61,14.69-7.61,23.38v183.84h62.57V86.9l-54.97,57.82Z"/>
  <polygon fill="#fff" points="683.13 0 683.13 98.2 745.7 32.07 745.7 0 683.13 0"/>
  <path fill="#fff" d="M651.6,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM553.17,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#fff" d="M423.59,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM325.16,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#fff" d="M1139.38,351.94V117.72c0-21.18-12.9-21.12-36.23-21.16-24.57-.04-36.22-.02-36.22,21.16v234.22h-61.99V44.44h120.29c54.45,0,74.87,22.46,76.29,78.42h.05c.03,1.41.09,229.08.09,229.08h-62.28Z"/>
  <path fill="#fff" d="M973.51,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.36c-11-.16-37.48-.5-57.01-.5-54.45,0-74.87,22.45-76.29,78.41h-.05c-.03,1.41-.03,46.52,0,47.94h.05c1.42,55.96,21.85,78.01,76.29,78.01h120.29l-.14-229.08ZM911.66,279.07c0,21.18-11.65,21.2-36.22,21.16-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v58.22Z"/>
  <path fill="#fff" d="M196.52,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.37c-11-.16-37.48-.5-57.01-.5C21.93,147.58,1.5,170.04.08,225.99H.02c-.03,1.41-.03,46.52,0,47.94h.05c1.34,52.75,19.31,75.55,67.26,78.01l49.6-52.26c-5.05.55-11.18.56-18.48.55-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v131.09c2.46-.03,61.99,0,61.99,0l-.14-229.08Z"/>
</svg>
```

**Blue logo** (for light/white backgrounds):
```svg
<svg class="logo" viewBox="0 0 1201.67 461.66">
  <path fill="#2322f0" d="M690.73,144.71c-5.98,6.32-7.61,14.69-7.61,23.38v183.84h62.57V86.9l-54.97,57.82Z"/>
  <polygon fill="#2322f0" points="683.13 0 683.13 98.2 745.7 32.07 745.7 0 683.13 0"/>
  <path fill="#2322f0" d="M651.6,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM553.17,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#2322f0" d="M423.59,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM325.16,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#2322f0" d="M1139.38,351.94V117.72c0-21.18-12.9-21.12-36.23-21.16-24.57-.04-36.22-.02-36.22,21.16v234.22h-61.99V44.44h120.29c54.45,0,74.87,22.46,76.29,78.42h.05c.03,1.41.09,229.08.09,229.08h-62.28Z"/>
  <path fill="#2322f0" d="M973.51,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.36c-11-.16-37.48-.5-57.01-.5-54.45,0-74.87,22.45-76.29,78.41h-.05c-.03,1.41-.03,46.52,0,47.94h.05c1.42,55.96,21.85,78.01,76.29,78.01h120.29l-.14-229.08ZM911.66,279.07c0,21.18-11.65,21.2-36.22,21.16-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v58.22Z"/>
  <path fill="#2322f0" d="M196.52,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.37c-11-.16-37.48-.5-57.01-.5C21.93,147.58,1.5,170.04.08,225.99H.02c-.03,1.41-.03,46.52,0,47.94h.05c1.34,52.75,19.31,75.55,67.26,78.01l49.6-52.26c-5.05.55-11.18.56-18.48.55-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v131.09c2.46-.03,61.99,0,61.99,0l-.14-229.08Z"/>
</svg>
```

---

## Cinematic Corporate Image Generation

### Visual Style Direction

**NOT napkin/whiteboard sketches.** For presentations, use:

- **Cinematic** — dramatic lighting, depth, atmosphere
- **Corporate technology** — sleek interfaces, glowing networks, modern environments
- **3D rendered feel** — isometric visualisations, floating elements, depth of field
- **Dark mode aesthetic** — matches Appian dark blue palette with glowing cyan/blue accents
- **High production value** — Fortune 500 investor deck quality

### Image Generation Tool

Use `tools/generate-image.mjs` from project root:

```bash
node tools/generate-image.mjs \
  -p "Your prompt here" \
  -o "output/images/output.png" \
  -a "16:9" \
  -s "2K"
```

**Requires:** GEMINI_API_KEY in `.env` file. See `environment-setup` skill.

**Options:**
| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--prompt` | `-p` | Image description (required) | — |
| `--output` | `-o` | Output file path (required) | — |
| `--aspect` | `-a` | Aspect ratio: 1:1, 3:4, 4:3, 9:16, 16:9 | 16:9 |
| `--size` | `-s` | Image size: 1K, 2K, 4K | 2K |

### Cinematic Prompt Templates

#### Hero/Title Slide Image

```
Cinematic corporate technology illustration showing [CONCEPT]. [LEFT SIDE DESCRIPTION showing problem/chaos with orange/red tints]. [RIGHT SIDE DESCRIPTION showing solution/clarity with cyan glow]. Dark blue background (#020A51). Dramatic volumetric lighting. 3D rendered aesthetic. Professional enterprise technology feel. Glowing cyan (#00BCD2) accents. High production value like a Fortune 500 investor presentation.
```

#### Problem/Pain Point Visual

```
Cinematic corporate illustration showing [PROBLEM CONCEPT]. [VISUAL METAPHOR - e.g., professional silhouette surrounded by disconnected screens]. Visual represents [PAIN POINT]. Dramatic dark blue background with orange/red warning accents showing friction points. Moody cinematic lighting. 3D rendered feel with depth of field. Enterprise technology aesthetic.
```

#### Solution/Platform Visual

```
Stunning 3D isometric corporate technology illustration of [SOLUTION]. Centre: [MAIN ELEMENT with cyan glow]. Below: [LEGACY/SOURCE elements in muted greys]. Above: [OUTCOME elements]. Dark blue (#020A51) space background with subtle grid. Dramatic upward lighting. Volumetric light rays. Professional enterprise architecture visualisation. Cinematic quality.
```

---

## Output Locations

| Asset Type | Location |
|------------|----------|
| Generated images | `output/images/` |
| HTML presentations | `output/presentations/` |
| PPTX presentations | `output/presentations/` |

---

## Quick Reference Checklist

### Phase 1: HTML Creation
- [ ] Logo positioned bottom-right on all slides
- [ ] Page counter positioned bottom-left on all slides
- [ ] White logo on dark backgrounds, blue logo on light backgrounds
- [ ] Accent colour (cyan) used sparingly (10% rule)
- [ ] All text readable against backgrounds
- [ ] British English throughout
- [ ] Poppins for headlines, Ubuntu for body
- [ ] **Open HTML in browser for user to preview**
- [ ] **Ask user if changes are needed before PPTX generation**

### Phase 2: PPTX Generation (after user approval)
- [ ] User has confirmed HTML is correct
- [ ] All slides are 720pt × 405pt for PPTX conversion
- [ ] CSS gradients rasterised to PNG
- [ ] SVG logos rasterised to PNG
- [ ] **PPTX file generated and delivered alongside HTML**

---

## Final Delivery Checklist — BOTH FORMATS REQUIRED

A presentation task is NOT complete until both files are delivered:

| Deliverable | Location | Status |
|-------------|----------|--------|
| `{name}.html` | `output/presentations/` | Required |
| `{name}.pptx` | `output/presentations/` | Required |

---

## Related Skills

| Skill | Integration |
|-------|-------------|
| `appian-branding` | Full brand guidelines reference |
| `environment-setup` | Install all dependencies |
| `power-statement` | Sales positioning content |
| `sail-generation` | SAIL UI code generation |
