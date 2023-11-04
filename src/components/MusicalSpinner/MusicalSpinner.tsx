import "./MusicalSpinner.css"

export const MusicalSpinner = () => {
    return (

        <div className="music-notes-div">
             <div className="note-1">
                &#9835; &#9833;
            </div>
            <div className="note-2">
                &#9833;
            </div>
            <div className="note-3">
                &#9839; &#9834;
            </div>
            <div className="note-4">
                &#9834;
            </div>
             <div className="loading note-2">Loading...</div>
        </div>

    )
}