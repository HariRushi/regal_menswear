import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #000435;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Follow Along</p>
      <address>123-456-7890 | info@mysite.com</address>
    </FooterSection>
  );
};

export default Footer;
