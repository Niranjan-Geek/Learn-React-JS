import React from "react";
import Note from "./Note";

const NoteList = () => {
    return(
        <>
            <div className="note-list">
                {addItem.map((val, index) => {
                    return <Note 
                        key={index}
                        id={index}
                        title={val.title}
                        message={val.message}
                    />
                })}
            </div>
        </>
    )
}

export default NoteList;