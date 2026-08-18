import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import FeatureSection from '../components/FeatureSection';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import DarkVeil from '../reactbits/DarkVeil';

const Home = () => {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#product" className="skip-link">
        Skip to main content
      </a>

      {/* Global Background Layer */}
      <div className="fixed inset-0 -z-50 opacity-30 mix-blend-screen pointer-events-none">
        <DarkVeil noiseIntensity={0.05} scanlineIntensity={0.1} />
      </div>

      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <FeatureSection />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
