import {createStore} from 'redux'
import TodoListReducer from './reducer/TodoListReducer'

const store = createStore(TodoListReducer);

export default store;