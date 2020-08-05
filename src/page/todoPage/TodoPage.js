import React, { Component } from "react";
import TodoList from "../../component/TodoList";
import { addItem, deleteItem, markItem} from "../../action/TodoListAction";
import { connect } from "react-redux";
import { requestItem } from "../../network/index";

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleAddValue = () => {
    if (this.state.inputValue === "") {
      alert("Can not be Blank!");
      return;
    }
    requestItem({
      method: 'post',
      data: {
        content: this.state.inputValue,
        status: false
      }
    }).then((result) => {
      this.props.addItem(result.data)
      alert("Add Success!")
      this.setState({
        inputValue: "",
      });
    })
    // ToDo fail
   
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>Todo</p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddValue}>ADD</button>
        <TodoList 
          addItem={this.props.addItem}
          deleteItem={this.props.deleteItem}
          markItem={this.props.markItem}
          todoList={this.props.todoList}
        />
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
  addItem,
  deleteItem,
  markItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
