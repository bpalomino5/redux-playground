import { handleActions } from "redux-actions";
import { setFilter } from "../actions";

import { VISIBILITY_FILTERS } from "../../constants";

const reducer = handleActions(
  {
    [setFilter]: (state, action) => action.payload.filter
  },
  VISIBILITY_FILTERS.ALL
);

export default reducer;
