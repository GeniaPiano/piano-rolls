import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {usePianoRollData} from "./hooks/usePianoRollData";
import {PianoRollDisplay} from "./components/PianoRollDisplay/PianoRollDisplay";


export const App = () => {
    const [showPianoRoll, setShowPianoRoll] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { data, loading, reFetch } = usePianoRollData();

    const handleClick = async () => {
        if (!dataLoaded) {
            setShowPianoRoll(true);
            setDataLoaded(true);
        } else {
            reFetch();
        }
    };

    return (
        <div className="app">
            <Navbar />
            <h1>Welcome to PianoRoll frontend coding challenge!</h1>
            <div id="buttonContainer">
                <button id="loadCSV" onClick={handleClick}>Load Piano Rolls!</button>
            </div>
            {showPianoRoll && !loading && <PianoRollDisplay data={data} />} {/* Wyświetl PianoRollDisplay z nowymi danymi */}
        </div>
    );
};


