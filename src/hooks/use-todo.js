import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { toggleTodo, addTodo } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators({ toggleTodo, addTodo }, dispatch),
    [dispatch]
  );

  return { ...actions };
};
