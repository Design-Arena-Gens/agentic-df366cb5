import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avery Chen • Frontend Engineer",
  description:
    "Portfolio of a 3-year experienced frontend developer specializing in React and Angular, crafting scalable design systems and performant web products.",
  metadataBase: new URL("https://agentic-df366cb5.vercel.app"),
  openGraph: {
    title: "Avery Chen • Frontend Engineer",
    description:
      "Three years of shipping fast, accessible web products with React and Angular.",
    url: "https://agentic-df366cb5.vercel.app",
    siteName: "Avery Chen Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Chen • Frontend Engineer",
    description:
      "Three years of shipping fast, accessible web products with React and Angular.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
