import { PianoRollCard } from "../PianoRollCard/PianoRollCard";
import { DataForTwentyRolls } from "../../types/interfaces";
import './PianoRollDisplay.css'
import { MusicalSpinner } from "../MusicalSpinner/MusicalSpinner";

interface Props {
    isLoading: boolean;
    data: DataForTwentyRolls;
}

export const PianoRollDisplay = ({ data, isLoading}: Props) => {
    if (isLoading) {
        return  <MusicalSpinner/>;
    }

    if ((!data || data.length === 0) && !isLoading) {
        return <div>No data available</div>;
    }

    return (
            <div className="grid-container" >
                {data.slice(0, 20).map((rollData) =>
                    <PianoRollCard
                        key={rollData.id}
                        index={rollData.id-1}
                        rollData={rollData}
                        isSmall={false}/>)
                }
            </div>
    )
}

