import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product, quantity = 1, customization = null) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.customization === customization);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.customization === customization
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, customization }];
    });
  };

  const removeFromCart = (productId, customization = null) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.customization === customization)));
  };

  const updateQuantity = (productId, quantity, customization = null) => {
    setCartItems(prev => prev.map(item => 
      item.id === productId && item.customization === customization
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    ));
  };

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
