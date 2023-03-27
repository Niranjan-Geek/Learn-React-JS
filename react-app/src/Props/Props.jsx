import React from "react";
import PropsCards from "./PropsCards";
import propsData from "./PropsData";

function cardData(data) {
    return(
        <PropsCards
            key={data.id} 
            cardimg={data.cardimg} 
            cardtitle={data.cardtitle} 
            cardtext={data.cardtext} 
            cardlink={data.cardlink}                         
        />
    )
}

function Props() {
    return(
        <>
            <h2>Props</h2>
            <div className="props">
                {/* Example 1 */}
                <PropsCards cardimg="https://cdn.motor1.com/images/mgl/8APXP3/s1/aston-martin-dbs-770-ultimate-side-view.webp" cardtitle="Aston Martin" cardtext="Aston Martin Lagonda Global Holdings PLC is an English manufacturer of luxury sports cars and grand tourers. Its predecessor was founded in 1913 by Lionel Martin and Robert Bamford." cardlink="https://www.astonmartin.com/en/" />

                {/* Example 2 */}
                <PropsCards 
                    key={propsData[1].id}
                    cardimg={propsData[1].cardimg} 
                    cardtitle={propsData[1].cardtitle} 
                    cardtext={propsData[1].cardtext} 
                    cardlink={propsData[1].cardlink}                         
                />

                <PropsCards 
                    key={propsData[2].id}
                    cardimg={propsData[2].cardimg} 
                    cardtitle={propsData[2].cardtitle} 
                    cardtext={propsData[2].cardtext} 
                    cardlink={propsData[2].cardlink}                         
                />

                {/* Example 3 - Array Map*/}
                {propsData.map(cardData)}

                {/* Example 4 - Fat Arrow Function*/}
                {propsData.map((data2) => {
                    return(
                        <PropsCards 
                            key={data2.id}
                            cardimg={data2.cardimg} 
                            cardtitle={data2.cardtitle} 
                            cardtext={data2.cardtext} 
                            cardlink={data2.cardlink}                         
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Props;