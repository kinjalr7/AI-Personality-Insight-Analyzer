from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = Flask(__name__)

OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

@app.route('/analyze', methods=['POST'])
def analyze():
    """
    Analyze personality archetypes from text using OpenRouter API.
    
    Expected JSON body:
    {
        "text": "string to analyze"
    }
    
    Returns:
    {
        "archetypes": [...],
        "traits": {
            "blue": 0.7,
            ...
        },
        "entropy": float
    }
    """
    try:
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({"error": "Missing 'text' field in request body"}), 400
        
        text = data['text']
        
        # Read the SKILL.md to include in the prompt
        skill_path = '.agents/skills/soultrace/SKILL.md'
        with open(skill_path, 'r') as f:
            skill_content = f.read()
        
        # Construct the prompt following the SKILL.md framework
        prompt = f"""Strictly follow .agents/skills/soultrace/SKILL.md: Analyze personality archetypes from this text: {text}

Based on the 5-color psychological model (White=structure, Blue=understanding, Black=agency, Red=intensity, Green=connection), analyze the text and provide:

1. Identified archetypes
2. Trait distribution across the 5 colors (as decimal values 0-1)
3. Entropy score (measure of uncertainty, 0-2.322)

Return ONLY valid JSON with this structure:
{{
    "archetypes": ["archetype1", "archetype2"],
    "traits": {{
        "white": 0.0,
        "blue": 0.0,
        "black": 0.0,
        "red": 0.0,
        "green": 0.0
    }},
    "entropy": 0.0
}}"""
        
        # Call OpenRouter API
        headers = {
            'Authorization': f'Bearer {OPENROUTER_API_KEY}',
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:5000',
            'X-Title': 'SoulTrace Backend'
        }
        
        payload = {
            'model': 'openai/gpt-4o-mini',
            'messages': [
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            'temperature': 0.7,
            'max_tokens': 1024
        }
        
        response = requests.post(OPENROUTER_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        
        result = response.json()
        
        # Extract the text content from OpenRouter's response
        if 'choices' in result and len(result['choices']) > 0:
            response_text = result['choices'][0]['message']['content']
            
            # Parse the JSON response from OpenRouter
            try:
                # Try to extract JSON from the response
                json_start = response_text.find('{')
                json_end = response_text.rfind('}') + 1
                
                if json_start != -1 and json_end > json_start:
                    json_str = response_text[json_start:json_end]
                    analysis = json.loads(json_str)
                    return jsonify(analysis), 200
                else:
                    return jsonify({"error": "Could not parse JSON from OpenRouter response"}), 500
            except json.JSONDecodeError as e:
                return jsonify({"error": f"Invalid JSON in OpenRouter response: {str(e)}"}), 500
        else:
            return jsonify({"error": "No content in OpenRouter response"}), 500
            
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"OpenRouter API error: {str(e)}"}), 500
    except FileNotFoundError:
        return jsonify({"error": "SKILL.md not found"}), 500
    except Exception as e:
        return jsonify({"error": f"Server error: {str(e)}"}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint."""
    return jsonify({"status": "ok"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
