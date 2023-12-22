import { Dosis } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import Footer from './footer'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'Vidnaija',
  description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin select-none'>
      <body className={dosis.className}>
      <link rel="icon" href="/logo.png" sizes="any" />
        <Navbar/>
        {children}
        <Footer date={"2023"}/>
        </body>
    </html>
  )
}
