import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ventures from '@/components/Ventures';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Ventures />
      {/*<Timeline />*/}
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
