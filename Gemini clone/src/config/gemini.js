import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCGiGC4i6QIQHv8_c2CC2X6eglsZx2lRLo";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  return response.text()
   // Return the AI response text
}

export default run;
