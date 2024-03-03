import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, id, completed } = this.props.data;
    return (
      <h1>
        <h1>{title}</h1>
        {this.props.children}
      </h1>
    );
  }
}
