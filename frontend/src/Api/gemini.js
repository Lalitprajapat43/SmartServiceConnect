import axios from "axios";

export const GEMINI_API_KEY = "AIzaSyDt8xHiihZ4N3nY3ZhAQwGDbJuut09d4Tg";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    return (
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that."
    );
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return "⚠️ AI Server Issue. Please try again later!";
  }
};
