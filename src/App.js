import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import TodoPage from './todoPage/TodoPage'
import FinishPage from './finishPage/FinishPage.js'
import {addItem} from './action/TodoListAction'
import {requestItem} from './network'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    requestItem({
      method: "get",
    }).then((result) => {
      for (const data of result.data) {
        this.props.addItem(data);
      }
    });
  }

  render() {
    return <div>
    <HashRouter>
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
