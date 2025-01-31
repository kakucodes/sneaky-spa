import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import Head from "next/head";
import { dokdo, shantellSans } from "@/fonts";

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
