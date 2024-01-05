import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Website for People Who Are Learning Mathematics',
  description: 'Online Resource for Math Knowledge and Information Concerning Different Branches of  Mathematics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
