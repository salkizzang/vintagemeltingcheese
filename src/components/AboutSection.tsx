import { motion } from 'framer-motion';
import './AboutSection.css';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <motion.p
          className="about-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✨
        </motion.p>

        <div className="about-features">
          <motion.div
            className="feature-item feature-image-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img src="/aboutUs2.png" alt="Vintage your day" className="feature-image" loading="lazy" />
            <p className="feature-caption">Vintage & Daily</p>
          </motion.div>

          <motion.div
            className="feature-item feature-image-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="/aboutUs.jpg" alt="Love, Love, Love" className="feature-image" loading="lazy" />
            <p className="feature-caption">Lovely Mood</p>
          </motion.div>

          <motion.div
            className="feature-item feature-image-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src="/aboutUs3.png" alt="Present for you" className="feature-image" loading="lazy" />
            <p className="feature-caption">For you</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
