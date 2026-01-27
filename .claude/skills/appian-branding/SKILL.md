---
name: appian-branding
description: Ensures Appian presentations, whitepapers, and collateral follow official brand guidelines including colours, typography, terminology, and visual assets.
---

# Appian Branding Skill

## Purpose

This skill ensures all Appian-related content follows the official Appian Brand Guidelines. Use it when creating presentations, whitepapers, documents, or any customer-facing collateral that represents Appian.

---

## When to Use

- Creating PowerPoint/Google Slides presentations
- Writing whitepapers and technical documents
- Preparing customer-facing collateral
- Checking terminology and capitalisation
- Selecting appropriate logos, icons, and colours
- Writing social media content

---

## Brand Voice

The Appian brand voice is:
- **Simple** - Be clear. Avoid jargon.
- **Credible** - Facts over hype.
- **Innovative** - Forward-thinking but grounded.

**Shorter is always better** - use fewer words to make a bigger impact.

---

## Brand Name Rules

- Do NOT abbreviate "Appian" (pronounced APP-EE-IN), except for Nasdaq listing: APPN
- Always capitalise "Appian", except in URLs (appian.com)
- You may use the possessive: "Appian's"
- Never use product/solution names in possessive (e.g., NOT "the Appian Platform's")

---

## Corporate Boilerplate

Use this standard "About Appian" statement:

> **About Appian**
>
> Appian is The Process Company. We deliver a software platform that helps organizations run better processes that reduce costs, improve customer experiences, and gain a strategic edge. Committed to client success, we serve many of the world's largest companies across industries. For more information, visit appian.com. [Nasdaq: APPN]
>
> Follow Appian: LinkedIn, X (Twitter)

---

## Colour Palette

### Primary Palette (Use for backgrounds)

| Colour | Hex | RGB | Usage |
|--------|-----|-----|-------|
| **Dark Blue** | #020A51 | R27 G10 B81 | Print backgrounds, primary colour |
| **Appian Blue** | #2322F0 | R35 G34 B240 | **Digital only** - replace with Dark Blue in print |
| **White** | #FFFFFF | R255 G255 B255 | Text on dark backgrounds |

### Secondary Palette (Depth and variety)

| Colour | Hex | RGB |
|--------|-----|-----|
| **Pale Blue** | #DEEBF8 | R222 G235 B248 |
| **Dark Purple** | #252182 | R51 G48 B146 |
| **Warm Gray** | #64656D | R100 G101 B109 |
| **Carbon** | #282728 | R40 G39 B40 |

### Accent Colours (Use sparingly - 10% max)

| Colour | Hex | RGB |
|--------|-----|-----|
| **Cyan** | #00BCD2 | R0 G188 B210 |
| **Turbo Purple** | #8859A5 | R136 G89 B165 |
| **Cheddar** | #FCB245 | R252 G178 B69 |
| **Orange** | #EE752E | R238 G117 B46 |

### The 60-30-10 Rule

- **Primary (60%):** Dominant colour setting the tone
- **Secondary (30%):** Supporting shade adding depth
- **Accent (10%):** Sparingly for CTAs and key elements

---

## Typography

### Digital Content

| Typeface | Use | Weights |
|----------|-----|---------|
| **Ubuntu** | Body copy, standard content (web, social, video, presentations) | Bold, Medium, Regular, Light |
| **Poppins** | Headlines and emphasis in presentations only | Regular, Medium, Semibold, Bold, ExtraBold |

### Print Content

| Typeface | Use | Weights |
|----------|-----|---------|
| **Effra** | Print headlines (brochures, whitepapers) | Bold, Regular, Italic |
| **Mulish** | Body copy in print materials | Regular, Light, Italic |

---

## Capitalisation Rules

### Use Title Case for:
- Titles of assets and slides
- CTAs
- Website navigation
- Table headers

### Use Sentence Case for:
- Website headlines
- Headings/subheadings/subtitles
- Display ads
- Body copy

### Do Capitalise:
- The Appian Platform (name)
- Names of Appian solutions (Connected KYC, Connected Underwriting, etc.)
- Branded platform components: AI Copilot, Process HQ, Agent Studio, Case Management Studio, DocCenter, Appian Designer, Appian Portals, Appian Records, Appian RPA

### Do NOT Capitalise:
- Industry names (public sector, financial services, life sciences, insurance)
- Appian capabilities (process automation, data fabric, process mining, low-code, artificial intelligence)
- Spelled-out acronyms that are not proper nouns (robotic process automation [RPA])

---

## Key Terminology

