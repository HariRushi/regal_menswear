import React from 'react';
import styled from 'styled-components';
import heroBg from '../assets/images/hero-bg-2.jpg';
//import FeaturedProducts from './FeaturedProducts';

// Styled component for the hero section
const HeroSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start; // Align items to the top
  height: 100vh;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 50px;
  text-align: right;
`;

const HeroText = styled.div`
  max-width: 40%;
  margin-top: 10%
`;

const BrowseButton = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 20px; // Space from the text
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #001738;
    color: #fff;
  }
`;


const Hero = ({ scrollRef }) => {
  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection>
      <HeroText>
        <h1>Dress like a man, Stand like a King</h1>
        <p>With Regal Menswear</p>
        <BrowseButton onClick={handleScroll}>
          Browse Products
        </BrowseButton>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;