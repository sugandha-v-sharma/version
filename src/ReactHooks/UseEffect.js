// import React, { Component } from "react";

// export default class DataLoader extends Component {
//     state = { data: [] };

//     componentDidMount() 
//     {
//         fetch("http://dummy.restapiexample.com/api/v1/employees")
//         .then(response => response.json())
//         .then(data =>
//             this.setState(() => {
//             return data ;
//             })
//         );
//     }

//     render() 
//     {
//         console.log("this.state.data.map", this.state.data)
//         return (
//             <div>
//                 <ul>
//                 {this.state.data.map(el => (
//                     <li key={el.id}>{el.employee_name}</li>
//                 ))}
//                 </ul>
//             </div>
//         );
//     }
// }


//-----------------------------React Hooks--------------------------------------
import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => response.json())
        .then(data => setData(data.data));
    },[]);

    console.log("data--->", data)
    return (
        <div>
            <ul>
                {data.map(el => (
                <li key={el.id}>{el.employee_name}</li>
                ))}
            </ul>
        </div>
    );
}