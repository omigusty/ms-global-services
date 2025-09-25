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
  title:
    "MS Global Services - Your Gateway to Global Business Success | UAE Business Consultancy",
  description:
    "Leading business consultancy in Dubai, UAE specializing in company formation, audit & tax compliance, investment banking solutions, and strategic business advisory services for SMEs and large enterprises.",
  keywords: [
    "business consultancy UAE",
    "company formation Dubai",
    "audit tax compliance",
    "investment banking solutions",
    "strategic business advisory",
    "UAE business setup",
    "VAT filing compliance",
    "corporate tax filing",
    "global audit services",
    "business incorporation UAE",
    "regulatory compliance",
    "financial planning Dubai",
  ],
  authors: [{ name: "MS Global Services" }],
  creator: "MS Global Services",
  publisher: "MS Global Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ms-global-services.vercel.app/",
    title: "MS Global Services - Your Gateway to Global Business Success",
    description:
      "Leading business consultancy in Dubai, UAE specializing in company formation, audit & tax compliance, investment banking solutions, and strategic business advisory services.",
    siteName: "MS Global Services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MS Global Services - Business Consultancy in Dubai, UAE",
        type: "image/png",
      },
    ],
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
