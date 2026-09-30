export const calculateIncome = (transactions) => {
  return transactions
    .filter(({ type }) => type === "income")
    .reduce((total, { amount }) => total + Number(amount), 0);
};

export const calculateExpenses = (transactions) => {
  return transactions
    .filter(({ type }) => type === "expense")
    .reduce((total, { amount }) => total + Number(amount), 0);
};

export const calculateBalance = (income, expenses) => {
  return income - expenses;
};