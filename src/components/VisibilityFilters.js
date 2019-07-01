import React from "react";
import cx from "classnames";
import useVisibilityFilter from "../hooks/use-visibility-filter";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = () => {
  const { activeFilter, setFilter } = useVisibilityFilter();
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
