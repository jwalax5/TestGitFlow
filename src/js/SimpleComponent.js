import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "jojo josh" };
  }

  render() {
    return (
      <div>
        Hello {this.state.name}
      </div>
    );
  }
}

export default SimpleComponent;