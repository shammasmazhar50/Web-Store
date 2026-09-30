import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <CheckCircle size={64} color="var(--color-gold)" style={{ marginBottom: '24px' }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Thank You.</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '32px' }}>
          Your order #AURA-{Math.floor(1000 + Math.random() * 9000)} has been placed.<br/>
          We'll send you an email when it ships.
        </p>
        <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  // Redirect to cart if empty
  if (cartItems.length === 0) {
    return (
      <div className="container section text-center">
        <h2>Your bag is empty.</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '24px' }}>Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Checkout</h1>
      
      <div style={{ display: 'flex', gap: '60px', flexDirection: 'row-reverse' }}>
        {/* Order Summary */}
        <div style={{ width: '400px', flexShrink: 0 }}>
          <div style={{ backgroundColor: 'var(--color-blush)', padding: '32px', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>Order Summary</h3>
            
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '24px' }}>
              {cartItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <img src={item.images[0]} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Qty: {item.quantity}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Subtotal</span>
                <span>Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '16px' }}>
                <span>Total</span>
                <span>Rs. {cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Form */}
        <div style={{ flexGrow: 1 }}>
          <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--color-white)', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>Contact Information</h3>
              <input type="email" placeholder="Email Address" required style={inputStyle} defaultValue="demo@example.com" />
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>Shipping Address</h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <input type="text" placeholder="First Name" required style={{...inputStyle, flex: 1}} defaultValue="Jane" />
                <input type="text" placeholder="Last Name" required style={{...inputStyle, flex: 1}} defaultValue="Doe" />
              </div>
              <input type="text" placeholder="Address" required style={inputStyle} defaultValue="123 Dreamy Ave" />
              <div style={{ display: 'flex', gap: '16px' }}>
                <input type="text" placeholder="City" required style={{...inputStyle, flex: 1}} defaultValue="San Francisco" />
                <input type="text" placeholder="Postal Code" required style={{...inputStyle, flex: 1}} defaultValue="94105" />
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>Payment (Demo)</h3>
              <div style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fafafa', color: 'var(--color-text-light)', fontSize: '0.9rem', display: 'flex', justifyContent: 'center' }}>
                💳 Payment processing is simulated for this presentation.
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '16px' }}>
              Place Order (Demo)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  marginBottom: '16px',
  fontFamily: 'inherit',
  fontSize: '1rem',
  backgroundColor: 'var(--color-white)'
};

export default Checkout;
