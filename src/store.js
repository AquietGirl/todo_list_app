import {createStore, combineReducers} from 'redux'
import TodoListReducer from './reducer/TodoListReducer'
import LoadingReducer from './reducer/LoadingReducer'

const store = createStore(combineReducers({todo:TodoListReducer, load:LoadingReducer}));

export default store;