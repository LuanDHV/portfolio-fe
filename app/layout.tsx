import type { Metadata } from "next";
import { SUSE_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import SpaceBackground from "@/src/components/ui/SpaceBackground";
import CursorEffect from "@/src/components/ui/CursorEffect";
import BackgroundMusic from "@/src/components/ui/BackgroundMusic";

const suseMono = SUSE_Mono({
  variable: "--font-suse-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doan Huynh Vu Luan | Full Stack Developer",
  description:
    "A personal portfolio showcasing projects, experience, and skills.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${suseMono.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <SpaceBackground />
        <CursorEffect />
        <div className="relative z-10 flex-1">
          <Providers>{children}</Providers>
        </div>
        <BackgroundMusic />
      </body>
    </html>
  );
}
