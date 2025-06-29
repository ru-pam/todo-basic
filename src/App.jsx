import { useState } from 'react'
import Nav from '/components/Nav'
import Input from "../components/Input.jsx";
import Task from "../components/Task.jsx";
function App() {
  const [task, setTask] = useState("")
  return (
    <>
      <Nav/>
      <Input task={task} setTask={setTask} />
      <Task task={task} setTask={setTask} />
    </>
  )
}

export default App
