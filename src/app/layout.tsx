import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import Head from "next/head";
import { dokdo, shantellSans } from "@/fonts";
// import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: {
    default: "Sneaky Productions",
    template: "%s | Sneaky Productions",
  },
  description: "Home of all things Sneaky. 🐽",
  openGraph: {
    type: "website",
    url: "https://sneaky.productions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneaky Productions",
    description: "Home of all things Sneaky. 🐽",
    site: "@SneakyProds",
    creator: "@SneakyProds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        ></link>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
      </Head>
      <body
        className={`${dokdo.className} ${shantellSans.className} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
