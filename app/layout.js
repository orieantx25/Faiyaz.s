import './globals.css'

export const metadata = {
  metadataBase: new URL('https://faiyazsabab.com'),
  title: 'Faiyaz Sabab | Data Analyst',
  description:
    'Data analyst turning raw signals into Looker dashboards, Python report hubs, and stories teams can act on. Bengaluru.',
  keywords: [
    'Data Analyst',
    'Looker',
    'Power BI',
    'Python',
    'SQL',
    'Business Intelligence',
    'Data Visualization',
    'Faiyaz Sabab',
    'InfraNova Labs',
  ].join(', '),
  authors: [{ name: 'Faiyaz Sabab' }],
  creator: 'Faiyaz Sabab',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://faiyazsabab.com',
    title: 'Faiyaz Sabab | Data Analyst',
    description:
      'Insights that drive decisions — dashboards, report hubs, and analytical storytelling.',
    siteName: 'Faiyaz Sabab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faiyaz Sabab - Data Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faiyaz Sabab | Data Analyst',
    description: 'Looker, Python report hubs, and data storytelling.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: 'Faiyaz Sabab',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: '/icon.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faiyaz Sabab',
    jobTitle: 'Data Analyst',
    description:
      'Data analyst specializing in Looker, Power BI, Python report hubs, and decision-focused storytelling',
    url: 'https://faiyazsabab.com',
    sameAs: [
      'https://www.linkedin.com/in/faiyaz-sabab-0925-cse',
      'https://github.com/orieantx25',
    ],
    email: 'sababfaiyaz25@gmail.com',
    knowsAbout: [
      'Data Analysis',
      'Looker',
      'Power BI',
      'SQL',
      'Python',
      'Data Visualization',
      'Business Intelligence',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Assam Science and Technology University',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'upGrad School of Technology',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://faiyazsabab.com" />
        <meta name="theme-color" content="#F7F3EC" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
