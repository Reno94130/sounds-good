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
    default: "Sounds Good | Jazz live sur mesure pour événements à Paris",
    template: "%s | Sounds Good",
  },
  description:
    "Sounds Good imagine des expériences de jazz live sur mesure pour entreprises, hôtels, lieux culturels et événements privés à Paris et en France.",
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
    title: "Sounds Good | Jazz live sur mesure pour événements à Paris",
    description:
      "Des expériences de jazz live sur mesure pour entreprises, hôtels, lieux culturels et événements privés.",
    images: [
      {
        url: "/hero-bg-clean.png",
        width: 1672,
        height: 941,
        alt: "Sounds Good, jazz live sur mesure pour vos événements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sounds Good | Jazz live sur mesure pour événements à Paris",
    description:
      "Des expériences de jazz live sur mesure pour entreprises, hôtels, lieux culturels et événements privés.",
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
