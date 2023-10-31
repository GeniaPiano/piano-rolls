import { useState, useEffect } from 'react';

export const usePianoRollData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://pianoroll.ai/random_notes');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        })();
    }, []);

    return data;
};


