import { useState } from 'react';

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.data.text);

  const handleEditToggle = () => {
    if (isEditing) {
      props.editTask(editedText); // Save changes when toggling from edit to view mode
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`flex items-center p-4 mb-2 rounded-lg shadow-lg transition ${
        props.data.completed ? "bg-gray-800 text-gray-500" : "bg-gray-700 text-gray-300"
      }`}
    >
      {/* Editable or non-editable task text */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="w-full p-2 rounded-md border border-blue-500 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />
      ) : (
        <li
          className={`list-none w-full p-2 ${
            props.data.completed ? "line-through" : ""
          }`}
        >
          {props.data.text}
        </li>
      )}

      {/* Control buttons */}
      <div className="flex ml-4">
        {/* Done/Undo Button */}
        <span
          className={`cursor-pointer flex justify-center items-center p-2 rounded-s-md transition hover:scale-105 ${
            props.data.completed
              ? "bg-gray-500 hover:bg-gray-400"
              : "bg-green-500 hover:bg-green-400"
          } text-white`}
          onClick={props.toggleComplete}
        >
          {props.data.completed ? "Undo" : "Done"}
          <i className="fa-solid fa-circle-check ml-1"></i>
        </span>

        {/* Edit/Save Button */}
        <span
          className="cursor-pointer p-2 flex justify-center items-center bg-yellow-500 hover:bg-yellow-400 text-white transition hover:scale-105"
          onClick={handleEditToggle}
        >
          {isEditing ? "Save" : "Edit"}
          <i className="fa-solid fa-pen-to-square ml-1"></i>
        </span>

        {/* Delete Button */}
        <span
          className="cursor-pointer px-3 p-2 rounded-r-md flex justify-center items-center bg-red-500 hover:bg-red-400 text-white transition hover:scale-105 hover:shadow-lg"
          onClick={props.deleteTask}
        >
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
}

export default ToDoItem;
