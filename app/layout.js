import './globals.css'
import { Inter } from 'next/font/google'
import Navber from "@/app/components/Navber";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First App',
  description: 'First next Js App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navber/>
      {children}
      </body>
    </html>
  )
}
