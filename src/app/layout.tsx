import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE SCU SB",
  description:
    "A legacy of over 10 years, IEEE Suez Canal University Student Branch shapes future engineers through hands-on learning and professional development.",
  icons: {
    icon: "/favicon.ico",
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
        className={`${montserrat.className} antialiased bg-background text-foreground flex flex-col min-h-svh max-w-[2000px] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
