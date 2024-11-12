import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css'
import Footer from './components/Footer'
import ToDoItem from './components/ToDoItem'


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
    setListItem(listItem.filter((_, i) => i !== index));
  }

  // COMPLETE TOGGLE
  function toggleComplete(index) {
    setListItem(
      listItem.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // EDIT TASK
  function editTask(index, newText) {
    setListItem(
      listItem.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
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
