import './PianoRollCard.css'
import React, { useState, useEffect } from 'react';
import { SvgItem } from "../SvgItem/SvgItem";
import {usePianoRollData} from "../../hooks/usePianoRollData";

interface Props {
    index: number;
}

export const PianoRollCard = ({ index } : Props) => {
    const [sequence, setSequence] = useState([]);
    const {data: apiData} = usePianoRollData();

    useEffect(() => {
        if (apiData) {
            const start = index * 60;
            const end = start + 60;
            const sequence = apiData.slice(start, end);
            setSequence(sequence);
        }
    }, [apiData, index]);

    return (
        <div className="piano-roll-card">
            <div className="description">
                This is a piano roll number {index + 1}
            </div>
            <div >
                <SvgItem sequence={sequence}/>
            </div>
        </div>
    );
}
