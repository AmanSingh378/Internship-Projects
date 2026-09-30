
import {
  ArrowDownRight,
  CalendarDays,
  Receipt,
  Wallet,
} from "lucide-react";

import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import StatCard from "./components/common/StatCard";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import CategoryFilter from "./components/expense/CategoryFilter";
import ExpenseSearch from "./components/expense/ExpenseSearch";

import useExpenses from "./hooks/useExpenses";

function App() {
  const {
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
  } = useExpenses();

  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN")}`;

  return (
    <>
      <Header />

      <main>
        <Container>
          <section className="hero-section">
            <div>
              <span className="eyebrow">
                PERSONAL FINANCE
              </span>

              <h2>
                Keep your expenses
                <span> under control.</span>
              </h2>

              <p>
                Track your spending, organize transactions,
                and understand where your money goes.
              </p>
            </div>
          </section>

          <section className="stats-grid">
            <StatCard
              title="Total Expenses"
              value={formatCurrency(totalExpenses)}
              description="Across all categories"
              icon={<Wallet size={20} />}
            />

            <StatCard
              title="Transactions"
              value={expenses.length}
              description="Recorded transactions"
              icon={<Receipt size={20} />}
            />

            <StatCard
              title="Average Expense"
              value={formatCurrency(averageExpense)}
              description="Per transaction"
              icon={<ArrowDownRight size={20} />}
            />

            <StatCard
              title="This Month"
              value={formatCurrency(monthlyExpenses)}
              description="Spending this calendar month"
              icon={<CalendarDays size={20} />}
            />
          </section>

          <section className="content-grid">
            <ExpenseForm onAddExpense={addExpense} />

            <div>
              <ExpenseSearch
                search={search}
                onSearchChange={setSearch}
              />

              <CategoryFilter
                activeCategory={filter}
                onCategoryChange={setFilter}
              />

              <div className="sort-row">
                <label htmlFor="sort-expenses">
                  Sort by
                </label>

                <select
                  id="sort-expenses"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="amount-high">
                    Highest amount
                  </option>
                  <option value="amount-low">
                    Lowest amount
                  </option>
                </select>
              </div>

              <div className="list-spacing">
                <ExpenseList
                  expenses={filteredExpenses}
                  onDeleteExpense={deleteExpense}
                />
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;