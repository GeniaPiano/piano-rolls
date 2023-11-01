import { useState, useEffect } from 'react';

export const usePianoRollData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState<number>(0);
    const reFetch = () => setCounter(prev => prev + 1)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://pianoroll.ai/random_notes');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const newData = await response.json();
                setData(newData);
                setLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                setLoading(false);
            }
        })()
    }, [counter])



    return { data, loading, reFetch};
};






