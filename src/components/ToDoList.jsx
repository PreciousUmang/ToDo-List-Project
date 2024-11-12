import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const [inputTask, setInputTask] = useState("");

    return (
        <>
            {/* Task input and Add button */}
            <div className="flex items-center justify-center w-full my-4">
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
                    <i class="fa-solid fa-plus"></i> Add Item
                </button>
            </div>


            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>


            {/* Task list display */}
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner shadow-gray-500">
                <h1 className="text-lg font-semibold text-left text-gray-300 mb-2">  {props.listItem.length > 0 ? "Current Items:" : "No items yet"}</h1>
                <div className="space-y-2">
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
