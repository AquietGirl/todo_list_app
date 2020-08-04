import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import {deleteItem, markItem} from '../action/TodoListAction'

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.map((todoItem, index) => (
            <TodoItem 
                key={index} 
                id={todoItem.id} 
                todoItem={todoItem} 
                deleteItem={this.props.deleteItem}
                markItem={this.props.markItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = {
    deleteItem,
    markItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
