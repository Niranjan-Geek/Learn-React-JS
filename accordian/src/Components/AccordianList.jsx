import React, { useState } from "react";

const AccordianList = ({question, answer}) => {

    const [show, setShow] = useState(false);

    const clickEvent = () => {
        setShow(!show);
    }

    return(
        <>
            <div className={`accordian-box${show ? " active" : ""}`}>
                <div className="accordian-title" onClick={clickEvent}>
                    <h4>{question}</h4> 
                </div>
                <div className="accordian-content">
                    <p>{answer}</p>
                </div>
            </div>
        </>
    )
}

export default AccordianList;