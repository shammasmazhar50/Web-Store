import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container section">
      {/* Hero */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Design meets performance.</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
          aura. was founded on a simple principle: high-performance home appliances shouldn't compromise on aesthetics. We build premium, intelligent gear for the modern home.
        </p>
      </div>

      {/* Image Grid */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '80px' }}>
        <div style={{ flex: 2, height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80" alt="Smart Home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80" alt="Kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '80px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Engineered to Last</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '24px' }}>
            We reject the cycle of planned obsolescence. Every aura. appliance is constructed from premium, durable materials like fingerprint-resistant stainless steel and tempered glass.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
            By focusing on modular components, smart diagnostics, and timeless minimalist design, we ensure that your appliances perform just as well on day 3000 as they did on day one.
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--color-white)', padding: '60px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Our Core Pillars</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}>⚡</span>
              <span><strong>Uncompromised Performance:</strong> Industry-leading cooling, heating, and washing technology.</span>
            </li>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}>⚡</span>
              <span><strong>Eco-Friendly Efficiency:</strong> Energy Star certified appliances that reduce your carbon footprint.</span>
            </li>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}>⚡</span>
              <span><strong>Smart Integration:</strong> Seamlessly connect with your existing smart home ecosystem.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Packaging Section */}
      <div style={{ textAlign: 'center', backgroundColor: 'var(--color-blush)', padding: '80px 40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>The Aura Experience</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
          From seamless white-glove delivery to smart setup, experience the intersection of bleeding-edge home technology and unparalleled customer support.
        </p>
        <Link to="/shop" className="btn btn-primary">Upgrade Your Home</Link>
      </div>
    </div>
  );
};

export default About;
