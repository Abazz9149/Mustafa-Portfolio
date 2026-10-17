import type { Metadata, Viewport } from "next";
import { Chakra_Petch, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mustafa-abbas-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mustafa Abbas | Game & XR Developer",
  description:
    "Mustafa Abbas, Game & XR Developer in New Delhi. VR training simulators and multiplayer games in Unity and C#.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mustafa Abbas | Game & XR Developer",
    description: "VR training simulators and multiplayer games in Unity and C#. Open to Unity and XR roles.",
    images: [{ url: "/og-image.png", width: 1200, height: 627, alt: "Mustafa Abbas, Game & XR Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Abbas | Game & XR Developer",
    description: "VR training simulators and multiplayer games in Unity and C#.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f15" },
    { media: "(prefers-color-scheme: light)", color: "#eef0f3" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
