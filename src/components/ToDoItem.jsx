
function ToDoItem(props) {
    return (
        <div className="flex border m-2 items-center">
            <li className="list-none w-2/3 lg:w-3/4 text-left p-2">{props.data}</li>
            <div className="w-1/3 lg:w-1/4 text-right">
                <span className="cursor-pointer border-green-500 border rounded-xl bg-green-500 p-2 h-10">Done <i class="fa-solid fa-circle-check"></i></span>
                <span className="cursor-pointer"><i class="fa-solid fa-pen-to-square border rounded-xl bg-yellow-500 p-2 h-10"></i></span>
                <span className="cursor-pointer" onClick={props.deleteTask}><i className="fa-solid fa-trash bg-red-500 p-2 h-10"></i></span>
            </div>
        </div>
    )
}

export default ToDoItem;