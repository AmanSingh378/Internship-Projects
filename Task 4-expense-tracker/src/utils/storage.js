const STORAGE_KEY = "expense-tracker-transactions";

export const getTransactions = () => {
  try {
    const savedTransactions = localStorage.getItem(STORAGE_KEY);

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  } catch (error) {
    console.error("Failed to load transactions:", error);
    return [];
  }
};

export const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error("Failed to save transactions:", error);
  }
};

export const clearTransactions = () => {
  localStorage.removeItem(STORAGE_KEY);
};