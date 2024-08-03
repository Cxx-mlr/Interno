import type { Metadata } from "next";
import { DM_Serif_Display, Jost, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmSerifDisplay",
  weight: ["400"]
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Interno",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} ${jost.variable} ${inter.variable} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
        <Copyright />
      </body> 
    </html>
  );
}
