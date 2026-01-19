import type { Metadata } from "next";
import {Amita } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrolltoTop from "@/components/ScrolltoTop";

const amitasans = Amita({
  weight:'400',
  variable: "--font-amita-sans",
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
    <html lang="en">
      <body
        className={`${amitasans.variable}   antialiased  `}
      >
        <ScrolltoTop/>
        <Header/>
        <main>
          {children}
          </main>
        
        <Footer/>
      </body>
    </html>
  );
}
