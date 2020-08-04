import React, { Component } from "react";
import {requestItem} from '../network'

class TodoItem extends Component {

  handleDelete = () => {
    requestItem({
      method:'delete',
      url: '/' + this.props.id
    }).then((result) => {
      this.props.deleteItem(result.data.id);
      alert("Delete Success!")
    })
  };

  handleMark = () => {
    requestItem({
      method: 'put',
      url: '/' + this.props.id,
      data: {
        status: !this.props.todoItem.status
      }
    }).then((result) => {
      this.props.markItem(result.data);
    })
  };

  render() {
    return (
      <div>
        <li>
          <span
            onClick={this.handleMark}
            style={{
              textDecorationLine: this.props.todoItem.status ? "line-through" : "none",
            }}
          >
            {this.props.todoItem.content}
          </span>
          <button onClick={this.handleDelete}>X</button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
