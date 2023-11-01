import './PianoRollDisplay.css'
import {usePianoRollData} from "../../hooks/usePianoRollData";
import {PianoRollCard} from "../PianoRollCard/PianoRollCard";

export const PianoRollDisplay = () => {
    const { data, loading } = usePianoRollData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="pianoRollContainer">
            {data.slice(0, 20).map((rollData, index) =>
                <PianoRollCard key={index} index={index} data={rollData} />)
            }
        </div>
    )
}

