import React from "react";
import SlotM from "./SlotM";
import img1 from "./images/diamond.png";
import img2 from "./images/red-diamond.png";
import img3 from "./images/diamond.png";
import CasinoIcon from '@mui/icons-material/Casino';

const SlotMachine = () => {
    return(
        <>
            <h1 className="title">Slot Machine Game <CasinoIcon fontSize="large" /></h1>
            <div className="slot-machine">
                <SlotM srcA={img1} srcB={img2} srcC={img3}/>
                <SlotM srcA={img1} srcB={img3} srcC={img1}/>
                <SlotM srcA={img3} srcB={img2} srcC={img2}/>
            </div>
        </>
    )
}

export default SlotMachine;