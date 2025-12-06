import "./App.css"
import { useState } from "react";
function App() {

  const[ count,setcount]=useState(10)
  function Increment() {
    setcount(count+5)
  }
   function decrement() {
    setcount(count-5)
  }

  return (
    <>
      <h1> Today we have to make an Increment and decrement counter </h1>
      <p> Fatima</p>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={decrement}>decrement</button>

    </>
  )
}
export default App  