import axios from "axios";
 

export function requestItem(config) {
  const instance = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
    timeout: 5000
  });
  
  return instance(config);
}