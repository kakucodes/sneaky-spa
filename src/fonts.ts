import { Dokdo, Shantell_Sans } from "next/font/google";

export const dokdo = Dokdo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  display: "swap",
  // Since Shantell Sans has variable weights, we can use them
  variable: "--font-shantell-sans",
});
