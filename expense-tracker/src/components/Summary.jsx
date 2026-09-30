import {
  ArrowDownLeft,
  ArrowUpRight,
  WalletCards,
} from "lucide-react";

function Summary({ income, expenses, balance }) {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="summary-grid">
      <div className="summary-card income-card">
        <div className="summary-icon">
          <ArrowDownLeft size={22} />
        </div>

        <div>
          <p>Total Income</p>
          <h2>{formatAmount(income)}</h2>
        </div>
      </div>

      <div className="summary-card expense-card">
        <div className="summary-icon">
          <ArrowUpRight size={22} />
        </div>

        <div>
          <p>Total Expenses</p>
          <h2>{formatAmount(expenses)}</h2>
        </div>
      </div>

      <div className="summary-card balance-card">
        <div className="summary-icon">
          <WalletCards size={22} />
        </div>

        <div>
          <p>Current Balance</p>
          <h2>{formatAmount(balance)}</h2>
        </div>
      </div>
    </section>
  );
}

export default Summary;