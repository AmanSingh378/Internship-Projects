
import { Search } from "lucide-react";

function ExpenseSearch({ search, onSearchChange }) {
  return (
    <div className="search-box">
      <Search size={18} />

      <input
        type="search"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search transactions..."
        aria-label="Search transactions"
      />

      {search && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default ExpenseSearch;