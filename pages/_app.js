// import Script from "next/script";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       {/* Google Analytics 4 */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-WGZ7YFQGM6"
//         strategy="afterInteractive"
//       />
//       <Script id="ga4" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-WGZ7YFQGM6');
//         `}
//       </Script>

//       {/* Your actual page */}
//       <Component {...pageProps} />
//     </>
//   );
// }


import Script from "next/script";

import ScrollUpButton from "@/app/components/scroll-up-button/ScrollUpButton";
import ScrollToBottom from "@/app/components/scroll-up-button/ScrollToBottom";
import ScrollToTop from "@/app/components/scroll-up-button/ScrollToTop";
import Footer from "@/app/components/page-components/footer/Footer";
import MyNavbar3 from "@/app/components/nav-bar3/MyNavbar3";

export default function App({ Component, pageProps }) {
  return (
    <>
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

      {/* Navigation */}
      <MyNavbar3 themeName="dark"/>
      {/* <MyNavbar3 themeName="dark" /> */}
        {/* <ScrollToTop right='60px' /> */}
  <ScrollToBottom center={true}
  bottom={null}/>

      {/* Your actual page */}
      <Component {...pageProps} />

      <ScrollUpButton/>
      <Footer/>
    </>
  );
}