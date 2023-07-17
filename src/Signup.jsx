import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {
 let [email,setEmail]=useState('')
 let [name,setname]=useState('')
 let [gender,setgender]=useState('')
 let [password,setpass]=useState('')


 function handleSubmit(){
    axios.post('https://adventurous-turtleneck-shirt-yak.cyclic.app/users/register',{
        body:{
            email,name,gender,password
        }
    })
    .then((res)=>{alert(res)})
    .catch((err)=>alert(err))
 }
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'auto',width:'50%'}}>
       <input type="text"  placeholder='name' onChange={(e)=>setname(e.value)}/>
       <input type="email" placeholder='email'onChange={(e)=>setEmail(e.value)}/>
       <input type="text" placeholder='gender' onChange={(e)=>setgender(e.value)}/>
       <input type="password" placeholder='password' onChange={(e)=>setpass(e.value)}/>
       <button onClick={(e)=>handleSubmit()}>submit</button>
    </div>
  )
}
