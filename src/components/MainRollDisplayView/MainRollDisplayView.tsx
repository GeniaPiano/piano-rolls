import {PianoRollCard} from "../PianoRollCard/PianoRollCard";
import {useSelectedRollAndView} from "../../providers/SelectedRollAndViewProvider";
import {usePianoRollData} from "../../hooks/usePianoRollData";


export const MainRollDisplayView = () => {

    const {selectedPianoRoll} = useSelectedRollAndView();
    const indexToRemove = selectedPianoRoll;
    const {data} = usePianoRollData();

    if (data === null) {

        return <div>Loading...</div>;
    }
    const smallRollsData = data
        .slice(0, 20)
        .filter((roll) => roll.id !== indexToRemove);

    return (

        <div className="main-view">
            <div className="main-roll">
                <PianoRollCard index={selectedPianoRoll} isSmall={false} />
            </div>

              <div className="small-rolls">
               {smallRollsData.map((rollData, index) => (
                        <PianoRollCard isSmall={true}
                                       key={index}
                                       data={rollData}
                                       index={index}/>
                    ))}
            </div>
        </div>
    )
}