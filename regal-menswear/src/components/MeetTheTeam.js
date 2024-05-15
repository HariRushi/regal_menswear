// MeetTheTeam.js
import React from 'react';
import styled from 'styled-components';

const TeamSection = styled.section`
  text-align: center;
  padding: 2rem;
  background-color: #91bfc1;  // Uniform background color
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Member = styled.div`
  padding: 1rem;
  background: #91bfc1;  // Contrast background
  border-radius: 8px;
  box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #B1D1D3;//0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Name = styled.h2`
  font-size: 1.5rem;
  color: #001738;
`;

const Role = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const MeetTheTeam = () => (
  <TeamSection>
    <Member>
      <Name>John Doe</Name>
      <Role>Founder & CEO</Role>
    </Member>
    <Member>
      <Name>Jane Smith</Name>
      <Role>Lead Designer</Role>
    </Member>
    {/* Add more team members as needed */}
  </TeamSection>
);

export default MeetTheTeam;
