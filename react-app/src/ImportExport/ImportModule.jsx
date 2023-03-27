import React from "react";
import image, {text, para} from "./ExportModule";
// import * as ExMod from './ExportModule';
import sum, {sub, div, mult} from '../Challenge5';

function ImportModule() {
    return (
        <>
            <h2>{text}</h2>
            <img src={image} alt="Car" width="500" height="281" />
            <p>{para()}</p>

            <h2>#5 Challenge Create Simple Calculator App</h2>
            <h4>Sum of two Numbers is : {sum(30, 30)}</h4>
            <h4>Sub of two Numbers is : {sub(34, 7)}</h4>
            <h4>Div of two Numbers is : {div(625, 27)}</h4>
            <h4>Mult of two Numbers is : {mult(36, 5)}</h4>
        </>
    )
}

// function ImportModule() {
//     return (
//         <>
//             <h2>{ExMod.text}</h2>
//             <img src={ExMod.default} alt="Car" width="500" height="281" />
//             <p>{ExMod.para()}</p>
//         </>
//     )
// }

export default ImportModule;