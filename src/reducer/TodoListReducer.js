import { createReducer } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM, MARK_ITEM} from "../action/actionType";

const defaultState = {
  todoList: [],
};
export default createReducer(defaultState, {
    // ToDo get items 降序
  [ADD_ITEM]: (state, action) => ({
    todoList: [
      {
        id: action.payload.id,
        content: action.payload.content,
        status: action.payload.status,
      },
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
  }
});
