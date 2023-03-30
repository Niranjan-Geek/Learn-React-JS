import React from "react";
import PropsCards from "../Props/PropsCards";

const IfCard = (props) => {
    return(
        <PropsCards
            key={props.keyP}
            cardimg={props.cardimgP}
            cardtitle={props.cardtitleP}
            cardtext={props.cardtextP}
            cardlink={props.cardlinkP}
        />
    )
}

export default IfCard;