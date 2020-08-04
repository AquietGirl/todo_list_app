import React, { Component } from "react";

class TodoItem extends Component {
  handleDelete = () => {
      this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todoItem}
          <button onClick={this.handleDelete}>X</button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
