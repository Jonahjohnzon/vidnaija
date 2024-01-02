import { Dosis } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import Footer from './footer'


const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title:{
    default: 'Vidnaija'},
    metadataBase: new URL('https://vidnaija.com.ng/'),
    openGraph: {
      title: 'Vidnaija | Entertainment Hubspot',
      description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free from Vidnaija',
      images:[{url:'https://vidnaija.com.ng/opengraph-image.png', width:1200, height:630}]
      ,
    twitter:{
      card:"summary_large_image"
    }
     
    }
,
  description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free from Vidnaija',
  keywords:['freedownload', 'free movie', 'free movie download', 'free movies', 'free movies downloas', 'anime download', 'free anime download', 'k-drama download', 'free k-drama download', 'hollywood movies', 'bollywood movies', 'kseries','tvseries','tvshows','free hollywood movies', 'vidnaija', 'vidnaija.com', 'nigeria movies', 'nigeria movie','k-series download', 'k-series free download', 'download african movies', 'nollywood'],
  creator: 'Midnight',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin overflow-x-hidden w-[100vw] select-none'>
      <head><meta name="monetag" content="7aeece893954aa98d10a7f34691f1d31"/>
      </head>
      <body className={dosis.className}>
      <link rel="icon" href="/logo.png" sizes="any" />
        <Navbar/>
        {children}
        <Footer date={"2023"}/>
        </body>
    </html>
  )
}
