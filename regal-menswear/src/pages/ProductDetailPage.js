import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const products = [
  { id: 1, name: 'Product 1', image: 'path/to/image1.jpg', description: 'Description here' },
  { id: 2, name: 'Product 2', image: 'path/to/image2.jpg', description: 'Description here' },
  { id: 3, name: 'Product 3', image: 'path/to/image3.jpg', description: 'Description here' },
  // Add more products as needed
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id.toString() === productId);

  return product ? <ProductDetail product={product} /> : <p>Product not found</p>;
};

export default ProductDetailPage;
