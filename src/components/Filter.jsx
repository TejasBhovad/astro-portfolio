import React, { useState, useEffect } from "react";

const Filter = ({ currentFilter, setCurrentFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Set the filter to "all" by default when no filter is selected
    if (activeFilter === "") {
      setCurrentFilter("all");
    }
  }, [activeFilter, setCurrentFilter]);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) {
      setActiveFilter(""); // Deselect the active filter
      setCurrentFilter("all");
    } else {
      setActiveFilter(filter);
      setCurrentFilter(filter);
    }
  };

  return (
    <div className="project-filter gap-2 flex py-4 project-panel">
      <button
        className={`project-filter-item ${
          activeFilter === "web"
            ? "bg-primary font-medium dark:font-semibold dark:text-black text-white px-2 text-lg rounded-md text-center flex items-center justify-center"
            : "bg-lightSecondary dark:bg-darkSecondary dark:font-medium font-medium text-darkSecondary dark:text-white px-2 text-lg rounded-md flex items-center justify-center"
        }`}
        onClick={() => handleFilterChange("web")}
      >
        web
      </button>
      <button
        className={`project-filter-item ${
          activeFilter === "desktop"
            ? "bg-primary font-medium dark:font-semibold dark:text-black text-white px-2 text-lg rounded-md text-center flex items-center justify-center"
            : "bg-lightSecondary dark:bg-darkSecondary dark:font-medium font-medium text-darkSecondary dark:text-white px-2 text-lg rounded-md flex items-center justify-center"
        }`}
        onClick={() => handleFilterChange("desktop")}
      >
        desktop
      </button>
      <button
        className={`project-filter-item ${
          activeFilter === "other"
            ? "bg-primary font-medium dark:font-semibold dark:text-black text-white px-2 text-lg rounded-md text-center flex items-center justify-center"
            : "bg-lightSecondary dark:bg-darkSecondary dark:font-medium font-medium text-darkSecondary dark:text-white px-2 text-lg rounded-md flex items-center justify-center"
        }`}
        onClick={() => handleFilterChange("other")}
      >
        other
      </button>
    </div>
  );
};

export default Filter;
