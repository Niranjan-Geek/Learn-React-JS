import React, { useState } from "react";
import { accordianData } from "./AccordianData";
import AccordianList from "./AccordianList";

const Accordian = () => {
    const [data, setData] = useState(accordianData);
    return(
        <>
            <div className="accordian">
                {data.map((selectData) => {
                    return <AccordianList key={selectData.id} {...selectData} />;
                })
                }
            </div>
        </>
    )
}

export default Accordian;