import axios from "axios";
import { LOADING_TOGGLE } from "../action/actionType";
import store from '../store'

const todoApi = axios.create({
  baseURL: `https://5e9ec500fb467500166c4658.mockapi.io/todos`,
});

todoApi.interceptors.request.use(
  (req) => {
    store.dispatch({ type: LOADING_TOGGLE, payload: { loading: true } });
    return req;
  },
  (error) => error
);

todoApi.interceptors.response.use(
  (req) => {
    store.dispatch({ type: LOADING_TOGGLE, payload: { loading: false } });
    return req;
  },
  (error) => error
);

export default todoApi