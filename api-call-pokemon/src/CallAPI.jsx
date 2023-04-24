import React, { useEffect, useState } from "react";
import axios from 'axios';

const CallAPI = () => {

    const[select, setSelect] =  useState("");
    const[pName, setPName] =  useState("");
    const[pImage, setPImage] =  useState("");


    useEffect(() => {
        async function getData() {
            const resData = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${select}`);
            setPName(resData.data.name);
            setPImage(resData.data.sprites.front_default)
        }
        getData();
    })

    const selectNumber = (event) => {
        setSelect(event.target.value);
    }

    return(
        <>
            <select onChange={selectNumber} value={select}>
                <option value="">Choose Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="25">25</option>
            </select>
            <div className="box">
                <h1>You Choose <span>{select}</span> Number</h1>
                <h2>Your Pokemon Name is <span>{pName}</span></h2>
                <h2>Pokemon Image:</h2>
                <div>
                    <img src={pImage} alt={pName} />
                </div>
            </div>
        </>
    )
}

export default CallAPI;