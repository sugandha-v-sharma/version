import React, {useState} from 'react';

const DigitalClock = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);

    const fun = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }

    setInterval(fun, 1000)

    return(
        <h1>{time}</h1>
    )
}

export default DigitalClock;