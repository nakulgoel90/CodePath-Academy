// test.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const res = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: "Hello",
});

console.log(res.text);