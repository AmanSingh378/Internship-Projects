import { ReceiptText } from "lucide-react";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <ReceiptText size={24} />
      </div>

      <h3>No transactions yet</h3>

      <p>
        Add your first expense to start tracking your spending.
      </p>
    </div>
  );
}

export default EmptyState;