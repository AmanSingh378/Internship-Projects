import { Receipt } from "lucide-react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  return (
    <section className="transactions-card">
      <div className="section-heading">
        <div>
          <h2>Transaction History</h2>
          <p>{transactions.length} transactions found</p>
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <Receipt size={42} />

          <h3>No transactions found</h3>

          <p>
            Add a transaction or change your search filters.
          </p>
        </div>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TransactionList;