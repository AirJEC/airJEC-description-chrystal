import React from 'react';
import LeftComponentAmenities from './LeftComponentAmenities.jsx';
import RightComponentAmenities from './RightComponentAmenities.jsx';
import ReadMoreButton from '../styles/ReadMoreButton.jsx';
import styled from 'styled-components';

const AmenitiesList = (props) => {
  let leftComponent = [];
  let rightComponent = [];
  const amenitiesLength = props.amenities.length;

  props.amenities.forEach((amenity, index) => {
    const idx = index + 1;

    if (idx % 2 === 0) {
      rightComponent.push(amenity.amenities);
    } else {
      leftComponent.push(amenity.amenities);
    }
  });

  const showAllButton = () => (
    <DivStyle>
      <ReadMoreButton onClick={() => {props.handleShowAmenities();}}>
        Show all {amenitiesLength} amenities
      </ReadMoreButton>
    </DivStyle>
  );

  if (!props.showAmenities) {
    leftComponent = leftComponent.slice(0, 2);
    rightComponent = rightComponent.slice(0, 2);
  }

  return (
    <div>
      <div className="amenities-list">
          <b>Amenities</b>
      </div>
      <div>
        <LeftStyles>
          {leftComponent.map((amenity, index) => (
            <LeftComponentAmenities id={index} amenity={amenity} />
          ))}
        </LeftStyles>
        <RightStyles>
          {rightComponent.map((amenity, index) => (
            <RightComponentAmenities id={index} amenity={amenity} />
          ))}
        </RightStyles>
      </div>
      <div>
      {amenitiesLength > 3 ? (
        showAllButton()
        ) : (
          <div>
          </div>
        )}
      </div>
      <BottomBorderLine>
        <div>
        </div>
      </BottomBorderLine>
    </div>
  );
};

const DivStyle = styled.div`
  margin: 24px;
  margin-left: 0px;
`;

const LeftStyles = styled.div`
  display: inline-block;
`;

const RightStyles = styled.div`
  display: inline-block;
  float: right;
`;

const BottomBorderLine = styled.div`
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: .994px;
  margin: 24px 0;
  box-sizing: border-box;
  display: block;
`;

export default AmenitiesList;
