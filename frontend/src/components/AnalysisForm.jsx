import { useState } from 'react'

export default function AnalysisForm({ onAnalyze, disabled }) {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const value = e.target.value
    setText(value)
    setCharCount(value.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAnalyze(text)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 sm:p-8 sticky top-24 backdrop-blur-sm shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
        <span className="text-2xl">📝</span> Your Story
      </h2>
      <p className="text-slate-400 text-sm mb-6">Share your authentic self</p>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="text" className="block text-sm font-semibold text-slate-200 mb-3">
            What defines you?
          </label>
          <textarea
            id="text"
            value={text}
            onChange={handleChange}
            disabled={disabled}
            placeholder="Write something about yourself, your goals, dreams, or your perspective on life. The more authentic, the better..."
            className="w-full h-48 sm:h-56 px-4 py-4 bg-slate-700/40 border border-slate-600/50 rounded-lg text-white placeholder-slate-500/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-inner"
          />
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium ${charCount >= 10 ? 'text-green-400' : 'text-slate-400'}`}>
                {charCount} characters
              </span>
              {charCount >= 10 && <span className="text-green-400">✓</span>}
            </div>
            <p className="text-xs text-slate-500">
              Minimum 10 characters
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={disabled || text.trim().length < 10}
          className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:via-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
        >
          <span className="text-lg">{disabled ? '⏳' : '✨'}</span>
          {disabled ? 'Analyzing...' : 'Analyze Personality'}
        </button>
      </div>
    </form>
  )
}
