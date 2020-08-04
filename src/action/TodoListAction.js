import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM, INIT, MARK_ITEM } from "./actionType";

export const addItem = createAction(ADD_ITEM, (item) => ({
  payload: {
      id : item.id,
      content:item.content,
      status:item.status
  },
}));

export const deleteItem = createAction(DELETE_ITEM, (id) => ({
  payload: id,
}));

export const markItem = createAction(MARK_ITEM, (index) => ({
    payload: index
}));

export const initItem = createAction(INIT)
