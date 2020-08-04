import React, { Component } from "react";

class TodoItem extends Component {

  handleDelete = () => {
    this.props.deleteItem(this.props.index);
  };

  handleMark = () => {
    this.props.markItem(this.props.index);
  };

  render() {
    return (
      <div>
        <li>
          <span
            onClick={this.handleMark}
            style={{
              textDecorationLine: this.props.todoItem.mark ? "line-through" : "none",
            }}
          >
            {this.props.todoItem.item}
          </span>
          <button onClick={this.handleDelete}>X</button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
