import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";  
import Services from "../components/Services";
import Film from "../components/Film";
import Gallery from "../components/Gallery";
import References from "../components/References";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Film />
      <Gallery />
      <References />
      <Contact />
    </>
  );
}