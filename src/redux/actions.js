import { createAction } from "redux-actions";

let nextTodoId = 0;

export const addTodo = createAction("ADD_TODO", content => ({
  id: ++nextTodoId,
  content
}));

export const toggleTodo = createAction("TOGGLE_TODO", id => ({ id }));

export const setFilter = createAction("SET_FILTER", filter => ({ filter }));
