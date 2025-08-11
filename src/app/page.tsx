import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Results from '../components/Results';
import Process from '../components/Process';
import About from '../components/About';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Results />
      <Process />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
