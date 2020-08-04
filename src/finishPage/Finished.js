import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../menu/Menu";
import TodoItem from '../component/TodoItem'

class Finished extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <p>Finished</p>
        <ul>
          {this.props.todoList.map((todoItem, index) => {
            if (todoItem.mark) {
              return <TodoItem key={index} todoItem={todoItem} index={index} />;
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

export default connect(mapStateToProps)(Finished);
