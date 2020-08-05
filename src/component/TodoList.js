import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { List } from "antd";

class TodoList extends Component {
  render() {
    return (
      <div>
          <List
            bordered
            dataSource={this.props.todoList}
            renderItem={(todoItem, index) => (
                <TodoItem
                  key={index}
                  id={todoItem.id}
                  todoItem={todoItem}
                  deleteItem={this.props.deleteItem}
                  markItem={this.props.markItem}
                />
            )}
          />
      </div>
    );
  }
}

export default TodoList;
