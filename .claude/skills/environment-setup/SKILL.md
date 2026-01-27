---
name: environment-setup
description: Sets up the development environment for appian-claude skills, installing all required dependencies and configuring API keys.
---

# Environment Setup Skill

## Purpose

This skill sets up a new environment with all dependencies required for the appian-claude skills, including:

- Node.js packages for presentation generation
- Playwright browsers for HTML-to-PPTX conversion
- API key configuration for image generation

---

## When to Use

Run this skill when:

- Setting up appian-claude on a new machine
- Dependencies are missing or broken
- You see errors about missing packages (pptxgenjs, playwright, sharp)
- Image generation fails due to missing GEMINI_API_KEY

---

## Prerequisites

Before running this skill, ensure you have:

1. **Node.js 18+** installed (`node --version`)
2. **npm** installed (`npm --version`)
3. A **Gemini API key** from https://aistudio.google.com/apikey

---

## Setup Steps

### Step 1: Install Global npm Packages

Run these commands to install required packages globally:

```bash
npm install -g pptxgenjs playwright sharp
```

**What these do:**
| Package | Purpose |
|---------|---------|
| `pptxgenjs` | PowerPoint file generation |
| `playwright` | Browser automation for HTML rendering |
| `sharp` | SVG/gradient rasterisation to PNG |

### Step 2: Install Playwright Browsers

After installing playwright, install the browsers:

```bash
npx playwright install chromium
```

### Step 3: Configure API Keys

Create a `.env` file in the project root with your API keys:

```bash
# Copy the example file
cp .env.example .env

# Edit and add your API key
# GEMINI_API_KEY=your_api_key_here
```

**Get your Gemini API key:** https://aistudio.google.com/apikey

### Step 4: Create Output Directories

```bash
mkdir -p output/images output/presentations
```

---

## Quick Setup Script

Run this complete setup in one go:

```bash
# Install global packages
npm install -g pptxgenjs playwright sharp

# Install Playwright browsers
npx playwright install chromium

# Create output directories
mkdir -p output/images output/presentations

# Create .env from example (if not exists)
[ ! -f .env ] && cp .env.example .env

echo "Setup complete! Edit .env to add your GEMINI_API_KEY"
```

---

## Verify Installation

Test that everything is working:

### 1. Check Node packages

```bash
node -e "require('pptxgenjs'); console.log('pptxgenjs OK')"
node -e "require('playwright'); console.log('playwright OK')"
node -e "require('sharp'); console.log('sharp OK')"
```

### 2. Check Playwright browsers

```bash
npx playwright --version
```

### 3. Test image generation

```bash
node tools/generate-image.mjs -p "Test image: blue square" -o "output/images/test.png" -a "1:1" -s "1K"
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Install Node.js from https://nodejs.org |
| `Cannot find module 'pptxgenjs'` | Run `npm install -g pptxgenjs` |
| `Cannot find module 'playwright'` | Run `npm install -g playwright && npx playwright install chromium` |
| `Cannot find module 'sharp'` | Run `npm install -g sharp` |
| `GEMINI_API_KEY not set` | Create `.env` file with your API key |
| `Gemini API error (503)` | API is overloaded, try again later |
| Sharp compilation errors | On macOS: `xcode-select --install` |

### macOS-specific Setup

If sharp fails to install on macOS:

```bash
# Install Xcode command line tools
xcode-select --install

# Then retry
npm install -g sharp
```

### Setting NODE_PATH (if needed)

If Node can't find globally installed packages:

```bash
# For Homebrew on macOS (Apple Silicon)
export NODE_PATH=/opt/homebrew/lib/node_modules

# For Homebrew on macOS (Intel)
export NODE_PATH=/usr/local/lib/node_modules
```

Add to your shell profile (`~/.zshrc` or `~/.bashrc`) for persistence.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes (for images) | API key for Gemini image generation |
| `NODE_PATH` | Sometimes | Path to global node_modules |

---

## .env File Format

```
# Gemini API for image generation
# Get your key at: https://aistudio.google.com/apikey
GEMINI_API_KEY=your_api_key_here
```

---

## Related Skills

| Skill | Requires Setup |
|-------|----------------|
| `appian-presentations` | Yes - npm packages, Playwright, Gemini API |
| `appian-branding` | No |
| `power-statement` | No |
| `sail-generation` | No |
