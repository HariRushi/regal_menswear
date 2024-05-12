import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  text-align: center;
  padding: 2rem;
`;

const Service = styled.div`
  margin-bottom: 1rem;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Service>Alterations</Service>
      <Service>Wardrobe Edit</Service>
      <Service>Style Consultation</Service>
    </ServicesSection>
  );
};

export default Services;
