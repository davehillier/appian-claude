# CLAUDE.md - Appian Claude Code Skills

## Overview

This repository contains Claude Code skills for Appian practitioners. These skills help with:

- **Brand compliance** for Appian presentations, documents, and collateral
- **Sales positioning** using the Power Statement methodology
- **SAIL UI generation** from natural language descriptions
- **Presentation creation** with cinematic AI-generated imagery

---

## Quick Start

### First-Time Setup

Before using skills that require external tools, run the environment setup:

```
/environment-setup
```

This installs Node.js packages, Playwright browsers, and guides you through API key configuration.

### Using the Skills

Invoke skills by name:

```
/environment-setup - Set up dependencies for all skills
/appian-branding - Check content against Appian brand guidelines
/appian-presentations - Create branded presentations (HTML + PPTX)
/power-statement - Generate a client-focused sales positioning statement
/sail-generation - Generate SAIL UI code from a description
```

---

## Available Skills

| Skill | Description | Requires Setup |
|-------|-------------|----------------|
| `environment-setup` | Install dependencies and configure API keys | No |
| `appian-branding` | Appian brand compliance | No |
| `appian-presentations` | Cinematic branded presentations (HTML + PPTX) | Yes |
| `power-statement` | Client-focused sales positioning | No |
| `sail-generation` | SAIL UI code generation | No |

---

## Folder Structure

```
appian-claude/
├── .claude/
│   ├── CLAUDE.md              (This file)
│   └── skills/
│       ├── appian-branding/   (Brand compliance skill)
│       ├── appian-presentations/ (Presentation generation skill)
│       ├── environment-setup/ (Dependency installation skill)
│       ├── power-statement/   (Sales positioning skill)
│       └── sail-generation/   (SAIL code generation skill)
├── tools/
│   ├── generate-image.mjs     (AI image generation script)
│   └── lib/
│       └── gemini.js          (Gemini API client)
├── resources/
│   ├── branding/
│   │   └── Appian/            (Logos, templates, icons, guidelines)
│   └── sail-generator/        (SAIL generation toolkit and docs)
├── output/                    (Generated files - gitignored)
│   ├── images/
│   └── presentations/
├── .env.example               (API key template)
├── .gitignore
└── README.md
```

---

## Skill Details

### environment-setup

Sets up the development environment for all skills requiring external dependencies.

**Installs:**
- `pptxgenjs` - PowerPoint generation
- `playwright` - HTML rendering for PPTX conversion
- `sharp` - Image processing for asset rasterisation

**Configures:**
- Gemini API key for image generation
- Output directories

### appian-branding

Ensures all Appian-related content follows the official Appian Brand Guidelines.

**Use for:**
- Checking colour palette compliance
- Verifying logo usage
- Validating terminology and capitalisation
- Reviewing typography choices
- Social media content guidelines

**Resources:**
- `resources/branding/Appian/` contains logos, templates, icons, and the brand guidelines PDF

### appian-presentations

Creates visually impressive, Appian-branded presentations with cinematic AI-generated imagery.

**Two-phase workflow:**
1. **HTML Preview** - Create and validate presentation in browser
2. **PPTX Generation** - Convert to PowerPoint after user approval

**Features:**
- Cinematic corporate imagery via Gemini API
- Dark mode Appian aesthetic
- Automatic brand compliance
- Interactive HTML preview with navigation
- PPTX export for Google Slides/PowerPoint

**Output:** Both `{name}.html` and `{name}.pptx` files

### power-statement

Generates client-focused sales positioning using the Power Statement methodology.

**Structure:**
1. Headline (brief context)
2. Transitional phrase leading to client issues
3. Client issues addressed (3-7 pain points)
4. Offerings (brief)
5. Differentiators (5+ substantive reasons)

**Bonus output:** Discovery questions derived from the client issues

### sail-generation

Generates production-quality Appian SAIL UI expressions from natural language descriptions.

**Two-phase workflow:**
1. **Mockup phase** - Static SAIL with sample data (`a!map()`)
2. **Functional phase** - Live interfaces with record queries

**Resources:**
- `resources/sail-generator/ui-guidelines/` - Component documentation
- `resources/sail-generator/logic-guidelines/` - SAIL logic patterns
- `resources/sail-generator/record-query-guidelines/` - Record type integration

---

## Content Guidelines

When creating Appian content:

### Brand Voice
- **Simple** - Be clear. Avoid jargon.
- **Credible** - Facts over hype.
- **Innovative** - Forward-thinking but grounded.

### What to Avoid
- Hyperbole ("game-changing", "revolutionary")
- Abbreviating "Appian"
- Using Appian Blue (#2322F0) in print materials
- Capitalising capabilities (data fabric, process automation)

---

## Environment Configuration

### API Keys

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Required keys:
| Key | Required For | Get It |
|-----|--------------|--------|
| `GEMINI_API_KEY` | Image generation | https://aistudio.google.com/apikey |

### Output Directories

Generated files go to `output/` (gitignored):
- `output/images/` - Generated presentation images
- `output/presentations/` - HTML and PPTX files

---

## Customisation

You can extend this setup by:

1. Adding your own context files to inform the skills
2. Modifying the CLAUDE.md to add your own writing preferences
3. Adding additional skills for your specific workflows

---

## Reference

For Appian platform documentation, use the official Appian Documentation site: https://docs.appian.com/
