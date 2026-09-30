import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { wishlistItems, toggleWishlist } = useCart();
  const isWishlisted = wishlistItems.includes(product.id);

  return (
    <div className="product-card animate-fade-in">
      <button 
        className="wishlist-btn btn-icon" 
        onClick={() => toggleWishlist(product.id)}
        aria-label="Toggle wishlist"
      >
        <Heart size={18} fill={isWishlisted ? "var(--color-rose)" : "none"} stroke={isWishlisted ? "var(--color-rose)" : "currentColor"} />
      </button>
      <Link to={`/product/${product.id}`} className="product-image-container">
        <img src={product.images[0]} alt={product.name} className="product-image" loading="lazy" />
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-title">{product.name}</Link>
        <span className="product-price">Rs. {product.price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProductCard;
