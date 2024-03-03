import React, { Component } from "react";

export default class ExampleClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
      name: "",
      age: 0,
    };
  }

  handleAdd = () => {
    this.setState({
      store: {
        name: this.state.name,
        age: this.state.age,
      },
    });
    console.log(this.state.store);
  };

  handleAge = (props) => {
    if (props === "+") {
      this.setState({ age: this.state.age + 1 });
    } else {
      this.setState({ age: this.state.age - 1 });
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          value={this.state.name}
        />
        <button
          onClick={() => this.handleAge("+")}
          style={{ marginLeft: "10px" }}
        >
          +
        </button>
        {this.state.age}
        <button onClick={() => this.handleAge("-")}>-</button>
        <button onClick={() => this.handleAdd()}>Submit</button>
        <br />
        <div>
          <span>
            My name {this.state.store.name}. age is {this.state.store.age}
          </span>
        </div>
      </div>
    );
  }
}
