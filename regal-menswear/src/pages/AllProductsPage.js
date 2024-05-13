import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  margin-top: 100px; // Adjust based on navbar height
`;

const FilterSection = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 2px solid #ccc; // Separating line between filters and products
  height: fit-content;
`;

const ProductsSection = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 20px;
`;

const Product = styled.div`
  height: 200px;
  background-image: url(${props => props.$image}); // Use transient prop $image
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-color: #91bfc1;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const CheckboxGroup = styled.div`
  margin-top: 20px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const AllProductsPage = () => {
  const products = useContext(ProductsContext);
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('newToOld');
  const [categoryFilter, setCategoryFilter] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    setCategoryFilter(prev => 
      checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  const sortedAndFilteredProducts = products.filter(
    product => categoryFilter.length === 0 || categoryFilter.includes(product.category)
  ).sort((a, b) => {
    switch (sortType) {
      case 'oldToNew':
        return new Date(a.date) - new Date(b.date);
      case 'newToOld':
        return new Date(b.date) - new Date(a.date);
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <Container>
      <FilterSection>
        <SectionTitle>Sort by:</SectionTitle>
        <Select onChange={e => setSortType(e.target.value)}>
          <option value="newToOld">New to Old</option>
          <option value="oldToNew">Old to New</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
        </Select>
        <SectionTitle>Filter by Category:</SectionTitle>
        <CheckboxGroup>
          {['Dress Suits', 'Tuxedos', 'Blazers', 'Dress Shirts', 'Tuxedo Shirts', 'Casual Long Sleeve Shirts',
            'Casual Short Sleeve Shirts', 'Casual Pants', 'Shoes', 'Ties', 'Bow Ties', 'Socks', 'Cufflinks'].map(category => (
            <CheckboxLabel key={category}>
              <Checkbox
                type="checkbox"
                value={category}
                onChange={handleCheckboxChange}
              />
              {category}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FilterSection>
      <ProductsSection>
        {sortedAndFilteredProducts.map(product => (
          <Product key={product.id} $image={product.image} onClick={() => navigate(`/product/${product.id}`)}>
            {/* You can add overlays or additional details here */}
          </Product>
        ))}
      </ProductsSection>
    </Container>
  );
};

export default AllProductsPage;
