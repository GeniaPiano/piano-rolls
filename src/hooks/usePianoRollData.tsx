import { useState, useEffect } from 'react';
import {API_URL} from "../utils/apiUrl";

export const usePianoRollData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState<number>(0);
    const reFetch = () => setCounter(prev => prev + 1)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL);
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
    }, [counter, reFetch])



    return { data, loading, reFetch};
};






