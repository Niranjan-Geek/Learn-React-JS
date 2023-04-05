import React, { useState } from "react";

const Hook = () => {

    const [count, setCount] = useState(0);
    
    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = () => {
        setCount(count - 1);
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