const ARCHETYPE_COLORS = {
  white: { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300' },
  black: { bg: 'bg-gray-800', text: 'text-white', border: 'border-gray-600' },
  red: { bg: 'bg-red-100', text: 'text-red-900', border: 'border-red-300' },
  green: { bg: 'bg-green-100', text: 'text-green-900', border: 'border-green-300' },
}

const ARCHETYPE_DESCRIPTIONS = {
  Strategist: 'Visionary planner with long-term perspective',
  Analyst: 'Detail-oriented thinker who values data and logic',
  Leader: 'Decisive and commanding presence',
  Creator: 'Innovative and imaginative mind',
  Caregiver: 'Compassionate and supportive nature',
  Lover: 'Passionate and emotionally connected',
  Sage: 'Seeker of truth and wisdom',
  Innocent: 'Optimistic and hopeful outlook',
  Explorer: 'Adventurous and curious spirit',
  Everyman: 'Grounded and relatable personality',
  Jester: 'Playful and humorous perspective',
  Magician: 'Transformative and powerful influence',
}

function getArchetypeColor(archetype) {
  const colorMap = {
    Strategist: 'blue',
    Analyst: 'blue',
    Leader: 'black',
    Creator: 'red',
    Caregiver: 'green',
    Lover: 'red',
    Sage: 'blue',
    Innocent: 'green',
    Explorer: 'red',
    Everyman: 'white',
    Jester: 'red',
    Magician: 'black',
  }
  return colorMap[archetype] || 'blue'
}

export default function ArchetypeDisplay({ archetypes }) {
  if (!archetypes || archetypes.length === 0) {
    return null
  }

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
        <span className="text-2xl">🎭</span> Your Archetypes
      </h2>
      <p className="text-slate-400 text-sm mb-6">Discover the core personality patterns that define you</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {archetypes.map((archetype, index) => {
          const colorKey = getArchetypeColor(archetype)
          const colors = ARCHETYPE_COLORS[colorKey]
          const description = ARCHETYPE_DESCRIPTIONS[archetype] || 'Unique personality trait'

          return (
            <div
              key={index}
              className={`${colors.bg} ${colors.text} ${colors.border} border-2 rounded-xl p-5 transition transform hover:scale-105 hover:shadow-lg duration-300 backdrop-blur-sm`}
            >
              <h3 className="font-bold text-lg sm:text-xl">{archetype}</h3>
              <p className="text-sm opacity-85 mt-2 leading-relaxed">{description}</p>
              <div className="mt-3 text-xs opacity-60">#{index + 1}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
