import React from "react";

const SlotM = ({srcA, srcB, srcC}) => {
    // let img1 = props.srcA;
    // let img2 = props.srcB;
    // let img3 = props.srcC;

    // const {img1,img2, img3} = props;

    if((srcA === srcB) && (srcB === srcC)) {
        return(
            <>
                <div className="slot-machine-box">
                    <div className="machine-icon">
                        <img src={srcA} width="567" height="353" alt="Diamond" />
                        <img src={srcB} width="567" height="353" alt="Diamond" />
                        <img src={srcC} width="567" height="353" alt="Diamond" />
                    </div>
                    <h4>This is Matching.</h4>
                </div>
            </>
        )
    }else {
        return(
            <>
                <div className="slot-machine-box">
                    <div className="machine-icon">
                        <img src={srcA} width="567" height="353" alt="Diamond" />
                        <img src={srcB} width="567" height="353" alt="Diamond" />
                        <img src={srcC} width="567" height="353" alt="Diamond" />
                    </div>
                    <h4>This is not Matching.</h4>
                </div>
            </>
        )
    }
}

export default SlotM;