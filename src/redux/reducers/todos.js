import { handleActions } from "redux-actions";
import { addTodo, toggleTodo } from "../actions";

const reducer = handleActions(
  {
    [addTodo]: (state, action) => {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    },
    [toggleTodo]: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
  },
  {
    allIds: [],
    byIds: {}
  }
);

export default reducer;