### Platform Terms (Capitalise)

| Term | Description |
|------|-------------|
| **Appian Platform** | Central product offering |
| **Agent Studio** | Low-code AI agent builder |
| **AI Copilot** | Intelligent assistant for all users |
| **Process HQ** | Process mining and AI insights |
| **Appian Records** | Record type design objects |
| **Appian Portals** | Public websites built with low-code |
| **DocCenter** | IDP offering for document classification/extraction |

### Capabilities (Lowercase)

| Term | Description |
|------|-------------|
| **data fabric** | Virtualised data access |
| **process automation** | Task automation capability |
| **private AI** | Architectural approach to secure AI |
| **autoscale** | Automatic scaling capability |

### Industry Terms

| Term | Style |
|------|-------|
| low-code | Always hyphenate |
| no-code | Always hyphenate |
| end-to-end | Hyphenate as modifier only |
| lifecycle | One word |
| whitepaper | One word |
| prebuilt | One word |
| plug-in | Hyphenate as noun |

---

## Brand Assets Location

### Logos

**IMPORTANT: Always use SVG logos for digital content.** SVGs are scalable, smaller in file size, and can be inlined directly into HTML/CSS without base64 encoding.

#### Logo File Locations
```
resources/branding/Appian/Logo /Digital/SVG/
├── Appian_Digital_Logo_Blue.svg      (Primary digital use - Appian Blue #2322F0)
├── Appian_Digital_Logo_White.svg     (On dark backgrounds)
├── Appian_Digital_Logo_DarkBlue.svg  (Print-safe digital)
└── Appian_Digital_Logo_Black.svg     (B&W/monochrome)

resources/branding/Appian/Logo /Print/SVG/
├── Appian_Print_Logo_DarkBlue.svg    (Primary print use)
├── Appian_Print_Logo_White.svg       (Print on dark backgrounds)
└── Appian_Print_Logo_Black.svg       (B&W printing)
```

#### When to Use Which Logo

