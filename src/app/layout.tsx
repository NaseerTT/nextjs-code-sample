import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Time Site Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Time Site<sub>Technologies</sub></title>
      </Head>
      <body >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
