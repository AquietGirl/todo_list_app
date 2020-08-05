import { createReducer } from "@reduxjs/toolkit";
import { LOADING_TOGGLE } from "../action/actionType";

const defaultState = {
  loading: false,
};

export default createReducer(defaultState, {
  [LOADING_TOGGLE]: (state, action) => ({
    loading: action.payload.loading,
  })
});
