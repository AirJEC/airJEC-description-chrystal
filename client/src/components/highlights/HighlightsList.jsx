import React from 'react';
import HighlightEntry from './HighlightEntry.jsx';
import styled from 'styled-components';

const HighlightsList = (props) => {
  const highlights = Object.values(props.highlightsList[0]);
  highlights.splice(0, 0, highlights[2]);
  highlights.splice(2, 1);

  return (
    <div>
      <Container>
        {highlights.map((highlight, index) => (
            <HighlightEntry id={index} highlight={highlight} />
          ))
        }
      </Container>
    </div>
  );
};

const Container = styled.div`
  border-style: solid;
  border-color: rgb(219, 219, 219);
  margin-bottom: 24px;
  border-radius: 4px;
  border-width: .994px;
  box-sizing: border-box;
  padding: 24px;
  display: block;
  text-size-adjust: 100%;
`;

export default HighlightsList;
