import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../menu/Menu";
import TodoItem from '../component/TodoItem'
import {deleteItem} from '../action/TodoListAction'

class FinishPage extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <p>Finished</p>
        <ul>
          {this.props.todoList.map((todoItem, index) => {
            if (todoItem.status) {
              return <TodoItem key={index} todoItem={todoItem} id={todoItem.id} deleteItem={this.props.deleteItem}/>;
            }
            return null;
          })}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishPage);
