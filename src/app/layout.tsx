import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '20:20:20 Timer - Mindful Eating',
  description: 'A timer app to support mindful eating using the 20:20:20 rule - chew each bite for 20 seconds, wait 20 seconds before the next.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  manifest: '/manifest.json',
  themeColor: '#34C759',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '20:20:20 Timer'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="20:20:20 Timer" />
      </head>
      <body className="apple-health-bg min-h-screen">
        {children}
      </body>
    </html>
  )
} 