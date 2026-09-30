import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Heart, ChevronRight, Check } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, wishlistItems } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) return <div className="container section text-center">Product not found.</div>;

  const isWishlisted = wishlistItems.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, customization);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container section">
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '32px' }}>
        <Link to="/">Home</Link> <ChevronRight size={14} style={{ margin: '0 8px' }} />
        <Link to="/shop">Shop</Link> <ChevronRight size={14} style={{ margin: '0 8px' }} />
        <span style={{ color: 'var(--color-text)' }}>{product.name}</span>
      </div>

      <div className="flex-mobile-col" style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
        {/* Images */}
        <div style={{ flex: '1 1 50%' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-white)', aspectRatio: '4/5', border: '1px solid var(--color-border)' }}>
            <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Info */}
        <div style={{ flex: '1 1 50%', position: 'sticky', top: '120px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--color-accent)' }}>Rs. {product.price.toLocaleString()}</p>
          
          <p style={{ color: 'var(--color-text-light)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            {product.description}
          </p>

          <div style={{ padding: '24px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', marginBottom: '32px' }}>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <strong style={{ width: '120px' }}>Material:</strong>
              <span style={{ color: 'var(--color-text-light)' }}>{product.material}</span>
            </div>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <strong style={{ width: '120px' }}>Availability:</strong>
              <span style={{ color: 'var(--color-text-light)' }}>{product.availability}</span>
            </div>
            <div style={{ display: 'flex' }}>
              <strong style={{ width: '120px' }}>Care Note:</strong>
              <span style={{ color: 'var(--color-text-light)' }}>{product.careNote}</span>
            </div>
          </div>

          {/* Customization (Mock) */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Color / Finish</label>
            <select 
              value={customization} 
              onChange={(e) => setCustomization(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', color: 'var(--color-text)', fontFamily: 'inherit' }}
            >
              <option value="">Select finish...</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Black">Black</option>
            </select>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '12px 16px', color: 'var(--color-text)' }}>-</button>
              <input type="text" readOnly value={quantity} style={{ width: '40px', textAlign: 'center', border: 'none', background: 'transparent', color: 'var(--color-text)' }} />
              <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '12px 16px', color: 'var(--color-text)' }}>+</button>
            </div>
            <button 
              className={`btn ${added ? 'btn-outline' : 'btn-primary'}`} 
              style={{ flexGrow: 1 }}
              onClick={handleAddToCart}
            >
              {added ? <><Check size={18} style={{ marginRight: '8px' }} /> Added to Bag</> : 'Add to Bag'}
            </button>
            <button 
              className="btn-icon" 
              onClick={() => toggleWishlist(product.id)}
              style={{ border: '1px solid var(--color-border)' }}
            >
              <Heart size={20} fill={isWishlisted ? "var(--color-rose)" : "none"} stroke={isWishlisted ? "var(--color-rose)" : "currentColor"} />
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--color-blush)', padding: '24px', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', border: '1px solid var(--color-border)' }}>
            <p style={{ marginBottom: '8px' }}><strong>Aura Pro Warranty</strong></p>
            <p style={{ color: 'var(--color-text-light)' }}>
              All aura. products come with a comprehensive 2-year warranty covering manufacturing defects. We stand behind our engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
