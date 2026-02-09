import { motion } from 'framer-motion';
import { products } from '../data/products';
import './ProductsSection.css';

export function ProductsSection() {
  return (
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
  );
}
