'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Pie, Doughnut, Line, Radar } from 'react-chartjs-2'
import { useInView } from 'react-intersection-observer'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
)

const ink = 'rgba(55, 48, 40, 0.9)'
const muted = 'rgba(110, 100, 90, 0.85)'
const cream = '#FAF8F5'
const palette = [
  'rgba(88, 118, 105, 0.85)',
  'rgba(55, 48, 40, 0.72)',
  'rgba(160, 120, 95, 0.8)',
  'rgba(140, 128, 108, 0.8)',
  'rgba(100, 120, 130, 0.8)',
  'rgba(120, 108, 90, 0.75)',
]

const mono = { family: "'IBM Plex Mono', monospace", size: 10 }
const tooltipBase = {
  backgroundColor: cream,
  titleColor: ink,
  bodyColor: ink,
  borderColor: 'rgba(55, 48, 40, 0.12)',
  borderWidth: 1,
  padding: 10,
  titleFont: { family: "'IBM Plex Mono', monospace", size: 11 },
  bodyFont: { family: "'IBM Plex Mono', monospace", size: 11 },
}

export function BarChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['Python', 'SQL', 'Power BI', 'Looker', 'Excel'],
    datasets: [
      {
        label: 'Proficiency',
        data: inView ? [95, 90, 88, 86, 87] : [0, 0, 0, 0, 0],
        backgroundColor: palette,
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    plugins: {
      legend: { display: false },
      tooltip: {
        ...tooltipBase,
        displayColors: false,
        callbacks: { label: (ctx) => `Proficiency: ${ctx.parsed.y}%` },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: muted, font: mono, callback: (v) => `${v}%` },
        grid: { color: 'rgba(55, 48, 40, 0.06)' },
      },
      x: {
        ticks: { color: muted, font: mono },
        grid: { display: false },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Bar data={data} options={options} />
    </div>
  )
}

export function PieChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['BI & Dashboards', 'Analytics / Ops', 'Data Viz', 'Applied ML / CV', 'AI tools'],
    datasets: [
      {
        data: inView ? [30, 25, 18, 15, 12] : [0, 0, 0, 0, 0],
        backgroundColor: palette.slice(0, 5),
        borderColor: cream,
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: muted, padding: 12, font: mono },
      },
      tooltip: {
        ...tooltipBase,
        callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}%` },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Pie data={data} options={options} />
    </div>
  )
}

export function ToolMixChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['Looker', 'Power BI', 'Python', 'SQL', 'Excel'],
    datasets: [
      {
        data: inView ? [28, 24, 22, 16, 10] : [0, 0, 0, 0, 0],
        backgroundColor: palette.slice(0, 5),
        borderColor: cream,
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: muted, padding: 12, font: mono },
      },
      tooltip: {
        ...tooltipBase,
        callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}% of build time` },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Doughnut data={data} options={options} />
    </div>
  )
}

export function DeliveryTrendChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['2024', '2025', '2026'],
    datasets: [
      {
        label: 'Dashboards shipped',
        data: inView ? [10, 14, 18] : [0, 0, 0],
        borderColor: 'rgba(88, 118, 105, 0.95)',
        backgroundColor: 'rgba(88, 118, 105, 0.12)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointBackgroundColor: cream,
        pointBorderColor: 'rgba(88, 118, 105, 0.95)',
        pointBorderWidth: 2,
      },
      {
        label: 'Reports / hubs',
        data: inView ? [5, 8, 11] : [0, 0, 0],
        borderColor: 'rgba(160, 120, 95, 0.95)',
        backgroundColor: 'rgba(160, 120, 95, 0.1)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointBackgroundColor: cream,
        pointBorderColor: 'rgba(160, 120, 95, 0.95)',
        pointBorderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: muted, padding: 12, font: mono },
      },
      tooltip: tooltipBase,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: muted, font: mono, stepSize: 4 },
        grid: { color: 'rgba(55, 48, 40, 0.06)' },
      },
      x: {
        ticks: { color: muted, font: mono },
        grid: { display: false },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Line data={data} options={options} />
    </div>
  )
}

export function DomainBarChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['Ops & delivery', 'Growth / GTM', 'Workforce BI', 'Sports analytics', 'Product development'],
    datasets: [
      {
        label: 'Share of work',
        data: inView ? [32, 26, 18, 14, 10] : [0, 0, 0, 0, 0],
        backgroundColor: palette,
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    plugins: {
      legend: { display: false },
      tooltip: {
        ...tooltipBase,
        displayColors: false,
        callbacks: { label: (ctx) => `${ctx.parsed.x}% of recent work` },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 40,
        ticks: { color: muted, font: mono, callback: (v) => `${v}%` },
        grid: { color: 'rgba(55, 48, 40, 0.06)' },
      },
      y: {
        ticks: { color: muted, font: mono },
        grid: { display: false },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Bar data={data} options={options} />
    </div>
  )
}

export function SkillRadarChart() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['SQL', 'Python', 'BI / Looker', 'Storytelling', 'Pipelines', 'Product sense'],
    datasets: [
      {
        label: 'Analyst profile',
        data: inView ? [90, 88, 86, 84, 80, 78] : [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(88, 118, 105, 0.18)',
        borderColor: 'rgba(88, 118, 105, 0.9)',
        pointBackgroundColor: 'rgba(88, 118, 105, 0.95)',
        pointBorderColor: cream,
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1400, easing: 'easeInOutQuart' },
    plugins: {
      legend: { display: false },
      tooltip: tooltipBase,
    },
    scales: {
      r: {
        suggestedMin: 40,
        suggestedMax: 100,
        ticks: { display: false },
        grid: { color: 'rgba(55, 48, 40, 0.08)' },
        angleLines: { color: 'rgba(55, 48, 40, 0.08)' },
        pointLabels: { color: muted, font: mono },
      },
    },
  }

  return (
    <div ref={ref} className="w-full h-[260px] sm:h-[300px]">
      <Radar data={data} options={options} />
    </div>
  )
}
