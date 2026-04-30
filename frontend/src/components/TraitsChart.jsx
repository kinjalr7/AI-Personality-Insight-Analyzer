import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const TRAIT_COLORS = {
  white: '#F5F5F5',
  blue: '#3B82F6',
  black: '#1F2937',
  red: '#EF4444',
  green: '#10B981',
}

const TRAIT_LABELS = {
  white: 'Structure',
  blue: 'Understanding',
  black: 'Agency',
  red: 'Intensity',
  green: 'Connection',
}

export default function TraitsChart({ traits }) {
  if (!traits) {
    return null
  }

  const labels = Object.keys(traits).map(key => TRAIT_LABELS[key] || key)
  const data = Object.keys(traits).map(key => (traits[key] * 100).toFixed(1))
  const colors = Object.keys(traits).map(key => TRAIT_COLORS[key])

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Trait Score (%)',
        data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 2,
        borderRadius: 12,
        hoverBackgroundColor: colors.map(c => c + 'dd'),
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#E2E8F0',
          font: {
            size: 13,
            weight: 'bold',
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 14,
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#3B82F6',
        borderWidth: 2,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context) {
            return 'Score: ' + context.parsed.x.toFixed(1) + '%'
          },
          afterLabel: function(context) {
            const value = parseFloat(context.parsed.x) / 100
            if (value > 0.7) return 'Level: High'
            if (value > 0.4) return 'Level: Moderate'
            return 'Level: Low'
          }
        }
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(148, 163, 184, 0.15)',
          drawBorder: false,
          lineWidth: 1,
        },
        ticks: {
          color: '#94A3B8',
          font: {
            size: 12,
            weight: '500',
          },
          callback: function(value) {
            return value + '%'
          }
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#E2E8F0',
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: 12,
        },
      },
    },
  }

  return (
    <div className="w-full h-80 sm:h-96">
      <Bar data={chartData} options={options} />
    </div>
  )
}
