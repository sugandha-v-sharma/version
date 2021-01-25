import React, {useState} from "react";

const Form  = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");

    const inputEvent = (event) => {
        setName(event.target.value);
    }

    const fun = () => {
        setFullName(name)
    }

    return(
        <div>
            <h1> Hello {fullName} </h1>
            <input type="text" placeholder="Enter your name" onChange={inputEvent}></input>
            <button onClick={fun}>Click Me</button>
        </div>
    )
}

export default Form;