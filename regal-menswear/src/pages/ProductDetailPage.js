import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
//import ProductDetail from '../components/ProductDetail';
import styled from 'styled-components';
import { ProductsContext } from '../context/ProductContext'; // Import the context


const DetailWrapper = styled.div`
  display: flex;
  padding: 2rem;
  margin-top: 20px;
  background-color: #91bfc1; // Matching the background color
  border: 1px solid #ccc;
  border-radius: 15px; // Rounded corners like FeaturedProducts
  margin-top: 80px;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 400px;
  border-radius: 15px; // Rounded corners for the image
`;

const DetailsSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent; // Keep it simple and readable
`;

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductsContext); // Use the context
  const product = products.find(p => p.id.toString() === productId);

  return (
    <DetailWrapper>
      <ImageSection image={product.image} />
      <DetailsSection>
        <h1>{product.name}</h1>
        <p>Description of {product.name}</p>
        {/* Add more details as required */}
      </DetailsSection>
    </DetailWrapper>);
};

export default ProductDetailPage;
