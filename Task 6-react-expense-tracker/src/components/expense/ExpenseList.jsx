import ExpenseItem from "./ExpenseItem";
import EmptyState from "../common/EmptyState";

function ExpenseList({
  expenses,
  onDeleteExpense,
}) {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2>Transactions</h2>
          <p>Your recent expenses</p>
        </div>

        <span className="transaction-count">
          {expenses.length}{" "}
          {expenses.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="expense-list">
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              {...expense}
              onDelete={() =>
                onDeleteExpense(expense.id)
              }
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default ExpenseList;