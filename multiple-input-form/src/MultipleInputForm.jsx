import React, { useState } from "react";

const MultipleInputForm = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const inputName = event.target.name;

        const {name, value} = event.target; //Distructuring

        setFullName((preValue) => {
            return{
                ...preValue,
                [name]: value,
            }

            // if (inputName === "fname"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //     }
            // }
            // else if (inputName === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //     }
            // }
            // else if (inputName === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //     }
            // }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted Successfully");
    }


    return(
        <>
            <div className="loginbox">
                <h1>Login Form</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" onChange={inputEvent} name="fname" value={fullName.fname} placeholder="Enter First Name" />
                    <input type="text" onChange={inputEvent} name="lname" value={fullName.lname} placeholder="Enter Last Name" />
                    <input type="email" onChange={inputEvent} name="email" value={fullName.email} placeholder="Enter Email Address" />
                    <input type="text" onChange={inputEvent} name="phone" value={fullName.phone} placeholder="Enter Phone Number" />
                    <button type="submit">Login</button>
                </form>
                <p>First Name is: <span>{fullName.fname}</span></p>
                <p>Last Name is: <span>{fullName.lname}</span></p>
                <p>Email Address is: <span>{fullName.email}</span></p>
                <p>Phone Number is: <span>{fullName.phone}</span></p>
            </div>
        </>
    )
}

export default MultipleInputForm;