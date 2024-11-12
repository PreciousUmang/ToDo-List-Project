import ToDoItem from "./ToDoItem";
import { useState } from "react";


function ToDoList(props) {

    const [inputTask, setInputTask] = useState(``)
    return (
        <>
            <input type="text" className="h-10 bg-gray-200 p-2 m-2 rounded-md" placeholder="Enter task name..." value={inputTask} onChange={
                (e) => setInputTask(e.target.value)
            } />
            <button type="button" className="text-center rounded-full bg-blue-500 p-2 m-2" onClick={
                () => {
                    props.addTask(inputTask)
                    setInputTask(``)
                }
            }> + Add Item</button>

        </>
    )
}

export default ToDoList;