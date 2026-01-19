
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateServiceRecommendation = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is looking for corporate services: "${userQuery}". 
      Available services are: Enterprise Strategy, Digital Transformation, Financial Advisory, Customer Experience. 
      Recommend the most suitable service and explain why in 2 sentences. 
      Be professional and encouraging.`,
    });
    return response.text || "We'd love to discuss how our diverse suite of services can help you.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I recommend reaching out to our specialists for a personalized consultation tailored to your unique needs.";
  }
};
