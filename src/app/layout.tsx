import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nidhi Thakkar — Builder & Engineer",
  description:
    "Personal portfolio of Nidhi Thakkar — builder and engineer shipping reliable digital products.",
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  openGraph: {
    title: "Nidhi Thakkar — Builder & Engineer",
    description:
      "Personal portfolio of Nidhi Thakkar — builder and engineer shipping reliable digital products.",
    url: "https://nidhithakkar.com",
    siteName: "Nidhi Thakkar",
    images: [{ url: "/nidhi.png", width: 800, height: 1000 }],
    type: "website",
  },
  metadataBase: new URL("https://nidhithakkar.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
