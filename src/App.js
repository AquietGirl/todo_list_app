import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TodoPage from "./page/todoPage/TodoPage";
import FinishPage from "./page/finishPage/FinishPage.js";
import { setItemList } from "./action/TodoListAction";
import todoApi from "./network";
import { connect } from "react-redux";
import Menus from "./menu/Menus";
import { Spin } from "antd";

class App extends React.Component {
  // ToDo
  componentDidMount() {
    todoApi
      .get()
      .then((result) => {
        this.props.setItemList(result.data);
        this.props.loadingToggle()
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <Spin spinning={this.props.loading}>
        <HashRouter>
          <Menus />
          <Route exact path="/" component={TodoPage}></Route>
          <Route exact path="/finished" component={FinishPage}></Route>
        </HashRouter>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.load.loading
});

const mapDispatchToProps = {
  setItemList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
