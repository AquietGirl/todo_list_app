import React, { Component } from "react";
import TodoList from "../component/TodoList";
import { addItem} from "../action/TodoListAction";
import Menu from "../menu/Menu";
import { connect } from "react-redux";
import { requestItem } from "../network/index";

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
    })
    this.setState({
      inputValue: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Menu></Menu>
        <p>Todo</p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddValue}>ADD</button>
        <TodoList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(TodoPage);
