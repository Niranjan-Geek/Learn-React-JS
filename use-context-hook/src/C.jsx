import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

function C() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
        <h1>Hello..!! This is {fname} {lname}</h1>
    </>
  );
}

export default C;
