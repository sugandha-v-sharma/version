import React, {useState} from "react";
import TodoListComp from "./TodoListComp";

const TodoList = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    }

    return(
        <>
        <div>
            <br/>
            <h1> ToDo List</h1>
            <br/>
            <input 
                type="text"
                placeholder="Add a Item"
                onChange={itemEvent}
                value={inputList}
            />
            <button onClick={listOfItems}> + </button>
            <ol>
            {Items.map((interval) => {
            return <TodoListComp text={interval}/>
        })}
            </ol>
        </div>
        </>
    )
}

export default TodoList;