import React from 'react';
import styled from 'styled-components';
import Helpful from './buttonList/ButtonList.jsx';

const HighlightEntry = (props) => {
  let desc = '';
  let text = '';

  if (props.id === 0 ) {
    desc = 'Sparkling Clean';
    text = ' recent guests have said that this home was sparkling clean.' ;
  } else if (props.id === 1) {
    desc = 'Check-in Experience';
    text = '% of guests gave this home\'s check-in process a 5-star rating';
  } else if (props.id === 2) {
    desc = 'Great Location';
    text = '% of recent guests gave this home’s location a 5-star rating.'
  }

  return (
    <div>
      <OuterWrapper>
        <div className={`highlight-id: ${props.id}`}>
          <InnerWrapper>
            <span><b>{desc}</b></span> &middot; {' '}
            <span>{props.highlight}</span>
            <span>{text}</span>
            <Helpful />
          </InnerWrapper>
        </div>
      </OuterWrapper>
    </div>
  );
}

const OuterWrapper = styled.div`
  margin-bottom: 12px;
`;

const InnerWrapper = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  letter-spacing: normal;
  line-height: 22px;
  text-size-adjust: 100%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;

export default HighlightEntry;
