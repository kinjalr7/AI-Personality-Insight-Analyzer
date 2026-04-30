import { useState, useRef } from 'react'
import AnalysisForm from './components/AnalysisForm'
import ArchetypeDisplay from './components/ArchetypeDisplay'
import TraitsChart from './components/TraitsChart'
import PDFGenerator from './components/PDFGenerator'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const chartRef = useRef(null)

  const handleAnalyze = async (text) => {
    setLoading(true)
    setError(null)
    setAnalysis(null)

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Analysis failed')
      }

      const data = await response.json()
      setAnalysis(data)
    } catch (err) {
      setError(err.message || 'Failed to analyze text. Make sure the backend is running on http://localhost:5000')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-700/50 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <div className="text-4xl">✨</div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                SoulTrace
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-1">Discover Your Personality Archetypes with AI</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <AnalysisForm onAnalyze={handleAnalyze} disabled={loading} />
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <LoadingSpinner />
                <p className="text-slate-300 mt-6 text-lg">Analyzing your personality...</p>
              </div>
            )}

            {error && (
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex gap-3">
                  <div className="text-red-400 text-2xl">⚠️</div>
                  <div>
                    <p className="text-red-300 font-semibold">Analysis Error</p>
                    <p className="text-red-200 text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {analysis && !loading && (
              <div className="space-y-8">
                {/* Archetypes */}
                <ArchetypeDisplay archetypes={analysis.archetypes} />

                {/* Chart */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-blue-400">📊</span> Trait Distribution
                  </h2>
                  <div ref={chartRef} className="w-full">
                    <TraitsChart traits={analysis.traits} />
                  </div>
                </div>

                {/* Entropy Score */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <span className="text-purple-400">🎯</span> Entropy Score
                      </h3>
                      <p className="text-slate-400 text-sm mt-2">Measure of personality complexity and uniqueness</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {(analysis.entropy || 0).toFixed(2)}
                      </div>
                      <p className="text-slate-400 text-sm mt-1">/ 2.322</p>
                    </div>
                  </div>
                </div>

                {/* PDF Download */}
                <PDFGenerator analysis={analysis} chartRef={chartRef} />
              </div>
            )}

            {!loading && !error && !analysis && (
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-dashed border-slate-600/50 rounded-xl p-12 sm:p-16 text-center backdrop-blur-sm">
                <div className="text-5xl mb-4">🔮</div>
                <p className="text-slate-300 text-lg">
                  Enter your text and click "Analyze" to discover your personality archetypes
                </p>
                <p className="text-slate-500 text-sm mt-3">Share your thoughts, feelings, or experiences</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-16 sm:mt-20 py-8 sm:py-12 bg-gradient-to-r from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">SoulTrace © 2024 | Powered by AI Personality Analysis</p>
          <p className="text-slate-500 text-xs mt-2">Discover your unique personality archetypes</p>
        </div>
      </footer>
    </div>
  )
}

export default App
