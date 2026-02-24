import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "./sections/Footer";
import logo from "@/public/logo.webp"
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
          <picture className="w-1/3">
          <Image src={logo} alt="Logo" width={100} height={100} className="rounded-full m-auto" />
          </picture>
          <div>
          {children}
          </div>
        </div>
      </body>
      <Footer />
    </html>
  );
}
