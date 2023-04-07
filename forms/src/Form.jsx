import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [inputName, setInputName] = useState("");

    const inputChange = (event) => {
        setName(event.target.value);
    }

    const btnClick = (event) => {
        setName(event.target.value);
        setInputName(name);
    }

    return(
        <>
            <div className="form-box">
                <h1>Hello</h1>
                <input type="text" onChange={inputChange} placeholder="Enter Your Name" value={name} />
                <button onClick={btnClick}>Submit</button>
                <p>Your Name is: <span>{inputName}</span></p>
            </div>
        </>
    )
}

export default Form