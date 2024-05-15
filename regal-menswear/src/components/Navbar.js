import React, {forwardRef} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #91bfc1;//#001738;
  color: #001738;
  position: fixed;  // Keeps the navbar fixed at the top of the viewport
  top: 0;           // Aligns it to the top
  left: 0;          // Aligns it to the left
  right: 0;         // Spans the navbar across the full width
  z-index: 1000;    // Ensures it stays on top of other content
`;

const Logo = styled.img`
  height: 50px; // Adjust the size as needed
  
`;

const StoreName = styled.h1`
  flex-grow: 1;
  text-align: center;
  margin: 0; // Remove default margin
  margin-left: 200px;
  font-size: 1.5rem;
  color: #001738; // Ensure the text is visible against the background
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #001738;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


//<NavButton onClick={() => console.log('Home')}>Home</NavButton>
const Navbar = ({aboutRef, meetTheRef, contactRef}) => {
  const navigate = useNavigate();
  const handleScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Nav>
      <Logo src={logo} alt="Regal Menswear Logo" />
      <StoreName onClick={() => navigate('/')} >Regal Menswear</StoreName>
      <NavItems>
        <NavButton onClick={() => console.log('Services')}>Services</NavButton>
        <NavButton onClick={() => console.log('About')}>About</NavButton>
        <NavButton onClick={() => console.log('Meet the Team')}>Meet the Team</NavButton>
        <NavButton onClick={() => console.log('Contact')}>Contact</NavButton>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
