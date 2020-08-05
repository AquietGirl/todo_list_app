import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TodoPage from "./page/todoPage/TodoPage";
import FinishPage from "./page/finishPage/FinishPage.js";
import { addItem } from "./action/TodoListAction";
import todoApi, { requestItem } from "./network";
import { connect } from "react-redux";
import Menus from "./menu/Menus";
import Axios from "axios";

class App extends React.Component {
  // ToDo
  componentDidMount() {
    todoApi
      .get()
      .then((result) => {
        for (const data of result.data) {
          this.props.addItem(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Menus />
          <Route exact path="/" component={TodoPage}></Route>
          <Route exact path="/finished" component={FinishPage}></Route>
        </HashRouter>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(App);
