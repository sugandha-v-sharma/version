import React, {useState} from "react";

const Events = () => {
    const purple = "purple";
    const [color, setColor] = useState(purple);
    const [name, setName] = useState("Sugandha")

    const fun = () => {
        const red = "red";
        setColor(red);
        setName("Palak");
    }

    return(
        <div style={{background:color}}>
            <button onClick = {fun}>Hello {name}</button>
        </div>
    )
}

export default Events;