import { motion } from 'framer-motion';
import './CTASection.css';

export function CTASection() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <motion.div
          className="cta-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/ctasection.png" alt="Happy day Dairy" className="cta-image" loading="lazy" />
        </motion.div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="heading-lg cta-title">
            당신의 하루를 동화처럼 🧚
          </h2>
          <p className="text-body cta-text">
            보는 것만으로도 행복해지는 사랑스러운 패브릭 소품들.<br />
            다이어리 커버부터 키친크로스까지,<br />
            당신의 손길이 닿는 곳에 달콤한 감성을 담았어요.
          </p>
          <p className="text-body cta-text">
            오로지 당신을 위해 시작된 브랜드,<br />
            멜팅치즈가 하루 종일 곁에 있을게요 💗
          </p>
        </motion.div>
      </div>
    </section>
  );
}
