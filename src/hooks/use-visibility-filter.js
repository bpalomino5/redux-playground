import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

export default () => {
  const activeFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators({ setFilter }, dispatch),
    [dispatch]
  );

  return { ...actions, activeFilter };
};
