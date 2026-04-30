# SoulTrace Frontend

React + Vite + Tailwind CSS frontend for the AI Personality Insight Analyzer.

## Features

- 📝 Text input form for personality analysis
- 🎨 Archetype badges with color-coded display
- 📊 Responsive Chart.js bar chart for trait distribution
- 📄 jsPDF report generation with chart screenshot
- 📱 Mobile-first responsive design
- ⚡ Fast development with Vite
- 🎯 Tailwind CSS styling

## Setup

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

**Important:** Make sure the backend is running on `http://localhost:5000` before using the app.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── AnalysisForm.jsx      # Text input form
│   │   ├── ArchetypeDisplay.jsx  # Archetype badges
│   │   ├── TraitsChart.jsx       # Chart.js bar chart
│   │   ├── PDFGenerator.jsx      # PDF report download
│   │   └── LoadingSpinner.jsx    # Loading indicator
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind styles
├── index.html                    # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies
```

## API Integration

The frontend communicates with the backend at `http://localhost:5000/analyze`:

**Request:**
```json
{
  "text": "Your personality text here"
}
```

**Response:**
```json
{
  "archetypes": ["Strategist", "Creator"],
  "traits": {
    "white": 0.7,
    "blue": 0.8,
    "black": 0.5,
    "red": 0.6,
    "green": 0.9
  },
  "entropy": 1.5
}
```

## Color Scheme

- **White**: Structure & Organization
- **Blue**: Understanding & Analysis
- **Black**: Agency & Power
- **Red**: Intensity & Passion
- **Green**: Connection & Harmony

## Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Chart.js 4
- jsPDF 2
- html2canvas 1
