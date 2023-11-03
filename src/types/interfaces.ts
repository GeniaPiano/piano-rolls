export interface SingleNoteData {
    duration: number;
    end: number;
    pitch: number;
    start: number;
    velocity: number;
}

export type SingleRollData = SingleNoteData[];

export interface OneRollData {
    id: number;
    oneRollData: SingleRollData;
}

export type DataForTwentyRolls = OneRollData[];