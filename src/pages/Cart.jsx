import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Your Cart is Empty</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '32px' }}>Looks like you haven't added any appliances yet.</p>
        <Link to="/shop" className="btn btn-primary">Discover Appliances</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Your Cart</h1>
      
      <div style={{ display: 'flex', gap: '60px' }}>
        <div style={{ flexGrow: 1 }}>
          <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '16px', marginBottom: '24px', display: 'flex' }}>
            <div style={{ flex: '0 0 60%' }}>Product</div>
            <div style={{ flex: '0 0 20%', textAlign: 'center' }}>Quantity</div>
            <div style={{ flex: '0 0 20%', textAlign: 'right' }}>Total</div>
          </div>
          
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} style={{ display: 'flex', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ flex: '0 0 60%', display: 'flex', gap: '24px', alignItems: 'center' }}>
                <img src={item.images[0]} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</h3>
                  {item.customization && <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Size: {item.customization}</p>}
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '8px' }}>Rs. {item.price.toLocaleString()}</p>
                </div>
              </div>
              <div style={{ flex: '0 0 20%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.customization)} style={{ padding: '8px 12px' }}>-</button>
                  <input type="text" readOnly value={item.quantity} style={{ width: '30px', textAlign: 'center', border: 'none', background: 'transparent' }} />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.customization)} style={{ padding: '8px 12px' }}>+</button>
                </div>
              </div>
              <div style={{ flex: '0 0 20%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontWeight: '500' }}>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                <button onClick={() => removeFromCart(item.id, item.customization)} style={{ color: 'var(--color-text-light)' }}><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ width: '350px', flexShrink: 0 }}>
          <div style={{ backgroundColor: 'var(--color-white)', padding: '32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
              <span>Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--color-text-light)' }}>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontWeight: '500', fontSize: '1.2rem' }}>
              <span>Total</span>
              <span>Rs. {cartTotal.toLocaleString()}</span>
            </div>
            
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                Include professional installation and haul-away service (+$99)
              </label>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
