import React, { useState, useEffect } from 'react';
import { SvgItem } from "../SvgItem/SvgItem";
import { useSelectedRollAndView } from "../../providers/SelectedRollAndViewProvider";
import { OneRollData } from "../../types/interfaces";
import "./PianoRollCardMain.css"
import {getSequence} from "../../utils/getSequence";

interface Props {
    index: number;
    isSmall: boolean;
    rollData: OneRollData;
}

export const PianoRollCardMain = ({ index, isSmall, rollData} : Props) => {

    const { handleSelectRoll, selectedPianoRoll } = useSelectedRollAndView();
    const [sequence, setSequence] = useState([]);
    useEffect(() => {
        const slicedSequence = getSequence(rollData, index);
        setSequence(slicedSequence);
    }, [rollData]);

    const isSelected = index === selectedPianoRoll;

    const handleCardClick = () => {
        handleSelectRoll(index)
    }

    return (
        <div
            className={`piano-roll-card-main ${isSelected ? 'selected' : ''} ${isSmall? 'small' : ''}`}
            onClick={handleCardClick}>
            <div className="description">
                {isSmall ? `roll no ${index + 1}` : `This is a piano roll number ${index + 1}`   }

            </div>
            <div>
                {isSmall ? (
                    <SvgItem isSmall={true} sequence={sequence} />
                ) : (
                    <SvgItem isSmall={false} sequence={sequence} />
                )}
            </div>
        </div>
    );
}
