import React from "react";
import { useState } from "react";

const DigitalClock = () => {
    let newTime = new Date().toLocaleTimeString();
    const [CTime, UTime] = useState();

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        UTime(newTime);
    }

    setInterval(UpdateTime, 1000);

    return(
        <>
            <h1>{CTime}</h1>
        </>
    )
}

export default DigitalClock;