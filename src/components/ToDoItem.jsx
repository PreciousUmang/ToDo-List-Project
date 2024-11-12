
function ToDoItem(props) {
    return (
        <>
            <li className="list-none border m-2 p-4 text-left relative">{props.data} <span className="text-right cursor-pointer absolute right-4" onClick={props.deleteTask}><i className="fa-solid fa-trash fa-xl text-red-500"></i></span></li>

        </>
    )
}

export default ToDoItem;