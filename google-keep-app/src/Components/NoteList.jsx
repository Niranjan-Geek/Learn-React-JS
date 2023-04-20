import React from "react";
import Note from "./Note";

const NoteList = (props) => {
    return(
        <>
            <div className="note-list">
                {props.itemAdd.map((val, index) => {
                    return <Note 
                        key={index}
                        id={index}
                        title={val.title}
                        message={val.message}
                        onDeleteNote={props.deleteNote}
                    />
                })}
            </div>
        </>
    )
}

export default NoteList;