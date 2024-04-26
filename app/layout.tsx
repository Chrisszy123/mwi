import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media World International",
  description: "Take your brand to the next level with our global network of publications. Benefit from customizable geographic targeting and premium site postings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
                {/* Replace 'favicon.ico' with the path to your custom favicon if necessary */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
