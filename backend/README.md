# SoulTrace Backend - Phase 1

Flask-based backend for personality archetype analysis using OpenRouter API.

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env`
   - Add your OpenRouter API key:
     ```
     OPENROUTER_API_KEY=your_key_here
     ```

3. **Run the server:**
   ```bash
   python app.py
   ```
   
   Server will start on `http://localhost:5000`

## API Endpoints

### POST /analyze
Analyze personality archetypes from text using Claude API.

**Request:**
```json
{
  "text": "Ambitious strategic leader."
}
```

**Response:**
```json
{
  "archetypes": ["Strategist", "Leader"],
  "traits": {
    "white": 0.15,
    "blue": 0.35,
    "black": 0.25,
    "red": 0.10,
    "green": 0.15
  },
  "entropy": 1.89
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Testing

Run the test script to verify the API:

```bash
python test_api.py
```

Make sure the Flask server is running before testing.

## Architecture

- **app.py**: Main Flask application with `/analyze` endpoint
- **requirements.txt**: Python dependencies
- **.env**: Environment variables (Claude API key)
- **test_api.py**: Test script for API validation

## How It Works

1. Client sends POST request to `/analyze` with text
2. Backend reads `.agents/skills/soultrace/SKILL.md` for context
3. Constructs prompt following the SoulTrace personality framework
4. Calls OpenRouter API with the prompt
5. Parses OpenRouter's JSON response
6. Returns structured archetype analysis with traits and entropy
