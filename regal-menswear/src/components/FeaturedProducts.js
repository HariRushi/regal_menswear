import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
`;

const Product = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const FeaturedProducts = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Product 1', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', image: 'path/to/image3.jpg' },
    // Add more products as needed
  ];

  return (
    <ProductsSection ref={ref}>
      {products.map(product => (
        <Product key={product.id} image={product.image} onClick={() => navigate(`/product/${product.id}`)}>
          {/* You can add overlays or additional details here */}
        </Product>
      ))}
    </ProductsSection>
  );
});

export default FeaturedProducts;