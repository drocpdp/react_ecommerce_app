import React, { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // Load initial shopping cart data from localStorage
  const initialData = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const [currShoppingCartItems, setShoppingCartData] = useState(initialData);

  // Update localStorage whenever shopping cart data changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(currShoppingCartItems));
  }, [currShoppingCartItems]);

  const addToCart = (itemObj) => {
    setShoppingCartData([...currShoppingCartItems, itemObj]);
  };

  const removeFromCart = (itemName) => {
    setShoppingCartData(currShoppingCartItems.filter(item => item.name !== itemName));
};

  return (
    <ShoppingCartContext.Provider value={{ currShoppingCartItems, removeFromCart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
