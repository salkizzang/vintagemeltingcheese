import { motion } from 'framer-motion';
import './HeroBanner.css';

export function HeroBanner() {
  return (
    <section className="hero-banner-section">
      <motion.img
        src="/HeroSection.jpg"
        alt="I will always be by your side - Melting Cheese"
        className="hero-banner-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
