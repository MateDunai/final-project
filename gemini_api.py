import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash-latest")

def generate_prompt(topic):
    prompt_text = (
        f"You are an expert AI prompt engineer.\n"
        f"Write a high-quality prompt that the user can paste into an AI assistant\n"
        f"to deeply learn about the topic: '{topic}'.\n\n"
        "Please format the prompt using Markdown with headings, bullet points, and line breaks for clarity.\n"
        "The prompt should:\n"
        "- Ask the assistant to explain the topic clearly and concisely\n"
        "- Include real-world examples and analogies\n"
        "- Use bullet points or subheadings for readability\n"
        "- Avoid unnecessary technical jargon\n"
        "- End with 3 follow-up questions to explore more\n\n"
        "Return only the final prompt text, with no extra explanation or commentary."
)

    response = model.generate_content(prompt_text)
    return response.text.strip()
