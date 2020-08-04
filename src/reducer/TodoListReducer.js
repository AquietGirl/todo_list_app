import {createReducer} from '@reduxjs/toolkit'
import {ADD_ITEM,DELETE_ITEM} from '../action/actionType'

const defaultState = {
    todoList: []
}
export default createReducer(defaultState, {
    [ADD_ITEM]: (state, action) => ({todoList: [...state.todoList, action.payload]}),
    [DELETE_ITEM]: (state, action) => {
        return {
            todoList: state.todoList.filter((todoItem, index) => index !== action.payload)
        }
    }
})
