import { Roboto } from 'next/font/google'
import '@/Styles/global.css'
import { Metadata } from 'next'
import ReactQueryProvider from '@/lib/utils/provider/react-query-provider'

const BASE_URL = 'http://localhost:3000'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const RobotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: '300',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${RobotoSans.variable} antialiased`}>
        <ReactQueryProvider> {children}</ReactQueryProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
