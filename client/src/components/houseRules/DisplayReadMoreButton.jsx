import React from 'react';
import HiddenRule from './HiddenRule.jsx';
import ReadMoreButton from '../styles/ReadMoreButton.jsx';
import RenderNoContent from '../RenderNoContent.jsx';
import styled from 'styled-components';

class DisplayReadMoreButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadMoreClicked: false,
      buttonPhrase: 'Read all rules',
    };

    this.handleReadMoreClicked = this.handleReadMoreClicked.bind(this);
    this.displayHiddenRules = this.displayHiddenRules.bind(this);
    this.buttonPhrase = this.buttonPhrase.bind(this);
  }

  handleReadMoreClicked() {
    this.setState({ isReadMoreClicked: !this.state.isReadMoreClicked });
  }

  displayHiddenRules() {
    return (
      <div>
        {this.props.hiddenRules.map((hiddenRule, index) => (
          <HiddenRule hiddenRule={hiddenRule} id={index} />
        ))}
      </div>
    );
  }

  buttonPhrase() {
    const show = 'Read all rules';
    const hide = 'Hide all rules';

    return this.state.isReadMoreClicked ? (hide) : (show);
  }

  render() {
    const buttonClicked = this.state.isReadMoreClicked;

    return (
      <div>
        <div>
          {buttonClicked ? (
            this.displayHiddenRules()
          ) : (
            <RenderNoContent />
          )}
        </div>
        <div>
          <ReadMoreButton onClick={() => this.handleReadMoreClicked()}>
            {this.buttonPhrase()}
          </ReadMoreButton>
        </div>
      </div>
    );
  }
}

export default DisplayReadMoreButton;
