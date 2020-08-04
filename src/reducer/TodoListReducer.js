import {createReducer} from '@reduxjs/toolkit'
import {ADD_ITEM,DELETE_ITEM,MARK_ITEM} from '../action/actionType'

const defaultState = {
    todoList: [],
}
export default createReducer(defaultState, {
    [ADD_ITEM]: (state, action) => ({
        todoList : [...state.todoList, {item: action.payload, mark: false}]
    }),
    [DELETE_ITEM]: (state, action) => {
        return {
            todoList: state.todoList.filter((todoItem, index) => index !== action.payload)
        }
    },
    [MARK_ITEM]: (state, action) => {
        return {
            todoList: state.todoList.map((todoItem, index) => {
                if (action.payload === index) {
                    return {
                        item: todoItem.item,
                        mark: !todoItem.mark
                    }
                }
                return todoItem
            })
        }
    }
})
