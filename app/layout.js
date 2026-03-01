import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Faiyaz Sabab | Data Analyst Portfolio',
  description: 'Data Analyst and Business Intelligence professional specializing in SQL, Python, Power BI, data visualization, and process optimization. View my portfolio showcasing data-driven projects and analytical insights.',
  keywords: [
    'Data Analyst Portfolio',
    'Business Intelligence',
    'Data Analyst',
    'SQL Expert',
    'Python Data Analysis',
    'Power BI Developer',
    'Data Visualization',
    'Process Optimization',
    'Machine Learning',
    'Faiyaz Sabab',
    'Business Analytics',
    'Data Science'
  ].join(', '),
  authors: [{ name: 'Faiyaz Sabab' }],
  creator: 'Faiyaz Sabab',
  publisher: 'Faiyaz Sabab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faiyazsabab.com',
    title: 'Faiyaz Sabab | Data Analyst Portfolio',
    description: 'Data Analyst and Business Intelligence professional specializing in SQL, Python, Power BI, data visualization, and process optimization.',
    siteName: 'Faiyaz Sabab Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faiyaz Sabab - Data Analyst Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faiyaz Sabab | Data Analyst Portfolio',
    description: 'Data Analyst and Business Intelligence professional specializing in SQL, Python, Power BI, and data visualization.',
    images: ['/og-image.jpg'],
    creator: '@faiyazsabab'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: 'Faiyaz Sabab',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  icons: {
    icon: '/icon.png',
  },
  manifest: '/site.webmanifest' // For enabling progressive web app features fully
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faiyaz Sabab',
    jobTitle: 'Data Analyst',
    description: 'Data Analyst and Business Intelligence professional specializing in data visualization, process optimization, and machine learning',
    url: 'https://faiyazsabab.com',
    sameAs: [
      'https://www.linkedin.com/in/faiyaz-sabab-0925-cse',
      'https://github.com/orieantx25'
    ],
    email: 'sababfaiyaz25@gmail.com',
    knowsAbout: [
      'Data Analysis',
      'Business Intelligence',
      'SQL',
      'Python',
      'Power BI',
      'Tableau',
      'Data Visualization',
      'Process Optimization',
      'Machine Learning',
      'Statistical Analysis'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Assam Science and Technology University'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'upGrad - School of Technology'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://faiyazsabab.com" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="faiyaz-sabab-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
