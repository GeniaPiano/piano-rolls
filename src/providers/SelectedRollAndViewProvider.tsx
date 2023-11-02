import {createContext, useContext, useState} from "react";

interface SelectedRollContext {
    isGridView: boolean;
    isMainView: boolean;
    selectedPianoRoll: string;
    handleSelectRoll: (id: number)=> void;
    changeGridView: (bool: boolean) => void;
    changeIsMainView: (bool: boolean) => void;
}

const SelectedRollContext = createContext<SelectedRollContext | undefined>(undefined);

export const SelectedRollProvider = ({ children }) => {
    const [isGridView, setIsGridView] = useState(false);
    const [selectedPianoRoll, setSelectedPianoRoll] = useState<string>(null);
    const [isMainView, setIsMainView] = useState(false);

    const changeGridView =(bool: boolean)=> setIsGridView(bool);
    const changeIsMainView =(bool: boolean)=> setIsMainView(bool);

    const handleSelectRoll = (id) => {
        setSelectedPianoRoll(id)
    }

    return (
        <SelectedRollContext.Provider value={{
            isGridView,
            isMainView,
            handleSelectRoll,
            changeGridView,
            selectedPianoRoll,
            changeIsMainView,

        }}>
            {children}
        </SelectedRollContext.Provider>
    );
};

export const useSelectedRollAndView = () => {
    const context = useContext(SelectedRollContext);

    if (!context) {
        throw new Error('useSelectedRoll must be used within a SelectedRollProvider');
    }

    return context;
};