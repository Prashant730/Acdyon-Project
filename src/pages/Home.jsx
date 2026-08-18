import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import FeatureSection from '../components/FeatureSection';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#product" className="skip-link">
        Skip to main content
      </a>

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
