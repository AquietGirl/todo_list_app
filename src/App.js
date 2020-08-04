import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import TodoInput from './todoInputPage/TodoInput'
import Finished from './finishPage/Finished.js'

function App() {
  return <div>
    <HashRouter>
      <Route exact path="/" component={TodoInput}></Route>
      <Route path="/finished" component={Finished}></Route>
    </HashRouter>
  </div>
}

export default App;
