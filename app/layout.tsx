import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soundsgoodmusic.fr"),
  title: {
    default: "Sounds Good | Expériences musicales sur mesure à Paris",
    template: "%s | Sounds Good",
  },
  description:
    "Une expérience musicale à votre image : jazz live, célébrations, rencontres professionnelles et soirées privées à Paris et en France. Imaginons votre projet.",
  applicationName: "Sounds Good",
  authors: [{ name: "Sounds Good", url: "https://www.soundsgoodmusic.fr" }],
  creator: "Renaud Lehiany",
  publisher: "Sounds Good",
  category: "music",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Sounds Good",
    title: "Sounds Good | Expériences musicales sur mesure à Paris",
    description:
      "Une rencontre musicale, à votre image. Célébrations, rencontres professionnelles et soirées privées : imaginons ensemble votre expérience Sounds Good.",
    images: [
      {
        url: "/hero-bg-clean.png",
        width: 1672,
        height: 941,
        alt: "Sounds Good, une rencontre musicale à votre image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sounds Good | Expériences musicales sur mesure à Paris",
    description:
      "Une rencontre musicale, à votre image. Célébrations, rencontres professionnelles et soirées privées : imaginons ensemble votre expérience Sounds Good.",
    images: ["/hero-bg-clean.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
