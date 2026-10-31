import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Silkscreen } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-logo"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpillCave",
  description: "Utforsk spill, oppdag nye favoritter og finn spillinformasjon med RAWG API",
};


/**
 * Nettsidens hovedlayout med header, innhold og footer
 * 
 * @param children Innholdet fra siden
 * @returns JSX for nettsidens hovedlayout
 */

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no" className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${silkscreen.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
