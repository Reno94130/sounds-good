import type { Metadata } from "next";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Film from "../components/Film";
import Gallery from "../components/Gallery";
import References from "../components/References";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Story from "../components/Story";
import TrustBar from "../components/TrustBar";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.soundsgoodmusic.fr/#organization",
      name: "Sounds Good",
      url: "https://www.soundsgoodmusic.fr/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.soundsgoodmusic.fr/logo-sounds-good-v2.png",
        width: 1080,
        height: 770,
      },
      image: "https://www.soundsgoodmusic.fr/hero-bg-clean.png",
      description:
        "Expériences musicales personnalisées, nourries de vos goûts, de votre histoire et du caractère de votre lieu : célébrations, rencontres professionnelles et soirées privées.",
      email: "contact@soundsgoodmusic.fr",
      telephone: "+33650965991",
      founder: {
        "@type": "Person",
        name: "Renaud Lehiany",
        jobTitle: "Pianiste jazz et directeur artistique",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Paris",
        },
        {
          "@type": "Country",
          name: "France",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.soundsgoodmusic.fr/#service",
      name: "Expériences musicales sur mesure",
      serviceType: "Direction artistique et jazz live sur mesure",
      description:
        "Une rencontre musicale à votre image pour vos célébrations, rencontres professionnelles et soirées privées, à Paris et en France.",
      provider: {
        "@id": "https://www.soundsgoodmusic.fr/#organization",
      },
      areaServed: ["Paris", "France"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <TrustBar />
      <Story />
      <Experience />
      <Services />
      <Film />
      <Gallery />
      <References />
      <Contact />
      <Footer />
    </>
  );
}
