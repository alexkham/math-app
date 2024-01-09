import { Inter } from 'next/font/google'
import '../../../app/globals.css'
import GoHomeButton from '../../../app/components/GoHomeButton'
import GoBackButton from '../../../app/components/GoBackButton'
import ScrollUpButton from '../../../app/components/scroll-up-button/ScrollUpButton'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='nav-bar'>
          <GoHomeButton className={'fixed-button'}/>
          
          <GoBackButton className={'fixed-button'}/>
        </nav>
        <div className='main'>
        {children}
        </div>
        <ScrollUpButton></ScrollUpButton>
        </body>
    </html>
  )
}
