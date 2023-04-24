import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    
    useEffect(() => {
        alert("Number Increamented");
        document.title = `Number is ${num}`;
    },[num]);

    useEffect(() => {
        alert("Number Decreamented");
        document.title = `Number is ${num2}`;
    },[num2]);

    const clickEvent = () => {
        setNum(num + 1);
    }

    const clickEvent2 = () => {
        setNum2(num2 - 1);
    }


    return(
        <>
            <h1>{num}</h1>
            <button onClick={clickEvent}>Increament Number</button>
            <h2>{num2}</h2>
            <button onClick={clickEvent2}>Decreament Number</button>
        </>
    )
}

export default UseEffect;