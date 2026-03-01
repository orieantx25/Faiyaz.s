'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'
import { useInView } from 'react-intersection-observer'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export function BarChart() {
  const { theme } = useTheme()
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['Python', 'SQL', 'Power BI', 'Looker Studio', 'Excel'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: inView ? [95, 90, 88, 85, 87] : [0, 0, 0, 0, 0],
        backgroundColor: theme === 'dark' 
          ? [
              'rgba(139, 92, 246, 0.8)', // Violet
              'rgba(59, 130, 246, 0.8)', // Blue
              'rgba(16, 185, 129, 0.8)', // Emerald
              'rgba(245, 158, 11, 0.8)', // Amber
              'rgba(239, 68, 68, 0.8)'   // Red
            ]
          : [
              'rgba(124, 58, 237, 0.9)', 
              'rgba(37, 99, 235, 0.9)', 
              'rgba(5, 150, 105, 0.9)', 
              'rgba(217, 119, 6, 0.9)', 
              'rgba(220, 38, 38, 0.9)'
            ],
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 8
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        titleColor: theme === 'dark' ? '#ffffff' : '#000000',
        bodyColor: theme === 'dark' ? '#ffffff' : '#000000',
        borderColor: theme === 'dark' ? '#ffffff' : '#000000',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `Proficiency: ${context.parsed.y}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          callback: (value) => value + '%'
        },
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: theme === 'dark' ? '#ffffff' : '#000000'
        },
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div ref={ref} className="w-full h-[350px]">
      <Bar data={data} options={options} />
    </div>
  )
}

export function PieChart() {
  const { theme } = useTheme()
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const data = {
    labels: ['Data Analysis', 'Business Intelligence', 'Process Optimization', 'Machine Learning', 'Data Visualization', 'High-Performance Computing'],
    datasets: [
      {
        data: inView ? [25, 20, 15, 15, 15, 10] : [0, 0, 0, 0, 0, 0],
        backgroundColor: theme === 'dark'
          ? [
              'rgba(139, 92, 246, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(236, 72, 153, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(6, 182, 212, 0.8)' // Cyan
            ]
          : [
              'rgba(124, 58, 237, 0.9)',
              'rgba(37, 99, 235, 0.9)',
              'rgba(219, 39, 119, 0.9)',
              'rgba(5, 150, 105, 0.9)',
              'rgba(217, 119, 6, 0.9)',
              'rgba(8, 145, 178, 0.9)' // Cyan
            ],
        borderColor: theme === 'dark' ? '#000000' : '#ffffff',
        borderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        titleColor: theme === 'dark' ? '#ffffff' : '#000000',
        bodyColor: theme === 'dark' ? '#ffffff' : '#000000',
        borderColor: theme === 'dark' ? '#ffffff' : '#000000',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`
        }
      }
    }
  }

  return (
    <div ref={ref} className="w-full h-[350px]">
      <Pie data={data} options={options} />
    </div>
  )
}
