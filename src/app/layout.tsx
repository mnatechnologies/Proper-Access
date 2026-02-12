import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://properaccess.au"),
  title: "Proper Access NDIS Support Coordination | Expert Support Services Australia Wide",
  description:
    "Professional NDIS Support Coordination services helping participants across Australia navigate their NDIS journey with confidence and dignity.",
  openGraph: {
    title: "Proper Access NDIS Support Coordination | Expert Support Services Australia Wide",
    description:
      "Professional NDIS Support Coordination services helping participants across Australia navigate their NDIS journey with confidence and dignity.",
    url: "https://properaccess.au",
    siteName: "Proper Access",
    locale: "en_AU",
    type: "website",
    images: ["/Vista Logos (1)/colored-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proper Access NDIS Support Coordination | Expert Support Services Australia Wide",
    description:
      "Professional NDIS Support Coordination services helping participants across Australia navigate their NDIS journey with confidence and dignity.",
    images: ["/Vista Logos (1)/colored-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NWTD4XBP')
      `}
      </Script>
    </head>
      <body
        className={`${montserrat.variable} ${raleway.variable} font-[family-name:var(--font-raleway)] antialiased`}
      >
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NWTD4XBP"
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
        {children}
      </body>
    </html>
  );
}
