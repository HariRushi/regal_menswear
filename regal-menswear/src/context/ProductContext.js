import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get('http://127.0.0.1:8000/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    };

    const fetchNewArrivals = () => {
      axios.get('http://127.0.0.1:8000/new_arrivals')
        .then(response => setNewArrivals(response.data))
        .catch(error => console.error('Error fetching new arrivals:', error));
    };
    fetchProducts();
    fetchNewArrivals();
    console.log(products);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, newArrivals }}>
      {children}
    </ProductsContext.Provider>
  );
};
