import React, {useState} from "react";

const Login = () => {
    const [fName, setFName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lName, setLName] = useState("");
    const [lastName, setLastName] = useState("");

    const getFName = (event) => {
        setFName(event.target.value);
    }

    const getLName = (event) => {
        setLName(event.target.value);
    }

    const getFullName = (event)  => {
        event.preventDefault();
        setFirstName(fName);
        setLastName(lName);
    }

    return(
        <form onSubmit={getFullName}>
            <h1>Hello {firstName} {lastName}</h1>
            <input type="text" placeholder="Enter first Name" onChange={getFName}></input>
            <input type="text" placeholder="Enter Last Name" onChange={getLName}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;