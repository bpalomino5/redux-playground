import { createSelector } from "reselect";
import { VISIBILITY_FILTERS } from "../constants";

/**
 * ids and table of todos separated in example for creating todo object mapped with custom id references
 * simpler structures or approaches could have been taken 
 * goal was to use createSelector with identical todolist example structures
 */

const getIdsList = state => (state.todos ? state.todos.allIds : []);
const getIdsTable = state => (state.todos ? state.todos.byIds : {});

const getTodos = createSelector(
  getIdsList,
  getIdsTable,
  (ids, table) =>
    ids.map(id => (table && table[id] ? { ...table[id], id } : {}))
);

const getVisibilityFilter = state => state.visibilityFilter;

export const getTodosByVisibilityFilter = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter(t => t.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter(t => !t.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return todos;
    }
  }
);
