import {useState, useEffect} from 'react';
import {API_URL} from "../utils/apiUrl";
import {DataForTwentyRolls, SingleRollData} from "../types/interfaces";

export const useGetPianoRollData = () => {
    const [data, setData] = useState<DataForTwentyRolls>([])
    const [isLoading, setIsLoading] = useState(true);
    const [fetchTrigger, setFetchTrigger] = useState<number>(0);
    const [isError, setIsError] = useState(false);

    const reFetch = () => setFetchTrigger(prev => prev + 1);

    useEffect(() => {
            (async () => {
                try {
                    const newData: DataForTwentyRolls  = [];
                    for (let i = 0; i < 20; i++) {
                        const response = await fetch(API_URL);
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        const singleRollData = (await response.json()) as SingleRollData
                        newData.push(singleRollData)
                    }
                    setData(newData)
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error loading data:', error);
                    setIsLoading(false);
                    setIsError(true);
                    setData([]);
                }
            })()

    }, [fetchTrigger])



    return { data, isLoading, isError, reFetch, fetchTrigger};
};






