import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "jojojosslast time josh" };
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