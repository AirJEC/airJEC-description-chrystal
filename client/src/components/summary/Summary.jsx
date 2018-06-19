import React from 'react';
import Room from './Room.jsx';
import Title from './Title.jsx';
import PropertyType from './PropertyType.jsx';
import styled from 'styled-components';

const Summary = (props) => {
  const value = Object.values(props.summary[0]);
  return (
    <div>
      <div>
        <PropertyType propertyType={value[0]} />
      </div>
      <div>
        <TitleMargin>
          <Title title={value[1]} />
        </TitleMargin>
      </div>
      <div>
        <Room roomList={value.slice(2)} />
      </div>
    </div>
  );
};

const TitleMargin = styled.div`
  margin: 10px 0 50px 0; 
`;

export default Summary;
