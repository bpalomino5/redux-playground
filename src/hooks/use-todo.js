import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, addTodo } from "../redux/actions";
import { getTodosByVisibilityFilter } from "../redux/selectors";

export default () => {
  const todos = useSelector(getTodosByVisibilityFilter);
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators({ toggleTodo, addTodo }, dispatch),
    [dispatch]
  );

  return { ...actions, todos };
};
