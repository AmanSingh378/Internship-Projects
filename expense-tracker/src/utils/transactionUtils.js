export const filterTransactions = (
  transactions,
  searchTerm,
  category,
  type
) => {
  return transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || transaction.category === category;

    const matchesType = type === "All" || transaction.type === type;

    return matchesSearch && matchesCategory && matchesType;
  });
};