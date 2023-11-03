export interface SingleNoteData{
    duration: number;
    end: number;
    pitch: number;
    start: number;
    velocity: number;
}


export type SingleRollData = SingleNoteData[];


export type DataForTwentyRolls = SingleRollData[];