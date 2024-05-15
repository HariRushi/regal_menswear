// About.js
import React,{forwardRef} from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  text-align: center;
  padding: 2rem;
  background-color: #91bfc1;  // Uniform background color
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Description = styled.p`
  color: #333;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const About = forwardRef((props, ref) => (
    <AboutSection ref={ref}>
      <Title>About Regal Menswear</Title>
      <Description>
        Regal Menswear has been crafting high-quality menswear since 1999. Our dedication to
        style and durability has made us a leader in the fashion industry. We believe
        in sustainable fashion that empowers individuals.
      </Description>
    </AboutSection>
  ));
  
  export default About;
