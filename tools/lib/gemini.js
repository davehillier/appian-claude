/**
 * Gemini Image Generation Client
 *
 * Standalone client for Gemini image generation APIs.
 */

const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

const ALLOWED_MODELS = [
  "gemini-3-pro-image-preview", // Nano Banana Pro (highest quality)
  "gemini-2.5-flash-preview-05-20", // Nano Banana (fast)
  "gemini-2.0-flash-exp", // Widely available fallback
];

const DEFAULT_MODEL = "gemini-3-pro-image-preview";

export class GeminiImageClient {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is required");
    }
    this.apiKey = apiKey;
  }

  async generateImage(options) {
    const { prompt, aspectRatio, imageSize, images } = options;
    const model = options.model || DEFAULT_MODEL;

    if (!ALLOWED_MODELS.includes(model)) {
      throw new Error(`Invalid model: ${model}. Allowed: ${ALLOWED_MODELS.join(", ")}`);
    }

    const supportsImageConfig = model.includes("image") || model.includes("imagen");

    const requestParts = [{ text: prompt }];

    if (images && images.length > 0) {
      for (const img of images) {
        requestParts.push({
          inlineData: {
            mimeType: img.mimeType,
            data: img.data,
          },
        });
      }
    }

    const requestBody = {
      contents: [{ parts: requestParts }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        ...(supportsImageConfig && (aspectRatio || imageSize)
          ? {
              imageConfig: {
                ...(aspectRatio && { aspectRatio }),
                ...(imageSize && { imageSize }),
              },
            }
          : {}),
      },
    };

    const url = `${GEMINI_API_BASE}/${model}:generateContent?key=${this.apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Gemini API error: ${data.error.message}`);
    }

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No image generated - empty response from Gemini");
    }

    const responseParts = data.candidates[0].content.parts;
    let imageData = null;
    let description;

    for (const part of responseParts) {
      if (part.inlineData) {
        imageData = {
          mimeType: part.inlineData.mimeType,
          base64Data: part.inlineData.data,
        };
      } else if (part.text) {
        description = part.text;
      }
    }

    if (!imageData) {
      throw new Error("No image data in Gemini response");
    }

    return { ...imageData, description };
  }
}
