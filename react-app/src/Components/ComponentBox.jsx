import React from "react";
import ComponentHeader from "./ComponentHeader";
import ComponentSidebar from "./ComponentSidebar";
import ComponentContent from "./ComponentContent";

function ComponentBox(){
    return (
        <div className="components-box">
            <ComponentHeader />
            <ComponentSidebar />
            <ComponentContent />
        </div>
    )
}

export default ComponentBox;