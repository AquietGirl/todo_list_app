import React, { Component } from "react";
import {requestItem} from '../network'

class TodoItem extends Component {

  handleDelete = () => {
    // Todo extract
    requestItem({
      method:'delete',
      url: '/' + this.props.id
    }).then((result) => {
      this.props.deleteItem(result.data);
      alert("Delete Success!")
    }).catch((e) => {
      console.log(e)
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
    }).catch((e) => {
      console.log(e)
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
