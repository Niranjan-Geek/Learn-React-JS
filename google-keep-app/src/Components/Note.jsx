import React from "react";
import { MdDelete } from 'react-icons/md';

const Note = ({id, title,message, onDeleteNote}) => {
    return (
        <>
            <div className="note">
                <h4>{title}</h4>
                <p>{message}</p>
                <span className="delete-note" onClick={()=>{onDeleteNote(id)}}><MdDelete /></span>
            </div>
        </>
    )
}

export default Note;