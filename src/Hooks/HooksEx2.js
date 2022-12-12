import React, { useEffect, useState } from 'react'

export default function HooksEx2() {
  const[count,setCount]=useState(0)
  useEffect(()=>{setCount(count+1)}
  )  
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click inc 1</button>
    </div>
  )
}
