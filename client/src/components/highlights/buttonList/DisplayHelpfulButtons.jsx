import React from 'react';
import Helpful from './Helpful.jsx';
import NotHelpful from './NotHelpful.jsx';
import styled from 'styled-components';

const DisplayHelpfulButtons = props => (
  <div>
    <OuterWrapper>
      <HelpfulWrapper>
        <span>
          <Helpful handleHelpfulClicked={props.handleHelpfulClicked}/>
        </span>
        <span>
          &middot;
        </span>
        <span>
          <NotHelpful handleNotHelpfulClicked={props.handleNotHelpfulClicked}/>
        </span>
      </HelpfulWrapper>
    </OuterWrapper>
  </div>
);

const HelpfulWrapper = styled.div`
  display: 'flex';
  flex-direction: 'row';
`;

const OuterWrapper = styled.div`
  display: block;
`;

export default DisplayHelpfulButtons;
