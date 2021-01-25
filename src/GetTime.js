import React, {useState} from "react";

const GetTime = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);
    
    const fun = () =>{
        let newcTime = new Date().toLocaleTimeString();
        setTime (newcTime)
    };

    return(
        <>
            <h1>{time}</h1>
            <button onClick = {fun}>Click Here</button>
        </>
    )
}

export default GetTime;