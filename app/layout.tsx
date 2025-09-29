import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

// Heading fonts (dramatic, theatrical)
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Lady Gaga Mayhem Ball Theme",
  description: "Website themed around Lady Gaga's Mayhem Ball tour",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel_decorative.variable} `}>
      <body className={`${cinzel.variable} ${playfair.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
