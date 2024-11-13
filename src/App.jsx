import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [listItem, setListItem] = useState([])

  // ADD TASK
  function addTask(inputTask) {
    setListItem([...listItem, {
      text: inputTask,
      completed: false
    }]);
  }

  // DELETE TASK
  function deleteTask(index) {
    const updatedList = [...listItem];
    updatedList.splice(index, 1);
    setListItem(updatedList);
  }

  // COMPLETE TOGGLE
  function toggleComplete(index) {
    const updatedList = [...listItem];
    updatedList[index].completed = !updatedList[index].completed; 
    setListItem(updatedList);
  }

  // EDIT TASK
  function editTask(index, newText) {
    const updatedList = [...listItem];
    updatedList[index].text = newText; 
    setListItem(updatedList); 
  }


  return (
    <>
      <Header />
      <ToDoList
        addTask={addTask}
        listItem={listItem}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask} />
    </>
  )
}

export default App
