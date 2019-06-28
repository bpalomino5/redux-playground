import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators({ setFilter }, dispatch),
    [dispatch]
  );

  return { ...actions };
};
