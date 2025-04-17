"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/moduls/footer";
import Header from "@/components/moduls/header";
import React, { useState } from "react";
import { UserData, UserContext } from '@/AppContext/AppContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-primary-from to-primary-to font-sans h-screen`}
      >
        <header className="py-4 ">
          <Header />
        </header>
        <main className="lg:h-[85%]">{children}</main>
        <footer className="py-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
