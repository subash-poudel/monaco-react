import React, { Component } from 'react';

class MonacoEditor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initMonaco();
  }

  initMonaco = props => {
    console.log(props);
  };

  render() {
    return (
      <div>
        <p> this is a react monaco editor</p>
      </div>
    );
  }
}

export default MonacoEditor;
