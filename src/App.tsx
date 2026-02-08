import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, storeInfo } from './data/products';
import './index.css';
import { WavyMarquee } from './components/WavyMarquee';

function App() {
  const marqueeText = "We'll make your day special ! · We love you !";
  const wavyText =  "We'll make your day special ! · We love you !";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span />
            <span />
            <span />
          </button>
          <a href="/" className="logo">
            <img src="/logo3.png" alt="멜팅치즈" className="logo-image" />
          </a>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
              <li><a href={storeInfo.smartstoreUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Store</a></li>
            </ul>
          </nav>
          <div className="header-spacer" />
        </div>
      </header>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Marquee */}
      <a
        href="https://www.instagram.com/melting_cheese_official/"
        target="_blank"
        rel="noopener noreferrer"
        className="marquee-container"
        style={{ marginTop: '80px' }}
      >
        <div className="marquee-track">
          <div className="marquee-content">
            {[...Array(6)].map((_, i) => (
              <span key={`a-${i}`} className="marquee-item">
                {marqueeText    }<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> @melting_cheese_official ·
              </span>
            ))}
          </div>
          <div className="marquee-content">
            {[...Array(6)].map((_, i) => (
              <span key={`b-${i}`} className="marquee-item">
                {marqueeText    }<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>@melting_cheese_official ·
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* Hero Banner Image */}
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


   

      {/* About Section */}
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
              <img src="/aboutUs2.png" alt="Vintage your day" className="feature-image" />
              <p className="feature-caption">Vintage & Daily</p>
            </motion.div>

            <motion.div
              className="feature-item feature-image-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img src="/aboutUs.jpg" alt="Love, Love, Love" className="feature-image" />
              <p className="feature-caption">Lovely Mood</p>
            </motion.div>

            <motion.div
              className="feature-item feature-image-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <img src="/aboutUs3.png" alt="Present for you" className="feature-image" />
              <p className="feature-caption">For you</p>
            </motion.div>
          </div>
        </div>
      </section>
         {/* Wavy Marquee */}
         <WavyMarquee
        text={wavyText}
        className="accent"
      />

      {/* Middle Image Section */}
      <section className="middle-section">
        <motion.img
          src="/middle.jpg"
          alt="We'll make your day special"
          className="middle-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="products-header">
          <motion.p
            className="products-emoji"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            💐
          </motion.p>
          <motion.h2
            className="heading-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Best Item
          </motion.h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => window.open(product.smartstoreUrl, '_blank')}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <span className="product-category">{product.category}</span>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price.toLocaleString()}원</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-inner">
          <motion.div
            className="cta-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/ctasection.png" alt="Happy day Dairy" className="cta-image" />
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/logo3.png" alt="멜팅치즈" className="footer-logo-image" />
        </div>
    
        <div className="footer-bottom">
        <p>COMPANY: 멜팅치즈(Melting Cheese) | OWNER: Moa Choi</p>
        <p>E-MAIL min9030504@naver.com</p>
        <a href="https://www.instagram.com/melting_cheese_official/" target="_blank" rel="noopener noreferrer" className="footer-instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @melting_cheese_official
        </a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            aria-label="맨 위로"
          >
            🎀
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
