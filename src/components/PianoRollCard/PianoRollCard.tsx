import React, { useState, useEffect } from 'react';
import { SvgItem } from "../SvgItem/SvgItem";
import { useSelectedRollAndView } from "../../providers/SelectedRollAndViewProvider";
import { useNavigate } from 'react-router-dom'
import { OneRollData } from "../../types/interfaces";
import './PianoRollCard.css'
import {getSequence} from "../../utils/getSequence";

interface Props {
    index: number;
    isSmall: boolean;
    rollData: OneRollData;
}

export const  PianoRollCard = ({ index, isSmall, rollData} : Props) => {
    const navigate = useNavigate();
    const {handleSelectRoll, changeGridView, changeIsMainView} = useSelectedRollAndView();
    const [sequence, setSequence] = useState([]);

     useEffect(() => {
        const slicedSequence = getSequence(rollData, index)
        setSequence(slicedSequence);
            }, [rollData]);

    const handleCardClick = () => {
      handleSelectRoll(index)
      changeGridView(false);
      changeIsMainView(true);
      navigate('/main-view')
    }

    return (
        <div
            className={`piano-roll-card ${isSmall} ? 'small' : ''`}
            onClick={handleCardClick}>
            <div className="description">
                This is a piano roll number {rollData.id}
            </div>
            <div>
                <SvgItem sequence={sequence}  isSmall={false}/>
            </div>
        </div>
    );
}
