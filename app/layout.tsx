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
    url: "https://landing-page-example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between p-2`}
      >
        <div className="flex gap-2 w-full">
          <picture className="hidden sm:block md:w-1/3">
          <Logo size={150} classAdd="sticky"/>
          </picture>
          <div className="w-80 mx-auto sm:w-2/3">
          {children}
          </div>
        </div>
      </body>
      <Footer />
    </html>
  );
}
