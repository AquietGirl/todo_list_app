import React, { Component } from "react";
import todoApi from "../network";
import { Button, Typography, List, Switch } from "antd";

class TodoItem extends Component {
  handleDelete = () => {
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
      .put(`/${this.props.id}`, { content: this.props.todoItem.content ,status: !this.props.todoItem.status })
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
          <Switch onChange={this.handleMark} />,
          <Button
            type="danger"
            size="small"
            shape="circle"
            key="list-loadmore-edit"
            onClick={this.handleDelete}
          >
            X
          </Button>
        ]}
      >
        <Typography.Text
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
