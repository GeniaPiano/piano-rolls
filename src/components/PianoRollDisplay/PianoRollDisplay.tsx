import './PianoRollDisplay.css'
import {usePianoRollData} from "../../hooks/usePianoRollData";
import {PianoRollCard} from "../PianoRollCard/PianoRollCard";


export const PianoRollDisplay = ({setShowPianoRoll}) => {
    const { data, loading } = usePianoRollData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
            <div className="grid-container" >
                {data.slice(0, 20).map((rollData, index) =>
                    <PianoRollCard
                        key={index}
                        index={index}
                        data={rollData}
                        setShowPianoRoll={setShowPianoRoll}
                        isSelected
                        isSmall={false}/>)
                }
            </div>
    )
}

