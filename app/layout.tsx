import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Space_Mono,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gio | Software & Web Designer",
  description: "Personal portfolio of a software developer and web designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <body
        className={`${inter.variable} ${spaceMono.variable} ${ebGaramond.variable} antialiased`}
      ></body>

      <body className="min-h-full flex flex-col bg-black text-white selection:bg-blue-500/30">
        <Toaster
          position="top-center"
          toastOptions={{
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
