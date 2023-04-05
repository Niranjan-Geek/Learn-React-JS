import React, { useState } from "react";

const HookChallenge = () => {
    let newTime = new Date().toLocaleTimeString();
    const [CTime, setCTime] = useState(newTime);
    const UTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCTime(newTime);
    }
    return(
        <>
            <div className="hook">
                <h1>{CTime}</h1>
                <button onClick={UTime}>Get Current Time</button>
            </div>
        </>
    )
}

export default HookChallenge;