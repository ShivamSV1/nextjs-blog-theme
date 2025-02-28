import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-ZRJM59G927'); // Replace with your Google Analytics Measurement ID
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZRJM59G927`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRJM59G927', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MR6BLPNJ');
          `,
        }}
      />

      {/* Noscript fallback for GTM */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
