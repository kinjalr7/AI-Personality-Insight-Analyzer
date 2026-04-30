# 🚀 SoulTrace - Quick Start Guide

## Phase 2 Frontend - Ready to Use!

### ✅ Current Status
- **Frontend**: Running on http://localhost:5173 ✨
- **Backend**: Running on http://localhost:5000 ✨
- **Both servers**: Active and ready

### 🎯 What to Do Now

#### 1. Open the Frontend
Visit: **http://localhost:5173**

You should see:
- Dark themed interface with "SoulTrace" header
- Text input form on the left
- Empty results area on the right

#### 2. Test the Application
1. Enter some text about yourself (minimum 10 characters)
2. Click "Analyze"
3. Wait for the loading spinner
4. See your results:
   - Archetype badges (colored boxes)
   - Trait distribution chart
   - Entropy score
   - PDF download button

#### 3. Try the PDF Export
- Click "Download PDF Report"
- A PDF will be generated with:
  - Your archetypes
  - Trait scores
  - Chart screenshot
  - Professional formatting

### 📝 Example Input
Try analyzing this text:
```
I'm a strategic thinker who loves solving complex problems. 
I value deep understanding and meaningful connections with others. 
I'm driven by a desire to create positive change in the world.
```

### 🛠 If Something Goes Wrong

**Frontend not loading?**
```bash
cd frontend
npm run dev
```

**Backend not responding?**
```bash
cd backend
python app.py
```

**Dependencies missing?**
```bash
cd frontend
npm install
```

### 📊 Understanding Your Results

**Archetypes**: 12 personality types that describe your core nature
- Examples: Strategist, Creator, Caregiver, Leader

**Traits**: 5 color-based dimensions (0-100%)
- **White**: Structure & Organization
- **Blue**: Understanding & Analysis
- **Black**: Agency & Power
- **Red**: Intensity & Passion
- **Green**: Connection & Harmony

**Entropy**: Complexity score (0-2.322)
- Lower = More consistent personality
- Higher = More complex/multifaceted

### 🎨 Features

✨ **Mobile Responsive** - Works on phone, tablet, desktop
📊 **Interactive Charts** - Hover for details
📄 **PDF Reports** - Download your analysis
⚡ **Fast & Smooth** - Vite hot reload
🎯 **Real-time Validation** - Character counter
🔄 **Error Handling** - Clear error messages

### 📁 Project Structure

```
.
├── frontend/              # React + Vite app (running on 5173)
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── App.jsx       # Main app
│   │   └── index.css     # Tailwind styles
│   └── package.json
├── backend/              # Flask API (running on 5000)
│   ├── app.py           # Main Flask app
│   └── requirements.txt
└── README.md
```

### 🔗 API Endpoint

**POST** `http://localhost:5000/analyze`

Request:
```json
{
  "text": "Your text here"
}
```

Response:
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

### 📚 Documentation

- **Frontend**: `frontend/README.md`
- **Backend**: `backend/README.md`
- **Full Details**: `PHASE2_COMPLETE.md`

### 🎓 Next Phase

Phase 3 will add:
- Telegram share integration
- n8n webhook automation
- Social media sharing

### 💡 Tips

1. **Longer text = Better analysis** (100+ characters recommended)
2. **Be authentic** - The AI analyzes your genuine personality
3. **Try different perspectives** - Analyze different aspects of yourself
4. **Export PDFs** - Share your personality insights

### 🆘 Need Help?

Check the browser console (F12) for any errors
Ensure both servers are running (check terminal windows)
Try refreshing the page (Ctrl+R or Cmd+R)

---

**Ready?** Go to http://localhost:5173 and start analyzing! 🎉
