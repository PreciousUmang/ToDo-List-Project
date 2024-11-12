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

   // Function to add a new task
   function addTask(inputTask) {
    setListItem([...listItem, inputTask]);
  }

  // Function to delete a task by index
  function deleteTask(index) {
    setListItem(listItem.filter((_, i) => i !== index));
  }

  return (
    <>
      <Header />

      <ToDoList addTask={addTask} listItem={listItem} deleteTask={deleteTask} />
      
      <Footer />
    </>
  )
}

export default App
