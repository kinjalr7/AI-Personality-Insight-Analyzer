# AI Personality Insight Analyzer

An agentic personality analysis platform that transforms unstructured text into psychometric insights using modular AI agent skills.

## 🚀 Overview
This project leverages the **`soultrace` agent skill** to analyze text inputs—such as professional bios, journal entries, or communication logs—and extract personality archetypes based on a 5-color psychological model (White, Blue, Black, Red, Green). 

Built to demonstrate advanced AI orchestration, this system features real-time data visualization, automated report generation, and Telegram webhook integration.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Chart.js, jsPDF
- **Backend**: Flask (Python)
- **AI Core**: Google Gemini API / Claude (via OpenRouter)
- **Agentic Skills**: [skills.sh](https://skills.sh/) (`soultrace` skill)
- **Automation**: n8n (Telegram Webhooks)

## 📋 Architecture Workflow
1. **Input**: User submits text via the React interface.
2. **Agentic Processing**: The Flask backend uses the `soultrace` SKILL.md definition to prompt an LLM for psychometric inference.
3. **Structured Output**: AI returns JSON mapping traits to the 5-color model and identifies top archetypes.
4. **Visualization**: The frontend renders the data using Chart.js.
5. **Distribution**: Users can export PDF reports or trigger automated Telegram notifications via n8n.

## 🛠️ Setup & Installation
### Prerequisites
- Node.js & Python 3.10+
- [skills.sh CLI](https://skills.sh/)
- Gemini API Key

### Installation
1. **Clone the repo**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-personality-analyzer-soultrace.git
   cd ai-personality-analyzer-soultrace
   ```
2. **Install Skills**:
   ```bash
   npx skills add soultrace-ai/soultrace-skill
   ```
3. **Backend Setup**:
   ```bash
   cd backend
   pip install -r requirements.txt
   # Set your GOOGLE_API_KEY in .env
   python app.py
   ```
4. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 🎥 Demo Input
Try analyzing this bio to see the system in action:
> "I thrive in high-stakes environments where strategic planning meets decisive action. My focus is on optimizing processes and scaling operations through data-driven decisions."

## 📜 License
MIT © Kinjal

---
*Built for the 2026 AI Agent Era.*
