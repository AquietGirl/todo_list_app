import React, { Component } from "react";
import todoApi, { requestItem } from "../network";
import { Button, Typography, List } from "antd";

class TodoItem extends Component {
  handleDelete = () => {
    // Todo extract
    todoApi
      .delete(`/${this.props.id}`)
      .then((result) => {
        this.props.deleteItem(result.data);
        alert("Delete Success!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleMark = () => {
    todoApi
      .put(`/${this.props.id}`, { status: !this.props.todoItem.status })
      .then((result) => {
        this.props.markItem(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <List.Item
        actions={[
          <Button
            type="danger"
            size="small"
            shape="circle"
            key="list-loadmore-edit"
            onClick={this.handleDelete}
          >
            X
          </Button>,
        ]}
      >
        <Typography.Text
          onClick={this.handleMark}
          style={{
            textDecorationLine: this.props.todoItem.status
              ? "line-through"
              : "none",
          }}
        >
          {this.props.todoItem.content}
        </Typography.Text>
      </List.Item>
    );
  }
}

export default TodoItem;
