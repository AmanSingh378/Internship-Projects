function FilterBar({ currentFilter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={currentFilter === filter ? "active" : ""}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;