import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import TodoPage from './todoPage/TodoPage'
import FinishPage from './finishPage/FinishPage.js'

function App() {
  return <div>
    <HashRouter>
      <Route exact path="/" component={TodoPage}></Route>
      <Route path="/finished" component={FinishPage}></Route>
    </HashRouter>
  </div>
}

export default App;
