import type { Metadata, Viewport } from "next";
import "./globals.css";
import SkipToContent from "@/components/layout/SkipToContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A73E8",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Kids Den School, Aizawl",
    default: "Kids Den School | Nurturing Minds, Inspiring Futures — Aizawl, Mizoram",
  },
  description:
    "Kids Den School in Aizawl, Mizoram (Est. 2011). CISCE curriculum, 100% smartboard classrooms, holistic arts and sports, and student-centric pedagogy.",
  keywords: [
    "Kids Den School",
    "Kids Den School Aizawl",
    "School in Mizoram",
    "KIDSET",
    "CISCE school Aizawl",
    "Admissions Kids Den School",
  ],
  authors: [{ name: "Kids Den School" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#202124] antialiased selection:bg-[#D2E3FC] selection:text-[#1A73E8] overflow-x-hidden">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
