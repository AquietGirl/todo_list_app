import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import TodoPage from './page/todoPage/TodoPage'
import FinishPage from './page/finishPage/FinishPage.js'
import {addItem} from './action/TodoListAction'
import {requestItem} from './network'
import { connect } from 'react-redux'
import Menu from "./menu/Menu";

class App extends React.Component {

  // ToDo
  componentDidMount() {
    requestItem({
      method: "get",
    }).then((result) => {
      for (const data of result.data) {
        this.props.addItem(data);
      }
    }).catch((e) => {
      console.log(e)
    });
  }

  render() {
    return <div>
      <HashRouter>
        <Menu />
        <Route exact path="/" component={TodoPage}></Route>
        <Route path="/finished" component={FinishPage}></Route>
      </HashRouter>
  </div>
  }
  
}

const mapDispatchToProps = {
  addItem
}

export default connect(null, mapDispatchToProps)(App);
