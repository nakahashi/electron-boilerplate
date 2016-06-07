import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handlePlus() {
    const count = this.state.count + 1;
    this.setState({count});
  }

  handleMinus() {
    const count = this.state.count - 1;
    this.setState({count});
  }

  render() {
    return (
      <div>
        <div>
          <button className="plus" onClick={::this.handlePlus}>+1</button>
          <button className="minus" onClick={::this.handleMinus}>-1</button>
        </div>
        <div>
          {this.state.count}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('container'));
