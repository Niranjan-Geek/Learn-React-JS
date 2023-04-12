import React from "react";

const ToDoListItem = (props) => {
    return(
        <>
            <li>{props.text} <span className="dlt-item" onClick={ () => {
                props.onSelect(props.id);
            }}>X</span></li>
        </>
    )
}

export default ToDoListItem;