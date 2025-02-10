// app/ui/Bubbles.tsx

import React, { useEffect, useState } from 'react';
import { generateCircles, fetchCoins } from '../../lib/bubbles.utils'; // Import utility functions

const Bubbles: React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndGenerate = async () => {
      try {
        const coinsData = await fetchCoins();
        setCoins(coinsData);

        // Generate circles based on the fetched coins data
        generateCircles(coinsData);
      } catch (err: any) {
        console.error('Error generating circles:', err);
        setError(err.message || 'An unexpected error occurred fetching coins');
      }
    };

    fetchAndGenerate();
  }, []);

  return (
    <div>
      <h1>Crypto Bubbles</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{coins.length} coins loaded successfully.</p>
      )}
    </div>
  );
};

export default Bubbles;
