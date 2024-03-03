import React, { Component } from "react";

export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kayele",
      age: 26,
    };
  }
  handleClick = () => {
    this.setState({ age: this.state.age + 1 });
  };
  render() {
    // const handleClick = () => {
    //   this.setState({ age: this.state.age + 1 });
    // };
    return (
      <div>
        <h1>
          {this.state.name} {this.state.age}
        </h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
