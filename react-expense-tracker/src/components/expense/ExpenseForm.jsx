
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

import Button from "../common/Button";
import { categories } from "../../data/categories";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Reference to the title input
  const titleRef = useRef(null);

  // Focus the title field when the component mounts
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !amount ||
      Number(amount) <= 0 ||
      !category
    ) {
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");

    // Focus the title field for the next entry
    titleRef.current?.focus();
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2>Add Transaction</h2>
          <p>Record a new expense</p>
        </div>
      </div>

      <form
        className="expense-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">Expense Title</label>
          <input
            ref={titleRef}
            id="title"
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="e.g. Grocery shopping"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="amount">Amount</label>

            <div className="amount-input">
              <span>₹</span>
              <input
                id="amount"
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(event) =>
                  setAmount(event.target.value)
                }
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>

            <select
              id="category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              required
            >
              <option value="">Select category</option>

              {categories.map((item) => (
                <option
                  key={item.name}
                  value={item.name}
                >
                  {item.icon} {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit">
          <Plus size={18} />
          Add Expense
        </Button>
      </form>
    </div>
  );
}

export default ExpenseForm;