import Script from "next/script";

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

      {/* Your actual page */}
      <Component {...pageProps} />
    </>
  );
}
