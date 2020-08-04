import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM } from "./actionType";

export const addItem = createAction(ADD_ITEM, (inputValue) => ({
  payload: inputValue,
}));

export const deleteItem = createAction(DELETE_ITEM, (index) => ({
  payload: index,
}));
