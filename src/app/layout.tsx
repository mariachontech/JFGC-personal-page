import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navbar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { AnimatedProvider } from '@/providers/animated-provider'
import { Toaster } from '@/components/ui/toaster'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos',
  description: "Fermi`'`s Page",
  openGraph: {
    title: 'José Fermi Guerrero Castellanos',
    description: "Fermi's Page",
    url: 'https://jfgc-personal-page.vercel.app',
    siteName: 'Fermi',
    images: [
      {
        url: '/images/profile/fermi-lac.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/images/profile/fermi-neige.jpeg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />

          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
