import React from 'react';
import styled from 'styled-components';

const PropertyType = props => (
  <Container>
    {props.propertyType}
  </Container>
);

const Container = styled.div`
  font-size: small;
  font-weight: 800;
  text-transform: uppercase;
  font-color: #585a3a;
`;

export default PropertyType;
