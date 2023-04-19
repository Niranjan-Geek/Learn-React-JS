import React, { useState } from "react";
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";

const KeepNote = () => {
    
    const [addItem, setAddItem] = useState([]);

    const addNote = (inputValue) => {
        setAddItem((preVal) => {
            return [...preVal, inputValue];
        })
    }

    return(
        <>
            <div className="keep-note">
                <CreateNote passNote={addNote} />
                <NoteList />
            </div>
        </>
    )
}

export default KeepNote;