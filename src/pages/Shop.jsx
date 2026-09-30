import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Air Conditioners', 'LED TVs', 'Refrigerators', 'Washing Machines', 'Air Fryers', 'Water Dispensers'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Shop Appliances</h1>
        <p style={{ color: 'var(--color-text-light)' }}>Find the best deals on authentic home appliances.</p>
      </div>

      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', flexShrink: 0 }}>
          <div style={{ position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>Category</h3>
            <ul style={{ listStyle: 'none' }}>
              {categories.map(cat => (
                <li key={cat} style={{ marginBottom: '12px' }}>
                  <button 
                    onClick={() => setFilter(cat)}
                    style={{ 
                      textAlign: 'left', 
                      width: '100%', 
                      color: filter === cat ? 'var(--color-text)' : 'var(--color-text-light)',
                      fontWeight: filter === cat ? '600' : '400',
                      textDecoration: filter === cat ? 'underline' : 'none',
                      textUnderlineOffset: '4px',
                      textDecorationColor: 'var(--color-gold)'
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 style={{ fontSize: '1.2rem', margin: '40px 0 24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>Finish</h3>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)' }}>
              <li style={{ marginBottom: '12px' }}><label><input type="checkbox" style={{ marginRight: '8px' }}/> Stainless Steel</label></li>
              <li style={{ marginBottom: '12px' }}><label><input type="checkbox" style={{ marginRight: '8px' }}/> Matte Black</label></li>
              <li style={{ marginBottom: '12px' }}><label><input type="checkbox" style={{ marginRight: '8px' }}/> Premium White</label></li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Showing {filteredProducts.length} appliances</span>
            <select style={{ padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', backgroundColor: 'transparent', color: 'var(--color-text)', fontFamily: 'inherit' }}>
              <option value="featured" style={{ color: '#000' }}>Sort by: Featured</option>
              <option value="low-high" style={{ color: '#000' }}>Price: Low to High</option>
              <option value="high-low" style={{ color: '#000' }}>Price: High to Low</option>
              <option value="newest" style={{ color: '#000' }}>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="grid-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--color-text-light)' }}>
              No appliances found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
