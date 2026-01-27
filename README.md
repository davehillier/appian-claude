# Appian Claude Code Skills

A collection of Claude Code skills for Appian practitioners, covering brand compliance, sales positioning, SAIL UI generation, and presentation creation with AI-generated imagery.

## Quick Start

### First-Time Setup

1. Clone or download this repository
2. Run the environment setup skill:
   ```
   /environment-setup
   ```
3. Configure your API keys in `.env` (copy from `.env.example`)

### Using Skills

Invoke skills using slash commands:

```
/environment-setup     - Install dependencies and configure API keys
/appian-branding       - Apply brand guidelines to content
/appian-presentations  - Create branded presentations (HTML + PPTX)
/power-statement       - Generate sales positioning
/sail-generation       - Create SAIL interfaces
```

## Skills Included

| Skill | Description | Requires Setup |
|-------|-------------|----------------|
| `environment-setup` | Install dependencies, configure API keys | No |
| `appian-branding` | Brand compliance for presentations and collateral | No |
| `appian-presentations` | Cinematic branded presentations with AI imagery | Yes |
| `power-statement` | Client-focused sales positioning | No |
| `sail-generation` | SAIL UI generation from natural language | No |

### appian-branding

Ensures Appian presentations, whitepapers, and collateral follow official brand guidelines including:
- Colour palette (primary, secondary, accent)
- Typography (Ubuntu, Poppins)
- Logo usage and placement
- Terminology and capitalisation rules

### appian-presentations

Creates visually impressive, Appian-branded presentations with:
- Cinematic AI-generated corporate imagery (via Gemini API)
- Dark mode Appian aesthetic with cyan accents
- Interactive HTML preview for validation
- PPTX export for Google Slides/PowerPoint

**Two-phase workflow:**
1. HTML Preview - Create and validate in browser
2. PPTX Generation - Convert after user approval

**Output:** Both `{name}.html` and `{name}.pptx` files

### power-statement

Generates client-focused Power Statements for sales positioning:
- 5-component structure (Headline, Transition, Issues, Offerings, Differentiators)
- Discovery question generation
- Channel adaptation (email, voicemail, proposals)

### sail-generation

Generates production-quality Appian SAIL UI expressions:
1. **Mockup phase** - Static SAIL with sample data
2. **Functional phase** - Live interfaces with record queries

## Folder Structure

```
appian-claude/
├── .claude/
│   ├── CLAUDE.md                 (Project instructions)
│   └── skills/
│       ├── appian-branding/      (Brand compliance)
│       ├── appian-presentations/ (Presentation generation)
│       ├── environment-setup/    (Dependency installation)
│       ├── power-statement/      (Sales positioning)
│       └── sail-generation/      (SAIL UI generation)
├── tools/
│   ├── generate-image.mjs        (AI image generation)
│   └── lib/
│       └── gemini.js             (Gemini API client)
├── resources/
│   ├── branding/
│   │   └── Appian/               (Logos, templates, icons)
│   └── sail-generator/           (SAIL generation toolkit)
├── output/                       (Generated files - gitignored)
│   ├── images/
│   └── presentations/
├── .env.example                  (API key template)
├── .gitignore
└── README.md
```

## Environment Setup

### Prerequisites

- Node.js 18+ (`node --version`)
- npm (`npm --version`)

### API Keys

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Add your API key:
```
GEMINI_API_KEY=your_api_key_here
```

Get your Gemini API key at: https://aistudio.google.com/apikey

### Dependencies

The `environment-setup` skill installs these automatically:

| Package | Purpose |
|---------|---------|
| `pptxgenjs` | PowerPoint file generation |
| `playwright` | Browser automation for HTML rendering |
| `sharp` | Image processing for asset rasterisation |

Manual installation:
```bash
npm install -g pptxgenjs playwright sharp
npx playwright install chromium
```

## Resources

### Branding Assets

Located in `resources/branding/Appian/`:
- Logo files (SVG, PNG, PDF, JPG)
- PowerPoint templates
- Icon library (General, Security, HR, Sales, etc.)

### SAIL Generator Toolkit

Located in `resources/sail-generator/`:
- UI component guidelines
- Logic patterns (null safety, arrays, grids)
- Record query patterns
- SAIL API schema reference

## Customisation

To customise for your needs:

1. Edit `.claude/CLAUDE.md` to add your own preferences
2. Add context files relevant to your projects
3. Extend skills with additional patterns

## Contributing

Feel free to extend these skills for your Appian projects. The modular structure allows you to:
- Add new skills in `.claude/skills/`
- Extend existing guidelines in `resources/`
- Share improvements with the community

## License

These skills are provided for use by Appian practitioners. Brand assets remain property of Appian Corporation.
