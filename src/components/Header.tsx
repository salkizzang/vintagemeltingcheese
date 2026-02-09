import { useState } from 'react';
import { storeInfo } from '../data/products';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
}
