import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  text-align: center;
  padding: 2rem;
  background-color: #91bfc1;  // Uniform background color
  display: grid;
  grid-template-columns: 1fr 3fr;  // Allocate more space to the right column for details
  gap: 1rem;
  //width: 100%;  // Full width of the screen
`;

// const Service = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
//   padding: 1rem;
//   background: #91bfc1;  // Matching the section background
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

const ServiceName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  margin-top: 20%;
`;

const ServiceDetails = styled.div`
  text-align: right;
  color: #333;
  font-size: 1rem;
  //width: 100%;  // Ensures it pushes to the right
  margin-right: 7%;
`;

const ServiceItem = styled.p`
  //margin: 0.25rem 0;
  line-height: 1.5;
`;

const Services = () => {
  return (
    <ServicesSection>
        <ServiceName>Customized Alterations</ServiceName>
        <ServiceDetails>
          <ServiceItem>Hemming (Length) - $15</ServiceItem>
          <ServiceItem>Waist - $15</ServiceItem>
          <ServiceItem>Sleeves - $25</ServiceItem>
          <ServiceItem>Crotch - $25</ServiceItem>
          <ServiceItem>Jacket Sides - $25</ServiceItem>
          <ServiceItem>Pants Tapering - $25</ServiceItem>
          <ServiceItem>Shorten Jacket - $40</ServiceItem>
        </ServiceDetails>
    </ServicesSection>
  );
};

export default Services;
