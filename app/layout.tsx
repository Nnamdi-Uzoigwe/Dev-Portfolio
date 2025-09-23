import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import ConditionalNavbar from "./components/ConditionalNavbar";
import CursorRing from "./components/CursorRing";
import ScrollToBottom from "./components/ScrollToBottom";

const poppins = Poppins({
  subsets: ['latin'],       // choose the subsets you need
  weight: ['400', '600'],   // choose weights you need
  style: ['normal', 'italic'], // optional styles
  display: 'swap',          // recommended
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains'
})


export const metadata: Metadata = {
  title: "Nnamdi Uzoigwe | Developer Portfolio",
  description: "Meet Nnamdi Uzoigwe, a young Nigerian software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${jetbrainsMono.variable} bg-[#fff]`}>
      <body
        className={`${poppins.className}   antialiased bg-[#fff] text-gray-700`}
      >
        <ConditionalNavbar />
        <CursorRing />
        {children}
        <ScrollToBottom />
        <Footer />
      </body>
    </html>
  );
}
