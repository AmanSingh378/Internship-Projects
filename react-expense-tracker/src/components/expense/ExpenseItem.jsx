import { Trash2 } from "lucide-react";

function ExpenseItem({
  title,
  category,
  amount,
  date,
  onDelete,
}) {
  return (
    <div className="expense-item">
      <div className="expense-main">
        <div className="expense-category-icon">
          {getCategoryIcon(category)}
        </div>

        <div className="expense-info">
          <h3>{title}</h3>

          <p>
            {category} · {date}
          </p>
        </div>
      </div>

      <div className="expense-actions">
        <strong>
          ₹{amount.toLocaleString("en-IN")}
        </strong>

        <button
          type="button"
          className="delete-button"
          aria-label={`Delete ${title}`}
          onClick={onDelete}
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
}

function getCategoryIcon(category) {
  const icons = {
    Food: "🍔",
    Travel: "✈️",
    Shopping: "🛍️",
    Bills: "💡",
    Entertainment: "🎬",
    Health: "💊",
    Education: "📚",
    Other: "📦",
  };

  return icons[category] || "📦";
}

export default ExpenseItem;