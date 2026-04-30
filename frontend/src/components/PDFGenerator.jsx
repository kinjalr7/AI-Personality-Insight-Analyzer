import { useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const TRAIT_COLORS = {
  white: [245, 245, 245],
  blue: [59, 130, 246],
  black: [31, 41, 55],
  red: [239, 68, 68],
  green: [16, 185, 129],
}

const TRAIT_LABELS = {
  white: 'Structure',
  blue: 'Understanding',
  black: 'Agency',
  red: 'Intensity',
  green: 'Connection',
}

export default function PDFGenerator({ analysis, chartRef }) {
  const [generating, setGenerating] = useState(false)

  const generatePDF = async () => {
    setGenerating(true)
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 20
      const contentWidth = pageWidth - 2 * margin
      let yPosition = margin

      // ===== PAGE 1: COVER PAGE =====
      
      // Background color
      pdf.setFillColor(15, 23, 42)
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')

      // Decorative header
      pdf.setFillColor(59, 130, 246)
      pdf.rect(0, 0, pageWidth, 40, 'F')

      // Title
      pdf.setFontSize(36)
      pdf.setTextColor(255, 255, 255)
      pdf.text('SoulTrace', pageWidth / 2, 25, { align: 'center', maxWidth: contentWidth })

      yPosition = 60

      // Subtitle
      pdf.setFontSize(16)
      pdf.setTextColor(148, 163, 184)
      pdf.text('Personality Archetype Analysis Report', pageWidth / 2, yPosition, { align: 'center' })
      yPosition += 20

      // Decorative line
      pdf.setDrawColor(59, 130, 246)
      pdf.setLineWidth(1)
      pdf.line(margin + 30, yPosition, pageWidth - margin - 30, yPosition)
      yPosition += 15

      // Generated date
      pdf.setFontSize(11)
      pdf.setTextColor(226, 232, 240)
      pdf.text(`Report Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, yPosition, { align: 'center' })
      yPosition += 8
      pdf.text(`Time: ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`, pageWidth / 2, yPosition, { align: 'center' })

      yPosition += 30

      // Quick Stats Box
      pdf.setFillColor(30, 41, 59)
      pdf.rect(margin, yPosition, contentWidth, 50, 'F')
      pdf.setDrawColor(59, 130, 246)
      pdf.setLineWidth(2)
      pdf.rect(margin, yPosition, contentWidth, 50)

      pdf.setFontSize(12)
      pdf.setTextColor(59, 130, 246)
      pdf.text('Quick Overview', margin + 8, yPosition + 8)

      pdf.setFontSize(10)
      pdf.setTextColor(226, 232, 240)
      pdf.text(`Archetypes Identified: ${analysis.archetypes?.length || 0}`, margin + 8, yPosition + 18)
      pdf.text(`Entropy Score: ${(analysis.entropy || 0).toFixed(2)} / 2.322`, margin + 8, yPosition + 26)
      pdf.text(`Personality Complexity: ${getComplexityLevel(analysis.entropy)}`, margin + 8, yPosition + 34)

      yPosition += 70

      // Introduction text
      pdf.setFontSize(11)
      pdf.setTextColor(226, 232, 240)
      const introText = 'This report provides a comprehensive analysis of your personality archetypes based on the text you provided. The analysis uses advanced AI to identify patterns and traits that define your unique personality profile.'
      const splitIntro = pdf.splitTextToSize(introText, contentWidth - 16)
      pdf.text(splitIntro, margin + 8, yPosition)

      // ===== PAGE 2: ARCHETYPES =====
      pdf.addPage()
      yPosition = margin

      // Page header
      pdf.setFillColor(59, 130, 246)
      pdf.rect(0, 0, pageWidth, 15, 'F')
      pdf.setFontSize(10)
      pdf.setTextColor(255, 255, 255)
      pdf.text('Your Personality Archetypes', margin, 10)

      yPosition = 25

      // Section title
      pdf.setFontSize(18)
      pdf.setTextColor(255, 255, 255)
      pdf.text('🎭 Identified Archetypes', margin, yPosition)
      yPosition += 12

      // Archetypes list
      pdf.setFontSize(10)
      if (analysis.archetypes && analysis.archetypes.length > 0) {
        analysis.archetypes.forEach((archetype, index) => {
          // Archetype box
          pdf.setFillColor(30, 41, 59)
          pdf.rect(margin, yPosition, contentWidth, 18, 'F')
          pdf.setDrawColor(59, 130, 246)
          pdf.setLineWidth(1)
          pdf.rect(margin, yPosition, contentWidth, 18)

          // Number badge
          pdf.setFillColor(59, 130, 246)
          pdf.circle(margin + 6, yPosition + 9, 3, 'F')
          pdf.setTextColor(255, 255, 255)
          pdf.setFontSize(9)
          pdf.text(`${index + 1}`, margin + 6, yPosition + 10, { align: 'center' })

          // Archetype name
          pdf.setFontSize(12)
          pdf.setTextColor(255, 255, 255)
          pdf.text(archetype, margin + 14, yPosition + 7)

          // Description
          pdf.setFontSize(9)
          pdf.setTextColor(148, 163, 184)
          const description = getArchetypeDescription(archetype)
          pdf.text(description, margin + 14, yPosition + 12)

          yPosition += 22
        })
      }

      // ===== PAGE 3: TRAITS & ENTROPY =====
      pdf.addPage()
      yPosition = margin

      // Page header
      pdf.setFillColor(59, 130, 246)
      pdf.rect(0, 0, pageWidth, 15, 'F')
      pdf.setFontSize(10)
      pdf.setTextColor(255, 255, 255)
      pdf.text('Trait Analysis & Entropy', margin, 10)

      yPosition = 25

      // Entropy Score Section
      pdf.setFontSize(16)
      pdf.setTextColor(255, 255, 255)
      pdf.text('🎯 Entropy Score', margin, yPosition)
      yPosition += 10

      // Entropy box
      pdf.setFillColor(30, 41, 59)
      pdf.rect(margin, yPosition, contentWidth, 25, 'F')
      pdf.setDrawColor(59, 130, 246)
      pdf.setLineWidth(2)
      pdf.rect(margin, yPosition, contentWidth, 25)

      pdf.setFontSize(28)
      pdf.setTextColor(59, 130, 246)
      pdf.text(`${(analysis.entropy || 0).toFixed(2)}`, margin + 15, yPosition + 18)

      pdf.setFontSize(10)
      pdf.setTextColor(226, 232, 240)
      pdf.text('/ 2.322', margin + 45, yPosition + 18)

      pdf.setFontSize(9)
      pdf.setTextColor(148, 163, 184)
      pdf.text(`Complexity Level: ${getComplexityLevel(analysis.entropy)}`, margin + 15, yPosition + 23)

      yPosition += 35

      // Trait Distribution Section
      pdf.setFontSize(16)
      pdf.setTextColor(255, 255, 255)
      pdf.text('📊 Trait Distribution', margin, yPosition)
      yPosition += 10

      // Trait bars
      if (analysis.traits) {
        Object.entries(analysis.traits).forEach(([key, value]) => {
          const label = TRAIT_LABELS[key] || key
          const percentage = (value * 100).toFixed(1)
          const color = TRAIT_COLORS[key] || [100, 100, 100]

          // Label
          pdf.setFontSize(10)
          pdf.setTextColor(226, 232, 240)
          pdf.text(`${label}`, margin, yPosition)

          // Percentage
          pdf.setTextColor(148, 163, 184)
          pdf.text(`${percentage}%`, pageWidth - margin - 20, yPosition)

          // Bar background
          pdf.setFillColor(55, 65, 81)
          pdf.rect(margin, yPosition + 3, contentWidth - 30, 6, 'F')

          // Bar fill
          pdf.setFillColor(...color)
          const barWidth = ((contentWidth - 30) * value)
          pdf.rect(margin, yPosition + 3, barWidth, 6, 'F')

          yPosition += 12
        })
      }

      yPosition += 10

      // Interpretation
      pdf.setFontSize(9)
      pdf.setTextColor(148, 163, 184)
      const interpretation = 'These traits represent different dimensions of your personality. Higher values indicate stronger expression of that trait in your personality profile.'
      const splitInterpretation = pdf.splitTextToSize(interpretation, contentWidth - 16)
      pdf.text(splitInterpretation, margin + 8, yPosition)

      // ===== PAGE 4: CHART =====
      if (chartRef && chartRef.current) {
        try {
          pdf.addPage()
          yPosition = margin

          // Page header
          pdf.setFillColor(59, 130, 246)
          pdf.rect(0, 0, pageWidth, 15, 'F')
          pdf.setFontSize(10)
          pdf.setTextColor(255, 255, 255)
          pdf.text('Visual Analysis', margin, 10)

          yPosition = 25

          // Chart title
          pdf.setFontSize(14)
          pdf.setTextColor(255, 255, 255)
          pdf.text('Trait Distribution Chart', margin, yPosition)
          yPosition += 12

          const canvas = await html2canvas(chartRef.current, {
            backgroundColor: '#0f172a',
            scale: 2,
          })
          const imgData = canvas.toDataURL('image/png')
          const imgWidth = contentWidth
          const imgHeight = (canvas.height * imgWidth) / canvas.width

          pdf.addImage(imgData, 'PNG', margin, yPosition, imgWidth, imgHeight)
        } catch (err) {
          console.error('Error capturing chart:', err)
        }
      }

      // ===== FOOTER ON ALL PAGES =====
      const pageCount = pdf.internal.pages.length - 1
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i)
        pdf.setFontSize(8)
        pdf.setTextColor(100, 116, 139)
        pdf.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 8, { align: 'center' })
        pdf.text('SoulTrace © 2024 | AI Personality Insight Analyzer', pageWidth / 2, pageHeight - 4, { align: 'center' })
      }

      // Download
      pdf.save(`soultrace-report-${new Date().getTime()}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <button
      onClick={generatePDF}
      disabled={generating}
      className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:via-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
    >
      <span className="text-lg">{generating ? '⏳' : '📄'}</span>
      {generating ? 'Generating PDF...' : 'Download Professional PDF Report'}
    </button>
  )
}

function getComplexityLevel(entropy) {
  if (entropy < 0.8) return 'Low - Focused personality'
  if (entropy < 1.5) return 'Moderate - Balanced personality'
  if (entropy < 2.0) return 'High - Complex personality'
  return 'Very High - Highly nuanced personality'
}

function getArchetypeDescription(archetype) {
  const descriptions = {
    Strategist: 'Visionary planner with long-term perspective and strategic thinking',
    Analyst: 'Detail-oriented thinker who values data, logic, and precision',
    Leader: 'Decisive and commanding presence with natural authority',
    Creator: 'Innovative and imaginative mind with creative expression',
    Caregiver: 'Compassionate and supportive nature focused on helping others',
    Lover: 'Passionate and emotionally connected with deep feelings',
    Sage: 'Seeker of truth and wisdom with analytical depth',
    Innocent: 'Optimistic and hopeful outlook on life and possibilities',
    Explorer: 'Adventurous and curious spirit seeking new experiences',
    Everyman: 'Grounded and relatable personality with practical approach',
    Jester: 'Playful and humorous perspective bringing joy and laughter',
    Magician: 'Transformative and powerful influence creating change',
  }
  return descriptions[archetype] || 'Unique personality trait'
}
