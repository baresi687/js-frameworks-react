import {Component} from "react";

class ClassComponentExample extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      name: 'Steve',
      age: '31',
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() => {
      this.setState({name: 'Mike',age: 44})
    },2000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h2>Age: {this.state.age}</h2>
      </div>
    )
  }
}

export default ClassComponentExample
