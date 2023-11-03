import { PianoRollCard } from "../PianoRollCard/PianoRollCard";
import { DataForTwentyRolls } from "../../types/interfaces";
import './PianoRollDisplay.css'

interface Props {
    isLoading: boolean;
    data: DataForTwentyRolls;
}

export const PianoRollDisplay = ({ data, isLoading}: Props) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
            <div className="grid-container" >
                {data.slice(0, 20).map((rollData) =>
                    <PianoRollCard
                        key={rollData.id}
                        index={rollData.id-1}
                        rollData={rollData}
                        isSelected
                        isSmall={false}/>)
                }
            </div>
    )
}

