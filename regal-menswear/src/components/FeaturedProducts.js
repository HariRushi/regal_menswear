import React, { useContext , forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductsContext } from '../context/ProductContext'; // Import the context
//import { Button } from 'styled-components'; // Assume you have a styled button

const BrowseButton = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 20px; // Space from the text
  display: block; // Changed from flex to block for the button itself
  margin-left: auto; // Automatically adjust left margin to center the button
  margin-right: auto;
  align-items: center;
  cursor: pointer;
  

  &:hover {
    background-color: #001738;
    color: #fff;
  }
`;
const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
  background-color: #91bfc1;
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
  border-radius: 15px; // Rounded corners
  opacity: 0.7; // Set initial transparency
  transition: transform 0.3s ease, opacity 0.3s ease; // Smooth transition for hover effects

  &:hover {
    transform: scale(1.05); // Slightly enlarge on hover
    opacity: 1; // Full opacity on hover
  }
`;

const Wrap = styled.div`
background-color: #91bfc1;
`;

const FeaturedProducts = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const products = useContext(ProductsContext); // Use the context
  console.log(products);

  return (
    <Wrap>
    <ProductsSection ref={ref}>
      {products.map(product => (
        <Product key={product.id} image={product.image} onClick={() => navigate(`/product/${product.id}`)}>
          {/* Display product details here */}
        </Product>
      ))}
    </ProductsSection>
    <BrowseButton onClick={() => navigate('/all-products')}>Show More</BrowseButton>
    </Wrap>
  );
});

export default FeaturedProducts;