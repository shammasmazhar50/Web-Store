import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 4);

  const allCategories = [
    { name: 'Air Conditioners', icon: '❄️' },
    { name: 'LED TVs', icon: '📺' },
    { name: 'Built-in Ovens', icon: '♨️' },
    { name: 'Refrigerators', icon: '🧊' },
    { name: 'Washing Machines', icon: '🧺' },
    { name: 'Water Dispensers', icon: '💧' },
    { name: 'Air Coolers', icon: '🌬️' },
    { name: 'Air Fryers', icon: '🍟' },
    { name: 'Deep Freezers', icon: '🥶' },
    { name: 'Kitchen Hoods', icon: '💨' },
    { name: 'Kitchen Hobs', icon: '🔥' },
    { name: 'Kitchen Appliances', icon: '🍳' },
  ];

  return (
    <div>
      {/* Hero Banner (Promotional) */}
      <section style={{ backgroundColor: '#E31837', color: 'white', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          <div style={{ flex: 1, paddingRight: '40px' }}>
            <div style={{ backgroundColor: 'white', color: '#183C7E', display: 'inline-block', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', marginBottom: '16px', fontSize: '1.2rem' }}>ORIENT</div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '20px', letterSpacing: '-0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              T3 INVERTER <br/> AC
            </h1>
            <div style={{ display: 'inline-block', backgroundColor: '#183C7E', color: 'white', fontSize: '3.5rem', fontWeight: 'bold', padding: '10px 30px', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', border: '2px solid white' }}>
              124,900 <span style={{ fontSize: '1.5rem' }}>PKR</span>
            </div>
            <br/><br/>
            <Link to="/shop" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>Shop Now</Link>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src="/assets/ac.jpeg" alt="AC Unit" style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', margin: '0 auto' }} />
          </div>
        </div>
      </section>

      {/* Exclusively Available At */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <span style={{ fontWeight: '800' }}>EXCLUSIVELY</span> 
            <span style={{ fontWeight: '400' }}>Available at</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: '800', fontSize: '2.5rem' }}>
              DE <span style={{ color: 'var(--color-accent)' }}>DAR</span> ELECTRONICS
            </span>
          </h2>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="section container">
        <h2 className="text-center" style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '40px', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '8px', left: '50%', position: 'relative', transform: 'translateX(-50%)' }}>
          ALL CATEGORIES
        </h2>
        
        <div className="grid-6">
          {allCategories.map((cat, idx) => (
            <Link to={`/shop?category=${cat.name}`} key={idx} className="category-item">
              <div style={{ fontSize: '3rem', marginBottom: '12px', backgroundColor: 'var(--color-surface)', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                {cat.icon}
              </div>
              <span className="category-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '60px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--color-primary)' }}>Top Deals</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Best selling appliances for your home.</p>
          </div>
          <Link to="/shop" className="btn btn-primary" style={{ display: 'none' /* Will show on mobile */ }}>View All</Link>
        </div>
        <div className="grid-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/shop" className="btn btn-primary">View All Products</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
