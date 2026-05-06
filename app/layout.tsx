import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gio | Software & Data Specialist",
  description:
    "Personal portfolio of a software developer and data specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* 
       Adding 'bg-black' to both html and body ensures 
       there are no white gaps on any screen size.
    */
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-blue-500/30">
        {/* 
           The Toaster is outside the main flow, 
           so it won't affect your page layout spacing. 
        */}
        <Toaster
          position="top-center"
          toastOptions={{
            // Optional: makes the toasts look better on a black background
            style: {
              background: "#ffffff",
              color: "#000000",
              border: "1px solid #27272a",
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
