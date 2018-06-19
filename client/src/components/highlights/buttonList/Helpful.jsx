import React from 'react';
import HelpfulImage from './HelpfulImage.jsx';
import styled from 'styled-components';

const Helpful = props => (
  <HelpfulButton onClick={props.handleHelpfulClicked}>
    <span className="helpful">
      Helpful
    </span>
    <span>
      <HelpfulImage />
    </span>
  </HelpfulButton>
);


const HelpfulButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor:pointer;
  font-size: 16px;
  color: rgb(0, 132, 137);
  font-weight: 600;
  font-stretch: 100%;
`;

export default Helpful;
