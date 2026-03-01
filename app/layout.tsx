import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./sections/Footer";
import Logo from "./Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page ",
  description: "Example of a landing page",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Landing Page Example",
    description: "Example of a landing page",
    url: "https://landing-page-mauve-nine-15.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between `}
      >
      <div className="flex flex-row relative">
        <Logo addClass="sticky w-[30vh]  h-[30vh] hidden sm:block aspect-square top-4.5"/>

          <div className="w-full mx-auto sm:w-2/3">
          {children}
          </div>
      </div>
      </body>
      <Footer />
    </html>
  );
}
