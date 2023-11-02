import {PianoRollCard} from "../PianoRollCard/PianoRollCard";
import {useSelectedRollAndView} from "../../providers/SelectedRollAndViewProvider";


export const MainRollDisplayView = () => {

    const {selectedPianoRoll} = useSelectedRollAndView()



    return (
        <div className="grid-container" >
            <PianoRollCard index={selectedPianoRoll}/>
        </div>
    )
}