import React from "react";
import { useParams } from "react-router-dom";

const UseParams = () => {
    const {fname, lname} = useParams();
    return(
        <>
            <h1>Hello...! This is UseParams {fname} {lname} Page.</h1>
        </>
    )
}

export default UseParams;