| Background | Logo Variant | File |
|------------|--------------|------|
| Dark Blue (#020A51) | White | `Appian_Digital_Logo_White.svg` |
| Dark Purple (#252182) | White | `Appian_Digital_Logo_White.svg` |
| Carbon (#282728) | White | `Appian_Digital_Logo_White.svg` |
| White (#FFFFFF) | Blue (digital) or DarkBlue (print) | `Appian_Digital_Logo_Blue.svg` |
| Pale Blue (#DEEBF8) | DarkBlue | `Appian_Digital_Logo_DarkBlue.svg` |
| Light backgrounds | DarkBlue or Blue | `Appian_Digital_Logo_DarkBlue.svg` |

#### Inline SVG Logos (Copy-Paste Ready)

**White Logo** (for dark backgrounds - use this on Dark Blue, Dark Purple, Carbon):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201.67 461.66" width="120" height="46">
  <path fill="#fff" d="M690.73,144.71c-5.98,6.32-7.61,14.69-7.61,23.38v183.84h62.57V86.9l-54.97,57.82Z"/>
  <polygon fill="#fff" points="683.13 0 683.13 98.2 745.7 32.07 745.7 0 683.13 0"/>
  <path fill="#fff" d="M651.6,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM553.17,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#fff" d="M423.59,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM325.16,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#fff" d="M1139.38,351.94V117.72c0-21.18-12.9-21.12-36.23-21.16-24.57-.04-36.22-.02-36.22,21.16v234.22h-61.99V44.44h120.29c54.45,0,74.87,22.46,76.29,78.42h.05c.03,1.41.09,229.08.09,229.08h-62.28Z"/>
  <path fill="#fff" d="M973.51,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.36c-11-.16-37.48-.5-57.01-.5-54.45,0-74.87,22.45-76.29,78.41h-.05c-.03,1.41-.03,46.52,0,47.94h.05c1.42,55.96,21.85,78.01,76.29,78.01h120.29l-.14-229.08ZM911.66,279.07c0,21.18-11.65,21.2-36.22,21.16-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v58.22Z"/>
  <path fill="#fff" d="M196.52,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.37c-11-.16-37.48-.5-57.01-.5C21.93,147.58,1.5,170.04.08,225.99H.02c-.03,1.41-.03,46.52,0,47.94h.05c1.34,52.75,19.31,75.55,67.26,78.01l49.6-52.26c-5.05.55-11.18.56-18.48.55-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v131.09c2.46-.03,61.99,0,61.99,0l-.14-229.08Z"/>
</svg>
```

**Blue Logo** (for light backgrounds - digital use):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201.67 461.66" width="120" height="46">
  <path fill="#2322f0" d="M690.73,144.71c-5.98,6.32-7.61,14.69-7.61,23.38v183.84h62.57V86.9l-54.97,57.82Z"/>
  <polygon fill="#2322f0" points="683.13 0 683.13 98.2 745.7 32.07 745.7 0 683.13 0"/>
  <path fill="#2322f0" d="M651.6,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM553.17,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#2322f0" d="M423.59,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM325.16,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#2322f0" d="M1139.38,351.94V117.72c0-21.18-12.9-21.12-36.23-21.16-24.57-.04-36.22-.02-36.22,21.16v234.22h-61.99V44.44h120.29c54.45,0,74.87,22.46,76.29,78.42h.05c.03,1.41.09,229.08.09,229.08h-62.28Z"/>
  <path fill="#2322f0" d="M973.51,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.36c-11-.16-37.48-.5-57.01-.5-54.45,0-74.87,22.45-76.29,78.41h-.05c-.03,1.41-.03,46.52,0,47.94h.05c1.42,55.96,21.85,78.01,76.29,78.01h120.29l-.14-229.08ZM911.66,279.07c0,21.18-11.65,21.2-36.22,21.16-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v58.22Z"/>
  <path fill="#2322f0" d="M196.52,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.37c-11-.16-37.48-.5-57.01-.5C21.93,147.58,1.5,170.04.08,225.99H.02c-.03,1.41-.03,46.52,0,47.94h.05c1.34,52.75,19.31,75.55,67.26,78.01l49.6-52.26c-5.05.55-11.18.56-18.48.55-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v131.09c2.46-.03,61.99,0,61.99,0l-.14-229.08Z"/>
</svg>
```

**Dark Blue Logo** (for light backgrounds - print-safe):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201.67 461.66" width="120" height="46">
  <path fill="#020A51" d="M690.73,144.71c-5.98,6.32-7.61,14.69-7.61,23.38v183.84h62.57V86.9l-54.97,57.82Z"/>
  <polygon fill="#020A51" points="683.13 0 683.13 98.2 745.7 32.07 745.7 0 683.13 0"/>
  <path fill="#020A51" d="M651.6,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM553.17,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#020A51" d="M423.59,122.26h-.05c-1.42-55.96-21.85-77.82-76.29-77.82h-119.29v417.22h60.99v-109.72c10.1.14,37.98,0,58.3,0,54.45,0,74.87-22.81,76.29-78.78h.05c.03-1.41.03-149.49,0-150.91ZM325.16,299.47c-24.57.04-36.22.02-36.22-21.16V117.12c0-21.18,11.65-21.2,36.22-21.16,23.33.04,36.23-.02,36.23,21.16v161.19c0,21.18-12.9,21.12-36.23,21.16Z"/>
  <path fill="#020A51" d="M1139.38,351.94V117.72c0-21.18-12.9-21.12-36.23-21.16-24.57-.04-36.22-.02-36.22,21.16v234.22h-61.99V44.44h120.29c54.45,0,74.87,22.46,76.29,78.42h.05c.03,1.41.09,229.08.09,229.08h-62.28Z"/>
  <path fill="#020A51" d="M973.51,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.36c-11-.16-37.48-.5-57.01-.5-54.45,0-74.87,22.45-76.29,78.41h-.05c-.03,1.41-.03,46.52,0,47.94h.05c1.42,55.96,21.85,78.01,76.29,78.01h120.29l-.14-229.08ZM911.66,279.07c0,21.18-11.65,21.2-36.22,21.16-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v58.22Z"/>
  <path fill="#020A51" d="M196.52,122.86c-1.42-55.96-22.85-78.42-77.29-78.42-2.66,0-60.33-.01-80.68,0l.05,52.14c59.34-.03,55.79-.03,58.55-.03,23.33.04,36.23-.02,36.23,21.16v30.37c-11-.16-37.48-.5-57.01-.5C21.93,147.58,1.5,170.04.08,225.99H.02c-.03,1.41-.03,46.52,0,47.94h.05c1.34,52.75,19.31,75.55,67.26,78.01l49.6-52.26c-5.05.55-11.18.56-18.48.55-23.33-.04-36.23.02-36.23-21.16v-58.22c0-21.18,12.9-21.12,36.23-21.16,24.57-.04,36.22-.02,36.22,21.16v131.09c2.46-.03,61.99,0,61.99,0l-.14-229.08Z"/>
</svg>
```

#### CSS Usage Example
```css
.appian-logo {
  width: 120px;
  height: auto;
}

/* For dark backgrounds */
.appian-logo-white svg path,
.appian-logo-white svg polygon {
  fill: #FFFFFF;
}

/* For light backgrounds */
.appian-logo-blue svg path,
.appian-logo-blue svg polygon {
  fill: #2322F0;
}
```

**Logo Rules:**
- Minimum width: 0.5" (36px)
- Use the "a" letterform as the unit for clear space around the logo
- Do NOT obstruct or crowd the logo
- **Always use inline SVG** for HTML content to avoid external file dependencies

### Slideware Templates
```
resources/branding/Appian/Slideware/
├── PPT/
│   ├── Light-Mode-Corporate-Slideware.pptx
│   ├── Light-Mode-Corporate-Slideware.potx
│   └── Dark-Mode-Corporate-Slideware.potx
└── Google Slides/
    ├── Light-Mode-Corporate-Slideware.pptx
    └── Dark-Mode-Corporate-Slideware.pptx
```

### Document Templates
```
resources/branding/Appian/Word-Google Docs Templates/
├── Appian_WordTemplate_June2021final.docx
├── Appian_WordTemplate_2column_June2021final.docx
├── Appian_GoogleDocTemplate_June2021final.docx
└── AppianAcademy_GoogleDocTemplate_June2021final.docx
```

### Letterheads
```
resources/branding/Appian/Appian Letterhead/
├── AppianLetterhead_A4_UK.docx
└── AppianLetterhead_Letter_US.docx
```

### Icons
```
resources/branding/Appian/Icons PNG/
├── General PNGs/       (AI, Integration, Cloud, Data Fabric, etc.)
├── Security PNGs/
├── HR-Recruiting PNGs/
├── Sales PNGs/
├── Community PNGs/
├── Employer PNGs/
├── University PNGs/
└── Miscellaneous PNGs/
```

### LinkedIn Images
```
resources/branding/Appian/LinkedIn Images/
├── Social-Banner-linkedin.jpg
├── LinkedIn- 1128 x 191px.png
└── Social-Icon-300.jpg
```

---

## Content Writing Guidelines

### Numbers
- Spell out one through nine; use numerals for 10+
- Always use numerals in titles/headlines
- Always use numerals when paired with symbols (5%, $2 million)
- Spell out "million" and "billion" - do NOT use M or B
- Use K for "thousand" only in financial contexts

### Punctuation
- Use the serial (Oxford) comma for US English
- UK audiences may omit the serial comma
- Avoid exclamation marks (use sparingly in email/social only)
- Do NOT use periods in titles/headings unless multiple sentences

### Acronyms
- Spell out unfamiliar abbreviations on first use
- Do NOT separate letters with periods (except a.m./p.m. and i.e./e.g.)

---

## Photography Guidelines

- **Real and candid** - avoid staged scenes, direct eye contact, artificial lighting
- **No sci-fi visuals** - avoid glowing brains, HDR effects, overlays
- **Show people empowered** - using devices, collaborating, making decisions
- **Industry-appropriate** - match attire and settings to the sector
- **Regional diversity** - reflect the target audience

---

## Social Media Guidelines

- LinkedIn posts: 40-80 words, one idea per post
- Write for mobile consumption
- Ask questions to drive engagement
- Use only approved Appian hashtags
- Always include one CTA
- Image spec default: 1600 x 900 pixels

### Social Handles
| Platform | Handle |
|----------|--------|
| LinkedIn | @Appian |
| X (Twitter) | @Appian |
| Facebook | facebook.com/appiancorporation |
| Instagram | @AppianCorp |
| YouTube | youtube.com/appian |

---

## Quick Reference: What NOT to Do

- Do NOT abbreviate "Appian"
- Do NOT use product names in possessive form
- Do NOT use Appian Blue (#2322F0) in print - use Dark Blue
- Do NOT capitalise capabilities (data fabric, process automation)
- Do NOT capitalise industry names
- Do NOT use more than one accent colour
- Do NOT use exclamation marks (except sparingly in social)
- Do NOT use blurry or low-quality images
- Do NOT share images featuring competitors

---

## Reference Documents

| Document | Location |
|----------|----------|
| Brand Guidelines PDF | `resources/branding/Appian/Appian Brand Guidelines.pdf` |
| Brand Glossary | `resources/branding/Appian/Appian Brand Glossary.md` |
| Style Guide | Chicago Manual of Style (for decisions not covered) |
| Dictionary | Merriam-Webster online (for terms not in glossary) |
