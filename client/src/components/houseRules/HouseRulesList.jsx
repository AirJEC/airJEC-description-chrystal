import React from 'react';
import DisplayedRules from './DisplayedRules.jsx';
import DisplayReadMoreButton from './DisplayReadMoreButton.jsx';
import RenderNoContent from '../RenderNoContent.jsx';
import styled from 'styled-components';

const HouseRulesList = (props) => {
  let displayedRules = [];
  let hiddenRules = [];

  props.houseRulesList.forEach((element, index) => {
    if (index < 6) {
      displayedRules.push(element.houseRules);
    } else {
      hiddenRules.push(element.houseRules);
    }
  });

  return (
    displayedRules.length === 0 ? (
      <div>
      </div>
    ) : (
      <div>
      <div>
        <div>
          <b>House Rules</b>
        </div>
        <div>
          {displayedRules.map((rules, index) => (
            <DisplayedRules id={index} displayedRules={rules} />
          ))}
        </div>
        <div>
          {hiddenRules.length > 0 ? (
            <DisplayReadMoreButton hiddenRules={hiddenRules}/>
          ) : (
            <RenderNoContent/>
          )}
        </div>
      </div>
    </div>
    )
  );
};

export default HouseRulesList;
