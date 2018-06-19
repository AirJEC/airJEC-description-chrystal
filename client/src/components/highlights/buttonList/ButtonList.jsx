import React from 'react';
import DisplayHelpfulButtons from './DisplayHelpfulButtons.jsx';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anyButtonClicked: false,
      helpful: false,
      notHelpful: false,
    };

    this.handleHelpfulClicked = this.handleHelpfulClicked.bind(this);
    this.handleNotHelpfulClicked = this.handleNotHelpfulClicked.bind(this);
  }

  handleHelpfulClicked() {
    this.setState({
      anyButtonClicked: true,
      helpful: true,
    });
  }

  handleNotHelpfulClicked() {
    this.setState({
      anyButtonClicked: true,
      notHelpful: true,
    });
  }

  render() {
    const buttonClicked = this.state.anyButtonClicked;

    return (
      <div>
        {buttonClicked ? (
          'Thank you for your feedback'
        ) : (
          <DisplayHelpfulButtons
            handleHelpfulClicked={this.handleHelpfulClicked}
            handleNotHelpfulClicked={this.handleNotHelpfulClicked}
          />
        )}
      </div>
    );
  }
}

export default ButtonList;
