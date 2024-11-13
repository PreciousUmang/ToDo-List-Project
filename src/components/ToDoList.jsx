import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const [inputTask, setInputTask] = useState("");

    return (
        <>
            {/* Task input box and Add task button */}
            <div className="flex items-center justify-center w-full my-4 md:my-10">
                <input
                    type="text"
                    className="h-14 text-gray-800 bg-gray-200 p-4 rounded-l-full w-2/5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter task name..."
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                />
                <button
                    type="button"
                    className="h-14 bg-blue-500 hover:bg-blue-600 text-white focus:ring-2 rounded-r-full px-4 py-2 shadow-lg transition"
                    onClick={() => {
                        if (inputTask === "") {
                            alert("Please enter Task name...");
                            return;
                        }

                        props.addTask(inputTask);
                        setInputTask("");
                    }}
                >
                    <i className="fa-solid fa-circle-plus fa-xl"></i> Add Item
                </button>
            </div>

            {/* HR Break */}
            <hr className="w-48 h-1 mx-auto my-4 md:my-10 bg-gray-100 border-0 rounded dark:bg-gray-700" />

            {/* Task list display */}
            <div className="p-4 mx-auto bg-gray-800 rounded-lg shadow-inner shadow-gray-500 w-11/12">
                <h1 className="text-lg font-semibold text-left text-gray-300">
                    {props.listItem.length > 0 ? "Current Items:" : "No items yet"}
                </h1>
                <div className="my-4">
                    {props.listItem.map((value, index) => (
                        <ToDoItem
                            key={index}
                            data={value}
                            deleteTask={() => props.deleteTask(index)}
                            toggleComplete={() => props.toggleComplete(index)}
                            editTask={(newText) => props.editTask(index, newText)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ToDoList;
