export const fetchExchangeRate = async () => {
  try {
    const response = await fetch(
      "https://open.er-api.com/v6/latest/INR"
    );

    if (!response.ok) {
      throw new Error("Unable to fetch exchange rate");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};