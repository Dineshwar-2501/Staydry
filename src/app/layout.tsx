import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrolltoTop from "@/components/ScrolltoTop";
import { sohne } from './font'

const Int = Inter({
  weight:['400','500','600'],
  variable: "--font-Inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Stay Dry",
  description: "its an ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Int.variable}>
      <body className={` antialiased  `} >
        <ScrolltoTop />
        <Header />
        <main >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
