import { useState } from 'react'
import Nav from '/components/Nav'
import Input from "../components/Input.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Input/>
    </>
  )
}

export default App
