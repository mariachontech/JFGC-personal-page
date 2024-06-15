import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navbar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

import { SanityDocument, VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import { sanityFetch } from '../../sanity/lib/fetch'
import { HOME_QUERY, HOME_QUERY_LIGHT } from '../../sanity/lib/queries'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const homeData = await sanityFetch<SanityDocument>({
    query: HOME_QUERY_LIGHT,
  })

  const { principal } = homeData

  return (
    <html lang="es">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {draftMode().isEnabled && (
            <div>
              <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
                Disable preview mode
              </a>
            </div>
          )}
          <Toaster />

          <Navbar personalData={principal} />
          {children}
          {draftMode().isEnabled && <VisualEditing />}

          <Footer personalData={principal} />
        </ThemeProvider>
      </body>
    </html>
  )
}
