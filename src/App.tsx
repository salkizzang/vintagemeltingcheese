import './index.css';
import { Header } from './components/Header';
import { MarqueeBanner } from './components/MarqueeBanner';
import { HeroBanner } from './components/HeroBanner';
import { AboutSection } from './components/AboutSection';
import { WavyMarquee } from './components/WavyMarquee';
import { MiddleSection } from './components/MiddleSection';
import { ProductsSection } from './components/ProductsSection';
import { CarouselSection } from './components/CarouselSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <MarqueeBanner />
      <HeroBanner />
      <AboutSection />
      <WavyMarquee
        text="We'll make your day special ! 💞 We love you !"
        className="accent"
      />
      <MiddleSection />
      <ProductsSection />
      <CarouselSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
