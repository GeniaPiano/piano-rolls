import './PianoRollCard.css'
import React, { useState, useEffect } from 'react';
import { SvgItem } from "../SvgItem/SvgItem";
import {usePianoRollData} from "../../hooks/usePianoRollData";
import {useSelectedRollAndView} from "../../providers/SelectedRollAndViewProvider";

interface Props {
    index: number;

}

export const PianoRollCard = ({ index} : Props) => {
    const {handleSelectRoll, selectedPianoRoll, changeGridView, changeIsMainView} = useSelectedRollAndView();
    const [sequence, setSequence] = useState([]);
    const {data: apiData} = usePianoRollData();
     useEffect(() => {
        if (apiData) {
            const start = index * 60;
            const end = start + 60;
            const slicedSequence = apiData.slice(start, end);
            setSequence(slicedSequence);
        }
    }, [apiData]);

    const isSelected = index === selectedPianoRoll;

    const handleCardClick = () => {
      handleSelectRoll(index)
      changeGridView(false);
      changeIsMainView(true);
    }

    return (
        <div
            className={`piano-roll-card ${isSelected ? 'selected' : ''}`}
            onClick={handleCardClick}>
            <div className="description">
                This is a piano roll number {index + 1}
            </div>
            <div >
                <SvgItem sequence={sequence} />
            </div>
        </div>
    );
}
