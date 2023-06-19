import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

function CreateUser() {
 const[name,setname] = useState()
 const[desig,setdesig] = useState()
 const navigate = useNavigate()
  
 const submit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/CreateEmp",{ crossDomain: true },{name,desig})
  .then(r=>{
    console.log(r)
    navigate('/')
})
.catch(err=>console.log(err))
 }

 return (
    <div>
      <form >
        <h2>Create Employee Data</h2>
      <label>Employee name:
        <input type="text" onChange={(e)=> setname(e.target.value)} />
      </label>
      <label>Designation:
        <input type="text" onChange={(e)=> setdesig(e.target.value)}/>
      </label>
        <button onClick={submit}>Submit</button>
    </form>
    </div>
  )
}

export default CreateUser
