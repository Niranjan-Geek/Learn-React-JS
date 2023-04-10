import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setpass] = useState("");

    const [uNameIs, setuNameIs] = useState();
    const [passIs, setpassIs] = useState();

    const uName = (e) => {
        setUserName(e.target.value);
    }

    const pass = (e) => {
        setpass(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setuNameIs(username);
        setpassIs(password);
        setUserName('');
        setpass('');
    }

    return(
        <>
            <div className="loginbox">
                <h1>Login Form</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="User Name" value={username} onChange={uName} />
                    <input type="text" placeholder="Password" value={password} onChange={pass} />
                    <button type="Submit">Login</button>
                </form>
                <p>User Name is : <span>{uNameIs}</span></p>
                <p>Password is : <span>{passIs}</span></p>
            </div>
        </>
    )
}

export default LoginForm;