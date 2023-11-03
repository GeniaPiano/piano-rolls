import { useSelectedRollAndView } from "../../providers/SelectedRollAndViewProvider";
import { PianoRollCardMain } from "../PianoRollCardMain/PianoRollCardMain";
import { DataForTwentyRolls } from "../../types/interfaces";
import "./MainView.css"

interface Props {
    data:  DataForTwentyRolls;
}

export const MainView = ({ data }: Props) => {

    const { selectedPianoRoll } = useSelectedRollAndView();
    const idToRemove = selectedPianoRoll;
    if (!data) {
        return <div>Loading...</div>;
    }

    const smallRollsData = data
        .filter((roll) => (roll.id -1) !== (idToRemove));


    return (

        <div className="main-view">
            <div className="left-section">
                <PianoRollCardMain rollData={data[selectedPianoRoll]} index={selectedPianoRoll} isSmall={false} />
            </div>

              <div className="right-section">
              <div className="piano-rolls-list">
                  {smallRollsData.map((rollData) => (
                      <PianoRollCardMain
                          isSmall={true}
                          key={rollData.id}
                          rollData={rollData}
                          index={rollData.id - 1}/>
                  ))}
              </div>
            </div>
        </div>
    )
}