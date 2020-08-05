import React, { Component } from "react";
import { requestItem } from "../network";
import { Button, Typography, List } from "antd";

class TodoItem extends Component {
  handleDelete = () => {
    // Todo extract
    requestItem({
      method: "delete",
      url: "/" + this.props.id,
    })
      .then((result) => {
        this.props.deleteItem(result.data);
        alert("Delete Success!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleMark = () => {
    requestItem({
      method: "put",
      url: "/" + this.props.id,
      data: {
        status: !this.props.todoItem.status,
      },
    })
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
            type="primary"
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
