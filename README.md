# Appian Claude Code Skills

A collection of Claude Code skills for Appian practitioners, covering brand compliance, sales positioning, and SAIL UI generation.

## Skills Included

### 1. appian-branding
Ensures Appian presentations, whitepapers, and collateral follow official brand guidelines including:
- Colour palette (primary, secondary, accent)
- Typography (Ubuntu, Poppins, Effra, Mulish)
- Logo usage and placement
- Terminology and capitalisation rules
- Social media guidelines

### 2. power-statement
Generates client-focused Power Statements for sales positioning. Leads with customer pain points and results rather than product features. Includes:
- 5-component structure (Headline, Transition, Issues, Offerings, Differentiators)
- Discovery question generation
- Channel adaptation (email, voicemail, proposals)

### 3. sail-generation
Generates production-quality Appian SAIL UI expressions from natural language descriptions using a two-phase workflow:
1. **Mockup phase** - Static SAIL with sample data
2. **Functional phase** - Live interfaces with record queries

## Installation

1. Clone or download this repository
2. Open the folder in your IDE with Claude Code installed
3. The skills will be automatically available

## Usage

Invoke skills using slash commands:

```
/appian-branding - Apply brand guidelines to content
/power-statement - Generate sales positioning
/sail-generation - Create SAIL interfaces
```

## Folder Structure

```
appian-claude/
├── .claude/
│   ├── CLAUDE.md              (Project instructions)
│   └── skills/
│       ├── appian-branding/
│       ├── power-statement/
│       └── sail-generation/
├── resources/
│   ├── branding/
│   │   └── Appian/            (Logos, templates, icons)
│   └── sail-generator/        (SAIL generation toolkit)
└── README.md
```

## Resources

### Branding Assets
Located in `resources/branding/Appian/`:
- Logo files (SVG, PNG, PDF, JPG)
- PowerPoint templates (light and dark mode)
- Word/Google Docs templates
- Icon library (General, Security, HR, Sales, etc.)
- LinkedIn images

### SAIL Generator Toolkit
Located in `resources/sail-generator/`:
- UI component guidelines
- Logic patterns (null safety, arrays, grids)
- Record query patterns
- Conversion guidelines for mockup-to-functional workflow
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
