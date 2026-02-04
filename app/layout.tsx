import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AnuvanshChaudhary.in",
  description:
    "Second-year CS student at VIT Vellore. Building AI tools, assistive hardware, and interactive web experiences. Open for internships.",
  keywords: [
    "Anuvansh Chaudhary",
    "Full-stack developer",
    "VIT Vellore",
    "AI PDF",
    "Assistive technology",
    "Web developer",
  ],
  authors: [{ name: "Anuvansh Chaudhary" }],
  openGraph: {
    title: "AnuvanshChaudhary.in",
    description:
      "Second-year CS student at VIT Vellore. Building AI tools, assistive hardware, and interactive web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
