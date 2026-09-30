import { useState } from "react";
import { Plus } from "lucide-react";
import { categories } from "../data/categories";

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, amount, type, category, date } = formData;

    if (!title.trim()) {
      setError("Please enter a transaction title.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    const transaction = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date,
    };

    onAddTransaction(transaction);

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "Food",
      date: new Date().toISOString().split("T")[0],
    });

    setError("");
  };

  return (
    <section className="form-card">
      <div className="section-heading">
        <div>
          <h2>Add Transaction</h2>
          <p>Record your income or expenses</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="type-switch">
          <label
            className={formData.type === "expense" ? "active" : ""}
          >
            <input
              type="radio"
              name="type"
              value="expense"
              checked={formData.type === "expense"}
              onChange={handleChange}
            />
            Expense
          </label>

          <label
            className={formData.type === "income" ? "active" : ""}
          >
            <input
              type="radio"
              name="type"
              value="income"
              checked={formData.type === "income"}
              onChange={handleChange}
            />
            Income
          </label>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Grocery Shopping"
            />
          </div>

          <div className="form-group">
            <label>Amount</label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="1"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button className="primary-btn" type="submit">
          <Plus size={18} />
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;