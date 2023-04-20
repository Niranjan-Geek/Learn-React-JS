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

    const noteDelete = (id) => {
        setAddItem((oldNote) => {
            return oldNote.filter((currentData, index) => {
                return index !== id;
            })
        });
    }

    return(
        <>
            <div className="keep-note">
                <CreateNote passNote={addNote} />
                <NoteList itemAdd={addItem} deleteNote={noteDelete} />
            </div>
        </>
    )
}

export default KeepNote;