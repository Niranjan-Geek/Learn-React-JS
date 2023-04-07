import React, { useState } from "react";

const EventHandling = () => {
    let button = "Button";
    let bg = "#10ac84";
    let btnColor = "#1dd1a1";

    const [btnClick, setbtnClick] = useState(button);
    const [bgColor, setColor] = useState(bg);
    const [btnbg, setbtnColor] = useState(btnColor);

    const clicked = () => {
        button = "Button Clicked";
        bg = "#ee5253";
        btnColor = "#ff6b6b";
        setbtnClick(button);
        setColor(bg);
        setbtnColor(btnColor);
    }

    const hover = () => {
        button = "Button Hover";
        bg = "#0abde3";
        btnColor = "#48dbfb";
        setbtnClick(button);
        setColor(bg);
        setbtnColor(btnColor);
    }

    const leave = () => {
        button = "Button Leave";
        bg = "#341f97";
        btnColor = "#5f27cd";
        setbtnClick(button);
        setColor(bg);
        setbtnColor(btnColor);
    }

    const dblClick = () => {
        button = "Button Double Clicked";
        bg = "#f368e0";
        btnColor = "#ff9ff3";
        setbtnClick(button);
        setColor(bg);
        setbtnColor(btnColor);
    }

    return(
        <>
            <div className="box" style={{background: bgColor}}>
                <button style={{background: btnbg}} onClick={clicked} onMouseEnter={hover} onMouseLeave={leave} onDoubleClick={dblClick}>{btnClick}</button>
            </div>
        </>
    )
}

export default EventHandling;