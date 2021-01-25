import React, {useState} from "react";

const LoginDetails = () => {
    const[details, setDetails] = useState({
            fName:"",
            lName:"",
            email:"",
            mobNo:""
        })

    const inputEvent = (event) => {
        
        //***event.target helps to find value, name, type and placeholder of particular input filed*****/
        // console.log("event.target.value-->", event.target.value);
        // console.log("event.target.name-->", event.target.name);
        // console.log("event.target.placeholder-->", event.target.placeholder);
        //console.log("event.target.type-->",event.target.type)

        // const value = event.target.value;
        // const name= event.target.name;
        //*****Object Destructuring*****/
        const {value, name} = event.target;

        //****preValue is a an object that is hold in useState, It holds the value of other useState keys *****/
        setDetails((preValue) => {
            if (name === "fName")
            {
                console.log("inside fName")
                return{
                    fName: value,
                    lName: preValue.lName,
                    email: preValue.email,
                    mobNo: preValue.mobNo
                };
            }
            else if(name === "lName")
            {
                console.log("inside lName")
                return{
                    fName: preValue.fName,
                    lName: value,
                    email: preValue.email,
                    mobNo: preValue.mobNo
                };
            }
            else if(name === "email")
            {
                console.log("inside email")
                return{
                    fName: preValue.fName,
                    lName: preValue.lName,
                    email: value,
                    mobNo: preValue.mobNo
                };
            }
            else if(name === "mobNo")
            {
                console.log("inside mobNo")
                return{
                    fName: preValue.fName,
                    lName: preValue.lName,
                    email: preValue.email,
                    mobNo: value
                };
            }
        })
    }

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted!")
    }

    return(
        <>
            <div>
                <form onSubmit = {onSubmits}>
                    <h1>Hello {details.fName} {details.lName} {details.email} {details.mobNo}</h1>
                    <input 
                        type="text"
                        placeholder = "Enter your name"
                        name="fName"
                        onChange={inputEvent}
                        value={details.fName}
                    />
                    <input 
                        type="text"
                        placeholder = "Enter your name"
                        name="lName"
                        onChange={inputEvent}
                        value={details.lName}
                    />
                    <input 
                        type="text"
                        placeholder = "Enter your email"
                        name="email"
                        onChange={inputEvent}
                        value={details.email}
                    />
                    <input 
                        type="number"
                        placeholder = "Enter your Mobile No"
                        name="mobNo"
                        onChange={inputEvent}
                        value={details.mobNo}
                    />
                    <button type="submit">SUBMIT ME</button>
                </form>
            </div>
        </>
    )
}

export default LoginDetails;