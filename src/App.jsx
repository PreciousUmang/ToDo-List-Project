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

  // In order to access Parent Component from Child Component, We are passing this function as Props to ToDoList
  function addTask(inputTask) {
    setListItem([...listItem, inputTask])

  }

  function deleteTask(key) {
    const newList = [...listItem]
    newList.splice(key, 1)
    setListItem([...newList])
  }

  return (
    <>
      <Header />

      <ToDoList addTask={addTask} />
      <div className='p-4'>
        <h1 className="text-lg text-left">Current Items:</h1>

        {
          listItem.map((value, index) =>
            <ToDoItem
              data={value}
              key={index}
              deleteTask={() => deleteTask(index)} />)
        }
      </div>
      <Footer />
    </>
  )
}

export default App
