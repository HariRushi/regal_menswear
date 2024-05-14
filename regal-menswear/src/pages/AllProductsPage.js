import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 82px;
//   background-color: #91bfc1;
// `;

const SortAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: #91bfc1;
`;

const SortSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 82px;
  
  
`;

const TotalProducts = styled.div`
  margin-left: 900px;
  
  font-size: 16px;
  color: #000;
`;


const FilterSection = styled.div`
  padding: 20px;
  border-right: 2px solid #ccc;
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
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-color: #91bfc1;
  border: 1px solid #ccc;
  border-radius: 15px;
  opacity: 0.7;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Select = styled.select`
  padding: 8px 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #91bfc1;
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

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #91bfc1;
`;

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #91bfc1;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #91bfc1;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: none;
  background-color: #ccc;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  &.active {
    background-color: #666;
    color: white;
  }
`;

const AllProductsPage = () => {
    const { products } = useContext(ProductsContext);
    console.log(products);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
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

    const totalPages = Math.ceil(sortedAndFilteredProducts.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedAndFilteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
      <PageLayout>
        <SortAndFilterContainer>
          <SortSection>
            <Select onChange={e => setSortType(e.target.value)}>
              <option value="newToOld">New to Old</option>
              <option value="oldToNew">Old to New</option>
              <option value="priceLowToHigh">Price Low to High</option>
              <option value="priceHighToLow">Price High to Low</option>
            </Select>
            <TotalProducts>Total: {sortedAndFilteredProducts.length} Products</TotalProducts>
          </SortSection>
          
        </SortAndFilterContainer>
        <ContentArea>
          <FilterSection>
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
            {currentItems.map(product => (
              <Product key={product.id} $image={product.image} onClick={() => navigate(`/product/${product.id}`)} />
            ))}
          </ProductsSection>
        </ContentArea>
        <Pagination>
          {[...Array(totalPages).keys()].map(number => (
            <PageButton key={number + 1} onClick={() => paginate(number + 1)} className={currentPage === number + 1 ? 'active' : ''}>
              {number + 1}
            </PageButton>
          ))}
        </Pagination>
      </PageLayout>
    );
  };
  
  export default AllProductsPage;
