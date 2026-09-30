
import { useEffect, useMemo, useState } from "react";

import {
  getStoredExpenses,
  saveExpenses,
} from "../utils/storage";

function useExpenses() {
  const [expenses, setExpenses] = useState(() => {
    return getStoredExpenses();
  });

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const filteredExpenses = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = expenses.filter((expense) => {
      const matchesCategory =
        filter === "All" || expense.category === filter;

      const matchesSearch =
        expense.title.toLowerCase().includes(query) ||
        expense.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return b.id.localeCompare(a.id);

        case "amount-low":
          return a.amount - b.amount;

        case "amount-high":
          return b.amount - a.amount;

        case "newest":
        default:
          return b.id.localeCompare(a.id);
      }
    });
  }, [expenses, filter, search, sortBy]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
  }, [expenses]);

  const averageExpense =
    expenses.length > 0
      ? Math.round(totalExpenses / expenses.length)
      : 0;

  const monthlyExpenses = useMemo(() => {
    const now = new Date();

    return expenses.reduce((total, expense) => {
      // Use the saved ISO date when available.
      if (!expense.isoDate) {
        return total;
      }

      const expenseDate = new Date(`${expense.isoDate}T00:00:00`);

      if (
        expenseDate.getFullYear() === now.getFullYear() &&
        expenseDate.getMonth() === now.getMonth()
      ) {
        return total + expense.amount;
      }

      return total;
    }, 0);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((currentExpenses) => [
      {
        ...expense,
        isoDate: new Date().toISOString().slice(0, 10),
      },
      ...currentExpenses,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id)
    );
  };

  return {
    expenses,
    filteredExpenses,
    filter,
    setFilter,
    search,
    setSearch,
    sortBy,
    setSortBy,
    totalExpenses,
    averageExpense,
    monthlyExpenses,
    addExpense,
    deleteExpense,
  };
}

export default useExpenses;