import { motion } from 'framer-motion';
import './MiddleSection.css';

export function MiddleSection() {
  return (
    <section className="middle-section">
      <motion.img
        src="/middle.jpg"
        alt="We'll make your day special"
        className="middle-image"
        loading="lazy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
