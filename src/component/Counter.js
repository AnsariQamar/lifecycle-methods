import React from 'react';

class Counter extends React.Component {
  componentDidMount() {
    console.log('Component Mounted first Time');
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.number !== this.props.number) {
      console.log('Component Updated');
    }
  }
  componentWillUnmount() {
    console.log('Component Unmounted');
  }
  render() {
    return <h1>{this.props.number} times Counter1</h1>;
  }
}

export default Counter;
