import { Search, SlidersHorizontal } from "lucide-react";
import { categories } from "../data/categories";

function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="filter-select">
        <SlidersHorizontal size={17} />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-select">
        <select
          value={selectedType}
          onChange={(event) =>
            setSelectedType(event.target.value)
          }
        >
          <option value="All">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;