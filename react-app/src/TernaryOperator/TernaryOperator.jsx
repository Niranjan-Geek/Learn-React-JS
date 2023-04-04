import React from "react";
// import PropsCards from "../Props/PropsCards";
import IfCard from "./IfCard";
import IfElseData from "../IfElseStatement/IfElseData";

// const IfCard = (data) => {
//     return(
//         <PropsCards
//             key={data.id}
//             cardimg={data.cardimg}
//             cardtitle={data.cardtitle}
//             cardtext={data.cardtext}
//             cardlink={data.cardlink}
//         />
//     )
// }

// const ElseCard = (data) => {
//     return(
//         <PropsCards
//             key={data.id}
//             cardimg={data.cardimg}
//             cardtitle={data.cardtitle}
//             cardtext={data.cardtext}
//             cardlink={data.cardlink}
//         />
//     )
// }

// const TernaryOperator = () => {
//     return (
//         <>
//             {IfElseData.map((data) => {
//                 return data.cardtitle === "Lamborghini" ? (
//                     <PropsCards key={data.id} cardimg={data.cardimg} cardtitle={data.cardtitle} cardtext={data.cardtext} cardlink={data.cardlink} />
//                 ) : (
//                     <PropsCards key={data.id} cardimg={data.cardimg} cardtitle={data.cardtitle} cardtext={data.cardtext} cardlink={data.cardlink} />
//                 );
//             })}
//         </>
//     );
// };

const TernaryOperator = () => {
    return (
        <>
            <div className="props">
            {IfElseData.map((data) => {
                return data.cardtitle === "Aston Martin" && 
                <IfCard 
                    keyP={data.id}
                    cardimgP={data.cardimg}
                    cardtitleP={data.cardtitle}
                    cardtextP={data.cardtext}
                    cardlinkP={data.cardlink}
                />
            })}
            </div>
        </>
    );
};

export default TernaryOperator;
