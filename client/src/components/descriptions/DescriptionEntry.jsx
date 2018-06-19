import React from 'react';
import styled from 'styled-components';

const DescriptionEntry = (props) => {
  let type = '';

  if (props.id === 0) {
    type = 'The Space';
  } else if (props.id === 1) {
    type = 'Guest Access';
  } else if (props.id === 2) {
    type = 'Guest Interactions';
  } else if (props.id === 3) {
    type = 'Notes';
  }

  return (
    <div className={`description-id: ${props.id}`}>
      <Wrapper>
        <div className="description-type">
          <b>{type}</b>
        </div>
      </Wrapper>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
}
const Wrapper = styled.h2` 
  font-size: 16px; 
`;

export default DescriptionEntry;
