import React from 'react';
import styled from 'styled-components';

const NotHelpful = props => (
  <HelpfulButton>
    <span className="not-helpful" onClick={props.handleNotHelpfulClicked}>
      Not Helpful
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
  font-stretch: 100%
`;

export default NotHelpful;
