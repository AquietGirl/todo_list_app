import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

class Menus extends Component {

  state = {
    current: 'all',
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="all">
            <Link to="/"> All </Link>
          </Menu.Item>
          <Menu.Item key="finished">
            <Link to="/finished"> Finish </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Menus;
