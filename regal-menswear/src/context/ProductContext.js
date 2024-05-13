import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://127.0.0.1:8000/products')
      .then(response => {
        //console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
