import React, { Component } from "react";

export default class LifiCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      count: 0,
    };
  }
  componentDidMount() {
    document.title = Math.floor(Math.random() * 100);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.componentDidMount();
    }
  }
  componentWillUnmount() {
    console.log("Bye bye components");
  }
  handleChange = (e) => {
    this.setState({ val: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.val} {this.state.count}
        </h1>
        <input
          type="text"
          onChange={(e) => this.handleChange(e)}
          value={this.state.val}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count
        </button>
      </div>
    );
  }
}
