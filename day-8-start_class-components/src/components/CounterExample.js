import {Component} from 'react';

class CounterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 100
    }
  }

  componentDidMount() {
    console.log('componentDidMount')

  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({counter: prevState.counter +1}))
  }

  handleDecrement = () => {
    this.setState((prevState) => ({counter: prevState.counter -1}))
  }
  render() {
    return (
      <div>
        <div>Count: {this.state.counter}</div>
        <button onClick={this.handleIncrement}>Increment +</button>
        <button onClick={this.handleDecrement}>Decrement -</button>
      </div>
    );
  }
}

export default CounterExample;
