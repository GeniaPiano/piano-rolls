import React, {useState} from 'react';
import './App.css';
import {usePianoRollData} from "./hooks/usePianoRollData";
import {PianoRollDisplay} from "./components/PianoRollDisplay/PianoRollDisplay";
import {MainRollDisplayView} from "./components/MainRollDisplayView/MainRollDisplayView";
import {useSelectedRollAndView} from "./providers/SelectedRollAndViewProvider";
import {MainLayout} from "./components/MainLayout/MainLayout";




export const App = () => {
    const [showPianoRoll, setShowPianoRoll] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const {loading, reFetch} = usePianoRollData();
    const {isGridView, changeGridView, isMainView, changeIsMainView} = useSelectedRollAndView();

    const handleClick = async () => {
        if (!dataLoaded) {
            setShowPianoRoll(true);
            setDataLoaded(true);
            changeGridView(true);
                    }
        else {
             await reFetch();
            setShowPianoRoll(true);
            setDataLoaded(true);
            changeGridView(true);
        }
    };

    return (


            <MainLayout>

                <div className="app">

                    {/*BUTTONY DLA TESTU*/}
                    <button onClick={()=> {
                        setShowPianoRoll(true);
                        setDataLoaded(true);
                        changeGridView(true);
                    }}>
                        grid</button>
                    <button onClick={()=> {
                        changeGridView(false);
                        changeIsMainView(true);
                    }}>main</button>

                       <div className="buttonContainer">
                             <button onClick={handleClick}>Load Piano Rolls!</button>
                        </div>

                    {!loading && showPianoRoll && isGridView
                        &&  <PianoRollDisplay setShowPianoRoll={setShowPianoRoll}
                        />}

                    {!isGridView && !loading && isMainView
                        && <MainRollDisplayView/>}
                </div>

            </MainLayout>






    );
};


