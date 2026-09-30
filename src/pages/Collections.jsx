import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      title: 'The Smart Kitchen',
      description: 'Everything you need to master meal prep and keep groceries fresh. Featuring our intelligent refrigerators and precision ovens.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      category: 'Kitchen'
    },
    {
      title: 'Home Entertainment',
      description: 'Experience cinema-quality visuals in your living room. Our next-generation OLED displays redefine home viewing.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      category: 'Home Entertainment'
    },
    {
      title: 'Laundry & Care',
      description: 'High-efficiency washers and home care appliances designed to be tough on dirt while being gentle on the environment.',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
      category: 'Laundry'
    }
  ];

  return (
    <div className="container section">
      <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '16px' }}>Curated Spaces</h1>
      <p className="text-center" style={{ color: 'var(--color-text-light)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
        Explore our high-performance appliances organized by how you live and relax.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {collections.map((col, index) => (
          <div key={index} style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}>
            <div style={{ flex: '1 1 50%', height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img src={col.image} alt={col.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1 1 50%', padding: '0 40px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{col.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '32px', lineHeight: 1.8 }}>
                {col.description}
              </p>
              <Link to={`/shop?category=${col.category}`} className="btn btn-outline">Shop the Space</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
