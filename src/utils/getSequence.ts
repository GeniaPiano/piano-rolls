import { OneRollData } from "../types/interfaces";


export const getSequence = (rollData: OneRollData, index: number) => {
    if (rollData) {
        const start = index * 60;
        const end = start + 60;
        return rollData.oneRollData.slice(start, end)
  }
}