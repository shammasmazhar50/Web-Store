import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '20px', display: 'inline-block' }}>
              <span style={{ color: 'var(--color-primary)' }}>DAR</span>
              <span style={{ color: 'var(--color-accent)', marginLeft: '8px', fontWeight: '600' }}>ELECTRONICS</span>
            </Link>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Pakistan's leading electronics and home appliances retailer. Offering authentic products since 1984.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/shop">Shop All</Link></li>
              <li><Link to="/shop?category=Air Conditioners">Air Conditioners</Link></li>
              <li><Link to="/shop?category=LED TVs">LED TVs</Link></li>
              <li><Link to="/shop?category=Refrigerators">Refrigerators</Link></li>
              <li><Link to="/shop?category=Washing Machines">Washing Machines</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Store Locations</Link></li>
              <li><Link to="#">Corporate Sales</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '16px' }}>
              Subscribe for the latest deals and exclusive offers.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed demo!'); }}>
              <input type="email" placeholder="Email address" className="newsletter-input" required />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dar Electronics (Demo Prototype). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
