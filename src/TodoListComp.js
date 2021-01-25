import React from "react";
import TodoList from "./TodoList";

const TodoListComp = (props) =>
{
    return <li> {props.text} </li>
}

export default TodoListComp;