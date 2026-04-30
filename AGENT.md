# 🚀 AI Personality Insight Analyzer - Antigravity Build Plan
**Repo:** ai-personality-analyzer-soultrace  
**Skill:** soultrace-ai/soultrace-skill (.agents/skills/soultrace/SKILL.md) - Text to archetypes JSON.[page:0]

## Goal
React app: Text input → soultrace analysis → archetypes/charts/PDF/Telegram share.

## Structure
.
├── AGENT.md
├── .agents/skills/soultrace/SKILL.md
├── backend/app.py (Flask)
├── backend/requirements.txt
├── frontend/ (React Vite Tailwind Chart.js)
└── README.md


## Phases
**Phase 1 Backend:** Flask POST /analyze {text} → Claude "Use soultrace skill on [text]" → JSON parse → return archetypes/traits.

**Phase 2 Frontend:** React form → API call → Chart.js bar + jsPDF PDF.

**Phase 3 Telegram:** n8n webhook for share.

**Phase 4 Deploy:** Vercel frontend, Render backend.

Antigravity: Execute phases in order, reference SKILL.md.