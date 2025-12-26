import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leadership Communication Mastery | 5-Day Intensive for Startup Founders",
  description: "High-impact program combining eloquent speech with rightly dividing the words of truth. Daily 15-20 min lessons + targeted practice for rapid gains in pitching, leading, and closing deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
