import { useState, useEffect } from 'react';
import './CarouselSection.css';

const carouselImages = ['/c1.png', '/c2.png', '/c3.png', '/c4.png'];

export function CarouselSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <img
          src={carouselImages[carouselIndex]}
          alt={`illustration ${carouselIndex + 1}`}
          className="carousel-image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
