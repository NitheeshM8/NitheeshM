import React, { useState } from 'react'

export default function HooksEx() {
  const[count,setCount]=useState(0)
  return (
    <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrqqTzApNUoW__Tt_75ZJjINzzTKavucxdQ&usqp=CAU" alt="love"/>
    <h1>{count}</h1>
    <button sx="background-color:black;" onClick={()=>{setCount(count+1)}}>Click inc 1</button>
    <button onClick={()=>{setCount(count-1)}}>Click dec 1</button>
    <button onClick={()=>{setCount(count+10)}}>Click dec 5</button>
    </div>
  )
}
