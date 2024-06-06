import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Challenge LN',
  description: 'Challenge LN',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://especiales.lanacion.com.ar/arc-css/css/site.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
