import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {

    const [itemValue, setInputItem] = useState("");
    const [todoValue, setToDoValue] = useState([]);

    const inputItem = (event) => {
        setInputItem(event.target.value);
    }

    const addItem = () => {
        setToDoValue((oldItems) => {
            return [...oldItems, itemValue];
        });
        setInputItem("");
    }

    const deleteItem = (id) => {
        setToDoValue((oldItems) => {
            return oldItems.filter((arrayElement, index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
            <div className="main-box">
                <div className="todo-box">
                    <h1>To Do List</h1>
                    <div className="todo-add-item">
                        <input type="text" onChange={inputItem} placeholder="Enter Item" value={itemValue} />
                        <button onClick={addItem}>+</button>
                    </div>
                    <div className="todo-list">
                        <ul>
                            {todoValue.map((value, index) => {
                                return <ToDoListItem key={index} id={index} onSelect={deleteItem} text={value} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList;