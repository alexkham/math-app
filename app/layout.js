import { Inter } from 'next/font/google'
import './globals.css'
import GoHomeButton from './components/GoHomeButton'
import GoBackButton from './components/GoBackButton'
import ScrollUpButton from './components/scroll-up-button/ScrollUpButton'
import MyNavbar from './components/nav-bar/MyNavbar';
import { mainMenuStructure } from './components/nav-bar2/mainMenu'
import GenericNavbar from './components/nav-bar2/GenericNavbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Website for People Who Are Learning Mathematics',
  description: 'Online Resource for Math Knowledge and Information Concerning Different Branches of  Mathematics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <body >
        {/* <GenericNavbar /> */}
        {/* <MyNavbar></MyNavbar> */}
      {/* <nav className='nav-bar'>
          <GoHomeButton className={'fixed-button'}/>
          
          <GoBackButton className={'fixed-button'}/>
        </nav> */}
        <div >
        {children}
        </div>
        <ScrollUpButton></ScrollUpButton>
        </body>
    </html>
  )
}
