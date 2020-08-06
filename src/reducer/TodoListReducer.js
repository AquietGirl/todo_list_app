import { createReducer } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM, MARK_ITEM, SET_ITEMLIST} from "../action/actionType";

const defaultState = {
  todoList: [],
};
export default createReducer(defaultState, {
  [ADD_ITEM]: (state, action) => ({
    todoList: [
      action.payload,
      ...state.todoList
    ],
  }),
  [DELETE_ITEM]: (state, action) => {
    return {
      todoList: state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id
      ),
    };
  },
  [MARK_ITEM]: (state, action) => {
    return {
      todoList: state.todoList.map((todoItem) => {
        if (action.payload.id === todoItem.id) {
          return action.payload;
        }
        return todoItem;
      }),
    };
  },
  [SET_ITEMLIST]: (state, action) => ({
      todoList: action.payload
  })
});
