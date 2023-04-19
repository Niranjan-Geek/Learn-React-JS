import React, { useState } from "react";
import { AiOutlinePlus } from '../../node_modules/react-icons/ai';

const CreateNote = (props) => {
    const[inputValue, setInputValue] = useState({
        title: '',
        message: '',
    });

    
    const noteEvent = (event) => {
        const {name, value} = event.target;

        setInputValue((preVal) => {
            return {...preVal, [name]: value}
        });
    }

    const addNote = () => {
        props.passNote(inputValue);
    }

    return(
        <>
            <div className="create-note">
                <form>
                    <input type="text" name="title" value={inputValue.title} placeholder="Title" onChange={noteEvent} />
                    <textarea name="message" value={inputValue.message} placeholder="Write a Message..." onChange={noteEvent}></textarea>
                    <button type="button" onClick={addNote}><AiOutlinePlus /></button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;