import React, { useState } from 'react'

export default function LoginForm() {
    const[Username,setUsername]=useState('');
    const[Password,setPassword]=useState('');
    const formHandler=(event)=>{
        event.preventDefault();
        const loginObj={
          name:Username,
          pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
    }
  return (
    <div>
    <h1>LoginPage</h1>
    <form onSubmit={formHandler}>
     Username :<input type="text" onChange={(e)=>setUsername(e.target.value)}value={Username} placeholder="Username"></input><br></br>
     Password :<input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input><br></br>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}
