import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResumeInfoProvider from "@/contexts/ResumeInfoProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ResuMake",
  description: "A resume builder app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <ResumeInfoProvider>
        {children}
        </ResumeInfoProvider> 
      </body>
    </html>
  );
}
