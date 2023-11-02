import {useState, useEffect, useCallback} from 'react';
import {API_URL} from "../utils/apiUrl";

export const usePianoRollData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState<number>(0);

    const reFetch = useCallback(() => {
        if (!loading) {
            setLoading(true);
            setCounter(prev => prev + 1);
        }
    }, [loading])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const newData = await response.json();
                const dataWithUniqueId = newData.map((roll, index) => ({
                    ...roll,
                    id: `roll_${index}`
                }))

                setData(dataWithUniqueId);
                setLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                setLoading(false);
            }
        })()
    }, [counter, reFetch])



    return { data, loading, reFetch};
};






