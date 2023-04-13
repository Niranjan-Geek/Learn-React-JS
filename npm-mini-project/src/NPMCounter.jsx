import React from "react";
import NumberCounter from 'number-counter';

const NPMCounter = () => {
    return(
        <>
            <h2>NPM Counter</h2>
            <NumberCounter end={100} delay={4} postFix="$"/>
        </>
    )
}

export default NPMCounter;