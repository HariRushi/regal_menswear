import React from 'react';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  display: flex;
  padding: 2rem;
  margin-top: 20px; // Adjust as needed
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 400px; // Adjust as needed
`;

const DetailsSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <DetailWrapper>
      <ImageSection image={product.image} />
      <DetailsSection>
        <h1>{product.name}</h1>
        <p>Description of {product.name}</p>
        {/* Add more details as required */}
      </DetailsSection>
    </DetailWrapper>
  );
};

export default ProductDetail;
