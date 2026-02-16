import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aura - Stratilla AI Solutions",
  description: "Yapay Zeka Destekli Güzellik Merkezi Yönetim Platformu",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased bg-background text-foreground")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
