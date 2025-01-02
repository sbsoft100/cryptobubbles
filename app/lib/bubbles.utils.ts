// Bubbles.tsx

import React, { useEffect, useState } from 'react';

// Utility function for generating circles
const BubblesUtils = {
    generateCircles: (coins: any) => {
        if (!Array.isArray(coins)) {
            throw new Error(`Expected coins to be an array, but got: ${JSON.stringify(coins)}`);
        }

        // Example processing of coins into circle objects
        const circles = coins.map((coin: any, index: number) => ({
            id: index,
            radius: Math.random() * 50 + 10, // Random radius between 10 and 60
            color: coin.color || 'blue', // Default to 'blue' if no color specified
        }));

        console.log('Generated circles:', circles);
        return circles;
    },
};

// Function to fetch coins from an API
const fetchCoins = async (): Promise<any[]> => {
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

// React component
const Bubbles: React.FC = () => {
    const [coins, setCoins] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAndGenerate = async () => {
            try {
                const coinsData = await fetchCoins();
                setCoins(coinsData);

                // Validate and generate circles
                BubblesUtils.generateCircles(coinsData);
            } catch (err: any) {
                console.error('Error generating circles:', err);
                setError(err.message || 'An unexpected error occurred');
            }
        };

        fetchAndGenerate();
    }, []);

    return (
        <div>
            {error ? (
                <div style={{ color: 'red' }}>
                    <strong>Error:</strong> {error}
                </div>
            ) : (
                <div>
                    <p>Rendering circles for coins...</p>
                </div>
            )}
        </div>
    );
};

export default Bubbles;
