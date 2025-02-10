// app/lib/bubbles.utils.ts

// Utility function for generating circles
export const generateCircles = (coins: any[]) => {
  if (!Array.isArray(coins)) {
    throw new Error(`Expected coins to be an array, but got: ${JSON.stringify(coins)}`);
  }

  // Generate circles for each coin
  const circles = coins.map((coin, index) => ({
    id: index,
    radius: Math.random() * 50 + 10, // Random radius between 10 and 60
    color: coin.color || 'blue', // Default to 'blue' if no color specified
  }));

  console.log('Generated circles:', circles);
  return circles;
};
// Function to fetch coins from an API
export const fetchCoins = async (): Promise<any[]> => {
  try {
    const response = await fetch('/api/coins'); // Replace with your API endpoint
    const data = await response.json();

    // Validate that the response is an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Failed to fetch coins:', error);
    return [];
  }
};
