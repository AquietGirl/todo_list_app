import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from '../../component/TodoItem'
import {deleteItem, markItem} from '../../action/TodoListAction'

class FinishPage extends Component {
  render() {
    return (
      <div>
        <p>Finished</p>
        <ul>
          {/* Todo filter */}
          {this.props.todoList.map((todoItem, index) => {
            if (todoItem.status) {
              return <TodoItem 
                key={index} 
                todoItem={todoItem} 
                id={todoItem.id} 
                deleteItem={this.props.deleteItem}
                markItem={this.props.markItem}
              />;
            }
            // Todo 
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
  deleteItem,
  markItem
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishPage);
