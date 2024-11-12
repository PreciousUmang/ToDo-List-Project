import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const [inputTask, setInputTask] = useState("");

    return (
        <>
            <input
                type="text"
                className="h-10 bg-gray-200 p-2 m-2 rounded-md"
                placeholder="Enter task name..."
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
            />
            <button
                type="button"
                className="text-center rounded-full bg-blue-500 p-2 m-2"
                onClick={() => {
                    if (inputTask == "") {
                        alert(`Please enter Task name....`)
                        return
                    }

                    props.addTask(inputTask);
                    setInputTask("");
                }}
            >
                + Add Item
            </button>

            <div className="p-4">
                <h1 className="text-lg text-left">Current Items:</h1>
                {props.listItem.map((value, index) => (
                    <ToDoItem
                        key={index}
                        data={value}
                        deleteTask={() => props.deleteTask(index)}
                        toggleComplete={() => props.toggleComplete(index)}
                        editTask = {(newText) => props.editTask(newText, index)} />
                ))}
            </div>
        </>
    );
}

export default ToDoList;