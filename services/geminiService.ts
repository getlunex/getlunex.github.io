
import { GoogleGenAI } from "@google/genai";

const getGenAI = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API_KEY environment variable not set");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateQuickIdea = async (prompt: string): Promise<string> => {
    try {
        const ai = getGenAI();
        const response = await ai.models.generateContent({
            model: 'gemini-flash-lite-latest',
            contents: `As a top-tier digital strategist, provide a concise, actionable idea for the following business challenge: "${prompt}"`,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating quick idea:", error);
        return "Sorry, I couldn't generate an idea right now. Please try again later.";
    }
};

export const generateDeepAnalysis = async (prompt: string): Promise<string> => {
    try {
        const ai = getGenAI();
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: `You are an expert technology consultant. Provide a comprehensive digital strategy analysis for a business facing this challenge: "${prompt}". Structure your response with clear sections like 'Problem Analysis', 'Proposed Solution', 'Technology Stack', and 'Implementation Roadmap'.`,
            config: {
                thinkingConfig: { thinkingBudget: 32768 },
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating deep analysis:", error);
        return "Sorry, I couldn't perform a deep analysis at this moment. The model may be busy. Please try again later.";
    }
};
