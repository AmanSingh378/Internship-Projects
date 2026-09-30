import { useEffect, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import SearchFilter from "./components/SearchFilter";
import TransactionList from "./components/TransactionList";

import {
  getTransactions,
  saveTransactions,
} from "./utils/storage";

import {
  calculateBalance,
  calculateExpenses,
  calculateIncome,
} from "./utils/calculations";

import { filterTransactions } from "./utils/transactionUtils";

function App() {
  const [transactions, setTransactions] = useState(() => {
    return getTransactions();
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    setTransactions((previous) => [
      transaction,
      ...previous,
    ]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id)
    );
  };

  const income = useMemo(() => {
    return calculateIncome(transactions);
  }, [transactions]);

  const expenses = useMemo(() => {
    return calculateExpenses(transactions);
  }, [transactions]);

  const balance = calculateBalance(income, expenses);

  const filteredTransactions = useMemo(() => {
    return filterTransactions(
      transactions,
      searchTerm,
      selectedCategory,
      selectedType
    );
  }, [
    transactions,
    searchTerm,
    selectedCategory,
    selectedType,
  ]);

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="hero">
          <p className="eyebrow">PERSONAL FINANCE</p>

          <h2>
            Take control of your
            <span> money.</span>
          </h2>

          <p>
            Track your income and expenses in one simple place.
          </p>
        </section>

        <Summary
          income={income}
          expenses={expenses}
          balance={balance}
        />

        <TransactionForm
          onAddTransaction={handleAddTransaction}
        />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <TransactionList
          transactions={filteredTransactions}
          onDelete={handleDeleteTransaction}
        />
      </main>

      <footer>
        <p>Expense Tracker • Built with React & JavaScript</p>
      </footer>
    </>
  );
}

export default App;
