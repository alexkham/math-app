// import { Inter } from 'next/font/google'
// import './globals.css'
// import GoHomeButton from './components/GoHomeButton'
// import GoBackButton from './components/GoBackButton'
// import ScrollUpButton from './components/scroll-up-button/ScrollUpButton'
// import MyNavbar from './components/nav-bar/MyNavbar';
// import { mainMenuStructure } from './components/nav-bar2/mainMenu'
// import GenericNavbar from './components/nav-bar2/GenericNavbar'
// import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Website for People Who Are Learning Mathematics',
//   description: 'Online Resource for Math Knowledge and Information Concerning Different Branches of Mathematics',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <meta name="robots" content="noindex,follow" />
//       </Head>
//       <body suppressHydrationWarning={true}>
//         {/* <GenericNavbar /> */}
//         {/* <MyNavbar></MyNavbar> */}
//         {/* <nav className='nav-bar'>
//           <GoHomeButton className={'fixed-button'}/>                     
//           <GoBackButton className={'fixed-button'}/>
//         </nav> */}
//         <div>
//           {children}
//         </div>
//         <ScrollUpButton></ScrollUpButton>
//       </body>
//     </html>
//   )
// }



import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import GoHomeButton from './components/GoHomeButton';
import GoBackButton from './components/GoBackButton';
import ScrollUpButton from './components/scroll-up-button/ScrollUpButton';
import MyNavbar from './components/nav-bar/MyNavbar';
import { mainMenuStructure } from './components/nav-bar2/mainMenu';
import GenericNavbar from './components/nav-bar2/GenericNavbar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Website for People Who Are Learning Mathematics',
  description:
    'Online Resource for Math Knowledge and Information Concerning Different Branches of Mathematics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WGZ7YFQGM6"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WGZ7YFQGM6');
          `}
        </Script>

        {/* Meta tags */}
        <meta name="robots" content="noindex,follow" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* Optional navbars */}
        {/* <GenericNavbar /> */}
        {/* <MyNavbar /> */}
        {/* <nav className='nav-bar'>
          <GoHomeButton className='fixed-button' />
          <GoBackButton className='fixed-button' />
        </nav> */}

        <div>{children}</div>
        <ScrollUpButton />
      </body>
    </html>
  );
}
