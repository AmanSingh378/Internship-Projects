import { categories } from "../../data/categories";

function CategoryFilter({
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="filter-section">
      <div className="filter-heading">
        <span>Filter by category</span>
      </div>

      <div className="filter-list">
        <button
          type="button"
          className={`filter-button ${
            activeCategory === "All" ? "active" : ""
          }`}
          onClick={() => onCategoryChange("All")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            className={`filter-button ${
              activeCategory === category.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              onCategoryChange(category.name)
            }
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;