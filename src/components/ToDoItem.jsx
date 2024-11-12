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
    <div className={`flex border m-2 items-center ${props.data.completed ? "line-through text-gray-500" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border border-gray-300 p-1 w-2/3 lg:w-3/4"
        />
      ) : (
        <li className="list-none w-2/3 lg:w-3/4 text-left p-2">
          {props.data.text}
        </li>
      )}
      <div className="w-1/3 lg:w-1/4 text-right flex space-x-2">
        <span
          className="cursor-pointer bg-green-500 p-2 rounded-lg"
          onClick={props.toggleComplete}
        >
          {props.data.completed ? "Undo" : "Done"} <i className="fa-solid fa-circle-check"></i>
        </span>
        <span
          className="cursor-pointer bg-yellow-500 p-2 rounded-lg"
          onClick={handleEditToggle}
        >
          {isEditing ? "Save" : "Edit"} <i className="fa-solid fa-pen-to-square"></i>
        </span>
        <span
          className="cursor-pointer bg-red-500 p-2 rounded-lg"
          onClick={props.deleteTask}
        >
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
}

export default ToDoItem;