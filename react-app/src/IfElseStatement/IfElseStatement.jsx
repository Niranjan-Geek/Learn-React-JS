import React from "react";
import PropsCards from "../Props/PropsCards";
import IfElseData from "./IfElseData";

function IfElseStatement() {
    return (
        <>
        <div className="props">
            {IfElseData.map((data) => {
                if (data.cardtitle === "Rolls-Royce") {
                    return (
                        <>
                            <PropsCards
                                key={data.id} 
                                cardimg={data.cardimg} 
                                cardtitle={data.cardtitle} 
                                cardtext={data.cardtext} 
                                cardlink={data.cardlink}                         
                            />
                        </>
                    );
                }
            })}
        </div>
        </>
    );
}

export default IfElseStatement;
