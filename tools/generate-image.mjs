#!/usr/bin/env node
/**
 * Generic Image Generation Script
 *
 * Usage:
 *   node tools/generate-image.mjs --prompt "Your prompt" --output "path/to/output.png"
 *   node tools/generate-image.mjs -p "Your prompt" -o "path/to/output.png" -a "16:9" -s "2K"
 */

import { GeminiImageClient } from "./lib/gemini.js";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Auto-load API key from .env if not set
function loadApiKey() {
  if (process.env.GEMINI_API_KEY) {
    return process.env.GEMINI_API_KEY;
  }

  // Find .env relative to the script location (project root)
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const envPath = join(__dirname, "..", ".env");

  if (existsSync(envPath)) {
    const envContent = readFileSync(envPath, "utf-8");
    const match = envContent.match(/^GEMINI_API_KEY=(.+)$/m);
    if (match) {
      return match[1].trim();
    }
  }

  return null;
}

const apiKey = loadApiKey();
if (!apiKey) {
  console.error("Error: Set GEMINI_API_KEY environment variable or add it to .env");
  process.exit(1);
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    prompt: null,
    output: null,
    aspectRatio: "16:9",
    imageSize: "2K",
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--prompt":
      case "-p":
        options.prompt = args[++i];
        break;
      case "--output":
      case "-o":
        options.output = args[++i];
        break;
      case "--aspect":
      case "-a":
        options.aspectRatio = args[++i];
        break;
      case "--size":
      case "-s":
        options.imageSize = args[++i];
        break;
      case "--help":
      case "-h":
        console.log(`
Generic Image Generation Script

Usage:
  node tools/generate-image.mjs --prompt "Your prompt" --output "path/to/output.png"

Options:
  -p, --prompt   Image description (required)
  -o, --output   Output file path (required)
  -a, --aspect   Aspect ratio: 1:1, 3:4, 4:3, 9:16, 16:9 (default: 16:9)
  -s, --size     Image size: 1K, 2K, 4K (default: 2K)
  -h, --help     Show this help

Environment:
  GEMINI_API_KEY - Required. Get from https://aistudio.google.com/apikey
  Can be set in .env file at project root.
`);
        process.exit(0);
    }
  }

  return options;
}

const options = parseArgs();

if (!options.prompt) {
  console.error("Error: --prompt is required");
  process.exit(1);
}

if (!options.output) {
  console.error("Error: --output is required");
  process.exit(1);
}

console.log("Generating image...");
console.log(`Aspect ratio: ${options.aspectRatio}`);
console.log(`Size: ${options.imageSize}`);

const client = new GeminiImageClient(apiKey);

try {
  const result = await client.generateImage({
    prompt: options.prompt,
    aspectRatio: options.aspectRatio,
    imageSize: options.imageSize,
  });

  // Ensure output directory exists
  mkdirSync(dirname(options.output), { recursive: true });

  const buffer = Buffer.from(result.base64Data, "base64");
  writeFileSync(options.output, buffer);

  console.log(`Image saved to ${options.output}`);
  console.log(`File size: ${buffer.length} bytes`);
  if (result.description) {
    console.log(`Description: ${result.description}`);
  }
} catch (error) {
  console.error("Error:", error instanceof Error ? error.message : error);
  process.exit(1);
}
