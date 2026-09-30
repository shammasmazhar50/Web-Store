import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, wishlistItems } = useCart();

  return (
    <>
      <div className="announcement-bar">
        Free Delivery Nationwide on Orders Above Rs. 100,000! Call: 0300-1234567
      </div>
      <header className="header">
        <div className="container nav-container">
          <Link to="/" className="brand-logo">
            <span style={{ color: 'var(--color-primary)' }}>DAR</span>
            <span style={{ color: 'var(--color-accent)', marginLeft: '8px', fontWeight: '600' }}>ELECTRONICS</span>
          </Link>
          
          <div style={{ flexGrow: 1, margin: '0 40px', display: 'flex' }}>
            <input 
              type="text" 
              placeholder="Search products..." 
              style={{ width: '100%', padding: '10px 16px', borderRadius: 'var(--radius-full) 0 0 var(--radius-full)', border: '1px solid var(--color-border)', borderRight: 'none', outline: 'none' }} 
            />
            <button className="btn btn-primary" style={{ borderRadius: '0 var(--radius-full) var(--radius-full) 0', padding: '10px 24px' }}>Search</button>
          </div>
          
          <div className="nav-icons">
            <Link to="/wishlist" className="btn-icon" aria-label="Wishlist">
              <Heart size={20} fill={wishlistItems.length > 0 ? "var(--color-accent)" : "none"} stroke={wishlistItems.length > 0 ? "var(--color-accent)" : "currentColor"} />
            </Link>
            <Link to="/cart" className="btn-icon" aria-label="Cart" style={{ position: 'relative' }}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                  fontSize: '0.65rem',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Blue Category Bar */}
        <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '12px 0' }}>
          <div className="container" style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>
            <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>☰ Shop By Category</Link>
            <Link to="/shop?category=Air Conditioners">Air Conditioners</Link>
            <Link to="/shop?category=LED TVs">LED TVs</Link>
            <Link to="/shop?category=Refrigerators">Refrigerators</Link>
            <Link to="/shop?category=Washing Machines">Washing Machines</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
