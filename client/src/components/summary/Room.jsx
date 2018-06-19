import React from 'react';
import RoomEntry from './RoomEntry.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin-bottom: 16px;
`;

const Room = props => (
  <div>
    <Wrapper>
      {props.roomList.map((roomInfo, index) => (
        <RoomEntry roomInfo={roomInfo} id={index}/>
      ))}
    </Wrapper>
  </div>
);

export default Room;
