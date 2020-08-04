import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import {deleteItem} from '../action/TodoListAction'

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.map((item, index) => (
            <TodoItem 
                key={index} 
                index={index} 
                todoItem={item} 
                deleteItem={this.props.deleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = {
    deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
