import React from "react";

function PropsCards(props){
    return(
        <>
            <div className="card">
                <div className="card-box">
                    <div className="card-image">
                        <img src={props.cardimg} width="480" height="270" alt="Car" />
                    </div>
                    <div className="card-text">
                        <h3>{props.cardtitle}</h3>
                        <p>{props.cardtext}</p>
                        <a href={props.cardlink} title="Visit Website" target="_blank" rel="noreferrer">Visit Website</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropsCards;