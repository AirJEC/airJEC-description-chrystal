import React from 'react';
import DescriptionList from './DescriptionList.jsx';

class DescriptionClicked extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readMoreClicked: false,
    };

    this.handleReadMoreClicked = this.handleReadMoreClicked.bind(this);
  }

  handleReadMoreClicked() {
    this.setState({ readMoreClicked: !this.state.readMoreClicked });
  }

  render() {
    return (
      <div>
        <DescriptionList
        descriptions={this.props.descriptions}
        handleReadMoreClicked={this.handleReadMoreClicked}
        readMoreClicked={this.state.readMoreClicked}
        />
      </div>
    );
  }
}

export default DescriptionClicked;
