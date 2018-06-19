import React from 'react';

const RoomEntry = (props) => {
  let room = '';

  if (props.id === 0) {
    room = 'guests';
  } else if (props.id === 1) {
    room = 'bedrooms';
  } else if (props.id === 2) {
    room = 'beds';
  } else if (props.id === 3) {
    room = 'baths';
  }

  return (
    <span className={`room-id: ${props.id}`}>
      {props.roomInfo} {room}
      <span> </span>
    </span>
  );
};


export default RoomEntry;
