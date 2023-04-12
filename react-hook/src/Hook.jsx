import React, { useState } from "react";

const Hook = () => {

    const [count, setCount] = useState(0);
    
    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = () => {
        if(count > 0){
            setCount(count - 1);
        }else{
            alert("Sorry..! You can not decrease value less than 0 number");
            setCount(0);
        }
    }

    return(
        <>
            <div className="hook">
                <h1>{count}</h1>
                <div className="btn-sec">
                    <button onClick={Increase}>Increase Count</button>
                    <button onClick={Decrease}>Decrease Count</button>
                </div>
            </div>
        </>
    )
}

export default Hook;