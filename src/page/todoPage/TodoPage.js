import React, { Component } from "react";
import TodoList from "../../component/TodoList";
import { addItem, deleteItem, markItem } from "../../action/TodoListAction";
import { connect } from "react-redux";
import { Input } from "antd";
import { Row, Col, Typography } from "antd";
import todoApi from "../../network";


const { Search } = Input;
const { Title } = Typography;

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
    todoApi
      .post("",{
        content: this.state.inputValue,
        status: false,
      })
      .then((result) => {
        this.props.addItem(result.data);
        alert("Add Success!");
        this.setState({
          inputValue: "",
        });
      }).catch((e) => {
        console.log(e)
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
        <Row>
          <Col span={12} offset={6}>
            <Title level={3} style={{ textAlign: "center" }}>
              ALL TODO LIST
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Search
              placeholder="input itrm text"
              enterButton="ADD"
              size="large"
              value={this.state.inputValue}
              onChange={this.handleChange}
              onSearch={this.handleAddValue}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <TodoList
              addItem={this.props.addItem}
              deleteItem={this.props.deleteItem}
              markItem={this.props.markItem}
              todoList={this.props.todoList}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = {
  addItem,
  deleteItem,
  markItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
