import {
  ArrowDownLeft,
  ArrowUpRight,
  Trash2,
} from "lucide-react";

function TransactionItem({ transaction, onDelete }) {
  const {
    id,
    title,
    amount,
    type,
    category,
    date,
  } = transaction;

  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="transaction-item">
      <div className={`transaction-icon ${type}`}>
        {type === "income" ? (
          <ArrowDownLeft size={20} />
        ) : (
          <ArrowUpRight size={20} />
        )}
      </div>

      <div className="transaction-info">
        <h3>{title}</h3>

        <div>
          <span>{category}</span>
          <small>{formattedDate}</small>
        </div>
      </div>

      <div className={`transaction-amount ${type}`}>
        {type === "income" ? "+" : "-"} ₹
        {amount.toLocaleString("en-IN")}
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${title}`}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default TransactionItem;