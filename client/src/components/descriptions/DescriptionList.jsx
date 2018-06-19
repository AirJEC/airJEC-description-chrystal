import React from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';
import MainDescription from './MainDescription.jsx';
import ReadMoreButton from '../styles/ReadMoreButton.jsx';
import RenderNoContent from '../RenderNoContent.jsx';
import styled from 'styled-components';

const DescriptionList = (props) => {
  const descriptions = Object.values(props.descriptions[0]);

  const mainDescription = () => {
    const main = descriptions.slice(1, 2);

    return (
      <div>
        <MainDescription main={main} />
      </div>
    );
  };

  const remainingMapped = () => {
    let remainingStorage = [];

    const remaining = descriptions.filter((element, index) => {
      return index !== 1;
    });

    remaining.splice(0, 0, remaining[3]);
    remaining.splice(4, 1);

    return (
      <div>
        {remaining.map((description, index) => (
          <DescriptionEntry description={description} id={index} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        {mainDescription()}
      </div>
        <div>
          { props.readMoreClicked ? (
            remainingMapped()
            ) : (
            <RenderNoContent />
            )}
        </div>
      <div>
        <ReadMoreButton onClick={() => props.handleReadMoreClicked()}>
          Read more about the space
        </ReadMoreButton>
      </div>
      <BottomBorderLine>
        <div>
        </div>
      </BottomBorderLine>
    </div>
  );
};

const BottomBorderLine = styled.div`
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 219, 219);
  border-bottom-width: .994px;
  margin-bottom: 24px;
  box-sizing: border-box;
  display: block;
`;

export default DescriptionList;
