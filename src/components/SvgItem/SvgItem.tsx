import React from "react";
import { generateGradientTable } from "../../utils/generateGradientTable";
import { SingleNoteData } from "../../types/interfaces";
import './Svg.Item.css'

interface Props {
    sequence: SingleNoteData[];
    isSmall: boolean;
}

export const SvgItem = ({ sequence, isSmall } : Props) => {
    const backgroundStartColor = { r: 93, g: 181, b: 213 };
    const backgroundEndColor = { r: 21, g: 65, b: 81 };
    const backgroundColormap = generateGradientTable(backgroundStartColor, backgroundEndColor, 128);

    const noteStartColor = { r: 66, g: 66, b: 61 };
    const noteEndColor = { r: 28, g: 28, b: 26 };
    const noteColormap = generateGradientTable(noteStartColor, noteEndColor, 128);

    const timeToX = (time, start, end) => {
        return (time - start) / (end - start);
    };

    const pitches = sequence.map((note) => note.pitch);

    let pitch_min = Math.min(...pitches);
    let pitch_max = Math.max(...pitches);
    let pitch_span = pitch_max - pitch_min;

    if (pitch_span < 24) {
        const diff = 24 - pitch_span;
        const low = Math.ceil(diff / 2);
        const high = Math.floor(diff / 2);
        pitch_min -= low;
        pitch_max += high;
    }

    pitch_min -= 3;
    pitch_max += 3;
    pitch_span = pitch_max - pitch_min;
    const note_height = 1 / pitch_span;

    return (
        <div >
            <svg className="piano-roll-svg" width="80%" height={isSmall ? 100 : 200}>
                {Array.from({ length: pitch_max - pitch_min + 2 }, (_, index) => {
                    const it = index + pitch_min;
                    return (
                        <React.Fragment key={it}>
                            {it % 12 === 1 || it % 12 === 3 || it % 12 === 6 || it % 12 === 8 || it % 12 === 10 ? (
                                <rect
                                    x="0"
                                    y={(1 - (it - pitch_min) / pitch_span) * 100 + "%"}
                                    width="100%"
                                    height={100 / pitch_span + "%"}
                                    fill={backgroundColormap[12]}
                                    fillOpacity="0.666"
                                />
                            ) : null}
                            <line
                                x1="0"
                                y1={(1 - (it - pitch_min) / pitch_span + 1 / pitch_span) * 100 + "%"}
                                x2="100%"
                                y2={(1 - (it - pitch_min) / pitch_span + 1 / pitch_span) * 100 + "%"}
                                strokeWidth={it % 12 === 0 ? 0.3 : 0.1}
                                stroke="black"
                            />
                        </React.Fragment>
                    );
                })}
                {sequence.map((note, noteIndex) => {
                    const x = timeToX(note.start, sequence[0].start, sequence[sequence.length - 1].end) * 100 + "%";
                    const w = (timeToX(note.end, sequence[0].start, sequence[sequence.length - 1].end) - timeToX(note.start, sequence[0].start, sequence[sequence.length - 1].end)) * 100 + "%";
                    const y = (1 - (note.pitch - pitch_min) / pitch_span) * 100 + "%";
                    const color = noteColormap[note.velocity];

                    return (
                        <rect
                            key={noteIndex}
                            x={x}
                            width={w}
                            y={y}
                            height={note_height * 100 + "%"}
                            fill={color}
                        />
                    );
                })}
            </svg>
        </div>
    );
};


