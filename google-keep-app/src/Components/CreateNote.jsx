import React, { useState } from "react";
import { AiOutlinePlus } from "../../node_modules/react-icons/ai";

const CreateNote = (props) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    message: "",
  });

  const noteEvent = (event) => {
    const { name, value } = event.target;

    setInputValue((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const addNote = (e) => {
      e.preventDefault();
    if(!inputValue.title || !inputValue.message){
        alert("Please Enter the Note");
    }else{
        props.passNote(inputValue);
        setInputValue({
          title: "",
          message: "",
        });
    }
  };

  return (
    <>
      <div className="create-note">
        <form onSubmit={addNote}>
          <input
            type="text"
            name="title"
            value={inputValue.title}
            placeholder="Title"
            onChange={noteEvent}
          />
          <textarea
            name="message"
            value={inputValue.message}
            placeholder="Write a Message..."
            onChange={noteEvent}
          ></textarea>
          <button type="submit">
            <AiOutlinePlus />
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
