const STORAGE_KEY = "expense-tracker";

export function getStoredExpenses() {
  try {
    const storedExpenses =
      localStorage.getItem(STORAGE_KEY);

    if (!storedExpenses) {
      return [];
    }

    return JSON.parse(storedExpenses);
  } catch (error) {
    console.error(
      "Failed to load expenses:",
      error
    );

    return [];
  }
}

export function saveExpenses(expenses) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(expenses)
    );
  } catch (error) {
    console.error(
      "Failed to save expenses:",
      error
    );
  }
}

export function clearStoredExpenses() {
  localStorage.removeItem(STORAGE_KEY);
}