import { useGetPianoRollData } from "./hooks/useGetPianoRollData";
import { PianoRollDisplay } from "./components/PianoRollDisplay/PianoRollDisplay";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { MainView } from "./components/MainView/MainView";
import { useSelectedRollAndView } from "./providers/SelectedRollAndViewProvider";
import { NotFoundView } from "./components/NotFoundView/NotFoundView";
import './App.css';


export const App = () => {
    const { data, isLoading, reFetch, fetchTrigger } = useGetPianoRollData();
    const { handleSelectRoll } = useSelectedRollAndView();
    return (
            <Router>
             <MainLayout>
                   <div >
                       <div className="buttonContainer">
                             <button onClick={()=> handleSelectRoll(0)}>
                                 <NavLink to='/grid-layout' onClick={() => {
                                     if (fetchTrigger > 0) {
                                         reFetch();
                                     }}}>Load Piano Rolls!</NavLink>
                             </button>
                       </div>

                        <Routes>
                            <Route exact path={'/'}
                                   element={null}/>
                            <Route path={'/grid-layout'}
                                element={<PianoRollDisplay
                                data={data}
                                isLoading={isLoading}
                                />}/>
                            <Route path={'/main-view'}
                                   element={<MainView data={data}/>} />
                            <Route path='*' element={<NotFoundView/>} />
                        </Routes>
                </div>
            </MainLayout>
            </Router>
    );
};


