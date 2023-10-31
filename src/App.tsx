
import './App.css'
import {Navbar} from "./components/Navbar/Navbar";

export const App = () => {

    return (
        <>
           <Navbar/>
            <h1> Welcome to PianoRoll frontend coding challenge!</h1>
            <div id="buttonContainer">
                <button id="loadCSV">Load Piano Rolls!</button>
            </div>
            <div id="pianoRollContainer"></div>
        </>
    )
}