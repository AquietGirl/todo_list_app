import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, markItem } from "../../action/TodoListAction";
import { Col, Row, Typography } from "antd";
import TodoList from "../../component/TodoList";

const { Title } = Typography;

class FinishPage extends Component {
  render() {
    const finishList = this.props.todoList.filter((todoItem) => todoItem.status)
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Title level={3} style={{textAlign: "center"}}>Finished</Title>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
          <TodoList
              deleteItem={this.props.deleteItem}
              markItem={this.props.markItem}
              todoList={finishList}
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
  deleteItem,
  markItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishPage);
