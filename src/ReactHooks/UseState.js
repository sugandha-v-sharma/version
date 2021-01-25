// import React, { Component } from "react";

// export default class Button extends Component {
//     constructor() 
//     {
//         super();
//         this.state = { textPalak: "Click me, for Palak",
//                         textSugu: "Click me for Sugu"
//                     };
//         this.palak = this.palak.bind(this);
//         this.sugu = this.sugu.bind(this);
//     }

//     palak() 
//     {
//         this.setState(() => {
//             return { textPalak: "I am Palak!" };
//         });
//     }

//     sugu() {
//         this.setState(() => {
//             return { textSugu: "I am Sugu!" };
//         });
//     }


//     render() 
//     {
//         const { textPalak } = this.state;
//         const {textSugu} = this.state;
//         return (
//             <>
//                 <button onClick={this.palak}>{textPalak}</button>
//                 <button onClick={this.sugu}>{textSugu}</button>
//             </>
//         )
//     }
// }


//----------------------------------------React Hooks----------------------
import React, { useState } from "react";

export default function Button() 
{
    const [textPalak, setTextPalak] = useState("Click me, for Palak");
    const [textSugu, setTextSugu] = useState("Click me for Sugu")

    return (
        <>
            <button onClick={() => setTextPalak("I am Palak!")}> {textPalak} </button>
            <button onClick={() => setTextSugu("I am Sugu!")}> {textSugu} </button>
        </>
    );
}