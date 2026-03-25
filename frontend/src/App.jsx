import { useState } from 'react'
import { Chatbot } from "./Components";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chatbot />
    </>
  )
}

export default App
