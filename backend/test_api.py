#!/usr/bin/env python3
"""
Test script for the /analyze endpoint.
Run this after starting the Flask server: python app.py
"""

import requests
import json
import time

BASE_URL = 'http://localhost:5000'

def test_analyze():
    """Test the /analyze endpoint with sample text."""
    
    # Sample text: "Ambitious strategic leader."
    sample_text = "Ambitious strategic leader."
    
    payload = {
        "text": sample_text
    }
    
    print(f"Testing /analyze endpoint with text: '{sample_text}'")
    print(f"Sending POST request to {BASE_URL}/analyze")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    print("-" * 60)
    
    try:
        response = requests.post(f'{BASE_URL}/analyze', json=payload)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response:")
        print(json.dumps(response.json(), indent=2))
        
        if response.status_code == 200:
            result = response.json()
            
            # Validate response structure
            required_fields = ['archetypes', 'traits', 'entropy']
            missing_fields = [f for f in required_fields if f not in result]
            
            if missing_fields:
                print(f"\n⚠️  Missing fields: {missing_fields}")
            else:
                print("\n✓ Response structure is valid")
                
                # Validate traits
                required_traits = ['white', 'blue', 'black', 'red', 'green']
                traits = result.get('traits', {})
                missing_traits = [t for t in required_traits if t not in traits]
                
                if missing_traits:
                    print(f"⚠️  Missing traits: {missing_traits}")
                else:
                    print("✓ All color traits present")
                    
                    # Check trait values sum to approximately 1.0
                    trait_sum = sum(traits.values())
                    print(f"  Trait sum: {trait_sum:.2f} (should be ~1.0)")
                    
                print(f"✓ Entropy: {result.get('entropy')}")
                print(f"✓ Archetypes: {result.get('archetypes')}")
        else:
            print(f"\n✗ Request failed with status {response.status_code}")
            
    except requests.exceptions.ConnectionError:
        print(f"✗ Could not connect to {BASE_URL}")
        print("Make sure the Flask server is running: python app.py")
    except Exception as e:
        print(f"✗ Error: {str(e)}")

def test_health():
    """Test the /health endpoint."""
    print("\nTesting /health endpoint")
    print("-" * 60)
    
    try:
        response = requests.get(f'{BASE_URL}/health')
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
    except requests.exceptions.ConnectionError:
        print(f"✗ Could not connect to {BASE_URL}")
    except Exception as e:
        print(f"✗ Error: {str(e)}")

if __name__ == '__main__':
    print("=" * 60)
    print("SoulTrace Backend API Test")
    print("=" * 60)
    
    test_health()
    print()
    test_analyze()
