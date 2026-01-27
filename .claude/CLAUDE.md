# CLAUDE.md - Appian Claude Code Skills

## Overview

This repository contains Claude Code skills for Appian practitioners. These skills help with:

- **Brand compliance** for Appian presentations, documents, and collateral
- **Sales positioning** using the Power Statement methodology
- **SAIL UI generation** from natural language descriptions

---

## Available Skills

| Skill | Description | Use When |
|-------|-------------|----------|
| `appian-branding` | Appian brand compliance | Presentations, whitepapers, collateral requiring brand consistency |
| `power-statement` | Client-focused sales positioning | Sales stories, positioning statements, prospecting messaging |
| `sail-generation` | SAIL UI code generation | Building Appian interfaces from natural language |

---

## Quick Start

### Using the Skills

Invoke skills by name:

```
/appian-branding - Check content against Appian brand guidelines
/power-statement - Generate a client-focused sales positioning statement
/sail-generation - Generate SAIL UI code from a description
```

---

## Folder Structure

```
appian-claude/
├── .claude/
│   ├── CLAUDE.md              (This file)
│   └── skills/
│       ├── appian-branding/   (Brand compliance skill)
│       ├── power-statement/   (Sales positioning skill)
│       └── sail-generation/   (SAIL code generation skill)
├── resources/
│   ├── branding/
│   │   └── Appian/            (Logos, templates, icons, guidelines)
│   └── sail-generator/        (SAIL generation toolkit and docs)
└── README.md
```

---

## Skill Details

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

## Customisation

You can extend this setup by:

1. Adding your own context files to inform the skills
2. Modifying the CLAUDE.md to add your own writing preferences
3. Adding additional skills for your specific workflows

---

## Reference

For Appian platform documentation, use the official Appian Documentation site: https://docs.appian.com/
