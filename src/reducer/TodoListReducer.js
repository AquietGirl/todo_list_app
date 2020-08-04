import { createReducer } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM, MARK_ITEM} from "../action/actionType";

const defaultState = {
  todoList: [],
};
export default createReducer(defaultState, {
  [ADD_ITEM]: (state, action) => ({
    todoList: [
      ...state.todoList,
      {
        id: action.payload.id,
        content: action.payload.content,
        status: action.payload.status,
      },
    ],
  }),
  [DELETE_ITEM]: (state, action) => {
    return {
      todoList: state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload
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
  }
});
