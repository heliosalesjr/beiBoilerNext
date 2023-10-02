import './globals.css'
import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
import NavbarDark from './components/NavbarDark'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={rubik.className}>
        <NavbarDark/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
